// components/Sidebar.tsx

import { NavLink } from "react-router-dom";
import { LogOut, Moon, Sun, X } from "lucide-react";

import logo from "@/assets/base/Image3.png";
import user from "@/assets/base/Image4.png";
import {
  LayoutGrid,
  BarChart3,
  Receipt,
  CalendarDays,
  MessageSquare,
  Bell,
  Settings,
  ClipboardList,
  Crown,
} from "lucide-react";
import { useTheme } from "@/utils/BaseThemeContext";

function UpgradeCard() {
  return (
    <div
      className="
        w-full
        max-w-[170px]
        h-[130px]

        bg-[#F5F6FF]
        dark:bg-gray-800

        rounded-[20px]
        flex
        flex-col
        items-center
        justify-center

        relative
        overflow-hidden

        transition-colors
        duration-300

        border
        border-transparent
        dark:border-gray-700
      "
    >
      {/* Hanging Line */}
      <div
        className="
          absolute
          top-0
          w-[2px]
          h-[24px]
          bg-[#6B63FF]
          dark:bg-[#8B84FF]
        "
      />

      {/* Lamp */}
      <div className="relative">
        {/* Top Cap */}
        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            -top-1
            w-[12px]
            h-[4px]
            bg-[#6B63FF]
            dark:bg-[#8B84FF]
            rounded-t-full
          "
        />

        {/* Lamp Body */}
        <div
          className="
            w-0
            h-0
            border-l-[42px]
            border-r-[42px]
            border-b-[52px]
            border-l-transparent
            border-r-transparent
            border-b-[#6EA1FF]
            dark:border-b-[#7C7AFF]
          "
        />

        {/* Bottom Glow */}
        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            -bottom-[4px]
            w-[90px]
            h-[4px]
            rounded-full
            bg-[#5F8EFF]
            dark:bg-[#7C7AFF]
            opacity-40
          "
        />
      </div>

      {/* Button */}
      <button
        className="
          mt-5

          w-[110px]
          h-[28px]

          rounded-full

          bg-[#5B5CF0]
          hover:bg-[#4F50E8]

          dark:bg-[#7C7AFF]
          dark:hover:bg-[#6B63FF]

          text-white
          text-[10px]
          font-medium

          flex
          items-center
          justify-center
          gap-1.5

          transition-all
          duration-200
        "
      >
        <Crown size={14} />
        Upgrade Now
      </button>
    </div>
  );
}

type Props = {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const sidebarMenus = [
  {
    title: "Dashboard",
    path: "/Base/dashboard",
    icon: LayoutGrid,
  },
  {
    title: "Analytics",
    path: "/Base/analytics",
    icon: BarChart3,
  },
  {
    title: "Invoice",
    path: "/Base/invoice",
    icon: Receipt,
  },
  {
    title: "Schedule",
    path: "/Base/schedule",
    icon: ClipboardList,
  },
  {
    title: "Calendar",
    path: "/Base/calendar",
    icon: CalendarDays,
  },
  {
    title: "Messages",
    path: "/Base/messages",
    icon: MessageSquare,
  },
  {
    title: "Notification",
    path: "/Base/notification",
    icon: Bell,
  },
  {
    title: "Settings",
    path: "/Base/settings",
    icon: Settings,
  },
];

export default function Sidebar({ openSidebar, setOpenSidebar }: Props) {
  const { theme, toggleTheme } = useTheme();

console.log(theme);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpenSidebar(false)}
        className={`
          fixed inset-0 bg-black/50 z-40 lg:hidden
          transition-all duration-300
          ${openSidebar ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      <aside
        className={`
          fixed top-0 left-0 z-50
          w-[240px]
          h-screen
          bg-white
          dark:bg-gray-900
          border-r
          border-[#ECECF5]
          dark:border-gray-800
          flex
          flex-col
          transition-all
          duration-300
          ${openSidebar ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div
          className="
            h-[90px]
            px-6
            flex
            items-center
            justify-between
          "
        >
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-[42px] h-[42px]" />

            <h2
              className="
                text-[16px]
                font-semibold
                text-[#11142D]
                dark:text-white
              "
            >
              Base
            </h2>
          </div>

          <button className="lg:hidden" onClick={() => setOpenSidebar(false)}>
            <X
              className="
                w-5
                h-5
                text-gray-500
                dark:text-gray-300
              "
            />
          </button>
        </div>

        {/* Theme Toggle */}
        <div className="px-6 mb-4">
          <button
            onClick={toggleTheme}
            className="
              w-full
              h-[44px]
              rounded-xl
              bg-[#F4F3FF]
              dark:bg-gray-800
              flex
              items-center
              justify-center
              gap-2
              transition-all
            "
          >
            {theme === "dark" ? (
              <>
                <Sun
                  size={18}
                  className="text-yellow-400"
                />
                <span className="text-white">
                  Light Mode
                </span>
              </>
            ) : (
              <>
                <Moon
                  size={18}
                  className="text-[#5B5CF0]"
                />
                <span className="text-[#5B5CF0]">
                  Dark Mode
                </span>
              </>
            )}
          </button>
        </div>

        {/* Menu */}
        <div className="flex-1 px-6 overflow-y-auto">
          <div className="space-y-2">
            {sidebarMenus.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.title}
                  to={item.path}
                  onClick={() => setOpenSidebar(false)}
                  className={({ isActive }) =>
                    `
                    flex
                    items-center
                    gap-4
                    h-[52px]
                    px-4
                    rounded-2xl
                    transition-all
                    duration-200

                    ${
                      isActive
                        ? "bg-[#F4F3FF] dark:bg-[#2A255A]"
                        : "hover:bg-[#F7F7FB] dark:hover:bg-gray-800"
                    }
                  `
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={`
                          w-5
                          h-5
                          min-w-[20px]

                          ${
                            isActive
                              ? "text-[#5B5CF0]"
                              : "text-[#8A8AA0] dark:text-gray-400"
                          }
                        `}
                      />

                      <span
                        className={`
                          text-[15px]
                          font-medium

                          ${
                            isActive
                              ? "text-[#5B5CF0]"
                              : "text-[#8A8AA0] dark:text-gray-300"
                          }
                        `}
                      >
                        {item.title}
                      </span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Upgrade Card */}
        <div className="px-4 mb-4 hidden lg:flex justify-center">
          <UpgradeCard />
        </div>

        {/* User Section */}
        <div
          className="
            border-t
            border-[#ECECF5]
            dark:border-gray-800
            p-5
          "
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={user}
                alt="user"
                className="
                  w-[42px]
                  h-[42px]
                  rounded-full
                  object-cover
                "
              />

              <div>
                <h3
                  className="
                    text-[14px]
                    font-medium
                    text-[#11142D]
                    dark:text-white
                  "
                >
                  {sessionStorage.getItem("baseUserName") || "User"}
                </h3>

                <p
                  className="
                    text-[12px]
                    text-[#A0A0B5]
                    dark:text-gray-400
                  "
                >
                  Free Account
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                sessionStorage.clear();
                window.location.href = "/Base/Login";
              }}
            >
              <LogOut
                className="
                  w-5
                  h-5
                  text-[#8A8AA0]
                  dark:text-gray-400
                "
              />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
