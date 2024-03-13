import { ModalDisplay } from "../components/utils/modal"
import { ChatConfig } from "../store/chatConfigStore"
import { EmbeddedView } from "./EmbeddedView"

interface AskAiModalProps {
  isShowing: boolean
  onClose: () => void
  chatConfig: ChatConfig
}

export function AskAiModal({
  isShowing,
  onClose,
  chatConfig
}: AskAiModalProps): React.JSX.Element {
  return <ModalDisplay isShowing={isShowing} onClose={onClose}>
    <div className="aip-w-[90vw] lg:aip-w-[1000px] aip-max-h-[90vh] aip-mx-auto aip-bg-gray-950 aip-backdrop-blur-md aip-bg-opacity-50 aip-rounded-xl aip-text-gray-500">
      <EmbeddedView chatConfig={chatConfig} />
    </div>
  </ModalDisplay>
}