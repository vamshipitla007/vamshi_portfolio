import React, { useEffect, useMemo, useRef, useState } from "react";

import {
  X,
  Download,
  ChevronDown,
  Printer,
  FileSpreadsheet,
  FileText,
  File,
} from "lucide-react";

interface OrderDetailsModalProps {
  open: boolean;
  onClose: () => void;
}

type TabType = "details" | "products" | "invoice";

interface Customer {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatar: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const customer: Customer = {
  name: "Regina Cooper",
  email: "example@mail.com",
  phone: "+1 (070) 4567-8800",
  address: "993 E. Brewer St. Holtsville",
  avatar: "https://i.pravatar.cc/150?img=12",
};

const products: Product[] = [
  {
    id: 1,
    name: "MacBook Pro 15 Retina Touch Bar MV902",
    price: 2500,
    quantity: 1,
  },
  {
    id: 2,
    name: "Apple Watch Series 5 Edition GPS + Cellular",
    price: 1500,
    quantity: 2,
  },
  {
    id: 3,
    name: "Apple iPhone 11 Pro Max 256GB Space Gray",
    price: 1100,
    quantity: 1,
  },
];

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({
  open,
  onClose,
}) => {
  const [openBilling, setOpenBilling] = useState(true);

  const [openShipping, setOpenShipping] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);

  const [tab, setTab] = useState<TabType>("details");

  const [showExport, setShowExport] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const [shippingMethod, setShippingMethod] = useState("Carrier");

  const [fulfillmentStatus, setFulfillmentStatus] = useState("Delivered");

