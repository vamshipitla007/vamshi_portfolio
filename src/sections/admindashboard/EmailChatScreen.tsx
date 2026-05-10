import React, { useState } from "react";

import {
  ArrowLeft,
  Image,
  Mic,
  MoreVertical,
  Paperclip,
  Printer,
  SendHorizonal,
  Star,
  Trash2,
} from "lucide-react";
import type { EmailType } from "./EmailList";

type MessageType = {
  id: number;
  sender: "me" | "other";
  message: string;
  time: string;
};

type Props = {
  selectedEmail: EmailType;
  onBack: () => void;
};

const initialMessages: MessageType[] = [
  {
    id: 1,
    sender: "other",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    time: "6:30 pm",
  },

  {
    id: 2,
    sender: "me",
    message:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    time: "6:34 pm",
  },

  {
    id: 3,
    sender: "other",
    message:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.",
    time: "6:38 pm",
  },
];

const EmailChatScreen = ({ selectedEmail, onBack }: Props) => {
  const [messages, setMessages] = useState<MessageType[]>(initialMessages);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: MessageType = {
      id: Date.now(),
      sender: "me",
      message: input,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);

    setInput("");
  };

  return (
    <div className="overflow-hidden rounded-[28px] border border-[#E5E5E7] bg-white">
      {/* HEADER */}

      <div className="flex h-[78px] items-center justify-between border-b border-[#ECECEC] px-8">
        {/* LEFT */}

        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="flex h-11 w-11 items-center justify-center rounded-xl transition hover:bg-[#F5F5F5]"
          >
            <ArrowLeft size={22} color="#000000" />
          </button>

          <div className="flex items-center gap-4">
            <h2 className="text-[20px] font-bold text-[#222]">
              {selectedEmail.sender}
            </h2>

            <span className="rounded-md bg-[#F4D8FF] px-3 py-1 text-[13px] font-medium text-[#C44BFF]">
              Friends
            </span>
          </div>
        </div>

        {/* RIGHT */}

        <div className="flex overflow-hidden rounded-2xl border border-[#E5E5E7]">
          <button className="flex h-[48px] w-[56px] items-center justify-center border-r border-[#E5E5E7] transition hover:bg-[#F7F7F7]">
            <Printer size={20} color="#8E8E93" />
          </button>

          <button className="flex h-[48px] w-[56px] items-center justify-center border-r border-[#E5E5E7] transition hover:bg-[#F7F7F7]">
            <Star size={20} color="#8E8E93" />
          </button>

          <button className="flex h-[48px] w-[56px] items-center justify-center transition hover:bg-[#F7F7F7]">
            <Trash2 size={20} color="#8E8E93" />
          </button>
        </div>
      </div>

      {/* CHAT BODY */}

      <div className="h-[700px] overflow-y-auto bg-[#FCFCFD] px-8 py-8">
        <div className="space-y-6">
          {messages.map((item) => {
            const isMe = item.sender === "me";

            return (
              <div
                key={item.id}
                className={`flex ${isMe ? "justify-end" : "justify-start"}`}
              >
                {/* USER AVATAR */}

                {!isMe && (
                  <div className="mr-3 mt-auto h-[28px] w-[28px] rounded-full bg-[#D9D9D9]" />
                )}

                {/* MESSAGE BOX */}

                <div
                  className={`relative max-w-[520px] rounded-[18px] px-5 py-4 ${
                    isMe
                      ? "bg-[#4F7CF7] text-white"
                      : "bg-[#F3F3F4] text-[#333]"
                  }`}
                >
                  {/* MESSAGE TEXT */}

                  <p className="pr-6 text-[13px] leading-[26px]">
                    {item.message}
                  </p>

                  {/* TIME */}

                  <div
                    className={`mt-3 flex items-center justify-end gap-2 ${
                      isMe ? "text-white/70" : "text-[#7A7A7A]"
                    }`}
                  >
                    <span className="text-[11px]">{item.time}</span>

                    <button>
                      <MoreVertical size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* INPUT */}

      <div className="flex min-h-[72px] items-center justify-between border-t border-[#ECECEC] bg-white px-5">
        {/* LEFT */}

        <div className="flex flex-1 items-center gap-3">
          <button className="text-[#9B9B9B]">
            <Mic size={18} />
          </button>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            placeholder="Write message"
            className="h-[42px] flex-1 text-[#000000] border-none bg-transparent text-[14px] outline-none placeholder:text-[#A8A8A8]"
          />
        </div>

        {/* RIGHT */}

        <div className="ml-4 flex items-center gap-3">
          <button className="text-[#8F8F94] transition hover:text-[#4F4F4F]">
            <Paperclip size={18} />
          </button>

          <button className="text-[#8F8F94] transition hover:text-[#4F4F4F]">
            <Image size={18} />
          </button>

          <button
            onClick={handleSend}
            className="flex h-[40px] items-center gap-2 rounded-lg bg-[#4F7CF7] px-5 text-white transition hover:bg-[#3F6FF0]"
          >
            <span className="text-[13px] font-medium">Send</span>

            <SendHorizonal size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailChatScreen;
