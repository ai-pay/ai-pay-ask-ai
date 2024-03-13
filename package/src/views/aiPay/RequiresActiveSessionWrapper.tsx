
import { useSessionState } from "ai-pay-react-hooks"
import { HeaderClasses, NotActiveSessionWrapperClasses } from "./RequiredAiPayWrapper";

interface RequiresActiveSessionWrapperProps {
  children: React.ReactNode;
}

export function RequiresActiveSessionWrapper({
  children,
}: RequiresActiveSessionWrapperProps): React.ReactNode {
  const sessionState = useSessionState();

  if (sessionState !== "ACTIVE") {
    return <div className={NotActiveSessionWrapperClasses}>
      <h2 className={HeaderClasses}>
        Requires AI Pay Session
      </h2>

      <div className="aip-text-lg">
        {sessionState === "UNANSWERED" ? (
          "Start a session using the AI Pay browser extension. Click on the AI Pay browser extension icon (top right of most browsers) then specify a budget and click 'Start Session'. "
        ) : (
          "The AI Pay session has ended. The website can no longer access the credits from the previous session. "
        )}
        <a href="https://www.joinaipay.com/welcome" target="_blank" rel="noreferrer" className="aip-text-blue-500 dark:aip-text-blue-400 hover:aip-underline">Learn how to start a session</a>.
      </div>
    </div>
  }

  return children;
}