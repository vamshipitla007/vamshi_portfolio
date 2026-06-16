import { Plus, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const dayEvents = [
  {
    time: "09.00 AM",
    title: "Invited by friends",
    color: "bg-[#FA8458]",
    position: "left",
  },
  {
    time: "12.00 PM",
    title: "Prayer Time",
    color: "bg-[#29B7D8]",
    position: "center",
  },
  {
    time: "06.00 PM",
    title: "Prayer Time",
    color: "bg-[#39A85B]",
    position: "left",
  },
  {
    time: "09.00 PM",
    title: "Dinner Time",
    color: "bg-[#5B5CF0]",
    position: "right",
  },
];

const yearMonths = [
  "January 2021",
  "February 2021",
  "March 2021",
  "April 2021",
  "May 2021",
  "June 2021",
  "July 2021",
  "August 2021",
  "September 2021",
  "October 2021",
  "November 2021",
  "December 2021",
];

export default function BaseCalendar() {
  const [view, setView] = useState<"Day" | "Week" | "Month" | "Year">("Month");

  const people = [
    {
      name: "Eddie Lobanovskiy",
      email: "loba@gmail.com",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Alexey Stave",
      email: "alex@gmail.com",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      name: "Anton Tkachev",
      email: "anton@gmail.com",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ];

  const events = {
    2: [
      {
        title: "Free day",
        color: "bg-cyan-500",
      },
      {
        title: "Party Time",
        color: "bg-fuchsia-500",
      },
    ],
    16: [
      {
        title: "Victory Day",
        color: "bg-orange-400",
      },
    ],
    21: [
      {
        title: "Invited by friends",
        color: "bg-fuchsia-500",
      },
    ],
    25: [
      {
        title: "Christmas Day",
        color: "bg-cyan-500",
      },
    ],
  };

  const days = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2,
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
        <h1 className="text-[20px] md:text-[32px] font-medium text-[#11142D]">
          Calendar
        </h1>

        <div className="flex gap-3 flex-wrap">
          {["Day", "Week", "Month", "Year"].map((item) => (
            <button
              key={item}
              onClick={() => setView(item as "Day" | "Week" | "Month" | "Year")}
              className={`
                        h-[42px]
                        px-6
                        rounded-xl
                        text-[15px]
                        font-medium
                        transition-all
                        ${view === item ? "bg-[#5B5CF0] text-white" : "bg-white text-[#555577]"}
                    `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[270px_1fr] gap-6">
        {/* LEFT PANEL */}
        <div className="bg-white rounded-2xl p-6">
          <button
            className="
              w-full h-[48px]
              bg-[#5B5CF0]
              rounded-xl
              text-white
              text-[15px]
              font-medium
              flex items-center justify-center gap-2
            "
          >
            <Plus size={18} />
            Create Schedule
          </button>

          {/* Mini Calendar */}
          <div className="mt-6 border border-[#ECECF5] rounded-xl p-4">
            <div className="flex justify-between text-[14px] text-[#555577]">
              <span>December 2, 2021</span>

              <div className="flex gap-2">
                <ChevronLeft size={16} />
                <ChevronRight size={16} />
              </div>
            </div>

            <div className="grid grid-cols-7 mt-4 text-center text-[13px] text-[#666688] gap-y-3">
              {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                <span key={day}>{day}</span>
              ))}

              {Array.from({ length: 35 }).map((_, i) => (
                <div
                  key={i}
                  className={`
                      w-7 h-7 mx-auto rounded-full
                      flex items-center justify-center
                      text-[13px]
                      ${i === 10 ? "bg-[#5B5CF0] text-white" : "text-[#555577]"}
                    `}
                >
                  {i + 1 <= 31 ? i + 1 : ""}
                </div>
              ))}
            </div>
          </div>

          {/* People */}
          <div className="mt-6">
            <h2 className="text-[18px] font-medium text-[#11142D]">People</h2>

            <div className="relative mt-4">
              <Search
                className="absolute left-3 top-3 text-[#8A8AA0]"
                size={16}
              />

              <input
                placeholder="Search for People"
                className="w-full h-[42px] rounded-xl bg-[#F5F5F7] pl-10 text-[14px] outline-none"
              />
            </div>

            <div className="mt-4 space-y-4">
              {people.map((person) => (
                <div key={person.name} className="flex items-center gap-3">
                  <img
                    src={person.image}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-[14px] font-medium text-[#11142D]">
                      {person.name}
                    </p>

                    <p className="text-[12px] text-[#8A8AA0]">{person.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full mt-8 h-[46px] border rounded-xl text-[#5B5CF0] text-[15px]">
            My Schedule
          </button>
        </div>

        {/* RIGHT CALENDAR */}
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="h-[54px] border-b px-6 flex justify-between items-center">
            <h2 className="text-[20px] font-medium text-[#11142D]">
              December 2, 2021
            </h2>

            <div className="flex gap-3 text-[#8A8AA0]">
              <ChevronLeft size={18} />
              <ChevronRight size={18} />
            </div>
          </div>

          {/* MONTH VIEW */}
          {view === "Month" && (
            <>
              {/* Week Header */}
              <div className="grid grid-cols-7 border-b">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="
          h-[70px]
          flex items-center justify-center
          text-[18px]
          text-[#11142D]
        "
                    >
                      {day}
                    </div>
                  ),
                )}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7">
                {days.map((day, index) => {
                  const dayEvents = events[day as keyof typeof events] || [];

                  return (
                    <div
                      key={index}
                      className="
            h-[130px]
            border-r border-b
            border-[#ECECF5]
            p-3
          "
                    >
                      {/* Date */}
                      <div className="text-center text-[22px] text-[#444466]">
                        {day}
                      </div>

                      {/* Events */}
                      <div className="mt-2 space-y-1">
                        {dayEvents.map((event) => (
                          <div
                            key={event.title}
                            className={`
                  ${event.color}
                  text-white
                  text-[11px]
                  rounded-sm
                  text-center
                  py-1
                `}
                          >
                            {event.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* DAY VIEW */}
          {view === "Day" && (
            <div className="p-6">
              {[
                "09.00 AM",
                "10.00 AM",
                "11.00 AM",
                "12.00 PM",
                "01.00 PM",
                "02.00 PM",
                "03.00 PM",
                "04.00 PM",
                "05.00 PM",
                "06.00 PM",
                "07.00 PM",
                "08.00 PM",
                "09.00 PM",
                "10.00 PM",
              ].map((time) => {
                const event = dayEvents.find((e) => e.time === time);

                return (
                  <div
                    key={time}
                    className="
              h-[48px]
              border-b
              border-[#ECECF5]
              flex items-center
              gap-6
            "
                  >
                    <span
                      className="
              w-[80px]
              text-[12px]
              text-[#8A8AA0]
            "
                    >
                      {time}
                    </span>

                    {event && (
                      <div
                        className={`
                  px-8
                  h-[26px]
                  rounded-md
                  text-white
                  text-[12px]
                  flex items-center
                  ${event.color}
                `}
                      >
                        {event.title}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* WEEK VIEW */}
          {view === "Week" && (
            <div
              className="
      h-[600px]
      flex items-center
      justify-center
      text-[#8A8AA0]
      text-[18px]
    "
            >
              Week Calendar UI
            </div>
          )}

          {/* YEAR VIEW */}
          {view === "Year" && (
            <div
              className="
      p-6
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      gap-6
    "
            >
              {yearMonths.map((month) => (
                <div key={month}>
                  <h3
                    className="
            text-[14px]
            font-medium
            mb-3
            text-[#11142D]
          "
                  >
                    {month}
                  </h3>

                  <div
                    className="
            grid grid-cols-7
            gap-2
            text-center
            text-[11px]
            text-[#555577]
          "
                  >
                    {Array.from({
                      length: 35,
                    }).map((_, i) => (
                      <div
                        key={i}
                        className={`
                  h-6 w-6
                  flex items-center
                  justify-center
                  rounded-full
                  ${
                    month === "December 2021" && i === 30
                      ? "bg-[#5B5CF0] text-white"
                      : ""
                  }
                `}
                      >
                        {(i + 1) % 31}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
