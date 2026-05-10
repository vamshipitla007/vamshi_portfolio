/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from "react";

import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { sidebarEvents } from "@/data/events";
import EventCard from "@/components/ui/EventCard";
import EventPopup from "@/components/ui/EventPopup";

const tabs = ["Day", "Week", "Month"];

export default function CalendarDashboard() {
  const [currentDate, setCurrentDate] = useState(new Date(2019, 9, 1));

  const [view, setView] = useState("Month");

  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  const monthStart = startOfMonth(currentDate);

  const monthEnd = endOfMonth(monthStart);

  const calendarStart = startOfWeek(monthStart, {
    weekStartsOn: 1,
  });

  const calendarEnd = endOfWeek(monthEnd, {
    weekStartsOn: 1,
  });

  const calendarDays = useMemo(() => {
    const days = [];

    let day = calendarStart;

    while (day <= calendarEnd) {
      days.push(day);
      day = addDays(day, 1);
    }

    return days;
  }, [calendarStart, calendarEnd]);

  return (
    <div className="min-h-screen bg-[#F5F6FA]" onClick={() => setSelectedEvent(null)}>
      <h1 className="mb-5 text-[24px] font-bold text-[#202224]">Calender</h1>

      <div className="grid gap-5 xl:grid-cols-[300px_1fr]">
        {/* SIDEBAR */}

        <div className="overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white">
          <div className="p-5">
            <button className="flex h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#4F7CF7] text-[13px] font-medium text-white">
              <Plus size={16} />
              Add New Event
            </button>
          </div>

          <div className="border-b border-[#F0F0F0] px-5 pb-5">
            <h2 className="text-[16px] font-bold text-[#202224]">
              You are going to
            </h2>
          </div>

          <div>
            {sidebarEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="cursor-pointer transition hover:bg-[#FAFAFA]"
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>

        {/* CALENDAR */}

        <div className="relative overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white p-5">
          {/* HEADER */}

          <div className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <p className="text-[13px] text-[#71717A]">Today</p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentDate(addMonths(currentDate, -1))}
              >
                <ChevronLeft size={20} />
              </button>

              <h2 className="text-[20px] font-bold text-[#202224]">
                {format(currentDate, "MMMM yyyy")}
              </h2>

              <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex overflow-hidden rounded-xl border border-[#E5E7EB]">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setView(tab)}
                  className={`flex h-[40px] min-w-[70px] items-center justify-center border-r border-[#E5E7EB] px-4 text-[12px] font-medium last:border-r-0 ${
                    view === tab
                      ? "bg-[#4F7CF7] text-white"
                      : "bg-white text-[#202224]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* WEEK */}

          <div className="overflow-hidden rounded-[18px] border border-[#E5E7EB]">
            <div className="grid grid-cols-7 bg-[#F5F7FB]">
              {["MON", "TUE", "WED", "THE", "FRI", "SAT", "SUN"].map((day) => (
                <div
                  key={day}
                  className="flex h-[46px] items-center justify-center border-r border-[#E5E7EB] text-[13px] font-semibold text-[#202224] last:border-r-0"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* DAYS */}

            <div className="grid grid-cols-7">
              {calendarDays.map((day, index) => {
                const event = sidebarEvents.find((item) =>
                  isSameDay(item.startDate, day),
                );

                return (
                  <div
                    key={index}
                    className={`relative h-[120px] border-r border-t border-[#E5E7EB] p-3 ${
                      !isSameMonth(day, currentDate)
                        ? "bg-[repeating-linear-gradient(-30deg,#ffffff,#ffffff_10px,#EDF2FF_10px,#EDF2FF_11px)]"
                        : "bg-white"
                    }`}
                  >
                    <span
                      className={`absolute right-3 top-3 text-[13px] font-medium ${
                        isSameMonth(day, currentDate)
                          ? "text-[#202224]"
                          : "text-[#B0B7C3]"
                      }`}
                    >
                      {format(day, "d")}
                    </span>

                    {event && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedEvent(event);
                        }}
                        className="absolute bottom-0 left-0 right-0 flex h-[34px] items-center border-l-[4px] px-3 text-[10px] font-medium"
                        style={{
                          borderColor: event.color,
                          backgroundColor: `${event.color}15`,
                          color: event.color,
                        }}
                      >
                        {event.title}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* POPUP */}
          {selectedEvent && (
            <EventPopup
              setSelectedEvent={setSelectedEvent}
              selectedEvent={selectedEvent}
            />
          )}
        </div>
      </div>
    </div>
  );
}
