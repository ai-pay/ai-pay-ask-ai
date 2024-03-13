
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { ChatViewSendQuestionButton } from "./sendButton";
import { useMessagesStore } from "../../../store/messagesStore";
import { useSendQuestion } from "../../../services/useSendQuestion";
import { useSessionState } from "ai-pay-react-hooks";
import { cn } from "../../../utils/cn";
import { RetryButton } from "../../../components/chat/RetryBtn";

export function ChatViewTextArea(): React.JSX.Element {
  const sessionState = useSessionState();
  const lastIsError = useMessagesStore(state => state.error !== undefined);

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
    <TextareaAutosize 
      className='w-full p-3 text-base opacity-0 -z-50 pt-10'
      minRows={1}
      maxRows={5}
      value={input}
    />
    <div className={cn(
      "absolute bottom-2 left-2 right-2 bg-zinc-700 bg-opacity-95 backdrop-blur-xl rounded-xl flex items-end border border-neutral-500 focus-within:border-neutral-400 transition-colors flex-shrink-0",
      sessionState !== "ACTIVE" ? "cursor-not-allowed opacity-50" : "",
    )}>
      <TextareaAutosize 
        className={cn(
          'bg-transparent rounded-lg resize-none w-full min-h-full p-3 outline-none text-base text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500',
          sessionState !== "ACTIVE" ? "cursor-not-allowed" : "",
        )}
        disabled={sessionState !== "ACTIVE"}
        minRows={1}
        maxRows={5}
        placeholder={"Ask a question..."}
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
      {lastIsError && (
        <RetryButton />
      )}
    </div>
  </>
}
