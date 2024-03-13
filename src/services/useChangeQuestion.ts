import { useCallback } from "react"
import { useMessagesStore } from "../store/messagesStore"
import { useSendQuestion } from "./useSendQuestion"

export function useChangeQuestion(): {
  changeQuestion: (questionId: string, question: string) => void
} {
  const {
    sendQuestion,
  } = useSendQuestion()

  const deleteMessagesIncludingAfterId = useMessagesStore((state) => state.deleteMessagesIncludingAfterId)

  const changeQuestion = useCallback(async (questionId: string, question: string) => {
    if (useMessagesStore.getState().loading) {
      return
    }
    
    deleteMessagesIncludingAfterId(questionId)
    sendQuestion(question)

  }, [sendQuestion, deleteMessagesIncludingAfterId])

  return {
    changeQuestion,
  }
} 