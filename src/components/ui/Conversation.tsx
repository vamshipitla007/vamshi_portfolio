/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import EmptyConversation from "./EmptyConversation";

const Conversation = () => {
  const selectedChat = useSelector(
    (state: any) => state.chat.selectedChat
  );

  if (!selectedChat) {
    return <EmptyConversation />;
  }

  return (
    <div
      className="
        flex-1
        flex
        flex-col
        bg-slate-50
        dark:bg-slate-950
      "
    >
      <ChatHeader />

      <div
        className="
          flex-1
          overflow-y-auto
          p-5
          space-y-4
        "
      >
        {selectedChat.messages.map((message: any) => (
          <MessageBubble
            key={message.id}
            message={message}
          />
        ))}
      </div>

      <MessageInput />
    </div>
  );
};

export default Conversation;