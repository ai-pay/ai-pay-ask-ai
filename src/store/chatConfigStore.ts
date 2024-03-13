
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type ChatConfig = {
  initialAssistantPrompt?: string
  defaultQuestions?: string[]
  
}

interface MessagesStore {
  config: ChatConfig | undefined;
  setConfig: (config: ChatConfig) => void;
}

export const useChatConfigStore = create<MessagesStore>()(immer((set) => ({
  config: {
    initialAssistantPrompt: "Hello! I'm your assistant. How can I help you today?",
    defaultQuestions: [
      "What is the meaning of life?",
      "What is the airspeed velocity of an unladen swallow?",
      "What is the capital of Assyria?",
      "What is your name?",
      "What is your quest?",
    ]
  },
  setConfig: (config: ChatConfig) => set((state) => {
    state.config = config;
  }),
})))
