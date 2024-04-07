import { ModalDisplay } from "../components/utils/modal"
import { ChatConfig, useChatConfigStore } from "../store/chatConfigStore"
import { EmbeddedView } from "./EmbeddedView"

interface AskAiModalProps {
  isShowing: boolean
  onClose: () => void
  chatConfig?: ChatConfig
}

export function AskAiModal({
  isShowing,
  onClose,
  chatConfig,
}: AskAiModalProps): React.JSX.Element {
  if (chatConfig) {
    useChatConfigStore.getState().setConfig(chatConfig)
  }

  return <ModalDisplay isShowing={isShowing} onClose={onClose}>
    <div className="
      aip-w-[90vw] lg:aip-w-[1000px] aip-max-h-[90vh] aip-mx-auto 
      aip-bg-zinc-100 dark:aip-bg-zinc-800
      aip-rounded-xl aip-text-zinc-500">
      <EmbeddedView />
    </div>
  </ModalDisplay>
}