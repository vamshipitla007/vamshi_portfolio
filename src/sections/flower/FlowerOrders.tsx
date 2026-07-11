import React, { useEffect, useMemo, useRef, useState } from "react";

import {
  Download,
  ChevronDown,
  Search,
  SlidersHorizontal,
  Printer,
  FileSpreadsheet,
  FileText,
  File,
  LayoutGrid,
  List,
} from "lucide-react";
import OrderDetailsModal from "./OrderDetailsModal";

/* ======================================================== */
/* TYPES */
/* ======================================================== */

interface Order {
  id: number;
  orderNo: string;
  customer: string;
  date: string;
  total: number;
  payment: string;
  status: "Pending" | "Processing" | "Refunded" | "Shipped" | "Cancelled";
}

/* ======================================================== */
/* DUMMY DATA */
/* ======================================================== */

const ordersData: Order[] = [
  {
    id: 1,
    orderNo: "#790841",
    customer: "Claire Warren",
    date: "12.09.20",
    total: 145.85,
    payment: "PayPal",
    status: "Shipped",
  },
  {
    id: 2,
    orderNo: "#790842",
    customer: "Theresa Robertson",
    date: "12.09.20",
    total: 225.15,
    payment: "Credit Card",
    status: "Shipped",
  },
  {
    id: 3,
    orderNo: "#790843",
    customer: "Nathan Hawkins",
    date: "12.09.20",
    total: 45.55,
    payment: "PayPal",
    status: "Shipped",
  },
  {
    id: 4,
    orderNo: "#790844",
    customer: "Lily Williamson",
    date: "12.09.20",
    total: 305.25,
    payment: "Credit Card",
    status: "Processing",
  },
  {
    id: 5,
    orderNo: "#790845",
    customer: "Brooklyn Steward",
    date: "12.09.20",
    total: 483.8,
    payment: "Credit Card",
    status: "Shipped",
  },
  {
    id: 6,
    orderNo: "#790846",
    customer: "Norma Flores",
    date: "12.09.20",
    total: 128.79,
    payment: "Payoneer",
    status: "Processing",
  },
  {
    id: 7,
    orderNo: "#790847",
    customer: "Leslie Mckinney",
    date: "12.09.20",
    total: 105.05,
    payment: "Credit Card",
    status: "Cancelled",
  },
  {
    id: 8,
    orderNo: "#790848",
    customer: "Gregory Black",
    date: "12.09.20",
    total: 1028.15,
    payment: "PayPal",
    status: "Shipped",
  },
];

/* ======================================================== */
/* COMPONENT */
/* ======================================================== */

