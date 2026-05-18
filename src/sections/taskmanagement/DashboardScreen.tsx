/* eslint-disable react-hooks/set-state-in-effect */
import WelcomeBottomSheet from "@/components/ui/WelcomeBottomSheet";
import {
  Bell,
  MessageSquare,
  Home,
  CalendarDays,
  ClipboardList,
  ReceiptText,
  Layers3,
  Video,
  Clock3,
  Flag,
  MessageCircleMore,
  Zap,
  BadgeCheck,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const meetings = [
  {
    id: 1,
    title: "Townhall Meeting",
    time: "01:30 AM - 02:00 AM",
    users: [
      "https://i.pravatar.cc/100?img=1",
      "https://i.pravatar.cc/100?img=2",
      "https://i.pravatar.cc/100?img=3",
    ],
    extra: "+3",
  },
  {
    id: 2,
    title: "Dashboard Report",
    time: "01:30 AM - 02:00 AM",
    users: [
      "https://i.pravatar.cc/100?img=4",
      "https://i.pravatar.cc/100?img=5",
      "https://i.pravatar.cc/100?img=6",
    ],
  },
];

const DashboardScreen = () => {
  const navigate = useNavigate();
  const [openWelcomeSheet, setOpenWelcomeSheet] = useState(true);

  useEffect(() => {
    setOpenWelcomeSheet(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#181818] flex justify-center p-3 sm:p-6">
      <div className="w-full max-w-md bg-[#F7F7FB] min-h-screen relative overflow-hidden">
        {/* Header */}
        <div className="px-5 pt-6 pb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="profile"
              className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
            />

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xs sm:text-sm sm:text-base sm:text-2xl font-bold text-[#222]">
                  Tonald Drump
                </h2>

                <BadgeCheck
                  size={20}
                  className="fill-[#6D4CFF] text-[#6D4CFF]"
                />
              </div>

              <p className="text-[#6D4CFF] text-xs sm:text-sm font-medium">
                Junior Full Stack Developer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="w-12 h-12 rounded-full bg-[#EFEAFE] flex items-center justify-center">
              <MessageSquare size={22} className="text-[#6D4CFF]" />
            </button>

            <button className="w-12 h-12 rounded-full bg-[#EFEAFE] flex items-center justify-center">
              <Bell size={22} className="text-[#6D4CFF]" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E5E7EB]" />

        {/* Scroll Area */}
        <div className="pb-32 overflow-y-auto">
          {/* Summary Card */}
          <div className="px-4 mt-5">
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] p-5 min-h-[140px]">
              <div className="relative z-10">
                <h2 className="text-white text-xl sm:text-3xl font-bold leading-tight">
                  My Work Summary
                </h2>

                <p className="text-white/90 text-xs sm:text-sm sm:text-base mt-2">
                  Today task & presence activity
                </p>
              </div>

              {/* Decoration */}
              <div className="absolute right-3 top-4 opacity-90">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                  alt="camera"
                  className="w-28"
                />
              </div>
            </div>
          </div>

          {/* Today Meeting */}
          <div className="mx-4 mt-5 bg-white rounded-[24px] p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#222]">
                Today Meeting
              </h3>

              <span className="w-8 h-8 rounded-lg bg-[#EEE8FF] text-[#6D4CFF] text-xs sm:text-sm font-bold flex items-center justify-center">
                2
              </span>
            </div>

            <p className="text-[#8A94A6] mt-1 text-xs sm:text-sm sm:text-base">
              Your schedule for the day
            </p>

            <div className="mt-5 space-y-4">
              {meetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className="border border-[#ECECF3] rounded-[22px] p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-[#7C3AED] flex items-center justify-center">
                        <Video size={20} className="text-white" />
                      </div>

                      <h4 className="text-base sm:text-xs sm:text-sm sm:text-base font-semibold text-[#222]">
                        {meeting.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 text-[#8A94A6]">
                      <Clock3 size={18} />

                      <span className="text-xs sm:text-sm font-medium">
                        {meeting.time}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center">
                      {meeting.users.map((user, index) => (
                        <img
                          key={index}
                          src={user}
                          alt="user"
                          className={`w-10 h-10 rounded-full border-2 border-white object-cover ${
                            index !== 0 ? "-ml-3" : ""
                          }`}
                        />
                      ))}

                      {meeting.extra && (
                        <span className="ml-2 text-xs sm:text-sm sm:text-base font-semibold text-[#333]">
                          {meeting.extra}
                        </span>
                      )}
                    </div>

                    <button className="h-11 px-6 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#6D4CFF] text-white text-xs sm:text-sm font-semibold">
                      Join Meet
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today Task */}
          <div className="mx-4 mt-5 bg-white rounded-[24px] p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <h3 className="text-3xl font-bold text-[#222]">Today Task</h3>

              <span className="w-8 h-8 rounded-lg bg-[#EEE8FF] text-[#6D4CFF] text-xs sm:text-sm font-bold flex items-center justify-center">
                1
              </span>
            </div>

            <p className="text-[#8A94A6] mt-1 text-xs sm:text-sm sm:text-base">
              The tasks assigned to you for today
            </p>

            <div className="mt-5 border border-[#ECECF3] rounded-[24px] p-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#7C3AED] flex items-center justify-center">
                  <Zap size={18} className="text-white" />
                </div>

                <h4 className="text-base sm:text-xs sm:text-sm sm:text-base font-semibold text-[#222]">
                  Wiring Dashboard Analytics
                </h4>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-3 mt-5">
                <div className="flex items-center gap-2 px-4 h-10 rounded-full bg-[#F3F4F6]">
                  <div className="w-2 h-2 rounded-full bg-[#D1D5DB]" />

                  <span className="text-[#667085] font-medium">
                    In Progress
                  </span>
                </div>

                <div className="flex items-center gap-2 px-4 h-10 rounded-full bg-[#FF5B5B]">
                  <Flag size={14} className="text-white" />

                  <span className="text-white font-medium">High</span>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-6">
                <div className="w-full h-2 bg-[#ECECEC] rounded-full overflow-hidden">
                  <div className="w-[82%] h-full bg-[#7C3AED] rounded-full" />
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="https://i.pravatar.cc/100?img=1"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />

                  <img
                    src="https://i.pravatar.cc/100?img=2"
                    className="w-10 h-10 rounded-full border-2 border-white -ml-3"
                  />

                  <img
                    src="https://i.pravatar.cc/100?img=3"
                    className="w-10 h-10 rounded-full border-2 border-white -ml-3"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-11 px-4 rounded-full bg-[#F8F8F8] flex items-center gap-2">
                    <CalendarDays size={18} className="text-[#9CA3AF]" />

                    <span className="text-xs sm:text-sm font-medium text-[#222]">
                      27 April
                    </span>
                  </div>

                  <div className="h-11 px-4 rounded-full bg-[#F8F8F8] flex items-center gap-2">
                    <MessageCircleMore size={18} className="text-[#9CA3AF]" />

                    <span className="text-xs sm:text-sm font-medium text-[#222]">
                      2
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tab */}
        <div className="fixed bottom-0 left-0 right-0 flex justify-center">
          <div className="w-full max-w-md bg-[#111111] h-24 rounded-t-[28px] px-8 flex items-center justify-between shadow-2xl">
            <button className="flex flex-col items-center gap-1">
              <Home
                size={24}
                className="text-white fill-white text-xs sm:text-xs sm:text-sm"
              />

              <div className="w-5 h-1 rounded-full bg-white" />
            </button>

            <button>
              <CalendarDays size={24} className="text-white" />
            </button>

            <button>
              <ClipboardList size={24} className="text-white" />
            </button>

            <button>
              <ReceiptText size={24} className="text-white" />
            </button>

            <button>
              <Layers3 size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>
      <WelcomeBottomSheet
        isOpen={openWelcomeSheet}
        onClose={() => setOpenWelcomeSheet(false)}
        onSetupProfile={() => {
          console.log("Setup Profile");
          setOpenWelcomeSheet(false);
          navigate("/taskmanagement/profile");
        }}
        onExploreApp={() => {
          console.log("Explore App");
          setOpenWelcomeSheet(false);
        }}
      />
    </div>
  );
};

export default DashboardScreen;
