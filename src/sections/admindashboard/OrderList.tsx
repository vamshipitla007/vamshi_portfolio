import React, { useMemo, useState } from "react";

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

type OrderType = "Electronics" | "Book" | "Medicine" | "Mobile" | "Watch";

type StatusType =
  | "Completed"
  | "Processing"
  | "Rejected"
  | "On Hold"
  | "In Transit";

type Order = {
  id: string;
  name: string;
  address: string;
  date: string;
  type: OrderType;
  status: StatusType;
};

const orders: Order[] = [
  {
    id: "00001",
    name: "Christine Brooks",
    address: "089 Kutch Green Apt. 448",
    date: "04 Sep 2019",
    type: "Electronics",
    status: "Completed",
  },
  {
    id: "00002",
    name: "Rosie Pearson",
    address: "979 Immanuel Ferry Suite 526",
    date: "28 May 2019",
    type: "Book",
    status: "Processing",
  },
  {
    id: "00003",
    name: "Darrell Caldwell",
    address: "8587 Frida Ports",
    date: "23 Nov 2019",
    type: "Medicine",
    status: "Rejected",
  },
  {
    id: "00004",
    name: "Gilbert Johnston",
    address: "768 Destiny Lake Suite 600",
    date: "05 Feb 2019",
    type: "Mobile",
    status: "Completed",
  },
  {
    id: "00005",
    name: "Alan Cain",
    address: "042 Mylene Throughway",
    date: "29 Jul 2019",
    type: "Watch",
    status: "Processing",
  },
  {
    id: "00006",
    name: "Alfred Murray",
    address: "543 Weimann Mountain",
    date: "15 Aug 2019",
    type: "Medicine",
    status: "Completed",
  },
  {
    id: "00007",
    name: "Maggie Sullivan",
    address: "New Scottieberg",
    date: "21 Dec 2019",
    type: "Watch",
    status: "Processing",
  },
  {
    id: "00008",
    name: "Rosie Todd",
    address: "New Jon",
    date: "30 Apr 2019",
    type: "Medicine",
    status: "On Hold",
  },
  {
    id: "00009",
    name: "Dollie Hines",
    address: "124 Lyla Forge Suite 975",
    date: "09 Jan 2019",
    type: "Book",
    status: "In Transit",
  },
  {
    id: "00010",
    name: "Cody Fisher",
    address: "New York Avenue",
    date: "11 Mar 2019",
    type: "Electronics",
    status: "Completed",
  },
  {
    id: "00011",
    name: "Jane Cooper",
    address: "Los Angeles",
    date: "13 Jun 2019",
    type: "Mobile",
    status: "Processing",
  },
  {
    id: "00012",
    name: "Devon Lane",
    address: "Chicago Street",
    date: "16 Jul 2019",
    type: "Watch",
    status: "Rejected",
  },
  {
    id: "00013",
    name: "Brooklyn Simmons",
    address: "San Diego",
    date: "18 Aug 2019",
    type: "Medicine",
    status: "Completed",
  },
  {
    id: "00014",
    name: "Jacob Jones",
    address: "Phoenix Town",
    date: "19 Sep 2019",
    type: "Book",
    status: "In Transit",
  },
  {
    id: "00015",
    name: "Kristin Watson",
    address: "Dallas",
    date: "21 Oct 2019",
    type: "Mobile",
    status: "Processing",
  },
  {
    id: "00016",
    name: "Marvin McKinney",
    address: "Austin",
    date: "23 Nov 2019",
    type: "Watch",
    status: "Completed",
  },
  {
    id: "00017",
    name: "Wade Warren",
    address: "Seattle",
    date: "25 Dec 2019",
    type: "Electronics",
    status: "On Hold",
  },
  {
    id: "00018",
    name: "Jerome Bell",
    address: "Houston",
    date: "27 Jan 2019",
    type: "Book",
    status: "Completed",
  },
  {
    id: "00019",
    name: "Annette Black",
    address: "Miami",
    date: "14 Feb 2019",
    type: "Medicine",
    status: "Rejected",
  },
  {
    id: "00020",
    name: "Kathryn Murphy",
    address: "Boston",
    date: "03 Apr 2019",
    type: "Mobile",
    status: "Processing",
  },
];

const orderTypes = ["Electronics", "Book", "Medicine", "Mobile", "Watch"];

const statuses = [
  "Completed",
  "Processing",
  "Rejected",
  "On Hold",
  "In Transit",
];

const statusStyles: Record<string, string> = {
  Completed: "bg-[#DDF5F1] text-[#00B69B]",
  Processing: "bg-[#E7D9FF] text-[#6226EF]",
  Rejected: "bg-[#FFE1E1] text-[#EF3826]",
  "On Hold": "bg-[#FFF1E3] text-[#FF8F0D]",
  "In Transit": "bg-[#F0D9FF] text-[#C026FF]",
};

const ITEMS_PER_PAGE = 9;

export default function OrderListScreen() {
  const [showDateModal, setShowDateModal] = useState(false);

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const [tempTypes, setTempTypes] = useState<string[]>([]);

  const [tempStatuses, setTempStatuses] = useState<string[]>([]);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [tempDate, setTempDate] = useState<Date | null>(null);

  const [showTypeModal, setShowTypeModal] = useState(false);

  const [showStatusModal, setShowStatusModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const dateMatch =
        selectedDate instanceof Date
          ? order.date === formatDate(selectedDate)
          : true;

      const typeMatch =
        selectedTypes.length > 0 ? selectedTypes.includes(order.type) : true;

      const statusMatch =
        selectedStatuses.length > 0
          ? selectedStatuses.includes(order.status)
          : true;

      return dateMatch && typeMatch && statusMatch;
    });
  }, [selectedDate, selectedTypes, selectedStatuses]);

  const formatDate = (date: Date) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = String(date.getDate()).padStart(2, "0");

    const month = months[date.getMonth()];

    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);

  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const resetFilters = () => {
    // APPLIED FILTERS

    setSelectedDate(null);
    setSelectedTypes([]);
    setSelectedStatuses([]);

    // TEMP FILTERS

    setTempDate(null);
    setTempTypes([]);
    setTempStatuses([]);

    // PAGINATION

    setCurrentPage(1);

    // CLOSE MODALS

    setShowDateModal(false);
    setShowTypeModal(false);
    setShowStatusModal(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      {/* TITLE */}

      <h1 className="mb-6 text-[24px] font-bold text-[#202224]">Order Lists</h1>

      {/* FILTERS */}
      <div className="relative mb-5 flex flex-wrap overflow-hidden rounded-xl border border-[#E5E7EB] bg-white">
        {/* FILTER ICON */}

        <button className="flex h-[54px] w-[54px] items-center justify-center border-r border-[#E5E7EB] transition hover:bg-[#F7F8FA]">
          <SlidersHorizontal
            size={18}
            className="text-[#202224] transition hover:scale-110"
          />
        </button>

        {/* FILTER BY */}

        <div className="flex h-[54px] min-w-[110px] items-center justify-center border-r border-[#E5E7EB] bg-white px-4 text-[13px] font-semibold text-[#202224] transition hover:bg-[#F7F8FA]">
          Filter By
        </div>

        {/* DATE */}

        <button
          onClick={() => {
            setTempDate(selectedDate);
            setShowDateModal(true);
          }}
          className="flex h-[54px] w-[150px] items-center justify-between border-r border-[#E5E7EB] px-4 transition hover:bg-[#F7F8FA]"
        >
          <span className="text-[13px] font-medium text-[#202224]">
            {selectedDate instanceof Date
              ? formatDate(selectedDate)
              : "Select Date"}
          </span>

          <ChevronDown size={15} />
        </button>

        {/* TYPE */}

        <button
          onClick={() => {
            setTempTypes(selectedTypes);
            setShowTypeModal(true);
          }}
          className="flex h-[54px] w-[150px] items-center justify-between border-r border-[#E5E7EB] px-4 transition hover:bg-[#F7F8FA]"
        >
          <span className="text-[13px] font-medium text-[#202224]">
            {selectedTypes.length > 0
              ? `${selectedTypes.length} Selected`
              : "Order Type"}
          </span>

          <ChevronDown
            size={15}
            className="transition group-hover:rotate-180"
          />
        </button>

        {/* STATUS */}

        <button
          onClick={() => {
            setTempStatuses(selectedStatuses);
            setShowStatusModal(true);
          }}
          className="flex h-[54px] w-[150px] items-center justify-between border-r border-[#E5E7EB] px-4 transition hover:bg-[#F7F8FA]"
        >
          <span className="text-[13px] font-medium text-[#202224]">
            {selectedStatuses.length > 0
              ? `${selectedStatuses.length} Selected`
              : "Order Status"}
          </span>

          <ChevronDown size={15} />
        </button>

        {/* RESET */}

        <button
          onClick={resetFilters}
          className="flex h-[54px] items-center gap-2 px-4 text-[#FF2E63] transition hover:bg-[#FFF1F4]"
        >
          <RotateCcw size={15} className="transition hover:rotate-[-180deg]" />

          <span className="text-[13px] font-medium">Reset Filter</span>
        </button>
      </div>

      {/* TABLE */}

      <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white">
        {/* TABLE HEADER */}

        <div className="hidden grid-cols-6 border-b border-[#E5E7EB] bg-[#FAFAFA] px-5 py-4 text-[12px] font-bold uppercase tracking-wide text-[#202224] md:grid">
          <div>ID</div>
          <div>Name</div>
          <div>Address</div>
          <div>Date</div>
          <div>Type</div>
          <div>Status</div>
        </div>

        {/* TABLE ROWS */}

        {paginatedOrders.map((order) => (
          <div
            key={order.id}
            className="border-b border-[#F1F1F1] px-4 py-4 md:grid md:grid-cols-6 md:items-center md:px-5"
          >
            {/* MOBILE VIEW */}

            <div className="space-y-2 md:hidden">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase text-[#8A8A8A]">
                  ID
                </span>

                <span className="text-[13px] font-medium text-[#202224]">
                  {order.id}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-semibold uppercase text-[#8A8A8A]">
                  Name
                </span>

                <span className="text-right text-[13px] text-[#202224]">
                  {order.name}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-semibold uppercase text-[#8A8A8A]">
                  Address
                </span>

                <span className="max-w-[180px] text-right text-[13px] text-[#202224]">
                  {order.address}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase text-[#8A8A8A]">
                  Date
                </span>

                <span className="text-[13px] text-[#202224]">{order.date}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase text-[#8A8A8A]">
                  Type
                </span>

                <span className="text-[13px] text-[#202224]">{order.type}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase text-[#8A8A8A]">
                  Status
                </span>

                <span
                  className={`inline-flex rounded-md px-3 py-1 text-[10px] font-semibold ${statusStyles[order.status]}`}
                >
                  {order.status}
                </span>
              </div>
            </div>

            {/* DESKTOP VIEW */}

            <div className="hidden text-[13px] text-[#202224] md:block">
              {order.id}
            </div>

            <div className="hidden text-[13px] text-[#202224] md:block">
              {order.name}
            </div>

            <div className="hidden text-[13px] text-[#202224] md:block">
              {order.address}
            </div>

            <div className="hidden text-[13px] text-[#202224] md:block">
              {order.date}
            </div>

            <div className="hidden text-[13px] text-[#202224] md:block">
              {order.type}
            </div>

            <div className="hidden md:block">
              <span
                className={`inline-flex rounded-md px-3 py-1.5 text-[11px] font-semibold ${statusStyles[order.status]}`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}

      <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-[13px] text-[#71717A]">
          Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}-
          {Math.min(currentPage * ITEMS_PER_PAGE, filteredOrders.length)} of{" "}
          {filteredOrders.length}
        </p>

        {/* PAGINATION */}

        <div className="flex overflow-hidden rounded-lg border border-[#E5E7EB] bg-white">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="flex h-[38px] w-[38px] items-center justify-center border-r border-[#E5E7EB] transition hover:bg-[#F7F7F7] disabled:opacity-40"
          >
            <ChevronLeft size={16} color="#8E8E93" />
          </button>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="flex h-[38px] w-[38px] items-center justify-center transition hover:bg-[#F7F7F7] disabled:opacity-40"
          >
            <ChevronRight size={16} color="#8E8E93" />
          </button>
        </div>
      </div>

      {/* TYPE MODAL */}

      {showTypeModal && (
        <div
          onClick={() => setShowTypeModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[520px] rounded-[22px] bg-white p-6 shadow-xl"
          >
            <h2 className="mb-5 text-[22px] font-bold text-[#202224]">
              Select Order Type
            </h2>

            <div className="flex flex-wrap gap-3">
              {orderTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setTempTypes((prev) =>
                      prev.includes(type)
                        ? prev.filter((item) => item !== type)
                        : [...prev, type],
                    );
                  }}
                  className={`rounded-full border px-4 py-2 text-[13px] font-medium transition ${
                    tempTypes.includes(type)
                      ? "border-[#4F7CF7] bg-[#4F7CF7] text-white"
                      : "border-[#D7D7D7] text-[#202224]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <p className="mt-6 text-[12px] text-[#71717A]">
              *You can choose multiple Order type
            </p>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => {
                  setSelectedTypes(tempTypes);
                  setShowTypeModal(false);
                }}
                className="h-[42px] rounded-lg bg-[#4F7CF7] px-8 text-[13px] font-medium text-white"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STATUS MODAL */}

      {showStatusModal && (
        <div
          onClick={() => setShowStatusModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[520px] rounded-[22px] bg-white p-6 shadow-xl"
          >
            <h2 className="mb-5 text-[22px] font-bold text-[#202224]">
              Select Order Status
            </h2>

            <div className="flex flex-wrap gap-3">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => {
                    setTempStatuses((prev) =>
                      prev.includes(status)
                        ? prev.filter((item) => item !== status)
                        : [...prev, status],
                    );
                  }}
                  className={`rounded-full border px-4 py-2 text-[13px] font-medium transition ${
                    tempStatuses.includes(status)
                      ? "border-[#4F7CF7] bg-[#4F7CF7] text-white"
                      : "border-[#D7D7D7] text-[#202224]"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            <p className="mt-6 text-[12px] text-[#71717A]">
              *You can choose multiple Order status
            </p>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => {
                  setSelectedStatuses(tempStatuses);
                  setShowStatusModal(false);
                }}
                className="h-[42px] rounded-lg bg-[#4F7CF7] px-8 text-[13px] font-medium text-white"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DATE MODAL */}

      {showDateModal && (
        <div
          onClick={() => setShowDateModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[420px] rounded-[24px] bg-white p-5 shadow-xl"
          >
            {/* TITLE */}

            <h2 className="mb-4 text-[20px] font-bold text-[#202224]">
              Select Date
            </h2>

            {/* CALENDAR */}

            <div className="custom-calendar-wrapper">
              <Calendar
                onChange={(value) => setTempDate(value as Date)}
                value={tempDate}
                className="border-none text-[13px]"
              />
            </div>

            {/* NOTE */}

            <p className="mt-4 text-[12px] text-[#71717A]">
              *Choose a date and click Apply Now
            </p>

            {/* BUTTON */}

            <div className="mt-6 flex justify-center">
              <button
                onClick={() => {
                  setSelectedDate(tempDate);
                  setShowDateModal(false);
                }}
                disabled = {true}
                className="h-[42px] rounded-lg bg-[#4F7CF7] px-8 text-[13px] font-medium text-white transition hover:bg-[#3E6EF0]"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
