import { useState } from "react";
import {
  Plus,
  Search,
  CalendarDays,
  Clock3,
  MapPin,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Schedule = {
  id: number;
  date: string;
  time: string;
  location: string;
  checked: boolean;
};

type Person = {
  id: number;
  name: string;
  email: string;
  image: string;
};

export default function ScheduleList() {
  const [schedules, setSchedules] = useState<Schedule[]>([
    {
      id: 1,
      date: "12 Dec, 2021",
      time: "10.15AM",
      location: "Office Meeting",
      checked: false,
    },
    {
      id: 2,
      date: "10 Dec, 2021",
      time: "11.20AM",
      location: "Home",
      checked: false,
    },
    {
      id: 3,
      date: "09 Dec, 2021",
      time: "11.45AM",
      location: "Friends Zone",
      checked: false,
    },
    {
      id: 4,
      date: "08 Dec, 2021",
      time: "12.15PM",
      location: "Office Meeting",
      checked: false,
    },
    {
      id: 5,
      date: "07 Dec, 2021",
      time: "01.20PM",
      location: "Home",
      checked: false,
    },
    {
      id: 6,
      date: "05 Dec, 2021",
      time: "10.15AM",
      location: "Meeting Outside",
      checked: false,
    },
  ]);

  const people: Person[] = [
    {
      id: 1,
      name: "Eddie Lobanovskiy",
      email: "loba@gmail.com",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Alexey Stave",
      email: "alex@gmail.com",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      id: 3,
      name: "Anton Tkachev",
      email: "anton@gmail.com",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ];

  const toggleCheck = (id: number) => {
    setSchedules((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              checked: !item.checked,
            }
          : item,
      ),
    );
  };

  return (
    <div
      className="
    min-h-screen
    bg-[#F5F5F7]
    dark:bg-slate-950
    transition-colors
    duration-300
  "
    >
      {/* Header */}
      <div
        className="
    flex
    flex-col
    lg:flex-row
    lg:items-center
    lg:justify-between

    gap-4
    mb-8
  "
      >
        <h1
          className="
      text-[24px]
      md:text-[32px]
      font-semibold

      text-[#11142D]
      dark:text-white
    "
        >
          Schedule List
        </h1>

        <button
          className="
      h-[48px]
      px-6

      bg-[#5B5CF0]
      hover:bg-[#4F50E8]

      dark:bg-[#7C7AFF]
      dark:hover:bg-[#6B63FF]

      rounded-xl

      text-white
      text-[15px]
      font-medium

      flex
      items-center
      justify-center
      gap-2

      transition-all
    "
        >
          <Plus size={18} />
          Add New
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-6">
        {/* Left Panel */}
        <div
          className="
      bg-white
      dark:bg-gray-900

      border
      border-[#ECECF5]
      dark:border-gray-800

      rounded-2xl
      p-6

      transition-all
    "
        >
          <button
            className="
        w-full
        h-[48px]

        rounded-xl

        bg-[#5B5CF0]
        hover:bg-[#4F50E8]

        dark:bg-[#7C7AFF]
        dark:hover:bg-[#6B63FF]

        text-white
        text-[15px]

        flex
        items-center
        justify-center
        gap-2

        transition-all
      "
          >
            <Plus size={18} />
            Create Schedule
          </button>

          {/* Calendar */}
          <div
            className="
        mt-5
        p-4

        border
        border-[#ECECF5]
        dark:border-gray-800

        rounded-xl
      "
          >
            <div
              className="
          flex
          justify-between

          text-[14px]

          text-[#8A8AA0]
          dark:text-gray-400
        "
            >
              <span>December 2, 2021</span>

              <div className="flex gap-2">
                <ChevronLeft size={16} />
                <ChevronRight size={16} />
              </div>
            </div>

            <div
              className="
          grid
          grid-cols-7

          text-center

          mt-4
          gap-y-3

          text-[13px]

          text-[#6B6B88]
          dark:text-gray-400
        "
            >
              {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                <div key={day}>{day}</div>
              ))}

              {Array.from({ length: 35 }).map((_, i) => (
                <div
                  key={i}
                  className={`
              w-8
              h-8
              mx-auto

              rounded-full

              flex
              items-center
              justify-center

              text-[13px]

              ${
                i === 10
                  ? "bg-[#5B5CF0] text-white"
                  : "text-[#555577] dark:text-gray-300"
              }
            `}
                >
                  {i + 1 <= 31 ? i + 1 : ""}
                </div>
              ))}
            </div>
          </div>

          {/* People */}
          <div className="mt-6">
            <h3
              className="
          text-[16px]
          font-semibold

          text-[#11142D]
          dark:text-white
        "
            >
              People
            </h3>

            <div className="relative mt-4">
              <Search
                className="
            w-4
            h-4

            absolute
            left-3
            top-3

            text-[#8A8AA0]
            dark:text-gray-400
          "
              />

              <input
                placeholder="Search for People"
                className="
            w-full
            h-[42px]

            bg-[#F5F5F7]
            dark:bg-gray-800

            border
            border-transparent
            dark:border-gray-700

            rounded-lg

            pl-10

            text-[14px]

            text-[#11142D]
            dark:text-white

            outline-none
          "
              />
            </div>

            <div className="mt-4 space-y-4">
              {people.map((person) => (
                <div
                  key={person.id}
                  className="
              flex
              items-center
              gap-3

              p-2

              rounded-xl

              hover:bg-[#F8F8FB]
              dark:hover:bg-gray-800

              transition-all
            "
                >
                  <img
                    src={person.image}
                    className="
                w-10
                h-10

                rounded-full
                object-cover
              "
                  />

                  <div>
                    <p
                      className="
                  text-[14px]

                  text-[#11142D]
                  dark:text-white
                "
                    >
                      {person.name}
                    </p>

                    <p
                      className="
                  text-[12px]

                  text-[#8A8AA0]
                  dark:text-gray-400
                "
                    >
                      {person.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="
        mt-8
        w-full
        h-[44px]

        border
        border-[#E5E5EF]
        dark:border-gray-700

        rounded-xl

        text-[#5B5CF0]
        dark:text-[#7C7AFF]

        text-[15px]

        hover:bg-[#F8F8FB]
        dark:hover:bg-gray-800

        transition-all
      "
          >
            My Schedule
          </button>
        </div>

        {/* Right Panel */}
        <div>
          {/* Desktop Header */}
          <div
            className="
        hidden
        md:grid

        grid-cols-[40px_170px_160px_1fr_120px]

        text-[14px]

        text-[#8A8AA0]
        dark:text-gray-400

        px-6
        mb-3
      "
          >
            <div>
              <input type="checkbox" className="accent-[#5B5CF0]" />
            </div>

            <p>Date</p>
            <p>Time</p>
            <p>Location</p>
          </div>

          <div className="space-y-3">
            {schedules.map((item) => (
              <div
                key={item.id}
                className="
            bg-white
            dark:bg-gray-900

            border
            border-[#ECECF5]
            dark:border-gray-800

            rounded-2xl
            p-5

            md:grid
            md:grid-cols-[40px_170px_160px_1fr_120px]

            items-center

            transition-all

            hover:shadow-lg
            dark:hover:border-gray-700
          "
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleCheck(item.id)}
                  className="
              w-5
              h-5

              accent-[#5B5CF0]
            "
                />

                <div
                  className="
              flex
              items-center
              gap-2

              mt-3
              md:mt-0
            "
                >
                  <CalendarDays size={16} color="#5B5CF0" />

                  <span
                    className="
                text-[14px]

                text-[#11142D]
                dark:text-white
              "
                  >
                    {item.date}
                  </span>
                </div>

                <div
                  className="
              flex
              items-center
              gap-2

              mt-3
              md:mt-0
            "
                >
                  <Clock3 size={16} color="#70708A" />

                  <span
                    className="
                text-[14px]

                text-[#11142D]
                dark:text-white
              "
                  >
                    {item.time}
                  </span>
                </div>

                <div
                  className="
              inline-flex
              items-center
              gap-2

              bg-[#F3F2FF]
              dark:bg-indigo-950

              text-[#5B5CF0]
              dark:text-indigo-300

              rounded-full

              px-4
              py-2

              text-[14px]

              mt-3
              md:mt-0
            "
                >
                  <MapPin size={16} />

                  <span>{item.location}</span>
                </div>

                <div
                  className="
              flex
              gap-3

              justify-end

              mt-3
              md:mt-0
            "
                >
                  <button
                    className="
                w-10
                h-10

                rounded-full

                bg-[#FFF7E5]
                dark:bg-yellow-950

                flex
                items-center
                justify-center
              "
                  >
                    <Pencil size={16} color="#F6C445" />
                  </button>

                  <button
                    className="
                w-10
                h-10

                rounded-full

                bg-[#FDEDEE]
                dark:bg-red-950

                flex
                items-center
                justify-center
              "
                  >
                    <Trash2 size={16} color="#E53935" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
