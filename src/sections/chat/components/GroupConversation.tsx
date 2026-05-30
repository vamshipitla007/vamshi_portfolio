import {
  Smile,
  Paperclip,
  SendHorizonal,
  Search,
  FileText,
} from "lucide-react";

import EmojiPicker from "emoji-picker-react";

import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/utils/store";
import { sendImage, sendMessage } from "@/utils/groupSlice";



const GroupConversation = () => {
  const dispatch = useDispatch();

  const fileRef =
    useRef<HTMLInputElement>(null);

  const [message, setMessage] =
    useState("");

  const [showEmoji, setShowEmoji] =
    useState(false);

  const selectedGroup = useSelector(
    (state: RootState) =>
      state.group.selectedGroup
  );

  const messages = useSelector(
    (state: RootState) =>
      selectedGroup
        ? state.group.messages[
            selectedGroup.id
          ] || []
        : []
  );

  const handleSend = () => {
    if (!message.trim()) return;

    dispatch(sendMessage(message));

    setMessage("");
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      e.target.files?.[0];

    if (!file) return;

    const imageUrl =
      URL.createObjectURL(file);

    dispatch(sendImage(imageUrl));
  };

  if (!selectedGroup) {
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
        <h3
          className="
            text-slate-500
            dark:text-slate-400
          "
        >
          Select a group
        </h3>
      </div>
    );
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
      {/* Header */}

      <div
        className="
          h-16
          border-b
          border-slate-200
          dark:border-slate-800

          bg-white
          dark:bg-slate-900

          px-6

          flex
          justify-between
          items-center
        "
      >
        <div className="flex gap-3">
          <img
            src={selectedGroup.avatar}
            alt={selectedGroup.name}
            className="
              w-11
              h-11
              rounded-full
              object-cover
            "
          />

          <div>
            <h3
              className="
                text-sm
                font-semibold
                text-slate-900
                dark:text-slate-100
              "
            >
              {selectedGroup.name}
            </h3>

            <p
              className="
                text-xs
                text-slate-500
                dark:text-slate-400
              "
            >
              214 Members
            </p>
          </div>
        </div>

        <button>
          <Search
            size={18}
            className="
              text-slate-500
              dark:text-slate-400
            "
          />
        </button>
      </div>

      {/* Messages */}

      <div
        className="
          flex-1
          overflow-y-auto
          p-6
          space-y-4
        "
      >
        {messages.map((msg) => {
          const isMe =
            msg.sender === "me";

          return (
            <div
              key={msg.id}
              className={`flex ${
                isMe
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`
                  max-w-[420px]
                  rounded-2xl
                  px-4
                  py-3

                  ${
                    isMe
                      ? `
                        bg-blue-500
                        text-white
                      `
                      : `
                        bg-white
                        dark:bg-slate-800

                        text-slate-900
                        dark:text-slate-100

                        border
                        border-slate-200
                        dark:border-slate-700
                      `
                  }
                `}
              >
                {/* Text */}

                {msg.type ===
                  "text" && (
                  <p className="text-sm">
                    {msg.text}
                  </p>
                )}

                {/* Image */}

                {msg.type ===
                  "image" && (
                  <img
                    src={msg.image}
                    alt=""
                    className="
                      rounded-xl
                      max-w-[250px]
                    "
                  />
                )}

                {/* File */}

                {msg.type ===
                  "file" && (
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <FileText
                      size={20}
                    />

                    <span>
                      {msg.fileName}
                    </span>
                  </div>
                )}

                <div
                  className={`
                    mt-2
                    text-[10px]
                    text-right

                    ${
                      isMe
                        ? "text-blue-100"
                        : `
                          text-slate-400
                          dark:text-slate-500
                        `
                    }
                  `}
                >
                  {msg.time}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input */}

      <div
        className="
          relative

          border-t
          border-slate-200
          dark:border-slate-800

          bg-white
          dark:bg-slate-900

          p-4
        "
      >
        {showEmoji && (
          <div
            className="
              absolute
              bottom-20
              right-4
              z-50
            "
          >
            <EmojiPicker
              onEmojiClick={(emoji) =>
                setMessage(
                  (prev) =>
                    prev +
                    emoji.emoji
                )
              }
            />
          </div>
        )}

        <div
          className="
            flex
            items-center
            gap-2

            rounded-xl

            bg-slate-100
            dark:bg-slate-800

            px-3
            py-2
          "
        >
          <button
            onClick={() =>
              fileRef.current?.click()
            }
          >
            <Paperclip
              size={18}
              className="
                text-slate-500
                dark:text-slate-400
              "
            />
          </button>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            hidden
            onChange={
              handleImageUpload
            }
          />

          <input
            value={message}
            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }
            onKeyDown={(e) => {
              if (
                e.key === "Enter"
              ) {
                handleSend();
              }
            }}
            placeholder="Write a message..."
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

          <button
            onClick={() =>
              setShowEmoji(
                !showEmoji
              )
            }
          >
            <Smile
              size={18}
              className="
                text-slate-500
                dark:text-slate-400
              "
            />
          </button>

          <button
            onClick={handleSend}
          >
            <SendHorizonal
              size={18}
              className="
                text-blue-500
              "
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupConversation;