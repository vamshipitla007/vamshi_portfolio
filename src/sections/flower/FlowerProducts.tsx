import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Plus,
  Download,
  ChevronDown,
  Search,
  SlidersHorizontal,
  LayoutGrid,
  List,
  Printer,
  FileSpreadsheet,
  FileText,
  File,
} from "lucide-react";
import AddProductSlide from "./AddProductSlide";

interface Product {
  id: number;
  name: string;
  productNo: string;
  category: string;
  date: string;
  price: number;
  status: "Available" | "Disabled";
}

const productData: Product[] = [
  {
    id: 1,
    name: "MacBook Pro 15 Retina Touch Bar MV902",
    productNo: "#790841",
    category: "Notebook",
    date: "12.09.20",
    price: 2500,
    status: "Available",
  },
  {
    id: 2,
    name: "Apple Watch Series 5 Edition GPS + Cellular",
    productNo: "#790842",
    category: "Watch",
    date: "12.09.20",
    price: 2500,
    status: "Available",
  },
  {
    id: 3,
    name: "Apple iPhone 11 Pro Max 256GB Space Gray",
    productNo: "#790843",
    category: "Phone",
    date: "12.09.20",
    price: 2500,
    status: "Available",
  },
  {
    id: 4,
    name: "Apple Watch Series 5 Edition GPS + Cellular",
    productNo: "#790844",
    category: "Watch",
    date: "12.09.20",
    price: 2500,
    status: "Available",
  },
  {
    id: 5,
    name: "MacBook Pro 15 Retina Touch Bar MV902",
    productNo: "#790845",
    category: "Notebook",
    date: "12.09.20",
    price: 2500,
    status: "Disabled",
  },
  {
    id: 6,
    name: "Apple iPhone 11 Pro Max 64GB Midnight Green",
    productNo: "#790846",
    category: "Phone",
    date: "12.09.20",
    price: 2500,
    status: "Disabled",
  },
  {
    id: 7,
    name: "MacBook Pro 15 Retina Touch Bar MV902",
    productNo: "#790847",
    category: "Notebook",
    date: "12.09.20",
    price: 2500,
    status: "Available",
  },
  {
    id: 8,
    name: "Apple Watch Series 5 Edition GPS + Cellular",
    productNo: "#790848",
    category: "Watch",
    date: "12.09.20",
    price: 2500,
    status: "Available",
  },
];

