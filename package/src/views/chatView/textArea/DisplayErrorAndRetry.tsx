import { ActionIconButton } from "../../../components/actionIconButton";
import { useRetryLastQuestion } from "../../../services/useRetryLastQuestion";
import { useMessagesStore } from "../../../store/messagesStore";

export function DisplayErrorAndRetry(): React.JSX.Element | null {
  const error = useMessagesStore(state => state.error);
  const {
    retryLastQuestion,
  } = useRetryLastQuestion();

  if (!error) {
    return null
  }

  return <div className="flex gap-2 items-center text-white px-2 py-1 bg-red-900/90 outline outline-2 outline-red-500 rounded-lg">
    <p>
      {error}
    </p>
    <ActionIconButton
      onClick={retryLastQuestion}
    >
      <p
        className="px-2"
      >Retry</p>
    </ActionIconButton>
  </div>
}