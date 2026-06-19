import React, { useMemo, useState } from "react";
import {
  Calendar,
  Download,
  Plus,
  Printer,
  Trash2,
  Camera,
  MapPin,
} from "lucide-react";

type Product = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

export default function CreateInvoice() {
  const [invoiceId] = useState("#876370");

  const [date, setDate] = useState("2021-12-01");

  const [customerName, setCustomerName] = useState("Alison G.");

  const [email, setEmail] = useState("example@gmail.com");

  const [address, setAddress] = useState("Street");

  const [logo, setLogo] = useState("");

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "iPod 2021",
      price: 1000,
      qty: 10,
    },
    {
      id: 2,
      name: "Apple Macbook",
      price: 1500,
      qty: 10,
    },
    {
      id: 3,
      name: "iPhone 12",
      price: 885,
      qty: 10,
    },
  ]);

  const totalAmount = useMemo(() => {
    return products.reduce((sum, item) => sum + item.price * item.qty, 0);
  }, [products]);

  const addProduct = () => {
    setProducts((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: "",
        price: 0,
        qty: 1,
      },
    ]);
  };

  const removeProduct = (id: number) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  const updateProduct = (
    id: number,
    field: keyof Product,
    value: string | number,
  ) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    );
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setLogo(URL.createObjectURL(file));
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
      <div
        className="
      grid
      grid-cols-1
      xl:grid-cols-[450px_1fr]

      gap-6
    "
      >
        {/* ================================= */}
        {/* LEFT PANEL */}
        {/* ================================= */}

        <div
          className="
        bg-white
        dark:bg-gray-900

        border
        border-transparent
        dark:border-gray-800

        rounded-2xl

        p-4
        md:p-6
        xl:p-8

        transition-all
        duration-300
      "
        >
          {/* Title */}

          <h1
            className="
          text-[22px]
          md:text-[32px]

          font-medium

          text-[#11142D]
          dark:text-white

          mb-8

          transition-colors
        "
          >
            Create New Invoice
          </h1>

          {/* Logo Upload */}

          <div className="flex justify-center mb-8">
            <label
              className="
              relative

              w-[110px]
              h-[110px]

              rounded-full

              bg-[#F5F5F7]
              dark:bg-gray-800

              border
              border-transparent
              dark:border-gray-700

              flex
              items-center
              justify-center

              cursor-pointer

              transition-all
              duration-300
            "
            >
              {logo ? (
                <img
                  src={logo}
                  alt="logo"
                  className="
                  w-full
                  h-full
                  rounded-full
                  object-cover
                "
                />
              ) : (
                <Camera
                  size={34}
                  className="
                  text-[#6A6A80]
                  dark:text-gray-400
                "
                />
              )}

              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleLogoUpload}
              />
            </label>
          </div>

          {/* Invoice Row */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Invoice Id */}

            <div>
              <label
                className="
                block
                mb-2

                text-[15px]
                font-medium

                text-[#11142D]
                dark:text-gray-200
              "
              >
                Invoice Id
              </label>

              <input
                value={invoiceId}
                readOnly
                className="
                w-full
                h-[48px]

                px-4

                rounded-xl

                bg-[#F5F5F7]
                dark:bg-gray-800

                text-[#11142D]
                dark:text-white

                border
                border-transparent
                dark:border-gray-700

                text-[14px]

                outline-none

                transition-all
              "
              />
            </div>

            {/* Date */}

            <div>
              <label
                className="
                block
                mb-2

                text-[15px]
                font-medium

                text-[#11142D]
                dark:text-gray-200
              "
              >
                Date
              </label>

              <div className="relative">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="
                  w-full
                  h-[48px]

                  px-4

                  rounded-xl

                  bg-[#F5F5F7]
                  dark:bg-gray-800

                  text-[#11142D]
                  dark:text-white

                  border
                  border-transparent
                  dark:border-gray-700

                  text-[14px]

                  outline-none

                  transition-all
                "
                />

                <Calendar
                  size={18}
                  className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2

                  text-[#5B5CF0]
                  dark:text-[#818CF8]
                "
                />
              </div>
            </div>
          </div>

          {/* Name */}

          <div className="mt-5">
            <label
              className="
                block
                mb-2

                text-[15px]
                font-medium

                text-[#11142D]
                dark:text-gray-200
              "
            >
              Name
            </label>

            <input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="
                w-full
                h-[52px]

                px-4

                rounded-xl

                bg-[#F5F5F7]
                dark:bg-gray-800

                text-[#11142D]
                dark:text-white

                border
                border-transparent
                dark:border-gray-700

                text-[14px]

                outline-none

                transition-all
              "
            />
          </div>

          {/* Email + Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            {/* Email */}

            <div>
              <label
                className="
                  block
                  mb-2

                  text-[15px]
                  font-medium

                  text-[#11142D]
                  dark:text-gray-200
                "
              >
                Email
              </label>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full
                  h-[48px]

                  px-4

                  rounded-xl

                  bg-[#F5F5F7]
                  dark:bg-gray-800

                  text-[#11142D]
                  dark:text-white

                  border
                  border-transparent
                  dark:border-gray-700

                  text-[14px]

                  outline-none

                  transition-all
                "
              />
            </div>

            {/* Address */}

            <div>
              <label
                className="
                  block
                  mb-2

                  text-[15px]
                  font-medium

                  text-[#11142D]
                  dark:text-gray-200
                "
              >
                Address
              </label>

              <div className="relative">
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="
                    w-full
                    h-[48px]

                    px-4

                    rounded-xl

                    bg-[#F5F5F7]
                    dark:bg-gray-800

                    text-[#11142D]
                    dark:text-white

                    border
                    border-transparent
                    dark:border-gray-700

                    text-[14px]

                    outline-none

                    transition-all
                  "
                />

                <MapPin
                  size={18}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2

                    text-[#5B5CF0]
                    dark:text-[#818CF8]
                  "
                />
              </div>
            </div>
          </div>

          {/* ================================= */}
          {/* PRODUCT DESCRIPTION */}
          {/* ================================= */}

          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2
                className="
                  text-[18px]
                  font-medium

                  text-[#11142D]
                  dark:text-white
                "
              >
                Product Description
              </h2>

              <button
                onClick={addProduct}
                className="
                  w-[42px]
                  h-[42px]

                  rounded-xl

                  bg-[#5B5CF0]
                  hover:bg-[#4B4DE6]

                  dark:bg-[#818CF8]

                  text-white

                  flex
                  items-center
                  justify-center

                  transition-all
                "
              >
                <Plus size={18} />
              </button>
            </div>

            {/* Desktop Table */}

            <div className="hidden lg:block overflow-x-auto">
              <div className="min-w-[850px]">
                <div
                  className="
          grid
          grid-cols-[280px_140px_120px_140px_60px]

          gap-3

          pb-3

          border-b
          border-[#ECECF5]
          dark:border-gray-700
        "
                >
                  <p className="text-[14px] font-medium text-[#11142D] dark:text-white">
                    Product Name
                  </p>

                  <p className="text-[14px] font-medium text-[#11142D] dark:text-white">
                    Price
                  </p>

                  <p className="text-[14px] font-medium text-[#11142D] dark:text-white">
                    Qty
                  </p>

                  <p className="text-[14px] font-medium text-[#11142D] dark:text-white">
                    Amount
                  </p>

                  <div />
                </div>

                <div className="space-y-3 mt-4">
                  {products.map((item) => (
                    <div
                      key={item.id}
                      className="
              grid
              grid-cols-[280px_140px_120px_140px_60px]

              gap-3
              items-center

              p-4

              bg-[#FAFAFC]
              dark:bg-gray-800

              border
              border-transparent
              dark:border-gray-700

              rounded-xl
            "
                    >
                      <input
                        value={item.name}
                        placeholder="Product Name"
                        onChange={(e) =>
                          updateProduct(item.id, "name", e.target.value)
                        }
                        className="
                w-full
                h-[48px]

                px-4

                rounded-lg

                bg-white
                dark:bg-gray-900

                text-[#11142D]
                dark:text-white

                border
                border-transparent
                dark:border-gray-700

                outline-none
              "
                      />

                      <input
                        type="number"
                        value={item.price}
                        onChange={(e) =>
                          updateProduct(
                            item.id,
                            "price",
                            Number(e.target.value),
                          )
                        }
                        className="
                w-full
                h-[48px]

                px-4

                rounded-lg

                bg-white
                dark:bg-gray-900

                text-[#11142D]
                dark:text-white

                border
                border-transparent
                dark:border-gray-700

                outline-none
              "
                      />

                      <input
                        type="number"
                        value={item.qty}
                        onChange={(e) =>
                          updateProduct(item.id, "qty", Number(e.target.value))
                        }
                        className="
                w-full
                h-[48px]

                px-4

                rounded-lg

                bg-white
                dark:bg-gray-900

                text-[#11142D]
                dark:text-white

                border
                border-transparent
                dark:border-gray-700

                outline-none
              "
                      />

                      <div
                        className="
                h-[48px]

                px-4

                rounded-lg

                bg-white
                dark:bg-gray-900

                border
                border-transparent
                dark:border-gray-700

                flex
                items-center

                text-[#39A85B]
                font-medium
              "
                      >
                        ${(item.price * item.qty).toLocaleString()}
                      </div>

                      <button
                        onClick={() => removeProduct(item.id)}
                        className="
                w-[42px]
                h-[42px]

                rounded-lg

                bg-[#FFF1F1]
                dark:bg-red-500/10

                text-[#E53935]

                flex
                items-center
                justify-center
              "
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================================= */}
          {/* SUMMARY */}
          {/* ================================= */}

          <div className="mt-8">
            <div
              className="
              bg-[#F8F8FA]
              dark:bg-gray-800

              border
              border-transparent
              dark:border-gray-700

              rounded-xl

              p-5

              transition-all
              duration-300
            "
            >
              {/* Total Items */}

              <div className="flex items-center justify-between">
                <span
                  className="
                  text-[15px]

                  text-[#8A8AA0]
                  dark:text-gray-400
                "
                >
                  Total Items
                </span>

                <span
                  className="
                  text-[15px]
                  font-medium

                  text-[#11142D]
                  dark:text-white
                "
                >
                  {products.length}
                </span>
              </div>

              {/* Divider */}

              <div
                className="
                my-4

                border-t
                border-[#ECECF5]
                dark:border-gray-700
              "
              />

              {/* Grand Total */}

              <div className="flex items-center justify-between">
                <span
                  className="
                  text-[15px]

                  text-[#8A8AA0]
                  dark:text-gray-400
                "
                >
                  Grand Total
                </span>

                <span
                  className="
                  text-[22px]
                  md:text-[26px]

                  font-semibold

                  text-[#5B5CF0]
                  dark:text-[#818CF8]
                "
                >
                  ${totalAmount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* ================================= */}
          {/* ACTION BUTTONS */}
          {/* ================================= */}

          <div
            className="
    grid
    grid-cols-1
    sm:grid-cols-2
    gap-4
    mt-8
  "
          >
            {/* Send Invoice */}

            <button
              className="
      h-[52px]

      rounded-xl

      border-2
      border-[#5B5CF0]

      bg-transparent

      text-[#5B5CF0]
      dark:text-[#818CF8]

      hover:bg-[#F4F3FF]
      dark:hover:bg-[#312E81]

      text-[15px]
      font-medium

      transition-all
      duration-300
    "
            >
              Send Invoice
            </button>

            {/* Create Invoice */}

            <button
              className="
      h-[52px]

      rounded-xl

      bg-[#5B5CF0]
      hover:bg-[#4C4DE0]

      dark:bg-[#6366F1]
      dark:hover:bg-[#4F46E5]

      text-white

      text-[15px]
      font-medium

      shadow-lg
      shadow-[#5B5CF0]/20
      dark:shadow-[#6366F1]/30

      transition-all
      duration-300
    "
            >
              Create Invoice
            </button>
          </div>
        </div>

        {/* ================================= */}
        {/* RIGHT PREVIEW PANEL */}
        {/* ================================= */}

        <div
          className="
            bg-white
            dark:bg-gray-900

            border
            border-transparent
            dark:border-gray-800

            rounded-2xl
            p-6
            md:p-8

            shadow-sm
            dark:shadow-none

            transition-all
            duration-300
          "
        >
          {/* Preview Header */}

          <div
            className="
      flex
      flex-col
      sm:flex-row
      sm:items-center
      sm:justify-between
      gap-4
      mb-8
    "
          >
            <h2
              className="
        text-[24px]
        md:text-[32px]
        font-semibold

        text-[#11142D]
        dark:text-white

        transition-colors
      "
            >
              Preview
            </h2>

            <div className="flex gap-3">
              {/* Download Button */}
              <button
                className="
      w-[42px]
      h-[42px]

      rounded-xl

      bg-[#F5F5F7]
      dark:bg-slate-800

      border
      border-transparent
      dark:border-slate-700

      flex
      items-center
      justify-center

      text-[#666688]
      dark:text-gray-300

      hover:bg-[#ECECFF]
      hover:text-[#5B5CF0]

      dark:hover:bg-slate-700
      dark:hover:text-indigo-400

      transition-all
      duration-300
    "
              >
                <Download size={18} />
              </button>

              {/* Print Button */}
              <button
                className="
      w-[42px]
      h-[42px]

      rounded-xl

      bg-[#F5F5F7]
      dark:bg-slate-800

      border
      border-transparent
                dark:border-slate-700

                flex
                items-center
                justify-center

                text-[#666688]
                dark:text-gray-300

                hover:bg-[#ECECFF]
                hover:text-[#5B5CF0]

                dark:hover:bg-slate-700
                dark:hover:text-indigo-400

                transition-all
                duration-300
              "
              >
                <Printer size={18} />
              </button>
            </div>
          </div>
          {/* ================================= */}
          {/* INVOICE PREVIEW */}
          {/* ================================= */}

          <div className="mt-10">
            {/* ================================= */}
            {/* TOP SECTION */}
            {/* ================================= */}

            <div className="flex flex-col sm:flex-row justify-between gap-8">
              {/* Company */}
              <div>
                {logo ? (
                  <img
                    src={logo}
                    alt="logo"
                    className="
            w-[80px]
            h-[80px]
            rounded-xl
            object-cover
          "
                  />
                ) : (
                  <div
                    className="
            w-[80px]
            h-[80px]
            rounded-xl

            bg-[#5B5CF0]
            dark:bg-indigo-600

            text-white
            text-[40px]
            font-bold

            flex
            items-center
            justify-center
          "
                  >
                    J
                  </div>
                )}

                <p
                  className="
          mt-4
          text-[14px]
          text-[#8A8AA0]
          dark:text-gray-400
        "
                >
                  Company Address
                </p>

                <p
                  className="
          text-[14px]
          text-[#11142D]
          dark:text-white
        "
                >
                  New York, USA
                </p>
              </div>

              {/* Invoice Info */}
              <div className="sm:text-right">
                <h1
                  className="
          text-[34px]
          md:text-[48px]
          font-bold

          text-[#11142D]
          dark:text-white
        "
                >
                  Invoice
                </h1>

                <p
                  className="
          mt-2
          text-[15px]
          text-[#8A8AA0]
          dark:text-gray-400
        "
                >
                  {invoiceId}
                </p>

                <p
                  className="
          text-[14px]
          text-[#8A8AA0]
          dark:text-gray-400
        "
                >
                  {date}
                </p>
              </div>
            </div>

            {/* ================================= */}
            {/* CUSTOMER INFO */}
            {/* ================================= */}

            <div className="mt-10">
              <h3
                className="
        text-[15px]
        font-medium
        uppercase
        tracking-wide

        text-[#8A8AA0]
        dark:text-gray-400
      "
              >
                Invoice To
              </h3>

              <h2
                className="
        mt-3
        text-[24px]
        font-semibold

        text-[#11142D]
        dark:text-white
      "
              >
                {customerName}
              </h2>

              <p
                className="
        mt-2
        text-[15px]

        text-[#8A8AA0]
        dark:text-gray-400
      "
              >
                {email}
              </p>

              <p
                className="
        mt-1
        text-[15px]

        text-[#8A8AA0]
        dark:text-gray-400
      "
              >
                {address}
              </p>
            </div>

            {/* ================================= */}
            {/* PRODUCT TABLE */}
            {/* ================================= */}

            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr
                    className="
            border-b
            border-[#ECECF5]
            dark:border-gray-800
          "
                  >
                    <th className="py-4 text-left text-[14px] font-medium text-[#8A8AA0] dark:text-gray-400">
                      Product
                    </th>

                    <th className="py-4 text-center text-[14px] font-medium text-[#8A8AA0] dark:text-gray-400">
                      Qty
                    </th>

                    <th className="py-4 text-center text-[14px] font-medium text-[#8A8AA0] dark:text-gray-400">
                      Price
                    </th>

                    <th className="py-4 text-right text-[14px] font-medium text-[#8A8AA0] dark:text-gray-400">
                      Amount
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((item) => (
                    <tr
                      key={item.id}
                      className="
              border-b
              border-[#F3F3F7]
              dark:border-gray-800
            "
                    >
                      <td className="py-5 text-[15px] text-[#11142D] dark:text-white">
                        {item.name || "-"}
                      </td>

                      <td className="py-5 text-center text-[15px] text-[#11142D] dark:text-white">
                        {item.qty}
                      </td>

                      <td className="py-5 text-center text-[15px] text-[#11142D] dark:text-white">
                        ${item.price.toLocaleString()}
                      </td>

                      <td className="py-5 text-right text-[15px] font-medium text-green-600 dark:text-green-400">
                        ${(item.price * item.qty).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ================================= */}
            {/* TOTALS */}
            {/* ================================= */}

            <div className="flex justify-end mt-10">
              <div className="w-full max-w-[320px]">
                <div className="flex justify-between">
                  <span className="text-[15px] text-[#8A8AA0] dark:text-gray-400">
                    Subtotal
                  </span>

                  <span className="text-[15px] text-[#11142D] dark:text-white">
                    ${totalAmount.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between mt-3">
                  <span className="text-[15px] text-[#8A8AA0] dark:text-gray-400">
                    Tax
                  </span>

                  <span className="text-[15px] text-[#11142D] dark:text-white">
                    $0
                  </span>
                </div>

                <div
                  className="
          border-t
          border-[#ECECF5]
          dark:border-gray-800

          mt-5
          pt-5
        "
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[18px] font-medium text-[#11142D] dark:text-white">
                      Total
                    </span>

                    <span
                      className="
              text-[30px]
              font-bold

              text-[#5B5CF0]
              dark:text-indigo-400
            "
                    >
                      ${totalAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ================================= */}
            {/* FOOTER */}
            {/* ================================= */}

            <div
              className="
      mt-14
      pt-8

      border-t
      border-[#ECECF5]
      dark:border-gray-800
    "
            >
              <h4
                className="
        text-[16px]
        font-medium

        text-[#11142D]
        dark:text-white
      "
              >
                Notes
              </h4>

              <p
                className="
        mt-3
        text-[14px]
        leading-7

        text-[#8A8AA0]
        dark:text-gray-400
      "
              >
                Thank you for your business. Payment is expected within 15 days
                from invoice date. Please contact us if you have any questions
                regarding this invoice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
