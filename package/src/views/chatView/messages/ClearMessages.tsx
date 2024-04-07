import { useMessagesStore } from "../../../store/messagesStore";

export function ClearMessagesButton(): React.JSX.Element | null {
  const isShowing = useMessagesStore((state) => state.messages.length > 0);
  const loading = useMessagesStore((state) => state.loading);
  const resetMessages = useMessagesStore((state) => state.resetMessages);

  if (!isShowing || loading) {
    return null
  }

  return <button 
    className="
    aip-opacity-50 hover:aip-opacity-100
    aip-absolute aip-top-0.5 aip-right-0.5 aip-px-2 aip-py-0.5 aip-rounded-lg
    aip-bg-gray-700/40 hover:aip-bg-gray-700/70 
    aip-text-zinc-500 hover:aip-text-zinc-100
    aip-transition-colors"
    onClick={resetMessages}
  >
    Clear Chat
  </button>
}