import { KnowledgeBaseSource } from "ai-pay/models";
import { create } from "zustand";
import { getMessagesFromLocalStorage, saveMessagesToLocalStorage } from "../services/localStorage";

export type ChatMessage = {
  id: string;
  profile: "user"
  content: string
} | {
  id: string;
  profile: "assistant"
  content: string
  sources: KnowledgeBaseSource[]
}

interface MessagesStore {
  messages: ChatMessage[];

  streamText: string | undefined;
  progressUpdate: string | undefined;
  streamedSources: KnowledgeBaseSource[] | undefined;
  
  setStreamText: (text: string | undefined) => void;
  setProgressUpdate: (text: string | undefined) => void;
  setStreamedSources: (refs: KnowledgeBaseSource[] | undefined) => void;

  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | undefined;
  setError: (error: string | undefined) => void;

  appendMessage: (message: ChatMessage) => void;

  deleteMessagesIncludingAfterId: (id: string) => void;

  resetMessages: () => void;
}

export const useMessagesStore = create<MessagesStore>()((set) => ({
  messages: getMessagesFromLocalStorage(),
  
  streamText: undefined,
  progressUpdate: undefined,
  streamedSources: [],
  setStreamText: (text: string | undefined) => set({
    streamText: text,
  }),
  setProgressUpdate: (text: string | undefined) => set({
    progressUpdate: text,
  }),
  setStreamedSources: (refs: KnowledgeBaseSource[] | undefined) => set({
    streamedSources: refs,
  }),
  
  loading: false,
  setLoading: (loading: boolean) => set({
    loading: loading,
  }),
  
  error: undefined,
  setError: (error: string | undefined) => set({
    error: error,
  }),
  
  appendMessage: (message: ChatMessage) => set((state) => {
    const newMessages = [...state.messages, message];
  
    if (message.profile === 'assistant') {
      saveMessagesToLocalStorage(newMessages);
    }
  
    return {
      messages: newMessages,
    }
  }),
  
  deleteMessagesIncludingAfterId: (id: string) => set((state) => {
    if (state.messages.length === 0) return {};
    const index = state.messages.findIndex((message: ChatMessage) => message.id === id);
  
    return {
      messages: state.messages.slice(0, index)
    }
  }),
  
  resetMessages: () => set(() => {
    saveMessagesToLocalStorage([]);
    return {
      messages: []
    }
  })
}))
