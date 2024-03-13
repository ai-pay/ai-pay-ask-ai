
import { SquareLoader } from "../../../components/utils/squareLoader";
import { cn } from "../../../utils/cn";

interface ChatViewSendQuestionButtonProps {
  loading: boolean;
  disabled: boolean;
  onclick: () => void;
}

export function ChatViewSendQuestionButton({
  loading,
  disabled,
  onclick
}: ChatViewSendQuestionButtonProps): React.JSX.Element {
  return <button 
    className={cn(
      "zinc-700 rounded-xl p-1 items-center justify-center flex w-10 h-10 m-1",
      "border-none",
      "text-neutral-100",
      "hover:bg-zinc-600",
      disabled ? "cursor-not-allowed" : "cursor-pointer",
    )}
    disabled={loading || disabled}
    onClick={onclick}
  >
    {loading ? (
      <SquareLoader />
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
      </svg>
    )}
  </button>;
}
