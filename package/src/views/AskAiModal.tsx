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
    <div className="w-[90vw] lg:w-[1000px] max-h-[90vh] mx-auto bg-gray-950 backdrop-blur-md bg-opacity-50 rounded-xl text-gray-500">
      <EmbeddedView chatConfig={chatConfig} />
    </div>
  </ModalDisplay>
}