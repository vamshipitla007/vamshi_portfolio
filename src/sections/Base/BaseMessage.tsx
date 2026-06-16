import { useState } from "react";
import {
  Search,
  Plus,
  ArrowLeft,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  Send,
} from "lucide-react";

/* ================================
   Types
================================ */

type User = {
  id: number;
  name: string;
  image: string;
  online: boolean;
  time: string;
  message: string;
};

type Message = {
  id: number;
  sender: "me" | "other";
  type: "text" | "image";
  content: string;
  time: string;
};

/* ================================
   Dummy Users
================================ */

const users: User[] = [
  {
    id: 1,
    name: "Shelby Goode",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    online: true,
    time: "1 min ago",
    message: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    id: 2,
    name: "Robert Bacins",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    online: false,
    time: "9 min ago",
    message: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    id: 3,
    name: "Jhon Carilo",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    online: true,
    time: "15 min ago",
    message: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    id: 4,
    name: "Adriene Watson",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    online: true,
    time: "21 min ago",
    message: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    id: 5,
    name: "Jhon Deo",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
    online: true,
    time: "29 min ago",
    message: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    id: 6,
    name: "Mark Ruffalo",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    online: true,
    time: "45 min ago",
    message: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    id: 7,
    name: "Bethany Jackson",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    online: false,
    time: "1 h ago",
    message: "Lorem Ipsum is simply dummy text of the printing",
  },
];

/* ================================
   Dummy Conversations
================================ */

const initialMessages: Record<number, Message[]> = {
  1: [
    {
      id: 1,
      sender: "me",
      type: "text",
      content: "Lorem Ipsum is simply",
      time: "09:02 PM",
    },
  ],

  3: [
    {
      id: 1,
      sender: "me",
      type: "text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      time: "09:02 PM",
    },

    {
      id: 2,
      sender: "other",
      type: "image",
      content: "https://images.unsplash.com/photo-1558655146-d09347e92766",
      time: "09:03 PM",
    },

    {
      id: 3,
      sender: "me",
      type: "text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      time: "09:04 PM",
    },
  ],
};

/* ================================
   Component
================================ */

