import { useMessagesStore } from "../../../store/messagesStore";

export function ClearMessagesButton(): React.JSX.Element | null {
  const isShowing = useMessagesStore((state) => state.messages.length > 0);
  const loading = useMessagesStore((state) => state.loading);
  const resetMessages = useMessagesStore((state) => state.resetMessages);

  if (!isShowing || loading) {
    return null
  }

  return <button 
    className="aip-absolute aip-top-0.5 aip-right-0.5 aip-px-2 aip-py-0.5 aip-text-gray-500 aip-transition-colors dark:hover:aip-text-gray-100 aip-rounded-lg aip-bg-slate-800/40 hover:aip-bg-slate-800/70"
    onClick={resetMessages}
  >
    Clear Chat
  </button>
}