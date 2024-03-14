import { ChatConfig, useChatConfigStore } from "../store/chatConfigStore";

export function setChatConfig(config: ChatConfig): void {
  useChatConfigStore.getState().setConfig(config)
}