  const [paymentStatus, setPaymentStatus] = useState("Paid");

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (exportRef.current && !exportRef.current.contains(e.target as Node)) {
        setShowExport(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const subtotal = useMemo(() => {
    return products.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, []);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
      />

      {/* Modal */}

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="flex h-[92vh] w-full max-w-[1180px] flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.12)]">
          {/* Header */}

          <div className="flex items-center justify-between border-b border-[#ECECEC] px-8 py-5">
            <div className="flex gap-8">
              {[
                {
                  key: "details",
                  label: "ORDER DETAILS",
                },
                {
                  key: "products",
                  label: "PRODUCTS",
                },
                {
                  key: "invoice",
                  label: "INVOICE",
                },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setTab(item.key as TabType)}
                  className={`relative pb-3 text-[12px] font-semibold tracking-wide transition

                  ${tab === item.key ? "text-[#2BA84A]" : "text-[#6B7280]"}`}
                >
                  {item.label}

                  {tab === item.key && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#2BA84A]" />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={onClose}
              className="rounded-full p-2 transition hover:bg-[#F7F8FA]"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scroll */}

          <div className="flex-1 overflow-y-auto p-8">
            {/* ====================================================== */}
            {/* DETAILS TAB */}
            {/* ====================================================== */}

            {tab === "details" && (
              <>
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-[34px] font-semibold text-[#374151]">
                    Orders
                    <span className="ml-2 text-[#9CA3AF]">#790841</span>
                  </h2>

                  {/* Export */}

                  <div ref={exportRef} className="relative">
                    <button
                      onClick={() => setShowExport(!showExport)}
                      className="flex h-11 items-center gap-3 rounded-2xl border border-[#ECECEC] bg-white px-5"
                    >
                      <Download size={16} />

                      <span className="text-[13px] font-medium">Export</span>

                      <ChevronDown size={16} />
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

                {/* Customer */}

                <h3 className="mb-5 text-[22px] font-semibold text-[#374151]">
                  Customer
                </h3>

                <div className="overflow-hidden rounded-2xl border border-[#ECECEC]">
                  <table className="min-w-full">
                    <thead className="bg-[#FBFCFD]">
                      <tr className="h-12 text-left text-[12px] font-semibold text-[#98A2B3]">
                        <th className="px-6">NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>LOCATION</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="h-20 border-t border-[#ECECEC]">
                        <td className="px-6">
                          <div className="flex items-center gap-3">
                            <img
                              src={customer.avatar}
                              alt=""
                              className="h-10 w-10 rounded-full"
                            />

                            <span className="text-[14px] font-medium text-[#374151]">
                              {customer.name}
                            </span>
                          </div>
                        </td>

                        <td className="text-[14px] text-[#6B7280]">
                          {customer.email}
                        </td>

                        <td className="text-[14px] text-[#6B7280]">
                          {customer.phone}
                        </td>

                        <td className="text-[14px] text-[#6B7280]">
                          {customer.address}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* PART 2 CONTINUES HERE */}
                {/* ====================================================== */}
                {/* PAYMENT + SHIPPING */}
                {/* ====================================================== */}

                <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
                  {/* Payment */}

                  <div>
                    <h4 className="mb-4 text-[16px] font-semibold text-[#374151]">
                      Payment method
                    </h4>

                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 text-[13px] font-medium text-[#4B5563] outline-none focus:border-[#2BA84A]"
                    >
                      <option>Credit Card</option>
                      <option>PayPal</option>
                      <option>Payoneer</option>
                    </select>

                    <div className="mt-5 space-y-2">
                      <p className="text-[13px] text-[#6B7280]">
                        <span className="font-semibold text-[#374151]">
                          Transaction ID:
                        </span>{" "}
                        000001-TXHQ
                      </p>

                      <p className="text-[13px] text-[#6B7280]">
                        <span className="font-semibold text-[#374151]">
                          Amount:
                        </span>{" "}
                        $2,500
                      </p>
                    </div>
                  </div>

                  {/* Shipping */}

                  <div>
                    <h4 className="mb-4 text-[16px] font-semibold text-[#374151]">
                      Shipping method
                    </h4>

                    <select
                      value={shippingMethod}
                      onChange={(e) => setShippingMethod(e.target.value)}
                      className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 text-[13px] font-medium text-[#4B5563] outline-none focus:border-[#2BA84A]"
                    >
                      <option>Carrier</option>
                      <option>DHL</option>
                      <option>FedEx</option>
                      <option>UPS</option>
                    </select>

                    <div className="mt-5 space-y-2">
                      <p className="text-[13px] text-[#6B7280]">
                        <span className="font-semibold text-[#374151]">
                          Tracking Code:
                        </span>{" "}
                        FX-012345-6
                      </p>

                      <p className="text-[13px] text-[#6B7280]">
                        <span className="font-semibold text-[#374151]">
                          Date:
                        </span>{" "}
                        12.09.2019
                      </p>
                    </div>
                  </div>

                  {/* Status */}

                  <div className="rounded-2xl bg-[#F9FAFB] p-5">
                    <div className="mb-5">
                      <label className="mb-2 block text-[12px] font-semibold text-[#8B95A7]">
                        Fulfillment Status
                      </label>

                      <select
                        value={fulfillmentStatus}
                        onChange={(e) => setFulfillmentStatus(e.target.value)}
                        className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 text-[13px] font-medium text-[#4B5563] outline-none"
                      >
                        <option>Delivered</option>
                        <option>Processing</option>
                        <option>Pending</option>
                        <option>Cancelled</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-[12px] font-semibold text-[#8B95A7]">
                        Payment Status
                      </label>

                      <select
                        value={paymentStatus}
                        onChange={(e) => setPaymentStatus(e.target.value)}
                        className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 text-[13px] font-medium text-[#4B5563] outline-none"
                      >
                        <option>Paid</option>
                        <option>Pending</option>
                        <option>Refunded</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* ====================================================== */}
                {/* ACCORDIONS */}
                {/* ====================================================== */}

                <div className="mt-8 space-y-4">
                  {/* Billing */}

                  <div className="overflow-hidden rounded-2xl border border-[#ECECEC]">
                    <button
                      onClick={() => setOpenBilling(!openBilling)}
                      className="flex h-14 w-full items-center justify-between px-6"
                    >
                      <span className="text-[16px] font-semibold text-[#374151]">
                        Billing address
                      </span>

                      <ChevronDown
                        size={18}
                        className={`transition ${
                          openBilling ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openBilling && (
                      <div className="grid grid-cols-1 gap-6 border-t border-[#ECECEC] p-6 md:grid-cols-3">
                        <div className="space-y-2 text-[13px] text-[#6B7280]">
                          <p>
                            <span className="font-semibold text-[#374151]">
                              First Name:
                            </span>{" "}
                            Regina
                          </p>

                          <p>
                            <span className="font-semibold text-[#374151]">
                              Last Name:
                            </span>{" "}
                            Cooper
                          </p>

                          <p>
                            <span className="font-semibold text-[#374151]">
                              Address:
                            </span>{" "}
                            993 E. Brewer St.
                          </p>
                        </div>

                        <div className="space-y-2 text-[13px] text-[#6B7280]">
                          <p>
                            <span className="font-semibold text-[#374151]">
                              State:
                            </span>{" "}
                            New York
                          </p>

                          <p>
                            <span className="font-semibold text-[#374151]">
                              City:
                            </span>{" "}
                            New York
                          </p>

                          <p>
                            <span className="font-semibold text-[#374151]">
                              Country:
                            </span>{" "}
                            USA
                          </p>
                        </div>

                        <div className="space-y-2 text-[13px] text-[#6B7280]">
                          <p>
                            <span className="font-semibold text-[#374151]">
                              Phone:
                            </span>{" "}
                            +1 (070) 4567-8800
                          </p>

                          <p>
                            <span className="font-semibold text-[#374151]">
                              Email:
                            </span>{" "}
                            example@mail.com
                          </p>

                          <p>
                            <span className="font-semibold text-[#374151]">
                              Postcode:
                            </span>{" "}
                            11742
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Shipping */}

                  <div className="overflow-hidden rounded-2xl border border-[#ECECEC]">
                    <button
                      onClick={() => setOpenShipping(!openShipping)}
                      className="flex h-14 w-full items-center justify-between px-6"
                    >
                      <span className="text-[16px] font-semibold text-[#374151]">
                        Shipping address
                      </span>

                      <ChevronDown
                        size={18}
                        className={`transition ${
                          openShipping ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openShipping && (
                      <div className="grid grid-cols-1 gap-6 border-t border-[#ECECEC] p-6 md:grid-cols-3">
                        <div className="space-y-2 text-[13px] text-[#6B7280]">
                          <p>
                            <span className="font-semibold text-[#374151]">
                              Recipient:
                            </span>{" "}
                            Regina Cooper
                          </p>

                          <p>
                            <span className="font-semibold text-[#374151]">
                              Address:
                            </span>{" "}
                            993 E. Brewer St.
                          </p>
                        </div>

                        <div className="space-y-2 text-[13px] text-[#6B7280]">
                          <p>
                            <span className="font-semibold text-[#374151]">
                              City:
                            </span>{" "}
                            New York
                          </p>

                          <p>
                            <span className="font-semibold text-[#374151]">
                              Country:
                            </span>{" "}
                            USA
                          </p>
                        </div>

                        <div className="space-y-2 text-[13px] text-[#6B7280]">
                          <p>
                            <span className="font-semibold text-[#374151]">
                              Phone:
                            </span>{" "}
                            +1 (070) 4567-8800
                          </p>

                          <p>
                            <span className="font-semibold text-[#374151]">
                              Zip:
                            </span>{" "}
                            11742
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* ====================================================== */}
            {/* PRODUCTS TAB CONTINUES IN PART 3 */}
            {/* ====================================================== */}
            {/* PRODUCTS TAB */}
            {/* ====================================================== */}

            {tab === "products" && (
              <>
                {/* Header */}

                <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <h2 className="text-[34px] font-semibold text-[#374151]">
                    Products
                  </h2>

                  <div ref={exportRef} className="relative">
                    <button
                      onClick={() => setShowExport(!showExport)}
                      className="flex h-11 items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-5 transition hover:bg-[#F8F9FC]"
                    >
                      <Download size={16} />

                      <span className="text-[13px] font-medium text-[#4B5563]">
                        Export
                      </span>

                      <ChevronDown size={16} />
                    </button>

                    {showExport && (
                      <div className="absolute right-0 top-14 z-50 w-52 overflow-hidden rounded-2xl border border-[#ECECEC] bg-white shadow-xl">
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

                {/* Table */}

                <div className="overflow-hidden rounded-2xl border border-[#ECECEC]">
                  <table className="min-w-full">
                    <thead>
                      <tr className="h-14 border-b border-[#ECECEC] bg-[#FBFCFD]">
                        <th className="px-6 text-left text-[12px] font-semibold tracking-wide text-[#98A2B3]">
                          PRODUCT
                        </th>

                        <th className="text-center text-[12px] font-semibold tracking-wide text-[#98A2B3]">
                          PRICE
                        </th>

                        <th className="text-center text-[12px] font-semibold tracking-wide text-[#98A2B3]">
                          QUANTITY
                        </th>

                        <th className="pr-6 text-right text-[12px] font-semibold tracking-wide text-[#98A2B3]">
                          TOTAL
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {products.map((product) => (
                        <tr
                          key={product.id}
                          className="h-[68px] border-b border-[#F3F4F6] transition hover:bg-[#FAFBFC]"
                        >
                          <td className="px-6">
                            <p className="text-[14px] font-medium text-[#374151]">
                              {product.name}
                            </p>
                          </td>

                          <td className="text-center">
                            <span className="text-[14px] text-[#4B5563]">
                              ${product.price.toLocaleString()}
                            </span>
                          </td>

                          <td className="text-center">
                            <span className="text-[14px] text-[#4B5563]">
                              {product.quantity}
                            </span>
                          </td>

                          <td className="pr-6 text-right">
                            <span className="text-[14px] font-semibold text-[#374151]">
                              $
                              {(
                                product.price * product.quantity
                              ).toLocaleString()}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile */}

                <div className="mt-6 space-y-4 lg:hidden">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="rounded-2xl border border-[#ECECEC] bg-white p-5"
                    >
                      <h3 className="text-[14px] font-semibold text-[#374151]">
                        {product.name}
                      </h3>

                      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-wide text-[#98A2B3]">
                            Price
                          </p>

                          <p className="mt-1 text-[13px] font-medium text-[#374151]">
                            ${product.price}
                          </p>
                        </div>

                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-wide text-[#98A2B3]">
                            Qty
                          </p>

                          <p className="mt-1 text-[13px] font-medium text-[#374151]">
                            {product.quantity}
                          </p>
                        </div>

                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-wide text-[#98A2B3]">
                            Total
                          </p>

                          <p className="mt-1 text-[13px] font-semibold text-[#374151]">
                            $
                            {(
                              product.price * product.quantity
                            ).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ====================================================== */}
            {/* INVOICE TAB CONTINUES IN PART 4 */}
            {/* ====================================================== */}
            {/* INVOICE TAB */}
            {/* ====================================================== */}

            {tab === "invoice" && (
              <>
                {/* Header */}

                <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <h2 className="text-[34px] font-semibold text-[#374151]">
                    Invoice
                  </h2>

                  <div ref={exportRef} className="relative">
                    <button
                      onClick={() => setShowExport(!showExport)}
                      className="flex h-11 items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-5 transition hover:bg-[#F8F9FC]"
                    >
                      <Download size={16} />

                      <span className="text-[13px] font-medium text-[#4B5563]">
                        Export
                      </span>

                      <ChevronDown size={16} />
                    </button>

                    {showExport && (
                      <div className="absolute right-0 top-14 z-50 w-52 overflow-hidden rounded-2xl border border-[#ECECEC] bg-white shadow-xl">
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
                              onClick={() => {
                                if (item.title === "Print") {
                                  window.print();
                                }
                                setShowExport(false);
                              }}
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

                {/* Invoice Header */}

                <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
                  {/* Invoice Card */}

                  <div className="flex h-[140px] items-center justify-center rounded-2xl bg-[#FF6F69] text-white">
                    <div className="text-center">
                      <p className="text-[26px] font-bold">INVOICE</p>

                      <p className="mt-3 text-[22px] font-semibold">#790841</p>
                    </div>
                  </div>

                  {/* Company */}

                  <div className="flex flex-col justify-center">
                    <h3 className="text-[18px] font-semibold text-[#374151]">
                      ROCKET INC.
                    </h3>

                    <div className="mt-4 space-y-2 text-[13px] text-[#6B7280]">
                      <p>Russell St. 50, Boston, MA, USA</p>

                      <p>+1 (070) 123-4567</p>

                      <p>info@rocket.com</p>

                      <p>www.rocketboard.com</p>
                    </div>
                  </div>

                  {/* Date */}

                  <div className="flex flex-col items-end justify-center">
                    <p className="text-[13px] text-[#98A2B3]">
                      September 12, 2019
                    </p>

                    <div className="mt-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF6FF]">
                        🌸
                      </div>

                      <span className="text-[18px] font-semibold text-[#374151]">
                        FLOWER
                      </span>
                    </div>
                  </div>
                </div>

                {/* Invoice Table */}

                <div className="overflow-hidden rounded-2xl border border-[#ECECEC]">
                  <table className="min-w-full">
                    <thead>
                      <tr className="h-14 bg-[#FBFCFD]">
                        <th className="px-6 text-left text-[12px] font-semibold text-[#98A2B3]">
                          PRODUCT
                        </th>

                        <th className="text-center text-[12px] font-semibold text-[#98A2B3]">
                          PRICE
                        </th>

                        <th className="text-center text-[12px] font-semibold text-[#98A2B3]">
                          QUANTITY
                        </th>

                        <th className="pr-6 text-right text-[12px] font-semibold text-[#98A2B3]">
                          TOTAL
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {products.map((item) => (
                        <tr
                          key={item.id}
                          className="h-[64px] border-t border-[#F3F4F6]"
                        >
                          <td className="px-6 text-[14px] text-[#374151]">
                            {item.name}
                          </td>

                          <td className="text-center text-[14px] text-[#4B5563]">
                            ${item.price.toLocaleString()}
                          </td>

                          <td className="text-center text-[14px] text-[#4B5563]">
                            {item.quantity}
                          </td>

                          <td className="pr-6 text-right text-[14px] font-semibold text-[#374151]">
                            ${(item.price * item.quantity).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Totals */}

                <div className="mt-10 flex justify-end">
                  <div className="w-full max-w-[320px] space-y-4">
                    <div className="flex justify-between text-[14px] text-[#6B7280]">
                      <span>Subtotal</span>

                      <span className="font-medium">
                        ${subtotal.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between text-[14px] text-[#6B7280]">
                      <span>Tax (20%)</span>

                      <span className="font-medium">
                        ${(subtotal * 0.2).toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between text-[14px] text-[#6B7280]">
                      <span>Discount</span>

                      <span className="font-medium">-$792</span>
                    </div>

                    <div className="border-t border-[#ECECEC] pt-4">
                      <div className="flex justify-between">
                        <span className="text-[18px] font-semibold text-[#374151]">
                          TOTAL
                        </span>

                        <span className="text-[20px] font-bold text-[#2BA84A]">
                          ${(subtotal + subtotal * 0.2 - 792).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailsModal;
