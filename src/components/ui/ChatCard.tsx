/* eslint-disable @typescript-eslint/no-explicit-any */
import { selectChat } from "@/utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";

const ChatCard = ({ chat }: { chat: any }) => {
  const dispatch = useDispatch();

  const selectedChat = useSelector(
    (state: any) => state.chat.selectedChat
  );

  const isSelected =
    selectedChat?.id === chat.id;

  const lastMessage =
    chat.messages?.[chat.messages.length - 1];

  return (
    <div
      onClick={() => dispatch(selectChat(chat))}
      className={`
        p-3
        rounded-xl
        cursor-pointer
        transition-all
        duration-200
        border

        ${
          isSelected
            ? `
              bg-blue-50
              dark:bg-blue-950/30
              border-blue-200
              dark:border-blue-800
            `
            : `
              bg-white
              dark:bg-slate-800
              border-slate-200
              dark:border-slate-700
              hover:bg-slate-50
              dark:hover:bg-slate-700
            `
        }
      `}
    >
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="relative">
          <img
            src={chat.avatar}
            alt={chat.name}
            className="
              w-12
              h-12
              rounded-full
              object-cover
            "
          />

          {chat.online && (
            <span
              className="
                absolute
                bottom-0
                right-0
                w-3
                h-3
                rounded-full
                bg-green-500
                border-2
                border-white
                dark:border-slate-800
              "
            />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center">
            <h4
              className="
                text-sm
                font-semibold
                truncate
                text-slate-900
                dark:text-slate-100
              "
            >
              {chat.name}
            </h4>

            {lastMessage?.time && (
              <span
                className="
                  text-[11px]
                  text-slate-400
                  dark:text-slate-500
                "
              >
                {lastMessage.time}
              </span>
            )}
          </div>

          <p
            className="
              mt-1
              text-xs
              truncate
              text-slate-500
              dark:text-slate-400
            "
          >
            {lastMessage?.text || "No messages"}
          </p>
        </div>

        {/* Unread Badge */}
        {chat.unread > 0 && (
          <div
            className="
              min-w-[20px]
              h-5
              px-1
              rounded-full
              bg-blue-500
              text-white
              text-[10px]
              font-medium
              flex
              items-center
              justify-center
            "
          >
            {chat.unread}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatCard;