import { KnowledgeBaseSource } from "ai-pay/models";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
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

  deleteMessagesIncludingAfterId: (id: string) => ChatMessage[];


  resetMessages: () => void;
}

export const useMessagesStore = create<MessagesStore>()(immer((set) => ({
  messages: getMessagesFromLocalStorage(),
//   [
//     {
//       id: "1",
//       profile: "user",
//       content: "How to get started with AI Pay?",
//     },
// //     {
// //       id: "2",
// //       profile: "assistant",
// //       content: `certainly! Here's a simple Python code snippet to add two numbers together:
// // - First, we prompt the user to enter the two numbers they want to add.
// // - Then, we calculate the sum by adding the two numbers together.

// // \`\`\`python
// // num1 = float(input("Enter the first number: "))
// // num2 = float(input("Enter the second number: "))

// // sum = num1 + num2
// // \`\`\`

// // print("The sum is:", sum)
// // In this code, we prompt the user to enter the two numbers they want to add, and then calculate the sum by adding the two numbers together. Finally, we display the result using the print() function.

// // ## This is just for testing
// // To get started with AI Pay, follow these steps:

// // 1. Download the AI Pay browser extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/ai-pay/igghgdjfklipjmgldcdfnpppgaijmhfg). This extension is free to download and you will receive $2 worth of free credits when you sign up.

// // 2. Install the AI Pay NPM package by running either of the following commands in your terminal:
// //     - \`npm i ai-pay\`
// //     - \`yarn add ai-pay\`

// // 3. Sign up for an account on the [AI Pay website](https://www.joinaipay.com/dashboard/newwebsite). Fill in the details for your website and click 'create website'.

// // 4. Once signed up, go to the AI Pay dashboard and navigate to the website details page. Here, you will find a meta tag that needs to be added to the header of your website. Copy the meta tag from the dashboard and paste it into the header of your website. This meta tag is used for meta tag validation.

// // 5. With the browser extension installed and the meta tag added to your website, you can now start developing with AI Pay. The browser extension will notify users when they visit your website that AI Pay is being used. Users have the option to specify a budget and start a session. During the session, your website can utilize any of the supported AI APIs until the budget runs out. The session can be stopped at any time by the user or will automatically stop when the user exits your website.

// // By following these steps, you can start using AI Pay to implement AI features on your website without having to worry about handling users, payments, costs, or a backend. It provides a simple and convenient way to monetize your website and allows users to make anonymous payments for AI products.
// // `,
// //       sources: [
// //         {
// //           url: "https://www.joinaipay.com/docs/introduction",
// //           title: "introduction",
// //         }
// //       ]
// //     }
    
//   ],

  streamText: undefined,
  progressUpdate: undefined,
  streamedSources: [],
  setStreamText: (text: string | undefined) => set((state) => {
    state.streamText = text;
  }),
  setProgressUpdate: (text: string | undefined) => set((state) => {
    state.progressUpdate = text;
  }),
  setStreamedSources: (refs: KnowledgeBaseSource[] | undefined) => set((state) => {
    state.streamedSources = refs;
  }),

  loading: false,
  setLoading: (loading: boolean) => set((state) => {
    state.loading = loading;
  }),

  error: undefined,
  setError: (error: string | undefined) => set((state) => {
    state.error = error;
  }),

  appendMessage: (message: ChatMessage) => set((state) => {
    state.messages.push(message);
    saveMessagesToLocalStorage(state.messages);
  }),

  deleteMessagesIncludingAfterId: (id: string) => {
    let returnMessages: ChatMessage[] = [];
    set((state) => {
      if (state.messages.length === 0) return;
      const index = state.messages.findIndex((message: ChatMessage) => message.id === id);
      state.messages = state.messages.slice(0, index);

      returnMessages = state.messages;
    })

    return returnMessages
  },

  resetMessages: () => set((state) => {
    state.messages = [];
    saveMessagesToLocalStorage(state.messages);
  })
})))
