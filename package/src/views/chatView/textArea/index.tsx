
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { ChatViewSendQuestionButton } from "./sendButton";
import { useMessagesStore } from "../../../store/messagesStore";
import { useSendQuestion } from "../../../services/useSendQuestion";
import { useSessionState } from "ai-pay-react-hooks";
import { cn } from "../../../utils/cn";
import { DisplayErrorAndRetry } from "./DisplayErrorAndRetry";
import { useChatConfigStore } from "../../../store/chatConfigStore";

export function ChatViewTextArea(): React.JSX.Element {
  const sessionState = useSessionState();

  const placeholder = useChatConfigStore((state) => state.config?.questionBoxPlaceholder ?? "Ask a question...");

  const loading = useMessagesStore((state) => state.loading);
  const {
    sendQuestion: _sendQuestion,
  } = useSendQuestion();

  const [ input, setInput ] = useState<string>("");

  function sendQuestion(input: string): void {
    if (input === "") return;
    _sendQuestion(input);
    setInput("");
  }

  return <>
    <div className="aip-flex aip-flex-col aip-gap-3 aip-opacity-0 -aip-z-50 aip-w-full aip-p-3 aip-text-base aip-pt-10">
      <div className="aip-flex aip-justify-around aip-px-10">
        <DisplayErrorAndRetry />
      </div>
      <TextareaAutosize 
        className=''
        minRows={1}
        maxRows={5}
        placeholder={placeholder}
        value={input}
      />
    </div>
    <div className={cn(
      "aip-absolute aip-bottom-2 aip-left-2 aip-right-2 aip-bg-zinc-100/90 dark:aip-bg-zinc-700/90 aip-backdrop-blur-xl aip-rounded-xl aip-flex aip-items-end aip-border aip-border-neutral-300 dark:aip-border-neutral-500 focus-within:aip-border-neutral-400 aip-transition-colors aip-flex-shrink-0",
      sessionState !== "ACTIVE" ? "aip-cursor-not-allowed aip-opacity-50" : "",
    )}>
      <TextareaAutosize 
        className={cn(
          'aip-bg-transparent aip-rounded-lg aip-resize-none aip-w-full aip-min-h-full aip-p-3 aip-outline-none aip-text-base aip-text-black dark:aip-text-white aip-placeholder-neutral-400 dark:aip-placeholder-neutral-500',
          sessionState !== "ACTIVE" ? "cursor-not-allowed" : "",
        )}
        disabled={sessionState !== "ACTIVE"}
        minRows={1}
        maxRows={5}
        placeholder={placeholder}
        value={input}
        onChange={(e) => {
          if (e.target.value === "\n") {
            return;
          }
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {// enter key to submit form 
            sendQuestion(input);
          }
        }}
      />
      <ChatViewSendQuestionButton
        loading={loading}
        disabled={loading || input === "" || sessionState !== "ACTIVE"}
        onclick={function (): void {
          sendQuestion(input);
        } } />
      <div className="aip-absolute aip-flex aip-justify-around -aip-top-3 aip-left-0 aip-right-0 -aip-translate-y-full aip-px-10">
        <DisplayErrorAndRetry />
      </div>
    </div>
  </>
}
