import { useMemo } from "react";
import { useChatConfigStore } from "../../../store/chatConfigStore";
import { AssistantMessage } from "../messages/messages/AssistantMessage";
import { useSendQuestion } from "../../../services/useSendQuestion";

function shuffleArray<T>(array: T[]): T[] {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ newArray[i], newArray[j] ] = [ newArray[j], newArray[i] ];
  }
  return newArray;
}

export function NoMessages(): React.JSX.Element {
  const initialPrompt = useChatConfigStore((state) => state.config?.initialAssistantQuestion ?? "Hey, I'm an AI assistant here to help you with your questions! What would you like to know?")
  const defaultQuestions = useChatConfigStore((state) => state.config?.defaultQuestions) ?? [
    "How do i get started with this product?", 
    "What are the benefits of this product?", 
    "What are the features of this product?",
    "Will this product work for me?",
    "Will this project help me find the meaning of life?"
  ]

  const displayQuestions = useMemo(() => shuffleArray(defaultQuestions ?? []).slice(-3), [defaultQuestions])
  const {
    sendQuestion
  } = useSendQuestion();

  return <div className="flex flex-col items-start p-5 pb-20">
    {initialPrompt && <AssistantMessage 
      content={initialPrompt}
      answerId={undefined}
      sources={[]} 
    />}

    <h3
      className="text-lg font-semibold dark:text-gray-400 mt-10 mb-2"
    >Example Questions</h3>
    <div className="flex gap-2 flex-wrap">
      {displayQuestions.map((question, index) => {
        return <div 
          key={index} 
          className="text-sm font-semibold cursor-pointer text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-slate-800/50 rounded-md px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600/80 transition-colors"
          onClick={() => sendQuestion(question)}
        >
          {question}
        </div>
      })}
    </div>

  </div>
}