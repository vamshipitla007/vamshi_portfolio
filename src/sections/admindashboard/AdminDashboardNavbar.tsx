import { useState } from "react";

import {
  ChevronDown,
  KeyRound,
  LogOut,
  Menu,
  RefreshCcw,
  Search,
  Settings,
  Check,
  CalendarDays,
  User,
  AlertCircle,
} from "lucide-react";

type AdminDashboardNavbarProps = {
  handleMenu: () => void;
};

const notifications = [
  {
    id: 1,
    title: "Settings",
    description: "Update Dashboard",
    icon: Settings,
    bg: "bg-[#67B4FF]",
  },

  {
    id: 2,
    title: "Event Update",
    description: "An event date update again",
    icon: CalendarDays,
    bg: "bg-[#F28AD6]",
  },

  {
    id: 3,
    title: "Profile",
    description: "Update your profile",
    icon: User,
    bg: "bg-[#B89AF8]",
  },

  {
    id: 4,
    title: "Application Error",
    description: "Check Your running application",
    icon: AlertCircle,
    bg: "bg-[#F89A9A]",
  },
];

const languages = [
  {
    id: 1,
    name: "English",
    flag: "https://flagcdn.com/w80/gb.png",
  },

  {
    id: 2,
    name: "French",
    flag: "https://flagcdn.com/w80/fr.png",
  },

  {
    id: 3,
    name: "Spanish",
    flag: "https://flagcdn.com/w80/es.png",
  },
];

