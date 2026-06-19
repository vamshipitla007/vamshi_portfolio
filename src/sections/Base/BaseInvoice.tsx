import { useMemo, useState } from "react";
import {
  Search,
  Plus,
  Mail,
  Calendar,
  Star,
  MoreHorizontal,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/utils/BaseThemeContext";

type Status = "Complete" | "Pending" | "Cancel";

type Invoice = {
  id: string;
  name: string;
  email: string;
  date: string;
  status: Status;
  image: string;
  selected: boolean;
  favorite: boolean;
};

export default function BaseInvoice() {
  const [search, setSearch] = useState("");
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const navigate = useNavigate();

  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: "#876364",
      name: "Arrora Gaur",
      email: "arroragaur@gmail.com",
      date: "12 Dec, 2020",
      status: "Complete",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      selected: false,
      favorite: true,
    },
    {
      id: "#876123",
      name: "James Mullican",
      email: "jamesmullican@gmail.com",
      date: "10 Dec, 2020",
      status: "Pending",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      selected: false,
      favorite: true,
    },
    {
      id: "#876213",
      name: "Robert Bacins",
      email: "robertbacins@gmail.com",
      date: "09 Dec, 2020",
      status: "Complete",
      image: "https://randomuser.me/api/portraits/men/20.jpg",
      selected: true,
      favorite: false,
    },
    {
      id: "#876987",
      name: "Bethany Jackson",
      email: "bethany@gmail.com",
      date: "09 Dec, 2020",
      status: "Cancel",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      selected: true,
      favorite: false,
    },
    {
      id: "#871345",
      name: "Anne Jacob",
      email: "annejacob@gmail.com",
      date: "10 Dec, 2020",
      status: "Complete",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      selected: false,
      favorite: false,
    },
    {
      id: "#872345",
      name: "Bethany Jackson",
      email: "bethanyjackson@gmail.com",
      date: "10 Dec, 2020",
      status: "Pending",
      image: "https://randomuser.me/api/portraits/men/71.jpg",
      selected: true,
      favorite: true,
    },
    {
      id: "#878769",
      name: "James Mullican",
      email: "jamesmullican@gmail.com",
      date: "01 Dec, 2020",
      status: "Pending",
      image: "https://randomuser.me/api/portraits/men/80.jpg",
      selected: true,
      favorite: false,
    },
  ]);

  const filteredInvoices = useMemo(() => {
    return invoices.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, invoices]);

  const toggleSelect = (id: string) => {
    setInvoices((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item,
      ),
    );
  };

  const toggleFavorite = (id: string) => {
    setInvoices((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item,
      ),
    );
  };

  const statusStyle = (status: Status) => {
    switch (status) {
      case "Complete":
        return "bg-[#EDF6EF] text-[#39A85B]";
      case "Pending":
        return "bg-[#FFF5E8] text-[#F9A63A]";
      default:
        return "bg-[#FDEDEE] text-[#E53935]";
    }
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
          Invoice List
        </h1>

        <div
          className="
      flex
      flex-col
      sm:flex-row

      gap-3
      w-full
      lg:w-auto
    "
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search
              className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2

          w-5
          h-5

          text-[#8A8AA0]
          dark:text-gray-400
        "
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search invoice..."
              className="
          h-[48px]
          w-full
          sm:w-[260px]

          bg-white
          dark:bg-gray-900

          border
          border-[#ECECF5]
          dark:border-gray-800

          rounded-xl

          pl-12
          pr-4

          text-[14px]

          text-[#11142D]
          dark:text-white

          placeholder:text-[#8A8AA0]
          dark:placeholder:text-gray-500

          outline-none

          focus:border-[#5B5CF0]
        "
            />
          </div>

          <button
            onClick={() => navigate("/Base/create-invoice")}
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
      </div>

      {/* Desktop Header */}
      <div
        className="
    hidden
    lg:grid

    grid-cols-[50px_120px_1.5fr_2fr_160px_170px_60px_50px]

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

        <p>Invoice Id</p>
        <p>Name</p>
        <p>Email</p>
        <p>Date</p>
        <p>Status</p>
        <p />
        <p />
      </div>

      {/* Invoice Rows */}
      <div className="space-y-3">
        {filteredInvoices.map((item) => (
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

        lg:grid
        lg:grid-cols-[50px_120px_1.5fr_2fr_160px_170px_60px_50px]

        items-center
        gap-3

        transition-all
        duration-300

        hover:shadow-lg
        dark:hover:border-gray-700
      "
          >
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={item.selected}
              onChange={() => toggleSelect(item.id)}
              className="
          w-5
          h-5
          accent-[#5B5CF0]
        "
            />

            {/* Invoice ID */}
            <p
              className="
          text-[15px]
          font-medium

          text-[#11142D]
          dark:text-white
        "
            >
              {item.id}
            </p>

            {/* Customer */}
            <div
              className="
          flex
          items-center
          gap-3

          mt-3
          lg:mt-0
        "
            >
              <img
                src={item.image}
                alt={item.name}
                className="
            w-10
            h-10

            rounded-full
            object-cover

            border
            border-[#ECECF5]
            dark:border-gray-700
          "
              />

              <p
                className="
            text-[15px]

            text-[#11142D]
            dark:text-white
          "
              >
                {item.name}
              </p>
            </div>

            {/* Email */}
            <div
              className="
          flex
          items-center
          gap-2

          text-[14px]

          text-[#555577]
          dark:text-gray-300

          mt-3
          lg:mt-0
        "
            >
              <Mail size={16} color="#39A85B" />

              <span className="break-all">{item.email}</span>
            </div>

            {/* Date */}
            <div
              className="
          flex
          items-center
          gap-2

          mt-3
          lg:mt-0

          text-[#555577]
          dark:text-gray-300
        "
            >
              <Calendar size={16} color="#3B82F6" />

              <span className="text-[14px]">{item.date}</span>
            </div>

            {/* Status */}
            <div
              className={`
          w-[160px]
          h-[44px]

          rounded-full

          flex
          items-center
          justify-center

          font-medium
          text-[14px]

          mt-3
          lg:mt-0

          ${statusStyle(item.status)}
        `}
            >
              {item.status}
            </div>

            {/* Favorite */}
            <button
              onClick={() => toggleFavorite(item.id)}
              className="
          mt-3
          lg:mt-0
        "
            >
              <Star
                size={20}
                fill={item.favorite ? "#F6C445" : "none"}
                color={
                  item.favorite ? "#F6C445" : isDark ? "#6B7280" : "#D7D7E3"
                }
              />
            </button>

            {/* More */}
            <button
              className="
          w-8
          h-8

          rounded-lg

          hover:bg-[#F5F5F7]
          dark:hover:bg-gray-800

          flex
          items-center
          justify-center

          transition-all
        "
            >
              <MoreHorizontal color={isDark ? "#9CA3AF" : "#A0A0B5"} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
