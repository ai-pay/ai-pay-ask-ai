import { ChatMessage } from "../store/messagesStore"

export function saveMessagesToLocalStorage(messages: ChatMessage[]) {
  if (!window || !localStorage) {
    return
  }
  localStorage.setItem("messages", JSON.stringify(messages))
}

export function getMessagesFromLocalStorage(): ChatMessage[] {
  if (!window || !localStorage) {
    return []
  }

  const messages = localStorage.getItem("messages")
  if (messages) {
    return JSON.parse(messages)
  }
  return []
}