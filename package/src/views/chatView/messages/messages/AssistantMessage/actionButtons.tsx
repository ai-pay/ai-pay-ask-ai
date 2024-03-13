import { ArrowPathIcon } from "@heroicons/react/24/solid"
import { ActionIconButton } from "../../../../../components/actionIconButton"
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ClipboardIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import { useCallback, useState } from "react";
import { useReloadAnswer } from "../../../../../services/useReloadAnswer";

export function AssistantMessageActionButtons({
  content,
  answerId,
}: {
  content: string
  answerId: string
}): React.JSX.Element {
  
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, []);

  const {
    reloadAnswer
  } = useReloadAnswer();

  return <div className="aip-absolute aip-flex aip-gap-2 -aip-bottom-1 aip-right-0 aip-translate-y-full aip-transition-opacity aip-opacity-0 group-hover:aip-opacity-100">
    <ActionIconButton
      onClick={() => { return }}
    > 
      <CopyToClipboard 
        text={content}
        onCopy={copy}
      >
        {copied ? 
          <ClipboardDocumentCheckIcon className="aip-h-4 aip-w-4 aip-text-green-500" />
          :   
          <ClipboardIcon className="aip-h-4 aip-w-4" />
        }
      </CopyToClipboard>      
    </ActionIconButton>
    <ActionIconButton
      onClick={() => { 
        reloadAnswer(answerId)
      }}
    > 
      <ArrowPathIcon className="aip-h-4 aip-w-4" />
    </ActionIconButton>
  </div>
}