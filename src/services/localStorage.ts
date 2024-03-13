import { ChatMessage } from "../store/messagesStore"

export function saveMessagesToLocalStorage(messages: ChatMessage[]) {
  localStorage.setItem("messages", JSON.stringify(messages))
}

export function getMessagesFromLocalStorage(): ChatMessage[] {
  const messages = localStorage.getItem("messages")
  if (messages) {
    return JSON.parse(messages)
  }
  return []
}