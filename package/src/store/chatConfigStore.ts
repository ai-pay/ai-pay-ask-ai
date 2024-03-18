
import { KnowledgeBaseChatRequest } from "ai-pay";
import { create } from "zustand";

export type ChatConfig = {
  colorMode?: "light" | "dark" | "auto"
  initialAssistantQuestion?: string
  defaultQuestions?: string[]
  questionBoxPlaceholder?: string
  chatModel?: KnowledgeBaseChatRequest["responseGenerationModel"]
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
}));
