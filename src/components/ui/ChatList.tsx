/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Search } from "lucide-react";
import ChatCard from "./ChatCard";

const ChatList = () => {
  const chats = useSelector<any, any>(
    (state) => state.chat.chats
  );

  return (
    <div
      className="
        w-[350px]
        border-r
        border-slate-200
        dark:border-slate-800
        bg-slate-50
        dark:bg-slate-900
      "
    >
      <div className="p-5">
        <h1
          className="
            text-3xl
            font-bold
            text-slate-900
            dark:text-slate-100
          "
        >
          Chats
        </h1>

        {/* Search */}
        <div
          className="
            mt-4
            flex
            items-center
            gap-2
            px-4
            h-11
            rounded-xl
            bg-white
            dark:bg-slate-800
            border
            border-slate-200
            dark:border-slate-700
          "
        >
          <Search
            size={18}
            className="
              text-slate-400
              dark:text-slate-500
            "
          />

          <input
            placeholder="Search conversations"
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
        </div>
      </div>

      <div className="space-y-3 px-4 pb-4 overflow-y-auto">
        {chats.map((chat: any) => (
          <ChatCard
            key={chat.id}
            chat={chat}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatList;