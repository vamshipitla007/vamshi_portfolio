import { useEffect, useMemo, useRef, useState } from "react";

import {
  Download,
  Plus,
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
import AddUserModal from "./AddUserModal";

/* ========================================================= */
/* TYPES */
/* ========================================================= */

interface Customer {
  id: number;
  name: string;
  email: string;
  location: string;
  phone: string;
  date: string;
  avatar: string;
  status: "Active" | "Blocked";
}

/* ========================================================= */
/* DUMMY DATA */
/* ========================================================= */

const customerData: Customer[] = [
  {
    id: 1,
    name: "Regina Cooper",
    email: "cooper@example.com",
    location: "Sochi, Russia",
    phone: "+1 (070) 123-4567",
    date: "12.09.20",
    avatar: "https://i.pravatar.cc/150?img=12",
    status: "Active",
  },
  {
    id: 2,
    name: "Judith Black",
    email: "black@example.com",
    location: "Paris, France",
    phone: "+1 (070) 123-8459",
    date: "12.09.20",
    avatar: "https://i.pravatar.cc/150?img=11",
    status: "Active",
  },
  {
    id: 3,
    name: "Ronald Robertson",
    email: "robe@example.com",
    location: "Sydney, Australia",
    phone: "+1 (070) 123-9221",
    date: "12.09.20",
    avatar: "https://i.pravatar.cc/150?img=13",
    status: "Blocked",
  },
  {
    id: 4,
    name: "Dustin Williamson",
    email: "williams@example.com",
    location: "Berlin, Germany",
    phone: "+1 (070) 123-0507",
    date: "12.09.20",
    avatar: "https://i.pravatar.cc/150?img=15",
    status: "Active",
  },
  {
    id: 5,
    name: "Calvin Flores",
    email: "flores@example.com",
    location: "New York, USA",
    phone: "+1 (070) 123-3791",
    date: "12.09.20",
    avatar: "https://i.pravatar.cc/150?img=17",
    status: "Active",
  },
  {
    id: 6,
    name: "Robert Edwards",
    email: "edwards@example.com",
    location: "Shanghai, China",
    phone: "+1 (070) 123-1147",
    date: "12.09.20",
    avatar: "https://i.pravatar.cc/150?img=18",
    status: "Active",
  },
  {
    id: 7,
    name: "Colleen Warren",
    email: "warren@example.com",
    location: "Ottawa, Canada",
    phone: "+1 (070) 123-9127",
    date: "12.09.20",
    avatar: "https://i.pravatar.cc/150?img=19",
    status: "Active",
  },
  {
    id: 8,
    name: "Nathan Fox",
    email: "fox@example.com",
    location: "London, UK",
    phone: "+1 (070) 123-5073",
    date: "12.09.20",
    avatar: "https://i.pravatar.cc/150?img=20",
    status: "Active",
  },
];

const Customers = () => {
  const exportRef = useRef<HTMLDivElement>(null);

  const [customers] = useState(customerData);

  const [search, setSearch] = useState("");

  const [tab, setTab] = useState("All");

  const [showExport, setShowExport] = useState(false);
  const [selectedCustomers, setSelectedCustomers] = useState<number[]>([]);

  const [openRowMenu, setOpenRowMenu] = useState<number | null>(null);

  const [showFilter, setShowFilter] = useState(false);

  const [selectedAction, setSelectedAction] = useState("Actions");

  const [view, setView] = useState<"list" | "grid">("list");
  const [filterStatus, setFilterStatus] = useState("All");

  const [filterLocation, setFilterLocation] = useState("All");

  const [countrySearch, setCountrySearch] = useState("");

  const [fromDate, setFromDate] = useState("");

  const [toDate, setToDate] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [addUserModelOpen, setAddUserModalOpen] = useState(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (exportRef.current && !exportRef.current.contains(e.target as Node)) {
        setShowExport(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filteredCustomers = useMemo(() => {
    let data = [...customers];

    // Tabs

    if (tab !== "All") {
      data = data.filter((x) => x.status === tab);
    }

    // Search

    if (search.trim()) {
      data = data.filter(
        (x) =>
          x.name.toLowerCase().includes(search.toLowerCase()) ||
          x.email.toLowerCase().includes(search.toLowerCase()) ||
          x.location.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Status Filter

    if (filterStatus !== "All") {
      data = data.filter((x) => x.status === filterStatus);
    }

    // Location

    if (filterLocation !== "All") {
      data = data.filter((x) => x.location.includes(filterLocation));
    }

    // Country Search

    if (countrySearch.trim()) {
      data = data.filter((x) =>
        x.location.toLowerCase().includes(countrySearch.toLowerCase()),
      );
    }

    return data;
  }, [
    customers,
    search,
    tab,
    filterStatus,
    filterLocation,
    countrySearch,
    fromDate,
    toDate,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredCustomers.length / rowsPerPage),
  );

  const paginatedCustomers = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;

    return filteredCustomers.slice(start, start + rowsPerPage);
  }, [filteredCustomers, currentPage, rowsPerPage]);

  const toggleCustomer = (id: number) => {
    setSelectedCustomers((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const toggleAllCustomers = () => {
    if (selectedCustomers.length === filteredCustomers.length) {
      setSelectedCustomers([]);
    } else {
      setSelectedCustomers(filteredCustomers.map((x) => x.id));
    }
  };

  const handleExport = (type: string) => {
    switch (type) {
      case "Print":
        window.print();
        break;

      case "Excel":
        console.log("Export Excel");
        break;

      case "PDF":
        console.log("Export PDF");
        break;

      case "CSV":
        console.log("Export CSV");
        break;
    }

    setShowExport(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-[34px] font-semibold text-[#374151]">Customers</h1>

        <div className="flex items-center gap-3">
          {/* Export */}

          <div className="relative" ref={exportRef}>
            <button
              onClick={() => setShowExport(!showExport)}
              className="flex h-11 items-center gap-3 rounded-2xl bg-white px-5 shadow-sm"
            >
              <Download color="#333" size={17} />

              <span className="text-[13px] font-medium text-[#4B5563]">
                Export
              </span>

              <ChevronDown color="#333" size={16} />
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
                      className="flex w-full items-center gap-3 px-5 py-3 text-[13px] font-medium text-[#4B5563] hover:bg-[#F8F9FC]"
                    >
                      <Icon size={16} />

                      {item.title}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Add */}

          <button
            onClick={() => setAddUserModalOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2BA84A] text-white transition hover:bg-[#24943E]"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      {/* Tabs */}

      <div className="mt-10 flex items-end justify-between border-b border-[#ECECEC]">
        <div className="flex gap-7">
          {[
            {
              title: "All",
              count: 983,
            },
            {
              title: "Active",
              count: 968,
            },
            {
              title: "Blocked",
              count: 15,
            },
          ].map((item) => (
            <button
              key={item.title}
              onClick={() => setTab(item.title)}
              className={`relative pb-4 text-[14px] font-medium

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
            className={view === "list" ? "text-[#2BA84A]" : "text-[#9CA3AF]"}
          >
            <List size={18} />
          </button>

          <button
            onClick={() => setView("grid")}
            className={view === "grid" ? "text-[#2BA84A]" : "text-[#9CA3AF]"}
          >
            <LayoutGrid size={18} />
          </button>
        </div>
      </div>

      {/* Search */}

      <div className="mt-8 rounded-[28px] border border-[#ECECEC] bg-white p-6">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              color="#98A2B3"
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#98A2B3]"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customer..."
              className="h-12 w-full rounded-2xl border border-[#ECECEC] pl-12 pr-4 text-[13px] text-[#374151] outline-none focus:border-[#2BA84A]"
            />
          </div>

          <button
            onClick={() => setShowFilter(true)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ECECEC] hover:bg-[#F8F9FC]"
          >
            <SlidersHorizontal color="#333" size={18} />
          </button>

          <select
            value={selectedAction}
            onChange={(e) => setSelectedAction(e.target.value)}
            className="h-12 rounded-2xl border border-[#ECECEC] px-5 text-[13px] text-[#4B5563] outline-none"
          >
            <option>Actions</option>
            <option>Delete</option>
            <option>Block</option>
            <option>Activate</option>
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
              <h2 className="mb-8 text-[22px] font-semibold text-[#374151]">
                Filter Customers
              </h2>

              {/* Status */}

              <div className="mb-6">
                <label className="mb-2 block text-[13px] font-medium text-[#8B95A7]">
                  Status
                </label>

                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-[#E5E7EB] px-4 text-[13px] text-[#374151] outline-none focus:border-[#2BA84A]"
                >
                  <option>All</option>
                  <option>Active</option>
                  <option>Blocked</option>
                </select>
              </div>

              {/* Location */}

              <div className="mb-6">
                <label className="mb-2 block text-[13px] font-medium text-[#8B95A7]">
                  Location
                </label>

                <select
                  value={filterLocation}
                  onChange={(e) => setFilterLocation(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-[#E5E7EB] px-4 text-[13px] text-[#374151] outline-none focus:border-[#2BA84A]"
                >
                  <option>All</option>
                  <option>Russia</option>
                  <option>France</option>
                  <option>Australia</option>
                  <option>Germany</option>
                  <option>USA</option>
                  <option>China</option>
                  <option>Canada</option>
                  <option>UK</option>
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
                    className="h-12 rounded-2xl border border-[#E5E7EB] px-4 text-[13px] outline-none focus:border-[#2BA84A]"
                  />

                  <input
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="h-12 rounded-2xl border border-[#E5E7EB] px-4 text-[13px] outline-none focus:border-[#2BA84A]"
                  />
                </div>
              </div>

              {/* Search by Country */}

              <div className="mb-8">
                <label className="mb-2 block text-[13px] font-medium text-[#8B95A7]">
                  Country
                </label>

                <input
                  value={countrySearch}
                  onChange={(e) => setCountrySearch(e.target.value)}
                  placeholder="Enter country..."
                  className="h-12 w-full rounded-2xl border border-[#E5E7EB] px-4 text-[13px] outline-none focus:border-[#2BA84A]"
                />
              </div>

              {/* Buttons */}

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setFilterStatus("All");
                    setFilterLocation("All");
                    setCountrySearch("");
                    setFromDate("");
                    setToDate("");
                  }}
                  className="rounded-xl border border-[#E5E7EB] px-6 py-3 text-[13px] font-medium text-[#4B5563] transition hover:bg-[#F8F9FC]"
                >
                  Reset
                </button>

                <button
                  onClick={() => setShowFilter(false)}
                  className="rounded-xl bg-[#2BA84A] px-8 py-3 text-[13px] font-medium text-white transition hover:bg-[#23923D]"
                >
                  Apply
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* ======================================================= */}
      {/* TABLE STARTS HERE */}
      {/* ======================================================= */}
      {/* CUSTOMER TABLE */}
      {/* ======================================================= */}

      <div className="mt-6 overflow-hidden rounded-[28px] border border-[#ECECEC] bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            {/* Header */}

            <thead>
              <tr className="h-[58px] border-b border-[#EEF2F6] bg-white">
                <th className="w-14 px-6">
                  <input
                    type="checkbox"
                    checked={
                      selectedCustomers.length === filteredCustomers.length &&
                      filteredCustomers.length > 0
                    }
                    onChange={toggleAllCustomers}
                    className="h-4 w-4 rounded border-gray-300 accent-[#2BA84A]"
                  />
                </th>

                {["CUSTOMER NAME", "LOCATION", "PHONE", "DATE", "STATUS"].map(
                  (column) => (
                    <th
                      key={column}
                      className="cursor-pointer px-3 text-left text-[12px] font-semibold tracking-wide text-[#98A2B3]"
                    >
                      <div className="flex items-center gap-1">
                        {column}

                        <ChevronDown size={13} />
                      </div>
                    </th>
                  ),
                )}

                <th className="w-14" />
              </tr>
            </thead>

            {/* Body */}

            <tbody>
              {paginatedCustomers.map((customer) => {
                const checked = selectedCustomers.includes(customer.id);

                return (
                  <tr
                    key={customer.id}
                    className="group h-[74px] border-b border-[#F2F4F7] transition hover:bg-[#FAFBFC]"
                  >
                    {/* Checkbox */}

                    <td className="px-6">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleCustomer(customer.id)}
                        className="h-4 w-4 rounded accent-[#2BA84A]"
                      />
                    </td>

                    {/* Customer */}

                    <td className="px-3">
                      <div className="flex items-center gap-4">
                        <img
                          src={customer.avatar}
                          alt={customer.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />

                        <div>
                          <h4 className="text-[14px] font-medium text-[#374151]">
                            {customer.name}
                          </h4>

                          <p className="mt-1 text-[13px] text-[#98A2B3]">
                            {customer.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Location */}

                    <td className="px-3">
                      <span className="text-[14px] text-[#6B7280]">
                        {customer.location}
                      </span>
                    </td>

                    {/* Phone */}

                    <td className="px-3">
                      <span className="text-[14px] text-[#4B5563]">
                        {customer.phone}
                      </span>
                    </td>

                    {/* Date */}

                    <td className="px-3">
                      <span className="text-[14px] text-[#98A2B3]">
                        {customer.date}
                      </span>
                    </td>

                    {/* Status */}

                    <td className="px-3">
                      <span
                        className={`inline-flex rounded-full px-4 py-[6px] text-[12px] font-medium

                        ${
                          customer.status === "Active"
                            ? "bg-[#EAF8EE] text-[#16A34A]"
                            : "bg-[#FFF4EB] text-[#F97316]"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </td>

                    {/* Actions */}

                    <td className="px-4">
                      <div className="relative">
                        <button
                          onClick={() =>
                            setOpenRowMenu(
                              openRowMenu === customer.id ? null : customer.id,
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

                        {openRowMenu === customer.id && (
                          <div className="absolute right-0 top-11 z-30 w-44 overflow-hidden rounded-2xl border border-[#ECECEC] bg-white shadow-xl">
                            {[
                              "View",
                              "Edit",
                              customer.status === "Blocked"
                                ? "Activate"
                                : "Block",
                              "Delete",
                            ].map((item) => (
                              <button
                                key={item}
                                className={`w-full px-5 py-3 text-left text-[13px] font-medium transition

                                ${
                                  item === "Delete"
                                    ? "text-red-500 hover:bg-red-50"
                                    : "text-[#4B5563] hover:bg-[#F8F9FC]"
                                }`}
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
      {/* MOBILE CARDS */}
      {/* ======================================================= */}

      <div className="mt-6 space-y-4 lg:hidden">
        {paginatedCustomers.map((customer) => (
          <div
            key={customer.id}
            className="rounded-2xl border border-[#ECECEC] bg-white p-5"
          >
            <div className="flex items-center gap-4">
              <img
                src={customer.avatar}
                alt={customer.name}
                className="h-14 w-14 rounded-full"
              />

              <div className="flex-1">
                <h3 className="text-[15px] font-semibold text-[#374151]">
                  {customer.name}
                </h3>

                <p className="mt-1 text-[13px] text-[#98A2B3]">
                  {customer.email}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-[11px] font-medium

                ${
                  customer.status === "Active"
                    ? "bg-[#EAF8EE] text-[#16A34A]"
                    : "bg-[#FFF4EB] text-[#F97316]"
                }`}
              >
                {customer.status}
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 text-[13px]">
              <div>
                <p className="text-[#98A2B3]">Location</p>

                <p className="mt-1 font-medium text-[#374151]">
                  {customer.location}
                </p>
              </div>

              <div>
                <p className="text-[#98A2B3]">Phone</p>

                <p className="mt-1 font-medium text-[#374151]">
                  {customer.phone}
                </p>
              </div>

              <div>
                <p className="text-[#98A2B3]">Date</p>

                <p className="mt-1 font-medium text-[#374151]">
                  {customer.date}
                </p>
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
            className="h-11 rounded-xl border border-[#E5E7EB] bg-white px-4 text-[13px] font-medium text-[#4B5563] outline-none transition focus:border-[#2BA84A]"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>

          <p className="text-[13px] font-medium text-[#98A2B3]">
            Showing
            <span className="mx-1 text-[#374151]">
              {Math.min(
                (currentPage - 1) * rowsPerPage + 1,
                filteredCustomers.length,
              )}
            </span>
            -
            <span className="mx-1 text-[#374151]">
              {Math.min(currentPage * rowsPerPage, filteredCustomers.length)}
            </span>
            of
            <span className="ml-1 text-[#374151]">
              {filteredCustomers.length}
            </span>
          </p>
        </div>

        {/* Right */}

        <div className="flex items-center gap-2">
          {/* First */}

          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ECECEC] bg-[#F8F9FB] text-[#98A2B3] transition hover:bg-[#F2F4F7] disabled:cursor-not-allowed disabled:opacity-40"
          >
            ≪
          </button>

          {/* Previous */}

          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ECECEC] bg-[#F8F9FB] text-[#98A2B3] transition hover:bg-[#F2F4F7] disabled:cursor-not-allowed disabled:opacity-40"
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
      <AddUserModal
        open={addUserModelOpen}
        onClose={() => setAddUserModalOpen(false)}
      />
    </div>
  );
};

export default Customers;
