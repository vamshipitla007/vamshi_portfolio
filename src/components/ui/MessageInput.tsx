import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  SendHorizonal,
  Paperclip,
  Smile,
} from "lucide-react";

import { sendMessage } from "@/utils/chatSlice";

const MessageInput = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    dispatch(sendMessage(message));
    setMessage("");
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div
      className="
        border-t
        border-slate-200
        dark:border-slate-800
        bg-white
        dark:bg-slate-900
        p-4
      "
    >
      <div
        className="
          flex
          items-center
          gap-2
          rounded-2xl
          border
          border-slate-200
          dark:border-slate-700
          bg-slate-50
          dark:bg-slate-800
          px-3
          py-2
        "
      >
        {/* Attachment */}
        <button
          className="
            p-2
            rounded-full
            text-slate-500
            dark:text-slate-400
            hover:bg-slate-200
            dark:hover:bg-slate-700
            transition-colors
          "
        >
          <Paperclip size={18} />
        </button>

        {/* Input */}
        <input
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="
            flex-1
            bg-transparent
            outline-none
            text-sm
            text-slate-900
            dark:text-slate-100
            placeholder:text-slate-400
            dark:placeholder:text-slate-500
          "
        />

        {/* Emoji */}
        <button
          className="
            p-2
            rounded-full
            text-slate-500
            dark:text-slate-400
            hover:bg-slate-200
            dark:hover:bg-slate-700
            transition-colors
          "
        >
          <Smile size={18} />
        </button>

        {/* Send */}
        <button
          onClick={handleSend}
          disabled={!message.trim()}
          className="
            h-10
            w-10
            rounded-full
            bg-blue-500
            hover:bg-blue-600
            disabled:bg-slate-300
            dark:disabled:bg-slate-700
            disabled:cursor-not-allowed
            flex
            items-center
            justify-center
            transition-all
          "
        >
          <SendHorizonal
            size={18}
            className="text-white"
          />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;