const Products = () => {
  const exportRef = useRef<HTMLDivElement>(null);
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [products] = useState(productData);

  const [search, setSearch] = useState("");

  const [tab, setTab] = useState("All");

  const [view, setView] = useState<"list" | "grid">("list");

  const [showExport, setShowExport] = useState(false);

  const [showFilter, setShowFilter] = useState(false);

  const [selectedAction, setSelectedAction] = useState("Actions");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [selectedStatus, setSelectedStatus] = useState("All");

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (exportRef.current && !exportRef.current.contains(e.target as Node)) {
        setShowExport(false);
      }
    };

    document.addEventListener("mousedown", close);

    return () => document.removeEventListener("mousedown", close);
  }, []);

  const filteredProducts = useMemo(() => {
    let data = [...products];

    if (tab !== "All") {
      data = data.filter((x) => x.status === tab);
    }

    if (selectedCategory !== "All") {
      data = data.filter((x) => x.category === selectedCategory);
    }

    if (selectedStatus !== "All") {
      data = data.filter((x) => x.status === selectedStatus);
    }

    if (search.trim()) {
      data = data.filter(
        (x) =>
          x.name.toLowerCase().includes(search.toLowerCase()) ||
          x.productNo.toLowerCase().includes(search.toLowerCase()),
      );
    }

    return data;
  }, [products, search, tab, selectedCategory, selectedStatus]);

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

      case "CSV": {
        const csv = filteredProducts
          .map(
            (p) =>
              `${p.name},${p.productNo},${p.category},${p.price},${p.status}`,
          )
          .join("\n");

        const blob = new Blob([csv], {
          type: "text/csv;charset=utf-8;",
        });

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;

        link.download = "products.csv";

        link.click();

        URL.revokeObjectURL(url);

        break;
      }

      default:
        break;
    }

    setShowExport(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-[34px] font-semibold text-[#2E3440]">Products</h1>
        </div>

        <div className="flex items-center gap-3">
          {/* Export */}

          <div className="relative" ref={exportRef}>
            <button
              onClick={() => setShowExport(!showExport)}
              className="flex h-11 items-center gap-3 rounded-2xl bg-white px-5 shadow-sm"
            >
              <Download color="#4B5563" size={17} />

              <span className="text-[13px] text-[#4B5563] font-medium">
                Export
              </span>

              <ChevronDown size={15} color="#4B5563" />
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

          {/* Add */}

          <button
            onClick={() => setOpenAddProduct(true)}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2BA84A] text-white hover:bg-[#23933f]"
          >
            <Plus size={18} color="white" />
          </button>
        </div>
      </div>

      {/* Tabs */}

      <div className="mt-10 flex items-center justify-between border-b border-[#ECECEC]">
        <div className="flex gap-8">
          {[
            {
              title: "All",
              count: 283,
            },
            {
              title: "Available",
              count: 268,
            },
            {
              title: "Disabled",
              count: 15,
            },
          ].map((item) => (
            <button
              key={item.title}
              onClick={() => setTab(item.title)}
              className={`relative pb-4 text-[14px] font-medium ${
                tab === item.title ? "text-[#2E3440]" : "text-[#8A94A6]"
              }`}
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

        <div className="hidden items-center gap-4 lg:flex">
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

      {/* Search */}

      <div className="mt-8 rounded-3xl border border-[#ECECEC] bg-white p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search
              size={18}
              color="#8A94A6"
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="h-12 w-full rounded-2xl border text-[#4B5563] border-[#ECECEC] pl-12 pr-4 text-[13px] outline-none focus:border-[#2BA84A]"
            />
          </div>

          <button
            onClick={() => setShowFilter(true)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ECECEC] hover:bg-[#F8F9FC]"
          >
            <SlidersHorizontal size={18} color="#8A94A6" />
          </button>

          <div className="relative w-[170px]">
            <select
              value={selectedAction}
              onChange={(e) => setSelectedAction(e.target.value)}
              className="
      h-12
      w-full
      appearance-none
      rounded-2xl
      border
      border-[#E5E7EB]
      bg-white
      px-5
      pr-10
      text-[13px]
      font-medium
      text-[#4B5563]
      shadow-sm
      outline-none
      transition-all
      duration-200
      hover:border-[#22C55E]
      focus:border-[#22C55E]
      focus:ring-4
      focus:ring-green-100
      cursor-pointer
    "
            >
              <option value="">Actions</option>
              <option value="delete">Delete</option>
              <option value="enable">Enable</option>
              <option value="disable">Disable</option>
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
            />
          </div>
        </div>

        {/* PART 2 CONTINUES HERE */}
        {/* ================================================================ */}
        {/* FILTER MODAL */}
        {/* ================================================================ */}

        {showFilter && (
          <>
            {/* Overlay */}

            <div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
              onClick={() => setShowFilter(false)}
            />

            <div className="fixed left-1/2 top-1/2 z-50 w-[95%] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-[#ECECEC] bg-white p-7 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              {/* Title */}

              <h2 className="mb-8 text-[20px] font-semibold text-[#2E3440]">
                Filter
              </h2>

              {/* Category */}

              <div className="mb-6">
                <label className="mb-2 block text-[13px] font-medium text-[#7C8798]">
                  Category
                </label>

                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-[#E6EAF0] px-4 text-[13px] text-[#4B5563] outline-none focus:border-[#2BA84A]"
                >
                  <option className="text-[#4B5563 ]">All</option>
                  <option className="text-[#4B5563 ]">Notebook</option>
                  <option className="text-[#4B5563 ]">Watch</option>
                  <option className="text-[#4B5563 ]">Phone</option>
                </select>
              </div>

              {/* Status */}

              <div className="mb-6">
                <label className="mb-2 block text-[13px] font-medium text-[#7C8798]">
                  Status
                </label>

                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-[#E6EAF0] px-4 text-[13px] text-[#4B5563] outline-none focus:border-[#2BA84A]"
                >
                  <option className="text-[#4B5563 ]">All</option>
                  <option className="text-[#4B5563 ]">Available</option>
                  <option className="text-[#4B5563 ]">Disabled</option>
                </select>
              </div>

              {/* Date */}

              <div className="mb-6">
                <label className="mb-2 block text-[13px] font-medium text-[#7C8798]">
                  Date
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="date"
                    className="h-12 rounded-2xl border border-[#E6EAF0] px-4 text-[13px] text-[#4B5563] outline-none focus:border-[#2BA84A]"
                  />

                  <input
                    type="date"
                    className="h-12 rounded-2xl border border-[#E6EAF0] px-4 text-[13px] text-[#4B5563] outline-none focus:border-[#2BA84A]"
                  />
                </div>
              </div>

              {/* Price */}

              <div className="mb-8">
                <label className="mb-3 block text-[13px] font-medium text-[#7C8798]">
                  Price
                </label>

                <input
                  type="range"
                  min={500}
                  max={5500}
                  defaultValue={2500}
                  className="w-full accent-[#2BA84A]"
                />

                <div className="mt-2 flex justify-between text-[12px] text-[#8C96A5]">
                  <span className="text-[#4B5563]">$500</span>

                  <span className="text-[#4B5563]">$5,500</span>
                </div>
              </div>

              {/* Buttons */}

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedStatus("All");
                  }}
                  className="rounded-xl border border-[#E6EAF0] px-6 py-3 text-[13px] text-[#4B5563] font-medium hover:bg-[#F7F8FA]"
                >
                  Reset
                </button>

                <button
                  onClick={() => setShowFilter(false)}
                  className="rounded-xl bg-[#2BA84A] px-8 py-3 text-[13px] text-white font-medium hover:bg-[#22913f]"
                >
                  Save
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* ================================================================ */}
      {/* TABLE STARTS HERE */}
      {/* ================================================================ */}
      {/* PRODUCT TABLE */}
      {/* ================================================================ */}

      <div className="mt-7 overflow-hidden rounded-[24px] border border-[#ECECEC] bg-white">
        {/* Header */}

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="h-14 border-b border-[#EEF2F6] bg-white text-left">
                <th className="w-14 px-5">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 accent-[#2BA84A]"
                  />
                </th>

                {[
                  "PRODUCT NAME",
                  "PRODUCT NO.",
                  "CATEGORY",
                  "DATE",
                  "PRICE",
                  "STATUS",
                ].map((head) => (
                  <th
                    key={head}
                    className="px-3 text-[12px] font-semibold tracking-wide text-[#98A2B3]"
                  >
                    <div className="flex items-center gap-2">
                      {head}

                      <ChevronDown size={13} />
                    </div>
                  </th>
                ))}

                <th className="w-14" />
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((item) => (
                <tr
                  key={item.id}
                  className="group h-[58px] border-b border-[#F3F4F6] transition hover:bg-[#FAFBFC]"
                >
                  {/* Checkbox */}

                  <td className="px-5">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded accent-[#2BA84A]"
                    />
                  </td>

                  {/* Product */}

                  <td className="px-3">
                    <p className="text-[14px] font-medium text-[#374151]">
                      {item.name}
                    </p>
                  </td>

                  {/* Product No */}

                  <td className="px-3">
                    <span className="text-[14px] text-[#98A2B3]">
                      {item.productNo}
                    </span>
                  </td>

                  {/* Category */}

                  <td className="px-3">
                    <span className="text-[14px] text-[#4B5563]">
                      {item.category}
                    </span>
                  </td>

                  {/* Date */}

                  <td className="px-3">
                    <span className="text-[14px] text-[#98A2B3]">
                      {item.date}
                    </span>
                  </td>

                  {/* Price */}

                  <td className="px-3">
                    <span className="font-medium text-[#374151]">
                      ${item.price.toLocaleString()}
                    </span>
                  </td>

                  {/* Status */}

                  <td className="px-3">
                    <span
                      className={`inline-flex rounded-full px-4 py-1 text-[12px] font-medium

                      ${
                        item.status === "Available"
                          ? "bg-[#ECFDF3] text-[#16A34A]"
                          : "bg-[#FFF4ED] text-[#F97316]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Action */}

                  <td className="px-4">
                    <div className="relative">
                      <button className="rounded-lg p-2 opacity-70 transition hover:bg-[#F3F4F6] hover:opacity-100">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-[#98A2B3]"
                        >
                          <circle cx="12" cy="5" r="2" />
                          <circle cx="12" cy="12" r="2" />
                          <circle cx="12" cy="19" r="2" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================================================================ */}
      {/* MOBILE PRODUCT CARDS */}
      {/* ================================================================ */}

      <div className="mt-6 space-y-4 lg:hidden">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-[#ECECEC] bg-white p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-[14px] font-semibold text-[#374151]">
                  {item.name}
                </h3>

                <p className="mt-1 text-[12px] text-[#98A2B3]">
                  {item.productNo}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                  item.status === "Available"
                    ? "bg-[#ECFDF3] text-[#16A34A]"
                    : "bg-[#FFF4ED] text-[#F97316]"
                }`}
              >
                {item.status}
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 text-[13px]">
              <div>
                <p className="text-[#98A2B3]">Category</p>

                <p className="mt-1 font-medium">{item.category}</p>
              </div>

              <div>
                <p className="text-[#98A2B3]">Price</p>

                <p className="mt-1 font-medium">
                  ${item.price.toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-[#98A2B3]">Date</p>

                <p className="mt-1 font-medium">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================================================================ */}
      {/* PAGINATION STARTS HERE */}
      {/* ================================================================ */}
      {/* PAGINATION */}
      {/* ================================================================ */}

      <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-[#ECECEC] bg-white px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="text-[13px] font-medium text-[#98A2B3]">
          Showing <span className="text-[#374151]">1-10</span> from{" "}
          <span className="text-[#374151]">{filteredProducts.length}</span>{" "}
          products
        </div>

        <div className="flex items-center gap-3">
          {/* Rows */}

          <select className="h-10 rounded-xl border border-[#ECECEC] px-3 text-[13px] outline-none">
            <option>10 Rows</option>
            <option>20 Rows</option>
            <option>30 Rows</option>
          </select>

          {/* Previous */}

          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ECECEC] text-[#98A2B3] transition hover:bg-[#F8F9FC]">
            &lt;
          </button>

          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className={`flex h-10 w-10 items-center justify-center rounded-xl text-[13px] text-[#4B5563] font-medium transition ${
                page === 1
                  ? "bg-[#2BA84A] text-white"
                  : "border border-[#ECECEC] hover:bg-[#F8F9FC]"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next */}

          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ECECEC] text-[#98A2B3] transition hover:bg-[#F8F9FC]">
            &gt;
          </button>
        </div>
      </div>
      <AddProductSlide
        open={openAddProduct}
        onClose={() => setOpenAddProduct(false)}
      />
    </div>
  );
};

export default Products;
