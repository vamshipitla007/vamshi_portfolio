// components/Sidebar.tsx

import { NavLink } from "react-router-dom";
import { LogOut, X } from "lucide-react";

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

function UpgradeCard() {
  return (
    <div
      className="
        w-[140px]
        h-[100px]
        bg-[#F5F6FF]
        rounded-[18px]
        flex
        flex-col
        items-center
        justify-center
        relative
        overflow-hidden
      "
    >
      {/* Hanging Line */}
      <div
        className="
          absolute
          top-0
          w-[2px]
          h-[20px]
          bg-[#6B63FF]
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
            w-[10px]
            h-[3px]
            bg-[#6B63FF]
            rounded-t-full
          "
        />

        {/* Lamp Body */}
        <div
          className="
            w-0
            h-0
            border-l-[38px]
            border-r-[38px]
            border-b-[48px]
            border-l-transparent
            border-r-transparent
            border-b-[#6EA1FF]
          "
        />

        {/* Bottom Shadow */}
        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            -bottom-[3px]
            w-[86px]
            h-[3px]
            rounded-full
            bg-[#5F8EFF]
            opacity-40
          "
        />
      </div>

      {/* Button */}
      <button
        className="
          mt-5
          w-[96px]
          h-[20px]
          rounded-[10px]
          bg-[#5B5CF0]
          text-white
          text-[6px]
          font-medium
          flex
          items-center
          justify-center
          gap-1
        "
      >
        <Crown size={12} />
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
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpenSidebar(false)}
        className={`
          fixed inset-0 bg-black/40 z-40 lg:hidden
          transition-all duration-300
          ${openSidebar ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      <aside
        className={`
          fixed top-0 left-0 z-50
          w-[240px] h-screen bg-white
          border-r border-[#ECECF5]
          flex flex-col
          transition-transform duration-300
          ${openSidebar ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="h-[90px] px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-[42px] h-[42px]" />

            <h2 className="text-[16px] font-semibold text-[#11142D]">Base</h2>
          </div>

          <button className="lg:hidden" onClick={() => setOpenSidebar(false)}>
            <X className="w-5 h-5 text-[#666]" />
          </button>
        </div>

        {/* Menu */}
        <div className="flex-1 px-6">
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
              flex items-center gap-4
              h-[52px]
              px-4
              rounded-2xl
              transition-all duration-200
              ${isActive ? "bg-[#F4F3FF]" : "hover:bg-[#F7F7FB]"}
            `
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={`
                  w-[20px]
                  h-[20px]
                  min-w-[20px]
                  ${isActive ? "text-[#5B5CF0]" : "text-[#8A8AA0]"}
                `}
                      />

                      <span
                        className={`
                  text-[16px]
                  font-medium
                  ${isActive ? "text-[#5B5CF0]" : "text-[#8A8AA0]"}
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

        <div className="px-4 mt-auto mt-4 mb-2 hidden lg:flex justify-center">
          <UpgradeCard />
        </div>

        {/* User */}
        <div className="border-t border-[#ECECF5] p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={user}
                className="w-[42px] h-[42px] rounded-full object-cover"
                alt="user"
              />

              <div>
                <h3 className="text-[14px] font-medium text-[#11142D]">
                  Esin Arafat
                </h3>

                <p className="text-[12px] text-[#A0A0B5]">Free Account</p>
              </div>
            </div>

            <button>
              <LogOut className="w-5 h-5 text-[#8A8AA0]" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