export default function BaseMessage() {
  const [activeTab, setActiveTab] = useState("Personal");

  const [selectedUser, setSelectedUser] = useState<User>(users[2]);

  const [mobileChat, setMobileChat] = useState(false);

  const [messages, setMessages] = useState(initialMessages);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now(),
      sender: "me",
      type: "text",
      content: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => ({
      ...prev,
      [selectedUser.id]: [...(prev[selectedUser.id] || []), message],
    }));

    setNewMessage("");
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-6">
        {/* ===================================
            LEFT CHAT LIST
        ==================================== */}

        <div
          className={`
            bg-white rounded-2xl p-5
            ${mobileChat ? "hidden lg:block" : ""}
          `}
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2
              className="
              text-[16px]
              font-medium
              text-[#11142D]
            "
            >
              Message
            </h2>

            <button
              className="
                w-7 h-7
                rounded-full
                bg-[#5B5CF0]
                text-white
                flex items-center justify-center
              "
            >
              <Plus size={16} />
            </button>
          </div>

          {/* Search */}
          <div className="relative mt-5">
            <Search
              size={16}
              className="
                absolute left-3 top-1/2
                -translate-y-1/2
                text-[#8A8AA0]
              "
            />

            <input
              placeholder="Search"
              className="
                w-full h-[42px]
                bg-[#F8F8FA]
                rounded-lg
                pl-10
                text-[14px]
                outline-none
              "
            />
          </div>

          {/* Tabs */}
          <div
            className="
            flex justify-around
            mt-6 border-b
            border-[#ECECF5]
          "
          >
            {["All", "Personal", "Teams"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  pb-3 text-[15px]
                  font-medium
                  transition-all

                  ${
                    activeTab === tab
                      ? "text-[#5B5CF0] border-b-2 border-[#5B5CF0]"
                      : "text-[#8A8AA0]"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Chat Users */}
          <div className="mt-3">
            {users.map((user) => (
              <button
                key={user.id}
                onClick={() => {
                  setSelectedUser(user);
                  setMobileChat(true);
                }}
                className={`
                  w-full text-left
                  flex items-start gap-3
                  p-3 rounded-xl
                  mb-1 transition-all

                  ${
                    selectedUser.id === user.id
                      ? "bg-[#F4F4FF]"
                      : "hover:bg-[#F8F8FA]"
                  }
                `}
              >
                {/* Avatar */}
                <div className="relative">
                  <img
                    src={user.image}
                    className="
                      w-12 h-12
                      rounded-full object-cover
                    "
                  />

                  {user.online && (
                    <span
                      className="
                        absolute bottom-0 right-0
                        w-3 h-3 rounded-full
                        bg-[#2CC84D]
                        border-2 border-white
                      "
                    />
                  )}
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3
                      className="
                      text-[16px]
                      text-[#11142D]
                      font-medium
                    "
                    >
                      {user.name}
                    </h3>

                    <span
                      className="
                      text-[11px]
                      text-[#8A8AA0]
                    "
                    >
                      {user.time}
                    </span>
                  </div>

                  <p
                    className="
                    mt-1 text-[13px]
                    text-[#8A8AA0]
                    line-clamp-2
                  "
                  >
                    {user.message}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ===================================
            RIGHT CONVERSATION
        ==================================== */}

        <div
          className={`
            bg-white rounded-2xl
            flex flex-col
            h-[85vh]
            overflow-hidden
            ${!mobileChat ? "hidden lg:flex" : "flex"}
          `}
        >
          {/* Chat Header */}
          <div
            className="
              h-[80px]
              border-b border-[#ECECF5]
              px-6
              flex items-center justify-between
            "
          >
            <div className="flex items-center gap-3">
              {/* Mobile Back */}
              <button
                onClick={() => setMobileChat(false)}
                className="lg:hidden"
              >
                <ArrowLeft size={22} className="text-[#11142D]" />
              </button>

              <div className="relative">
                <img
                  src={selectedUser.image}
                  alt={selectedUser.name}
                  className="
                    w-[48px]
                    h-[48px]
                    rounded-full
                    object-cover
                  "
                />

                {selectedUser.online && (
                  <span
                    className="
                      absolute
                      bottom-0 right-0
                      w-[12px]
                      h-[12px]
                      rounded-full
                      bg-[#2CC84D]
                      border-2 border-white
                    "
                  />
                )}
              </div>

              {/* Name */}
              <div>
                <h2
                  className="
                    text-[18px]
                    font-medium
                    text-[#11142D]
                  "
                >
                  {selectedUser.name}
                </h2>

                <p
                  className="
                    text-[13px]
                    text-[#8A8AA0]
                  "
                >
                  {selectedUser.online ? "Online" : "Offline"}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              {[
                {
                  icon: Phone,
                },
                {
                  icon: Video,
                },
                {
                  icon: MoreVertical,
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <button
                    key={index}
                    className="
                      w-[40px]
                      h-[40px]
                      rounded-full
                      bg-[#F8F8FA]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon size={18} className="text-[#8A8AA0]" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================================
              CHAT BODY
          ================================= */}

          <div
            className="
              flex-1
              overflow-y-auto
              p-6
              space-y-6
              bg-white
            "
          >
            {(messages[selectedUser.id] || []).map((message) => (
              <div
                key={message.id}
                className={`
                  flex
                  ${message.sender === "me" ? "justify-start" : "justify-end"}
                `}
              >
                {/* Text Message */}
                {message.type === "text" && (
                  <div
                    className={`
                      max-w-[350px]
                      rounded-xl
                      px-5
                      py-4
                      relative
                      ${
                        message.sender === "me"
                          ? "bg-[#5B8CF6] text-white"
                          : "bg-[#F5F5F7] text-[#11142D]"
                      }
                    `}
                  >
                    <p
                      className="
                        text-[14px]
                        leading-6
                      "
                    >
                      {message.content}
                    </p>

                    <span
                      className={`
                        text-[11px]
                        mt-2
                        block
                        text-right
                        ${
                          message.sender === "me"
                            ? "text-white/80"
                            : "text-[#8A8AA0]"
                        }
                      `}
                    >
                      {message.time}
                    </span>
                  </div>
                )}

                {/* Image Message */}
                {message.type === "image" && (
                  <div
                    className="
                      rounded-xl
                      overflow-hidden
                      w-[220px]
                      h-[140px]
                    "
                  >
                    <img
                      src={message.content}
                      alt="chat"
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ================================
      MESSAGE INPUT
================================ */}

          <div
            className="
    p-5
    border-t border-[#ECECF5]
    bg-white
  "
          >
            <div
              className="
      h-[58px]
      bg-[#F8F8FA]
      rounded-xl
      px-4
      flex
      items-center
      gap-4
    "
            >
              {/* Attachment */}
              <button>
                <Paperclip size={20} className="text-[#8A8AA0]" />
              </button>

              {/* Input */}
              <input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Type a message..."
                className="
        flex-1
        bg-transparent
        text-[14px]
        text-[#11142D]
        outline-none
      "
              />

              {/* Emoji */}
              <button>
                <Smile size={20} className="text-[#8A8AA0]" />
              </button>

              {/* Send */}
              <button
                onClick={sendMessage}
                className="
        w-[36px]
        h-[36px]
        rounded-full
        bg-[#5B5CF0]
        text-white
        flex
        items-center
        justify-center
      "
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
