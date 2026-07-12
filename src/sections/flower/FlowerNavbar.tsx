/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  Search,
  Bell,
  Settings,
  ChevronDown,
  X,
  User,
  Mail,
  Briefcase,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const notifications = [
  {
    id: 1,
    name: "Regina Cooper",
    time: "1 min ago",
    avatar: "https://i.pravatar.cc/150?img=32",
    online: true,
  },
  {
    id: 2,
    name: "Judith Black",
    time: "5 min ago",
    avatar: "https://i.pravatar.cc/150?img=33",
    online: true,
  },
  {
    id: 3,
    name: "Ronald Robertson",
    time: "3 hour ago",
    avatar: "https://i.pravatar.cc/150?img=34",
    online: true,
  },
  {
    id: 4,
    name: "Dustin Williamson",
    time: "15 hour ago",
    avatar: "https://i.pravatar.cc/150?img=35",
    online: true,
  },
  {
    id: 5,
    name: "Calvin Flores",
    time: "Yesterday",
    avatar: "https://i.pravatar.cc/150?img=36",
    online: true,
  },
  {
    id: 6,
    name: "Robert Edwards",
    time: "Yesterday",
    avatar: "https://i.pravatar.cc/150?img=37",
    online: true,
  },
];

const profileMenus = [
  {
    title: "My Profile",
    icon: User,
  },
  {
    title: "My Messages",
    icon: Mail,
  },
  {
    title: "My Tasks",
    icon: Briefcase,
  },
];

const bottomMenus = [
  {
    title: "Settings",
    icon: Settings,
    active: true,
  },
  {
    title: "Lock Screen",
    icon: Lock,
  },
];

const Navbar: React.FC<NavbarProps> = ({ setOpenSidebar }) => {
  const navigate = useNavigate();
  const [openProfile, setOpenProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", close);

    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <header className="h-[72px] w-full bg-white border-b border-[#EEF2F7] px-6 flex items-center justify-between">
      {/* Left */}

      <div className="flex items-center gap-4">
        {/* Mobile Menu */}

        <button onClick={() => setOpenSidebar((prev) => !prev)}>
          <Menu size={24} color="#111827" />
        </button>
      </div>

      {/* Right */}

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="hidden md:flex flex-1 justify-center">
          {!showSearch ? (
            <button
              onClick={() => setShowSearch(true)}
              className="w-11 h-11 rounded-xl hover:bg-[#F7F8FC] flex items-center justify-center transition"
            >
              <Search size={20} color="#111827" />
            </button>
          ) : (
            <div className="relative w-full max-w-[450px] animate-in fade-in duration-200">
              <Search
                size={18}
                color="#111827"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                autoFocus
                type="text"
                placeholder="Search..."
                className="w-full h-11 rounded-xl text-[#111827] bg-[#F7F8FC] border border-transparent focus:border-[#22C55E] outline-none pl-11 pr-12 text-[14px]"
              />

              <button
                onClick={() => setShowSearch(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
              >
                <X size={18} />
              </button>
            </div>
          )}
        </div>

        {/* Settings */}

        <button className="w-11 h-11 rounded-xl hover:bg-[#F7F8FC] flex items-center justify-center transition">
          <Settings size={20} color="#111827" />
        </button>

        {/* Notification */}

        <button
          onClick={() => setShowNotifications((prev) => !prev)}
          className="relative flex h-11 w-11 items-center justify-center rounded-xl transition hover:bg-[#F7F8FC]"
        >
          <Bell size={20} className="text-[#111827]" />

          <span className="absolute right-2 top-2 flex h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
        </button>

        {showNotifications && (
          <>
            {/* Overlay */}

            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowNotifications(false)}
            />

            {/* Modal */}

            <div className="absolute right-0 top-14 z-50 w-[380px] overflow-hidden rounded-[28px] border border-[#EEF2F7] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              {/* Header */}

              <div className="flex items-center justify-between border-b border-[#F2F3F5] px-4 py-3">
                <h2 className="text-[18px] font-semibold text-[#2F3542]">
                  Notifications
                </h2>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6B6B] text-sm font-semibold text-white">
                  {notifications.length}
                </div>
              </div>

              {/* List */}

              <div className="max-h-[400px] overflow-y-auto">
                {notifications.map((item) => (
                  <div
                    key={item.id}
                    className="mx-4 flex cursor-pointer items-center gap-4 rounded-2xl px-2 py-2 transition hover:bg-[#F8F9FC]"
                  >
                    {/* Avatar */}

                    <div className="relative">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />

                      {item.online && (
                        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#34C759]" />
                      )}
                    </div>

                    {/* Content */}

                    <div className="flex-1">
                      <h4 className="text-[10px] font-medium text-[#3C4353]">
                        {item.name}
                      </h4>

                      <p className="mt-1 text-[8px] font-medium text-[#9AA2AF]">
                        {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Profile */}

        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setOpenProfile((prev) => !prev)}
            className="flex h-12 items-center gap-3 rounded-2xl bg-white px-2 pr-4 transition hover:bg-[#F7F8FC]"
          >
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />

            <div className="hidden text-left md:block">
              <h4 className="text-[14px] font-medium text-[#374151]">
                ArtTemplate
              </h4>

            </div>

            <ChevronDown
              size={18}
              className={`transition ${openProfile ? "rotate-180" : ""}`}
            />
          </button>

          {openProfile && (
            <div className="absolute right-0 top-16 z-50 w-[360px] overflow-hidden rounded-[30px] border border-[#ECECEC] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              {/* Header */}

              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-4">
                  <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt=""
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-[18px] font-medium text-[#374151]">
                      ArtTemplate
                    </h3>

                    <p className="mt-1 text-[13px] text-[#9CA3AF]">Manager</p>
                  </div>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF6B6B] text-[14px] font-semibold text-white">
                  8
                </div>
              </div>

              <div className="border-t border-[#F1F3F5]" />

              {/* First Menu */}

              <div className="px-3 py-2">
                {profileMenus.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.title}
                      onClick={() => {
                        if (item.title === "My Profile") {
                          setOpenProfile(false);
                          navigate("/flower/profile");
                        }
                      }}
                      className="flex w-full items-center gap-5 rounded-2xl px-5 py-4 text-left transition hover:bg-[#F8F9FC]"
                    >
                      <Icon
                        size={24}
                        strokeWidth={1.8}
                        className="text-[#8D95A5]"
                      />

                      <span className="text-[15px] font-medium text-[#4B5563]">
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-[#F1F3F5]" />

              {/* Second Menu */}

              <div className="px-6 py-5">
                {bottomMenus.map((item) => {

                  return (
                    <button
                      key={item.title}
                      className={`flex w-full items-center gap-5 rounded-2xl px-5 py-4 text-left transition ${
                        item.active ? "bg-[#F7F7F7]" : "hover:bg-[#F8F9FC]"
                      }`}
                    >

                      <span
                        className={`text-[15px] font-medium ${
                          item.active ? "text-[#444]" : "text-[#4B5563]"
                        }`}
                      >
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-[#F1F3F5]" />

              {/* Logout */}

              <div className="p-6">
                <button className="flex w-full items-center gap-5 rounded-2xl px-5 py-4 text-left transition hover:bg-red-50">
                  <LogOut
                    size={24}
                    strokeWidth={1.8}
                    className="text-[#8D95A5]"
                  />

                  <span className="text-[15px] font-medium text-[#4B5563]">
                    Logout
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
