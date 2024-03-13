import { RequiredAiPayWrapper } from "./aiPay/RequiredAiPayWrapper";
import { ChatView } from "./chatView/ChatView";

export function ModelView(): React.JSX.Element {
  return <div className="w-[90vw] lg:w-[1000px] max-h-[90vh] mx-auto bg-gray-950 backdrop-blur-md bg-opacity-50 rounded-xl text-gray-500">
    <RequiredAiPayWrapper>
      <ChatView />
    </RequiredAiPayWrapper>
  </div>
}