import { NavLink, useNavigate } from "react-router-dom";
import { MessageSquare, Users, Phone, Settings } from "lucide-react";

import ChatLogo from "@/assets/chat/chat_logo.png";
import { useState } from "react";

const sidebarMenus = [
  {
    title: "Chats",
    icon: MessageSquare,
    path: "/chat/chat",
  },
  {
    title: "Teams",
    icon: Users,
    path: "/chat/teams",
  },
  {
    title: "Calls",
    icon: Phone,
    path: "/chat/calls",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/chat/settings",
  },
];

const ThemeToggle = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`
        relative
        w-12
        h-7
        rounded-full
        transition-all
        duration-300

        ${enabled ? "bg-blue-500" : "bg-slate-300"}
      `}
    >
      <span
        className={`
          absolute
          top-1
          w-5
          h-5
          rounded-full
          bg-white
          shadow-sm
          transition-all
          duration-300

          ${enabled ? "left-6" : "left-1"}
        `}
      />
    </button>
  );
};

const ChatSidebar = () => {
  const navigate = useNavigate();
  return (
    <aside
      className="
      w-20
      border-r
      border-slate-200
      dark:border-slate-800
      bg-white
      dark:bg-slate-950
      flex
      flex-col
      items-center
      py-6
    "
    >
      {/* Logo */}
      <div className="mb-10">
        <img src={ChatLogo} alt="logo" className="w-12 h-12 rounded-xl" />
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-4">
        {sidebarMenus.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              title={item.title}
              className={({ isActive }) =>
                `
                w-12
                h-12
                rounded-xl
                flex
                items-center
                justify-center
                transition-all
                duration-200

                ${
                  isActive
                    ? `
                      bg-blue-500
                      text-white
                      shadow-md
                    `
                    : `
                      text-slate-500
                      dark:text-slate-400
                      hover:bg-slate-100
                      dark:hover:bg-slate-800
                    `
                }
              `
              }
            >
              <Icon size={22} />
            </NavLink>
          );
        })}
      </div>

      <div
        className="
    mt-auto
    flex
    flex-col
    items-center
    gap-8
  "
      >
        <ThemeToggle />

        <div
          onClick={() => navigate("/chat/profile")}
          className="cursor-pointer"
        >
          <img
            src="https://i.pravatar.cc/300?img=12"
            alt="user"
            className="
        w-12
        h-12
        rounded-full
        ring-2
        ring-slate-200
      "
          />
        </div>
      </div>
    </aside>
  );
};

export default ChatSidebar;
