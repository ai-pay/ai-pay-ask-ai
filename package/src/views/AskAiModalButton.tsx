import { SparklesIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import { AskAiModal } from "./AskAiModal"
import { ChatConfig } from "../store/chatConfigStore"

export function AskAiModalButton({
  chatConfig
}: {
  chatConfig: ChatConfig
}): React.JSX.Element {
  const [isShowing, setIsShowing] = useState(false)

  return <>
    <button 
      className="flex text-lg text-white items-center gap-2 py-3 px-5 bg-neutral-800/75 hover:bg-neutral-800 transition-colors rounded-full"
      onClick={() => setIsShowing(true)}
    >
      <p>Ask AI</p>
      <SparklesIcon className="h-6 w-6 text-blue-400" />
    </button>
    <AskAiModal 
      isShowing={isShowing} 
      onClose={() => setIsShowing(false)}
      chatConfig={chatConfig}
    />
  </>
}