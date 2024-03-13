import { useCallback } from "react"
import { useMessagesStore } from "../store/messagesStore"
import { useChangeQuestion } from "./useChangeQuestion"

export function useRetryLastQuestion(): {
  retryLastQuestion: () => void
} {
  const {
    changeQuestion,
  } = useChangeQuestion()

  const retryLastQuestion = useCallback(async () => {
    if (useMessagesStore.getState().loading) {
      return
    }

    const messages = useMessagesStore.getState().messages
    
    const lastQuestion = messages[messages.length - 1]
    if (!lastQuestion || lastQuestion.profile !== "user") {
      return
    }

    changeQuestion(lastQuestion.id, lastQuestion.content)
  }, [changeQuestion])

  return {
    retryLastQuestion,
  }
} 