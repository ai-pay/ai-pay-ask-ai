import { ModalDisplay } from "../components/utils/modal"
import { EmbeddedView } from "./EmbeddedView"

interface AskAiModalProps {
  isShowing: boolean
  onClose: () => void
}

export function AskAiModal({
  isShowing,
  onClose,
}: AskAiModalProps): React.JSX.Element {

  return <ModalDisplay isShowing={isShowing} onClose={onClose}>
    <div className="
      aip-w-[90vw] lg:aip-w-[1000px] aip-max-h-[90vh] aip-mx-auto 
      aip-bg-gray-50/75 dark:aip-bg-gray-950/50 aip-backdrop-blur-md 
      aip-rounded-xl aip-text-gray-500">
      <EmbeddedView />
    </div>
  </ModalDisplay>
}