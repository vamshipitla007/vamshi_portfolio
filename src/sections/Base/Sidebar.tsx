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
} from "lucide-react";

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

        {/* Upgrade */}
        <div className="px-6 mb-5">
          {/* <img src={upgrade} alt="upgrade" className="w-full rounded-xl" /> */}
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
