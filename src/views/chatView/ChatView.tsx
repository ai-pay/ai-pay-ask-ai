import ScrollToBottom from "react-scroll-to-bottom";
import { useMessagesStore } from "../../store/messagesStore";
import { RequiresActiveSessionWrapper } from "../aiPay/RequiresActiveSessionWrapper";
import { DisplayMessages } from "./messages/DisplayMessages";
import { NoMessages } from "./noMessages/NoMessages";
import { ChatViewTextArea } from "./textArea";
import { ScrollToBottomBtn } from "../../components/chat/ScrollToBottomBtn";

export function ChatView(): React.JSX.Element {

  const hasMessages = useMessagesStore(state => state.messages.length > 0);

  return <ScrollToBottom 
    className="scrollbar-custom max-h-[86vh] relative"
    scrollViewClassName="max-h-[86vh]"
    followButtonClassName="hidden"
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

