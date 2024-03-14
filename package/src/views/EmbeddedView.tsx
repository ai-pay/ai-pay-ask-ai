import { useColorMode } from "../services/useColorMode";
import { RequiredAiPayWrapper } from "./aiPay/RequiredAiPayWrapper";
import { ChatView } from "./chatView/ChatView";

export function EmbeddedView(): React.JSX.Element {
  const isDarkMode = useColorMode() === "dark";
  
  return <div className={isDarkMode ? "aip-dark" : ""}>
    <RequiredAiPayWrapper>
      <ChatView />
    </RequiredAiPayWrapper>
  </div>
}