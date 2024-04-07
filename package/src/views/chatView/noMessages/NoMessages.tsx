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
  const initialPrompt = useChatConfigStore((state) => state.config?.initialAssistantQuestion) ?? "Hey, I'm an AI assistant here to help you with your questions! What would you like to know?"
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

  return <div className="aip-flex aip-flex-col aip-items-start aip-p-5 aip-pb-20">
    {initialPrompt && <AssistantMessage 
      content={initialPrompt}
      answerId={undefined}
      sources={[]} 
    />}

    <h3
      className="aip-text-lg aip-font-semibold dark:aip-text-zinc-400 aip-mt-10 aip-mb-2"
    >Example Questions</h3>
    <div className="aip-flex aip-gap-2 aip-flex-wrap">
      {displayQuestions.map((question, index) => {
        return <div 
          key={index} 
          className="aip-text-sm aip-font-semibold aip-cursor-pointer aip-text-zinc-900 dark:aip-text-zinc-100 aip-bg-zinc-100 dark:aip-bg-gray-800/50 aip-rounded-md aip-px-4 aip-py-2 hover:aip-bg-zinc-200 dark:hover:aip-bg-zinc-600/80 aip-transition-colors"
          onClick={() => sendQuestion(question)}
        >
          {question}
        </div>
      })}
    </div>

  </div>
}