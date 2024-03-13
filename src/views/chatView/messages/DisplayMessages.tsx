import { useMessagesStore } from "../../../store/messagesStore";
import { ClearMessagesButton } from "./ClearMessages";
import { AssistantMessage } from "./messages/AssistantMessage";
import { StreamedAssistantMessage } from "./messages/StreamedAssistantMessage";
import { UserQuestion } from "./messages/UserMessage";

export function DisplayMessages(): React.JSX.Element {
  const messages = useMessagesStore((state) => state.messages);
  
  return <>
    <div className="flex flex-col gap-2 p-5">
      {messages.map((message) => {
        if (message.profile === "user") {
          return <UserQuestion 
            key={message.id} 
            questionId={message.id}
            content={message.content} 
          />
        } else {
          return <AssistantMessage 
            key={message.id} 
            answerId={message.id}
            content={message.content} 
            sources={message.sources}
          />
        }
      })}
      <StreamedAssistantMessage />
    </div>
    <ClearMessagesButton />
  </>
}