/* eslint-disable @typescript-eslint/no-explicit-any */
import ChatHeader from "@/components/ui/ChatHeader";
import { useSelector } from "react-redux";
import { Download, FileText } from "lucide-react";
import MessageInput from "@/components/ui/MessageInput";

const CallMessageBubble = ({ message }: { message: any }) => {
  const isMe = message.sender === "me";

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[400px]
          rounded-2xl
          p-3

          ${
            isMe
              ? "bg-blue-500 text-white"
              : `
                bg-white
                dark:bg-slate-800
                border
                border-slate-200
                dark:border-slate-700
              `
          }
        `}
      >
        {/* TEXT */}

        {message.type === "text" && <p>{message.text}</p>}

        {/* IMAGE */}

        {message.type === "image" && (
          <img
            src={message.image}
            alt=""
            className="
              rounded-xl
              w-[220px]
            "
          />
        )}

        {/* FILE */}

        {message.type === "file" && (
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <FileText size={20} />

            <span>{message.fileName}</span>

            <Download size={16} />
          </div>
        )}

        <div
          className={`
            mt-2
            text-[10px]
            text-right

            ${isMe ? "text-blue-100" : "text-slate-400"}
          `}
        >
          {message.time}
        </div>
      </div>
    </div>
  );
};

export const CallConversation = () => {
  const { selectedCall, conversationMessages } = useSelector(
    (state: any) => state.call,
  );

  if (!selectedCall) {
    return (
      <div
        className="
          flex-1
          flex
          items-center
          justify-center
          bg-slate-50
          dark:bg-slate-950
        "
      >
        <p
          className="
            text-slate-500
            dark:text-slate-400
          "
        >
          Select a call log
        </p>
      </div>
    );
  }

  const messages = conversationMessages[selectedCall.id] || [];

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
          p-6
          space-y-4
        "
      >
        {messages.map((message: any) => (
          <CallMessageBubble key={message.id} message={message} />
        ))}
      </div>

      <MessageInput />
    </div>
  );
};
