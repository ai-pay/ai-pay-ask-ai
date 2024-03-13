import { useEffect, useState } from "react"
import { AskAiModal } from "./AskAiModal"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { ChatConfig } from "../store/chatConfigStore"

interface SearchBarModalButtonProps {
  text?: string
  commandKOpen?: boolean
  chatConfig: ChatConfig
}

export function SearchBarModalButton({
  text = "Ask AI ...",
  commandKOpen = true,
  chatConfig,
}: SearchBarModalButtonProps): React.JSX.Element {
  const [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
    if (!isShowing && commandKOpen) {
      document.addEventListener("keydown", (event) => {
        if (event.metaKey && event.key === "k") {
          setIsShowing(true)
        }
      })
    }
  }, [isShowing, setIsShowing])

  return <>
    <button 
      className="flex w-60 justify-between text-base text-black dark:text-white items-center py-1.5 px-2 bg-neutral-600/50 rounded-lg
      border-[1.5px] border-neutral-500/50 hover:border-neutral-700 dark:hover:border-neutral-300 transition-colors"
      onClick={() => setIsShowing(true)}
    >
      <div className="flex gap-2 items-center">
        <MagnifyingGlassIcon className="h-4 w-4 text-white" />
        <p>{text}</p>
      </div>

      {commandKOpen && <p
        className="bg-gray-800/50 py-0.5 px-1 rounded-md text-sm text-gray-800/90 dark:bg-gray-800/60 dark:text-gray-200 border border-neutral-400/75"
      >⌘K</p>}
    </button>
    <AskAiModal 
      isShowing={isShowing} 
      onClose={() => setIsShowing(false)} 
      chatConfig={chatConfig}
    />
  </>
}