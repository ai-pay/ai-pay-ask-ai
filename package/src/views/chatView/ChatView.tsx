import ScrollToBottom from "react-scroll-to-bottom";
import { useMessagesStore } from "../../store/messagesStore";
import { RequiresActiveSessionWrapper } from "../aiPay/RequiresActiveSessionWrapper";
import { DisplayMessages } from "./messages/DisplayMessages";
import { NoMessages } from "./noMessages/NoMessages";
import { ChatViewTextArea } from "./textArea";
import { ScrollToBottomBtn } from "./messages/ScrollToBottomBtn";
import { ChatConfig, useChatConfigStore } from "../../store/chatConfigStore";

export function ChatView({
  chatConfig
}: {
  chatConfig: ChatConfig
}): React.JSX.Element {

  const hasMessages = useMessagesStore(state => state.messages.length > 0);
  const setChatConfig = useChatConfigStore(state => state.setConfig);
  setChatConfig(chatConfig);

  return <ScrollToBottom 
    className="scrollbar-custom aip-max-h-[86vh] aip-relative"
    scrollViewClassName="aip-max-h-[86vh]"
    followButtonClassName="aip-hidden"
  >
    <RequiresActiveSessionWrapper>
      {hasMessages ? (
        <DisplayMessages />
      ): (
        <NoMessages />
      )}
    </RequiresActiveSessionWrapper>
    <ChatViewTextArea />
    <ScrollToBottomBtn isShowing={hasMessages}/>
  </ScrollToBottom>
}

