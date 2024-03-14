import { SparklesIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import { AskAiModal } from "./AskAiModal"
import { useColorMode } from "../services/useColorMode"

export function AskAiModalButton(): React.JSX.Element {
  const [isShowing, setIsShowing] = useState(false)
  const isDarkMode = useColorMode() === "dark";

  return <div className={isDarkMode ? "aip-dark" : ""}>
    <button 
      className="aip-flex aip-text-lg aip-text-white aip-items-center aip-gap-2 aip-py-3 aip-px-5 aip-bg-neutral-800/75 hover:aip-bg-neutral-800 aip-transition-colors aip-rounded-full"
      onClick={() => setIsShowing(true)}
    >
      <p>Ask AI</p>
      <SparklesIcon className="aip-h-6 aip-w-6 aip-text-blue-400" />
    </button>
    <AskAiModal 
      isShowing={isShowing} 
      onClose={() => setIsShowing(false)}
    />
  </div>
}