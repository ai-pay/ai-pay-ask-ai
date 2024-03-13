import { useCallback } from "react"
import { useMessagesStore } from "../store/messagesStore"
import { useSendQuestion } from "./useSendQuestion"

export function useReloadAnswer(): {
  reloadAnswer: (answerId: string) => void
} {
  const {
    sendQuestion,
  } = useSendQuestion()

  const deleteMessagesIncludingAfterId = useMessagesStore((state) => state.deleteMessagesIncludingAfterId)

  const reloadAnswer = useCallback(async (answerId: string) => {
    if (useMessagesStore.getState().loading) {
      return
    }

    const index = useMessagesStore.getState().messages.findIndex((message) => message.id === answerId)

    if (index === -1) {
      return
    }

    const previousQuestion = useMessagesStore.getState().messages[index - 1]
    
    deleteMessagesIncludingAfterId(previousQuestion.id)
    sendQuestion(previousQuestion.content)
    
  }, [sendQuestion, deleteMessagesIncludingAfterId])

  return {
    reloadAnswer,
  }
} 