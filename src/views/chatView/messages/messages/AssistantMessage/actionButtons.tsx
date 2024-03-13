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

  return <div className="absolute flex gap-2 -bottom-1 right-0 translate-y-full transition-opacity opacity-0 group-hover:opacity-100">
    <ActionIconButton
      onClick={() => { return }}
    > 
      <CopyToClipboard 
        text={content}
        onCopy={copy}
      >
        {copied ? 
          <ClipboardDocumentCheckIcon className="h-4 w-4 text-green-500" />
          :   
          <ClipboardIcon className="h-4 w-4" />
        }
      </CopyToClipboard>      
    </ActionIconButton>
    <ActionIconButton
      onClick={() => { 
        reloadAnswer(answerId)
      }}
    > 
      <ArrowPathIcon className="h-4 w-4" />
    </ActionIconButton>
  </div>
}