const AdminDashboardNavbar = ({ handleMenu }: AdminDashboardNavbarProps) => {
  const [manageActionOpen, setManageActionOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const [selectedLanguage] = useState(languages[0]);
  const menuItems = [
    {
      id: 1,
      title: "Manage Account",
      icon: Settings,
      iconColor: "#60A5FA",
    },

    {
      id: 2,
      title: "Change Password",
      icon: KeyRound,
      iconColor: "#F19AD8",
    },

    {
      id: 3,
      title: "Activity Log",
      icon: RefreshCcw,
      iconColor: "#B794F6",
    },

    {
      id: 4,
      title: "Log out",
      icon: LogOut,
      iconColor: "#F4A6A6",
    },
  ];

  return (
    <header className="relative flex h-[64px] w-full items-center justify-between border-b border-[#F1F1F1] bg-white px-3 md:px-5">
      {/* LEFT */}

      <div className="flex items-center gap-4">
        {/* MENU */}

        <button
          onClick={handleMenu}
          className="flex h-[36px] w-[36px] items-center justify-center rounded-xl transition hover:bg-[#F5F6FA]"
        >
          <Menu size={20} className="text-[#646464]" />
        </button>

        {/* SEARCH */}

        <div className="hidden h-[38px] w-[320px] items-center rounded-full border border-[#ECECEC] bg-[#F5F6FA] px-4 md:flex">
          <Search size={16} className="text-[#9CA3AF]" />

          <input
            type="text"
            placeholder="Search"
            className="w-full border-none bg-transparent px-3 text-[13px] text-[#4B5563] outline-none placeholder:text-[#9CA3AF]"
          />
        </div>
      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-4">
        {/* NOTIFICATION */}

        <div className="relative">
          {/* BUTTON */}

          <button
            onClick={() => setNotificationOpen(!notificationOpen)}
            className="relative flex h-[34px] w-[34px] items-center justify-center rounded-xl transition hover:bg-[#F5F6FA]"
          >
            {/* ICON */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px] text-[#4F7CF3]"
            >
              <path d="M12 2a6 6 0 0 0-6 6v3.586L4.293 13.293A1 1 0 0 0 5 15h14a1 1 0 0 0 .707-1.707L18 11.586V8a6 6 0 0 0-6-6Zm0 20a3 3 0 0 0 2.995-2.824L15 19h-6a3 3 0 0 0 3 3Z" />
            </svg>

            {/* SMALL DOT */}

            <div className="absolute bottom-[4px] left-[9px] h-[6px] w-[6px] rounded-full bg-[#FFB5B5]" />

            {/* COUNT */}

            <div className="absolute right-[-1px] top-[-1px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#FF4D6D] text-[10px] font-semibold text-white">
              6
            </div>
          </button>

          {/* OVERLAY */}

          {notificationOpen && (
            <div
              onClick={() => setNotificationOpen(false)}
              className="fixed inset-0 z-40"
            />
          )}

          {/* DROPDOWN */}

          <div
            className={`absolute right-0 top-[50px] z-50 w-[270px] overflow-hidden rounded-[20px] border border-[#ECECEC] bg-white shadow-[0px_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 ${
              notificationOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0"
            }`}
          >
            {/* HEADER */}

            <div className="border-b border-[#ECECEC] px-5 py-4">
              <h2 className="text-[15px] font-semibold text-[#3D3D3D]">
                Notification
              </h2>
            </div>

            {/* LIST */}

            <div>
              {notifications.map((item, index) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    className={`flex w-full items-start gap-3 px-5 py-4 text-left transition hover:bg-[#FAFAFA] ${
                      index !== notifications.length - 1
                        ? "border-b border-[#F3F3F3]"
                        : ""
                    }`}
                  >
                    {/* ICON */}

                    <div
                      className={`flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full ${item.bg}`}
                    >
                      <Icon size={16} className="text-white" />
                    </div>

                    {/* CONTENT */}

                    <div className="flex-1">
                      <h3 className="text-[13px] font-semibold leading-none text-[#202224]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[11px] leading-[16px] text-[#9A9A9A]">
                        {item.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* FOOTER */}

            <button className="flex h-[48px] w-full items-center justify-center border-t border-[#ECECEC] text-[12px] font-medium text-[#9B9B9B] transition hover:bg-[#FAFAFA]">
              See all notification
            </button>
          </div>
        </div>
        {/* LANGUAGE */}

        <div className="relative">
          {/* BUTTON */}

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 rounded-xl px-2 py-1 transition hover:bg-[#F8F8F8]"
          >
            {/* FLAG */}

            <img
              src={selectedLanguage.flag}
              alt="flag"
              className="h-[20px] w-[30px] rounded-sm object-cover"
            />

            {/* TEXT */}

            <div className="flex items-center gap-1.5">
              <span className="text-[13px] font-medium text-[#4B4B4B]">
                {selectedLanguage.name}
              </span>

              <ChevronDown
                size={15}
                className={`text-[#7B7B7B] transition duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>

          {/* OVERLAY */}

          {open && (
            <div
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40"
            />
          )}

          {/* DROPDOWN */}

          <div
            className={`absolute right-0 top-[52px] z-50 w-[240px] overflow-hidden rounded-[20px] border border-[#ECECEC] bg-white shadow-[0px_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 ${
              open
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0"
            }`}
          >
            {/* HEADER */}

            <div className="border-b border-[#ECECEC] px-5 py-4">
              <h2 className="text-[15px] font-semibold text-[#3D3D3D]">
                Select Language
              </h2>
            </div>

            {/* LIST */}

            <div className="py-1">
              {languages.map((language, index) => {
                const isSelected = selectedLanguage.id === language.id;

                return (
                  <button
                    key={language.id}
                    className={`flex h-[58px] w-full items-center justify-between px-5 transition hover:bg-[#FAFAFA] ${
                      index !== languages.length - 1
                        ? "border-b border-[#F3F3F3]"
                        : ""
                    }`}
                  >
                    {/* LEFT */}

                    <div className="flex items-center gap-3">
                      <img
                        src={language.flag}
                        alt={language.name}
                        className="h-[22px] w-[34px] rounded-sm object-cover"
                      />

                      <span className="text-[13px] font-medium text-[#3D3D3D]">
                        {language.name}
                      </span>
                    </div>

                    {/* CHECK */}

                    {isSelected && (
                      <Check size={18} className="text-[#5B5B5B]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* PROFILE */}

        <div className="relative mr-1 flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="profile"
            className="h-[42px] w-[42px] rounded-full object-cover"
          />

          <div className="hidden md:block">
            <h3 className="text-[14px] font-semibold leading-none text-[#232323]">
              Moni Roy
            </h3>

            <p className="mt-1 text-[11px] text-[#8A8A8A]">Admin</p>
          </div>

          {/* TOGGLE */}

          <button
            onClick={() => setManageActionOpen(!manageActionOpen)}
            className={`hidden h-[34px] w-[34px] items-center justify-center rounded-full border transition md:flex ${
              manageActionOpen
                ? "border-[#D7D7D7] bg-[#F8F8F8]"
                : "border-[#E5E7EB]"
            }`}
          >
            <ChevronDown
              size={16}
              className={`text-[#7B7B7B] transition duration-300 ${
                manageActionOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* OVERLAY */}

          {manageActionOpen && (
            <div
              onClick={() => setManageActionOpen(false)}
              className="fixed inset-0 z-40"
            />
          )}

          {/* DROPDOWN */}

          <div
            className={`absolute right-0 top-[62px] z-50 w-[240px] overflow-hidden rounded-[24px] border border-[#ECECEC] bg-white shadow-[0px_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 ${
              manageActionOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0"
            }`}
          >
            {menuItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  className={`flex h-[60px] w-full items-center gap-4 px-7 transition hover:bg-[#FAFAFA] ${
                    index !== menuItems.length - 1
                      ? "border-b border-[#ECECEC]"
                      : ""
                  }`}
                >
                  {/* ICON */}

                  <div
                    className="flex h-[34px] w-[18px] items-center justify-center rounded-full"
                    style={{
                      backgroundColor: `${item.iconColor}15`,
                    }}
                  >
                    <Icon size={18} color={item.iconColor} />
                  </div>

                  {/* TEXT */}

                  <span className="text-[14px] font-medium text-[#3D3D3D]">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminDashboardNavbar;
