import { useMessagesStore } from "../../../../store/messagesStore"
import { AssistantMessage } from "./AssistantMessage"

export function StreamedAssistantMessage(): React.JSX.Element | null {
  const streamText = useMessagesStore((state) => state.streamText)
  const progressUpdates = useMessagesStore((state) => state.progressUpdate)
  const streamedSources = useMessagesStore((state) => state.streamedSources)
  const loading = useMessagesStore((state) => state.loading)

  if (streamText === undefined) {
    return null
  }

  return <AssistantMessage 
    content={streamText} 
    answerId={undefined}
    progressPrompt={progressUpdates}
    loading={loading}
    sources={streamedSources}
  />
}