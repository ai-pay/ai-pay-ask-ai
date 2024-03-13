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

  return <div className="aip-flex aip-gap-2 aip-items-center aip-text-white aip-px-2 aip-py-1 aip-bg-red-900/90 aip-outline aip-outline-2 aip-outline-red-500 aip-rounded-lg">
    <p>
      {error}
    </p>
    <ActionIconButton
      onClick={retryLastQuestion}
    >
      <p
        className="aip-px-2"
      >Retry</p>
    </ActionIconButton>
  </div>
}