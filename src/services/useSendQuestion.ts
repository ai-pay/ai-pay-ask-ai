import { useCallback } from "react"
import { useMessagesStore } from "../store/messagesStore"
import { KnowledgeBaseChatRequest, KnowledgeBaseSource, SupportedChatCompletionMessageParam, knowledgeBaseChatStream } from "ai-pay"

export function useSendQuestion(): {
  sendQuestion: (message: string) => void
} {
  const appendMessage = useMessagesStore((state) => state.appendMessage)
  
  const setStreamText = useMessagesStore((state) => state.setStreamText)
  const setProgressUpdate = useMessagesStore((state) => state.setProgressUpdate)
  const setStreamedSources = useMessagesStore((state) => state.setStreamedSources)

  const setLoading = useMessagesStore((state) => state.setLoading)
  const setError = useMessagesStore((state) => state.setError)

  const sendQuestion = useCallback(async (question: string) => {
    if (useMessagesStore.getState().loading) {
      return
    }

    appendMessage({
      id: Date.now().toString(),
      profile: "user",
      content: question,
    })

    setLoading(true)
    setError(undefined)
    setStreamText("")

    try {
      const chatHistory: SupportedChatCompletionMessageParam[] = useMessagesStore.getState().messages.map((message) => ({
        content: message.content,
        role: message.profile,
      }))

      const request: KnowledgeBaseChatRequest = {
        responseGenerationModel: "gpt-3.5-turbo",
        chatHistory,
        question,
      }

      let streamResponse = ""
      let sources: KnowledgeBaseSource[] = []
      
      const {
        error,
        debugError,
      } = await knowledgeBaseChatStream(
        request,
        (chunk) => {
          if (chunk.type !== "text") {
            console.log("knowledgeBaseChatStream chunk: ", chunk)
          }

          if (chunk.type === "text") {
            streamResponse += chunk.textChunk
            setStreamText(streamResponse)
          } 
          else if (chunk.type === "sources") {
            sources = chunk.sources
            setStreamedSources(chunk.sources)
          }
          else if (chunk.type === "progress") {
            setProgressUpdate(chunk.message)
          }
        },
      )

      if (error) {
        setError(error)
        if (debugError) {
          console.error("knowledgeBaseChatStream debug error: ", debugError)
        }
      } else {
        appendMessage({
          id: Date.now().toString(),
          profile: "assistant",
          content: streamResponse,
          sources,
        })
        setStreamText(undefined)
        setProgressUpdate(undefined)
        setStreamedSources(undefined)
      }

    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError("An unknown error occurred")
      }
    }

    setLoading(false)
  }, [])

  return {
    sendQuestion
  }
} 