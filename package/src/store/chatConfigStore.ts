
import { create } from "zustand";

export type ChatConfig = {
  initialAssistantQuestion?: string
  defaultQuestions?: string[]
  questionBoxPlaceholder?: string
}

interface MessagesStore {
  config: ChatConfig | undefined;
  setConfig: (config: ChatConfig) => void;
}

export const useChatConfigStore = create<MessagesStore>()((set) => ({
  config: undefined,
  setConfig: (config: ChatConfig) => set({
    config: config,
  }),
}))
