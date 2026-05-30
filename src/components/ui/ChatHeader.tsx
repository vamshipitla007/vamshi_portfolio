/* eslint-disable @typescript-eslint/no-explicit-any */
import CallingModal from "@/sections/chat/components/CallingModal";
import { Phone, Video, MoreVertical, Search } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

const ChatHeader = () => {
  const [showCallModal, setShowCallModal] = useState(false);
  const selectedChat = useSelector((state: any) => state.chat.selectedChat);

  if (!selectedChat) return null;

  return (
    <header
      className="
        h-16
        px-5
        flex
        items-center
        justify-between

        bg-white
        dark:bg-slate-900

        border-b
        border-slate-200
        dark:border-slate-800
      "
    >
      {/* User Info */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={selectedChat.avatar}
            alt={selectedChat.name}
            className="
              w-11
              h-11
              rounded-full
              object-cover
              ring-2
              ring-slate-200
              dark:ring-slate-700
            "
          />

          {selectedChat.online && (
            <span
              className="
                absolute
                bottom-0
                right-0
                w-3.5
                h-3.5
                rounded-full
                bg-green-500
                border-2
                border-white
                dark:border-slate-900
              "
            />
          )}
        </div>

        <div>
          <h3
            className="
              text-sm
              font-semibold
              text-slate-900
              dark:text-slate-100
            "
          >
            {selectedChat.name}
          </h3>

          <p
            className={`
              text-xs
              ${
                selectedChat.online
                  ? "text-green-500"
                  : "text-slate-500 dark:text-slate-400"
              }
            `}
          >
            {selectedChat.online ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1">
        <button
          className="
            w-10
            h-10
            rounded-full
            flex
            items-center
            justify-center

            text-slate-600
            dark:text-slate-300

            hover:bg-slate-100
            dark:hover:bg-slate-800

            transition-colors
          "
        >
          <Search size={18} />
        </button>

        <button
          className="
            w-10
            h-10
            rounded-full
            flex
            items-center
            justify-center

            text-slate-600
            dark:text-slate-300

            hover:bg-slate-100
            dark:hover:bg-slate-800

            transition-colors
          "
          onClick={() => setShowCallModal(true)}
        >
          <Phone size={18} />
        </button>

        <button
          className="
            w-10
            h-10
            rounded-full
            flex
            items-center
            justify-center

            text-slate-600
            dark:text-slate-300

            hover:bg-slate-100
            dark:hover:bg-slate-800

            transition-colors
          "
        >
          <Video size={18} />
        </button>

        <button
          className="
            w-10
            h-10
            rounded-full
            flex
            items-center
            justify-center

            text-slate-600
            dark:text-slate-300

            hover:bg-slate-100
            dark:hover:bg-slate-800

            transition-colors
          "
        >
          <MoreVertical size={18} />
        </button>
      </div>
      <CallingModal
        open={showCallModal}
        callerName="Camel"
        receiverName="Horse"
        callerAvatar="https://i.pravatar.cc/300?img=12"
        receiverAvatar="https://i.pravatar.cc/300?img=13"
        onHangup={() => setShowCallModal(false)}
      />
    </header>
  );
};

export default ChatHeader;
