
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
      "aip-rounded-xl aip-p-1 aip-items-center aip-justify-center aip-flex aip-w-10 aip-h-10 aip-m-1",
      "aip-border-none",
      "aip-text-neutral-700 dark:aip-text-neutral-100",
      "hover:aip-bg-zinc-300 dark:hover:aip-bg-zinc-600",
      disabled ? "aip-cursor-not-allowed" : "aip-cursor-pointer",
    )}
    disabled={loading || disabled}
    onClick={onclick}
  >
    {loading ? (
      <SquareLoader />
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="aip-w-6 aip-h-6">
        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
      </svg>
    )}
  </button>;
}