const Orders = () => {
  const exportRef = useRef<HTMLDivElement>(null);

  const [orders] = useState<Order[]>(ordersData);

  const [search, setSearch] = useState("");

  const [tab, setTab] = useState("All");

  const [showExport, setShowExport] = useState(false);

  const [showFilter, setShowFilter] = useState(false);

  const [selectedAction, setSelectedAction] = useState("Actions");

  const [view, setView] = useState<"list" | "grid">("list");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedPayment, setSelectedPayment] = useState("All");
  const [amount, setAmount] = useState(2000);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedOrders, setSelectedOrders] = useState<number[]>([]);
  const [openRowMenu, setOpenRowMenu] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [openDetails, setOpenDetails] = useState(false);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (exportRef.current && !exportRef.current.contains(e.target as Node)) {
        setShowExport(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filteredOrders = useMemo(() => {
    let data = [...orders];

    if (tab !== "All") {
      data = data.filter((x) => x.status === tab);
    }

    if (search.trim()) {
      data = data.filter(
        (x) =>
          x.customer.toLowerCase().includes(search.toLowerCase()) ||
          x.orderNo.toLowerCase().includes(search.toLowerCase()),
      );
    }

    return data;
  }, [orders, tab, search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredOrders.length / rowsPerPage),
  );

  const paginatedOrders = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;

    return filteredOrders.slice(start, start + rowsPerPage);
  }, [filteredOrders, currentPage, rowsPerPage]);

  const toggleOrder = (id: number) => {
    setSelectedOrders((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const toggleAllOrders = () => {
    if (selectedOrders.length === filteredOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(filteredOrders.map((x) => x.id));
    }
  };

  const handleExport = (type: string) => {
    switch (type) {
      case "Print":
        window.print();
        break;

      case "CSV":
        console.log("Export CSV");
        break;

      case "Excel":
        console.log("Export Excel");
        break;

      case "PDF":
        console.log("Export PDF");
        break;
    }

    setShowExport(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] ">
      {/* =================================================== */}
      {/* HEADER */}
      {/* =================================================== */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-[34px] font-semibold text-[#374151]">Orders</h1>

        <div ref={exportRef} className="relative">
          <button
            onClick={() => setShowExport(!showExport)}
            className="flex h-11 items-center gap-3 rounded-2xl bg-white px-5 shadow-sm"
          >
            <Download color="#4B5563" size={17} />

            <span className="text-[13px] font-medium text-[#4B5563]">
              Export
            </span>

            <ChevronDown color="#4B5563" size={16} />
          </button>

          {showExport && (
            <div className="absolute right-0 mt-3 w-52 overflow-hidden rounded-2xl border border-[#ECECEC] bg-white shadow-xl">
              {[
                {
                  title: "Print",
                  icon: Printer,
                },
                {
                  title: "Excel",
                  icon: FileSpreadsheet,
                },
                {
                  title: "PDF",
                  icon: FileText,
                },
                {
                  title: "CSV",
                  icon: File,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.title}
                    onClick={() => handleExport(item.title)}
                    className="flex w-full items-center gap-3 px-5 py-3 text-[13px] font-medium text-[#4B5563] transition hover:bg-[#F8F9FC]"
                  >
                    <Icon size={17} />

                    {item.title}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* =================================================== */}
      {/* TABS */}
      {/* =================================================== */}

      <div className="mt-10 flex items-end justify-between border-b border-[#ECECEC]">
        <div className="flex gap-6">
          {[
            {
              title: "All",
              count: 983,
            },
            {
              title: "Pending",
              count: 128,
            },
            {
              title: "Processing",
              count: 15,
            },
            {
              title: "Refunded",
              count: 8,
            },
          ].map((item) => (
            <button
              key={item.title}
              onClick={() => setTab(item.title)}
              className={`relative pb-4 text-[14px] font-medium transition

              ${tab === item.title ? "text-[#374151]" : "text-[#8B95A7]"}`}
            >
              {item.title}

              <span className="ml-2 rounded-md bg-[#EEF1F5] px-2 py-1 text-[11px]">
                {item.count}
              </span>

              {tab === item.title && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#2BA84A]" />
              )}
            </button>
          ))}
        </div>

        <div className="hidden gap-3 lg:flex">
          <button
            onClick={() => setView("list")}
            className={`${
              view === "list" ? "text-[#2BA84A]" : "text-gray-400"
            }`}
          >
            <List size={18} />
          </button>

          <button
            onClick={() => setView("grid")}
            className={`${
              view === "grid" ? "text-[#2BA84A]" : "text-gray-400"
            }`}
          >
            <LayoutGrid size={18} />
          </button>
        </div>
      </div>

      {/* =================================================== */}
      {/* SEARCH */}
      {/* =================================================== */}

      <div className="mt-8 rounded-[28px] border border-[#ECECEC] bg-white p-6">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#98A2B3]"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search order..."
              className="h-12 w-full rounded-2xl border border-[#ECECEC] pl-12 pr-4 text-[13px] text-[#374151] outline-none focus:border-[#2BA84A]"
            />
          </div>

          <button
            onClick={() => setShowFilter(true)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ECECEC] hover:bg-[#F8F9FC]"
          >
            <SlidersHorizontal size={18} />
          </button>

          <select
            value={selectedAction}
            onChange={(e) => setSelectedAction(e.target.value)}
            className="h-12 rounded-2xl border border-[#ECECEC] px-5 text-[13px] text-[#4B5563] outline-none"
          >
            <option>Actions</option>
            <option>Delete</option>
            <option>Mark Shipped</option>
            <option>Cancel</option>
          </select>
        </div>

        {/* PART 2 CONTINUES HERE */}
        {/* ======================================================= */}
        {/* FILTER MODAL */}
        {/* ======================================================= */}

        {showFilter && (
          <>
            <div
              onClick={() => setShowFilter(false)}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
            />

            <div className="fixed left-1/2 top-1/2 z-50 w-[95%] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-[#ECECEC] bg-white p-7 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              <h2 className="mb-8 text-[20px] font-semibold text-[#374151]">
                Filter Orders
              </h2>

              {/* Status */}

              <div className="mb-6">
                <label className="mb-2 block text-[13px] font-medium text-[#8B95A7]">
                  Order Status
                </label>

                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-[#E5E7EB] px-4 text-[13px] text-[#374151] outline-none"
                >
                  <option>All</option>
                  <option>Pending</option>
                  <option>Processing</option>
                  <option>Refunded</option>
                  <option>Shipped</option>
                  <option>Cancelled</option>
                </select>
              </div>

              {/* Payment */}

              <div className="mb-6">
                <label className="mb-2 block text-[13px] font-medium text-[#8B95A7]">
                  Payment Method
                </label>

                <select
                  value={selectedPayment}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-[#E5E7EB] px-4 text-[13px] text-[#374151] outline-none"
                >
                  <option>All</option>
                  <option>PayPal</option>
                  <option>Credit Card</option>
                  <option>Payoneer</option>
                </select>
              </div>

              {/* Date */}

              <div className="mb-6">
                <label className="mb-2 block text-[13px] font-medium text-[#8B95A7]">
                  Date Range
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="h-12 rounded-2xl border border-[#E5E7EB] px-4 text-[13px]"
                  />

                  <input
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="h-12 rounded-2xl border border-[#E5E7EB] px-4 text-[13px]"
                  />
                </div>
              </div>

              {/* Total */}

              <div className="mb-8">
                <label className="mb-3 block text-[13px] font-medium text-[#8B95A7]">
                  Total Amount
                </label>

                <input
                  type="range"
                  min={0}
                  max={2000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-[#2BA84A]"
                />

                <div className="mt-2 flex justify-between text-[12px] text-[#98A2B3]">
                  <span>$0</span>

                  <span>$2,000</span>
                </div>
              </div>

              {/* Buttons */}

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowFilter(false)}
                  className="rounded-xl border border-[#E5E7EB] px-6 py-3 text-[13px] font-medium text-[#4B5563] transition hover:bg-[#F8F9FC]"
                >
                  Cancel
                </button>

                <button
                  onClick={() => setShowFilter(false)}
                  className="rounded-xl bg-[#2BA84A] px-8 py-3 text-[13px] font-medium text-white transition hover:bg-[#23923D]"
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* ======================================================= */}
      {/* TABLE STARTS HERE */}
      {/* ======================================================= */}
      {/* ORDERS TABLE */}
      {/* ======================================================= */}

      <div className="mt-6 overflow-hidden rounded-[28px] border border-[#ECECEC] bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            {/* ======================================================= */}
            {/* HEADER */}
            {/* ======================================================= */}

            <thead>
              <tr className="h-[58px] border-b border-[#EEF2F6] bg-white">
                <th className="w-14 px-6">
                  <input
                    type="checkbox"
                    checked={selectedOrders.length === filteredOrders.length}
                    onChange={toggleAllOrders}
                    className="h-4 w-4 rounded border-gray-300 accent-[#2BA84A]"
                  />
                </th>

                {[
                  "ORDER NO.",
                  "CUSTOMER",
                  "DATE",
                  "TOTAL",
                  "PAYMENT",
                  "STATUS",
                ].map((column) => (
                  <th
                    key={column}
                    className="cursor-pointer px-3 text-left text-[12px] font-semibold tracking-wide text-[#98A2B3]"
                  >
                    <div className="flex items-center gap-1">
                      {column}

                      <ChevronDown size={13} />
                    </div>
                  </th>
                ))}

                <th className="w-14" />
              </tr>
            </thead>

            {/* ======================================================= */}
            {/* BODY */}
            {/* ======================================================= */}

            <tbody>
              {paginatedOrders.map((order) => {
                const checked = selectedOrders.includes(order.id);

                return (
                  <tr
                    key={order.id}
                    className="group h-[72px] border-b border-[#F1F4F7] transition hover:bg-[#FAFBFC]"
                  >
                    {/* Checkbox */}

                    <td className="px-6">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleOrder(order.id)}
                        className="h-4 w-4 rounded accent-[#2BA84A]"
                      />
                    </td>

                    {/* Order */}

                    <td className="px-3">
                      <span className="text-[14px] font-medium text-[#8C96A5]">
                        {order.orderNo}
                      </span>
                    </td>

                    {/* Customer */}

                    <td className="px-3">
                      <span className="text-[14px] font-medium text-[#374151]">
                        {order.customer}
                      </span>
                    </td>

                    {/* Date */}

                    <td className="px-3">
                      <span className="text-[14px] text-[#8C96A5]">
                        {order.date}
                      </span>
                    </td>

                    {/* Total */}

                    <td className="px-3">
                      <span className="text-[14px] font-medium text-[#374151]">
                        ${order.total.toFixed(2)}
                      </span>
                    </td>

                    {/* Payment */}

                    <td className="px-3">
                      <span className="text-[14px] text-[#4B5563]">
                        {order.payment}
                      </span>
                    </td>

                    {/* Status */}

                    <td className="px-3">
                      <span
                        className={`inline-flex rounded-full px-4 py-[6px] text-[12px] font-medium

                        ${
                          order.status === "Shipped"
                            ? "bg-[#EAF8EE] text-[#16A34A]"
                            : order.status === "Processing"
                              ? "bg-[#FFF4EB] text-[#F97316]"
                              : order.status === "Cancelled"
                                ? "bg-[#FFECEC] text-[#EF4444]"
                                : order.status === "Refunded"
                                  ? "bg-[#EEF6FF] text-[#2563EB]"
                                  : "bg-[#FFF9E6] text-[#CA8A04]"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>

                    {/* Actions */}

                    <td className="px-4">
                      <div className="relative">
                        <button
                          onClick={() =>
                            setOpenRowMenu(
                              openRowMenu === order.id ? null : order.id,
                            )
                          }
                          className="rounded-lg p-2 transition hover:bg-[#F3F4F6]"
                        >
                          <svg
                            width="18"
                            height="18"
                            fill="currentColor"
                            className="text-[#98A2B3]"
                          >
                            <circle cx="9" cy="3" r="1.8" />
                            <circle cx="9" cy="9" r="1.8" />
                            <circle cx="9" cy="15" r="1.8" />
                          </svg>
                        </button>

                        {openRowMenu === order.id && (
                          <div className="absolute right-0 top-11 z-20 w-40 overflow-hidden rounded-2xl border border-[#ECECEC] bg-white shadow-xl">
                            {["View", "Edit", "Print", "Delete"].map((item) => (
                              <button
                                key={item}
                                className={`w-full px-5 py-3 text-left text-[13px] font-medium transition

                                ${
                                  item === "Delete"
                                    ? "text-red-500 hover:bg-red-50"
                                    : "text-[#4B5563] hover:bg-[#F8F9FC]"
                                }`}
                                onClick={() => {
                                  if (item === "View") {
                                    setOpenDetails(true);
                                  }
                                }}
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ======================================================= */}
      {/* MOBILE VIEW */}
      {/* ======================================================= */}

      <div className="mt-6 space-y-4 lg:hidden">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="rounded-2xl border border-[#ECECEC] bg-white p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-[15px] font-semibold text-[#374151]">
                  {order.customer}
                </h3>

                <p className="mt-1 text-[12px] text-[#98A2B3]">
                  {order.orderNo}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-[11px] font-medium

                ${
                  order.status === "Shipped"
                    ? "bg-[#EAF8EE] text-[#16A34A]"
                    : order.status === "Processing"
                      ? "bg-[#FFF4EB] text-[#F97316]"
                      : order.status === "Cancelled"
                        ? "bg-[#FFECEC] text-[#EF4444]"
                        : order.status === "Refunded"
                          ? "bg-[#EEF6FF] text-[#2563EB]"
                          : "bg-[#FFF9E6] text-[#CA8A04]"
                }`}
              >
                {order.status}
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 text-[13px]">
              <div>
                <p className="text-[#98A2B3]">Payment</p>

                <p className="mt-1 font-medium text-[#374151]">
                  {order.payment}
                </p>
              </div>

              <div>
                <p className="text-[#98A2B3]">Total</p>

                <p className="mt-1 font-medium text-[#374151]">
                  ${order.total.toFixed(2)}
                </p>
              </div>

              <div>
                <p className="text-[#98A2B3]">Date</p>

                <p className="mt-1 font-medium text-[#374151]">{order.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ======================================================= */}
      {/* PAGINATION STARTS HERE */}
      {/* ======================================================= */}
      {/* PAGINATION */}
      {/* ======================================================= */}

      <div className="mt-6 flex flex-col gap-5 rounded-[28px] border border-[#ECECEC] bg-white px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}

        <div className="flex items-center gap-5">
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="h-11 rounded-xl border border-[#E5E7EB] bg-white px-4 text-[13px] font-medium text-[#4B5563] outline-none"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>

          <p className="text-[13px] font-medium text-[#98A2B3]">
            Showing{" "}
            <span className="text-[#374151]">
              {Math.min(
                (currentPage - 1) * rowsPerPage + 1,
                filteredOrders.length,
              )}
            </span>
            {" - "}
            <span className="text-[#374151]">
              {Math.min(currentPage * rowsPerPage, filteredOrders.length)}
            </span>{" "}
            of <span className="text-[#374151]">{filteredOrders.length}</span>
          </p>
        </div>

        {/* Right */}

        <div className="flex items-center gap-2">
          {/* First */}

          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ECECEC] bg-[#F8F9FB] text-[#98A2B3] transition hover:bg-[#F3F4F6] disabled:cursor-not-allowed disabled:opacity-40"
          >
            ≪
          </button>

          {/* Previous */}

          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ECECEC] bg-[#F8F9FB] text-[#98A2B3] transition hover:bg-[#F3F4F6] disabled:cursor-not-allowed disabled:opacity-40"
          >
            ‹
          </button>

          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex h-10 w-10 items-center justify-center rounded-xl text-[13px] font-medium transition

                ${
                  currentPage === page
                    ? "bg-[#2BA84A] text-white"
                    : "text-[#4B5563] hover:bg-[#F7F8FA]"
                }`}
              >
                {page}
              </button>
            );
          })}

          {/* Next */}

          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E7EB] bg-[#ECF9EF] text-[#2BA84A] transition hover:bg-[#DDF6E5] disabled:cursor-not-allowed disabled:opacity-40"
          >
            ›
          </button>

          {/* Last */}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E7EB] bg-[#ECF9EF] text-[#2BA84A] transition hover:bg-[#DDF6E5] disabled:cursor-not-allowed disabled:opacity-40"
          >
            ≫
          </button>
        </div>
      </div>
      <OrderDetailsModal
        open={openDetails}
        onClose={() => setOpenDetails(false)}
      />
    </div>
  );
};

export default Orders;
