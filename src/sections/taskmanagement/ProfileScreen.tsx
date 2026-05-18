import {
  ChevronLeft,
  ChevronRight,
  User,
  Folder,
  WalletCards,
  Crown,
  Settings,
  BadgeHelp,
  FileCode2,
  LogOut,
  BadgeCheck,
  Sparkles,
  Star,
  Trophy,
  Gem,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const accountMenus = [
  {
    id: 1,
    title: "My Work Profile",
    icon: User,
    route: "/taskmanagement/workprofile",
  },
  {
    id: 2,
    title: "Office Assets",
    icon: Folder,
    route: "/taskmanagement/office-assets",
  },
  {
    id: 3,
    title: "Payroll & Tax",
    icon: WalletCards,
    route: "/taskmanagement/payroll-tax",
  },
  {
    id: 4,
    title: "Roles",
    icon: Crown,
    route: "/taskmanagement/roles",
  },
];

const settingMenus = [
  {
    id: 1,
    title: "Change Password",
    icon: Settings,
  },
  {
    id: 2,
    title: "Versioning",
    icon: FileCode2,
  },
  {
    id: 3,
    title: "FAQ and Help",
    icon: BadgeHelp,
  },
  {
    id: 4,
    title: "Logout",
    icon: LogOut,
    danger: true,
  },
];

const achievements = [
  {
    id: 1,
    title: "Probation\nSlayer",
    icon: Sparkles,
    bg: "from-[#8EF58A] to-[#5CD85B]",
  },
  {
    id: 2,
    title: "Junior Of\nThe Month",
    icon: Star,
    bg: "from-[#B5B2FF] to-[#8A87FF]",
  },
  {
    id: 3,
    title: "Employee Of\nThe Year",
    icon: Trophy,
    bg: "from-[#FFC98D] to-[#F4A94B]",
  },
  {
    id: 4,
    title: "Top\nPerformer",
    icon: Gem,
    bg: "from-[#FF9FC0] to-[#F25B92]",
  },
];

const ProfileScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#181818] flex justify-center">
      <div className="w-full max-w-md bg-[#F8F8FB] min-h-screen overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] h-[180px] px-5 pt-5">
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
              <ChevronLeft size={18} className="text-[#7C3AED]" />
            </button>

            <h1 className="text-white text-lg font-semibold">My Profile</h1>

            <div className="w-9" />
          </div>
        </div>

        {/* Profile Card */}
        <div className="relative px-4">
          <div className="-mt-16 flex flex-col items-center">
            {/* Avatar */}
            <div className="w-28 h-28 rounded-[20px] bg-[#F3F0FF] shadow-md flex items-center justify-center border border-[#ECE9FF]">
              <div className="w-16 h-16 rounded-full bg-[#E8E2FF] flex items-center justify-center">
                <User size={28} className="text-[#8B5CF6]" />
              </div>
            </div>

            {/* Name */}
            <div className="mt-4 flex items-center gap-1.5">
              <h2 className="text-[1.35rem] font-bold text-[#1F2937]">
                Tonald Drump
              </h2>

              <BadgeCheck size={18} className="fill-[#6D4CFF] text-[#6D4CFF]" />
            </div>

            <p className="text-[#6D4CFF] text-sm mt-1">Tonald@work.com</p>
          </div>

          {/* Achievement */}
          <div className="mt-8">
            <h3 className="text-xs font-bold text-[#374151] uppercase tracking-wide mb-4">
              Achievement
            </h3>

            <div className="grid grid-cols-4 gap-3">
              {achievements.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Badge */}
                    <div
                      className={`relative w-[58px] h-[58px] rounded-2xl bg-gradient-to-b ${item.bg} shadow-md flex items-center justify-center`}
                      style={{
                        clipPath:
                          "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                      }}
                    >
                      <div className="absolute inset-1 rounded-xl bg-white/20" />

                      <Icon
                        size={24}
                        className="relative z-10 text-white fill-white"
                      />
                    </div>

                    {/* Title */}
                    <p className="mt-2 text-[11px] leading-[14px] font-medium text-[#374151] whitespace-pre-line">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ACCOUNT */}
          <div className="mt-10">
            <h3 className="text-xs font-bold text-[#374151] uppercase tracking-wide mb-3">
              Account
            </h3>

            <div className="bg-[#F1F2F6] rounded-[20px] p-2">
              {accountMenus.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      navigate(item.route);
                    }}
                    className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-white transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#EEE8FF] flex items-center justify-center">
                        <Icon size={16} className="text-[#7C3AED]" />
                      </div>

                      <span className="text-sm font-medium text-[#4B5563]">
                        {item.title}
                      </span>
                    </div>

                    <ChevronRight size={18} className="text-[#B0B7C3]" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* SETTINGS */}
          <div className="mt-7">
            <h3 className="text-xs font-bold text-[#374151] uppercase tracking-wide mb-3">
              Settings
            </h3>

            <div className="bg-[#F1F2F6] rounded-[20px] p-2">
              {settingMenus.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-white transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          item.danger ? "bg-[#FFE8E8]" : "bg-[#EEE8FF]"
                        }`}
                      >
                        <Icon
                          size={16}
                          className={
                            item.danger ? "text-[#EF4444]" : "text-[#7C3AED]"
                          }
                        />
                      </div>

                      <span
                        className={`text-sm font-medium ${
                          item.danger ? "text-[#EF4444]" : "text-[#4B5563]"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    <ChevronRight size={18} className="text-[#B0B7C3]" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
