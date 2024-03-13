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
      className="aip-flex aip-w-60 aip-justify-between aip-text-base aip-text-black dark:aip-text-white aip-items-center aip-py-1.5 aip-px-2 aip-bg-neutral-600/50 aip-rounded-lg
      aip-border-[1.5px] aip-border-neutral-500/50 hover:aip-border-neutral-700 dark:hover:aip-border-neutral-300 aip-transition-colors"
      onClick={() => setIsShowing(true)}
    >
      <div className="aip-flex aip-gap-2 aip-items-center">
        <MagnifyingGlassIcon className="aip-h-4 aip-w-4 aip-text-white" />
        <p>{text}</p>
      </div>

      {commandKOpen && <p
        className="aip-bg-gray-800/50 aip-py-0.5 aip-px-1 aip-rounded-md aip-text-sm aip-text-gray-800/90 dark:aip-bg-gray-800/60 dark:aip-text-gray-200 aip-border aip-border-neutral-400/75"
      >⌘K</p>}
    </button>
    <AskAiModal 
      isShowing={isShowing} 
      onClose={() => setIsShowing(false)} 
      chatConfig={chatConfig}
    />
  </>
}