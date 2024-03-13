import { useMessagesStore } from "../../../store/messagesStore";

export function ClearMessagesButton(): React.JSX.Element | null {
  const isShowing = useMessagesStore((state) => state.messages.length > 0);
  const loading = useMessagesStore((state) => state.loading);
  const resetMessages = useMessagesStore((state) => state.resetMessages);

  if (!isShowing || loading) {
    return null
  }

  return <button 
    className="absolute top-0.5 right-0.5 px-2 py-0.5 text-gray-500 transition-colors dark:hover:text-gray-100 rounded-lg bg-slate-800/40 hover:bg-slate-800/70"
    onClick={resetMessages}
  >
    Clear Chat
  </button>
}