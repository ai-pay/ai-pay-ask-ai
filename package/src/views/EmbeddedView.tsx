import { ChatConfig } from "../store/chatConfigStore";
import { RequiredAiPayWrapper } from "./aiPay/RequiredAiPayWrapper";
import { ChatView } from "./chatView/ChatView";

export function EmbeddedView({
  chatConfig
}: {
  chatConfig: ChatConfig
}): React.JSX.Element {
  return <RequiredAiPayWrapper>
    <ChatView chatConfig={chatConfig} />
  </RequiredAiPayWrapper>
}