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
    <div className="min-h-screen bg-[#F5F5F7]">
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
            rounded-2xl
            p-6
            md:p-8
          "
        >
          {/* Title */}

          <h1
            className="
              text-[20px]
              md:text-[32px]
              font-medium
              text-[#11142D]
              mb-8
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
                flex
                items-center
                justify-center
                cursor-pointer
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
                <Camera size={34} className="text-[#6A6A80]" />
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className="
                  text-[15px]
                  font-medium
                  text-[#11142D]
                  mb-2
                  block
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
                  bg-[#F5F5F7]
                  rounded-xl
                  px-4
                  text-[14px]
                  outline-none
                "
              />
            </div>

            <div>
              <label
                className="
                  text-[15px]
                  font-medium
                  text-[#11142D]
                  mb-2
                  block
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
                    bg-[#F5F5F7]
                    text-[#11142D]
                    rounded-xl
                    px-4
                    text-[14px]
                    outline-none
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
                  "
                />
              </div>
            </div>
          </div>

          {/* Name */}

          <div className="mt-5">
            <label
              className="
                text-[15px]
                font-medium
                text-[#11142D]
                mb-2
                block
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
                bg-[#F5F5F7]
                text-[#11142D]
                rounded-xl
                px-4
                text-[14px]
                outline-none
              "
            />
          </div>

          {/* Email + Address */}

          <div className="grid grid-cols-2 gap-4 mt-5">
            <div>
              <label
                className="
                  text-[15px]
                  font-medium
                  text-[#11142D]
                  mb-2
                  block
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
                  bg-[#F5F5F7]
                  text-[#11142D]
                  rounded-xl
                  px-4
                  text-[14px]
                  outline-none
                "
              />
            </div>

            <div>
              <label
                className="
                  text-[15px]
                  font-medium
                  text-[#11142D]
                  mb-2
                  block
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
                    bg-[#F5F5F7]
                    text-[#11142D]
                    rounded-xl
                    px-4
                    text-[14px]
                    outline-none
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
                  "
                />
              </div>
            </div>
          </div>
          {/* ================================= */}
          {/* PRODUCT DESCRIPTION */}
          {/* ================================= */}

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
        text-white
        flex
        items-center
        justify-center
      "
              >
                <Plus size={18} />
              </button>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <div className="min-w-[850px]">
                {/* Header */}

                <div
                  className="
          grid
          grid-cols-[280px_140px_120px_140px_60px]
          gap-3
          pb-3
          border-b
          border-[#ECECF5]
        "
                >
                  <p className="text-[14px] font-medium text-[#11142D]">
                    Product Name
                  </p>

                  <p className="text-[14px] font-medium text-[#11142D]">
                    Price
                  </p>

                  <p className="text-[14px] font-medium text-[#11142D]">Qty</p>

                  <p className="text-[14px] font-medium text-[#11142D]">
                    Amount
                  </p>

                  <div />
                </div>

                {/* Rows */}

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
              rounded-xl
            "
                    >
                      {/* Product Name */}

                      <input
                        value={item.name}
                        placeholder="Product Name"
                        onChange={(e) =>
                          updateProduct(item.id, "name", e.target.value)
                        }
                        className="
                w-full
                min-w-0
                h-[48px]
                bg-white
                rounded-lg
                px-4
                text-[14px]
                text-[#11142D]
                outline-none
              "
                      />

                      {/* Price */}

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
                min-w-0
                h-[48px]
                bg-white
                rounded-lg
                px-4
                text-[14px]
                text-[#11142D]
                outline-none
              "
                      />

                      {/* Qty */}

                      <input
                        type="number"
                        value={item.qty}
                        onChange={(e) =>
                          updateProduct(item.id, "qty", Number(e.target.value))
                        }
                        className="
                w-full
                min-w-0
                h-[48px]
                bg-white
                rounded-lg
                px-4
                text-[14px]
                text-[#11142D]
                outline-none
              "
                      />

                      {/* Amount */}

                      <div
                        className="
                h-[48px]
                bg-white
                rounded-lg
                flex
                items-center
                px-4
                text-[#39A85B]
                font-medium
              "
                      >
                        ${(item.price * item.qty).toLocaleString()}
                      </div>

                      {/* Delete */}

                      <button
                        onClick={() => removeProduct(item.id)}
                        className="
                w-[42px]
                h-[42px]
                rounded-lg
                bg-[#FFF1F1]
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

            {/* Mobile & Tablet Cards */}

            <div className="lg:hidden space-y-4">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="
          bg-[#FAFAFC]
          rounded-xl
          p-4
          space-y-3
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
            bg-white
            rounded-lg
            px-4
            text-[#11142D]
            outline-none
          "
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="number"
                      value={item.price}
                      onChange={(e) =>
                        updateProduct(item.id, "price", Number(e.target.value))
                      }
                      className="
              w-full
              h-[48px]
              bg-white
              rounded-lg
              px-4
              text-[#11142D]
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
              bg-white
              rounded-lg
              px-4
              text-[#11142D]
              outline-none
            "
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[12px] text-[#8A8AA0]">Amount</p>

                      <p className="text-[16px] font-medium text-[#39A85B]">
                        ${(item.price * item.qty).toLocaleString()}
                      </p>
                    </div>

                    <button
                      onClick={() => removeProduct(item.id)}
                      className="
              w-[42px]
              h-[42px]
              rounded-lg
              bg-[#FFF1F1]
              text-[#E53935]
              flex
              items-center
              justify-center
            "
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================================= */}
          {/* SUMMARY */}
          {/* ================================= */}

          <div className="mt-8">
            <div
              className="
                bg-[#F8F8FA]
                rounded-xl
                p-5
              "
            >
              <div className="flex justify-between">
                <span
                  className="
                    text-[15px]
                    text-[#8A8AA0]
                  "
                >
                  Total Items
                </span>

                <span
                  className="
                    text-[15px]
                    font-medium
                    text-[#11142D]
                  "
                >
                  {products.length}
                </span>
              </div>

              <div className="flex justify-between mt-4">
                <span
                  className="
                    text-[15px]
                    text-[#8A8AA0]
                  "
                >
                  Grand Total
                </span>

                <span
                  className="
                    text-[22px]
                    font-semibold
                    text-[#5B5CF0]
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
              grid-cols-2
              gap-4
              mt-8
            "
          >
            <button
              className="
                h-[52px]
                rounded-xl
                border
                border-[#5B5CF0]
                text-[#5B5CF0]
                text-[15px]
                font-medium
              "
            >
              Send Invoice
            </button>

            <button
              className="
                h-[52px]
                rounded-xl
                bg-[#5B5CF0]
                text-white
                text-[15px]
                font-medium
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
            rounded-2xl
            p-6
            md:p-8
          "
        >
          {/* Preview Header */}

          <div className="flex justify-between items-center">
            <h2
              className="
                text-[20px]
                md:text-[32px]
                font-medium
                text-[#11142D]
              "
            >
              Preview
            </h2>

            <div className="flex gap-3">
              <button
                className="
                  w-[42px]
                  h-[42px]
                  rounded-xl
                  bg-[#F5F5F7]
                  flex
                  items-center
                  justify-center
                "
              >
                <Download size={18} />
              </button>

              <button
                className="
                  w-[42px]
                  h-[42px]
                  rounded-xl
                  bg-[#F5F5F7]
                  flex
                  items-center
                  justify-center
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
            {/* Top Section */}

            <div className="flex justify-between items-start">
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
                  "
                >
                  Company Address
                </p>

                <p
                  className="
                    text-[14px]
                    text-[#11142D]
                  "
                >
                  New York, USA
                </p>
              </div>

              <div className="text-right">
                <h1
                  className="
                    text-[34px]
                    md:text-[48px]
                    font-bold
                    text-[#11142D]
                  "
                >
                  Invoice
                </h1>

                <p
                  className="
                    mt-2
                    text-[15px]
                    text-[#8A8AA0]
                  "
                >
                  {invoiceId}
                </p>

                <p
                  className="
                    text-[14px]
                    text-[#8A8AA0]
                  "
                >
                  {date}
                </p>
              </div>
            </div>

            {/* Customer Info */}

            <div className="mt-10">
              <h3
                className="
                  text-[15px]
                  font-medium
                  text-[#8A8AA0]
                  uppercase
                  tracking-wide
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
                "
              >
                {customerName}
              </h2>

              <p
                className="
                  mt-2
                  text-[15px]
                  text-[#8A8AA0]
                "
              >
                {email}
              </p>

              <p
                className="
                  mt-1
                  text-[15px]
                  text-[#8A8AA0]
                "
              >
                {address}
              </p>
            </div>

            {/* Product Table */}

            <div className="mt-12 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr
                    className="
                      border-b
                      border-[#ECECF5]
                    "
                  >
                    <th
                      className="
                        py-4
                        text-left
                        text-[14px]
                        font-medium
                        text-[#8A8AA0]
                      "
                    >
                      Product
                    </th>

                    <th
                      className="
                        py-4
                        text-center
                        text-[14px]
                        font-medium
                        text-[#8A8AA0]
                      "
                    >
                      Qty
                    </th>

                    <th
                      className="
                        py-4
                        text-center
                        text-[14px]
                        font-medium
                        text-[#8A8AA0]
                      "
                    >
                      Price
                    </th>

                    <th
                      className="
                        py-4
                        text-right
                        text-[14px]
                        font-medium
                        text-[#8A8AA0]
                      "
                    >
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
                      "
                    >
                      <td
                        className="
                          py-5
                          text-[15px]
                          text-[#11142D]
                        "
                      >
                        {item.name || "-"}
                      </td>

                      <td
                        className="
                          py-5
                          text-center
                          text-[15px]
                          text-[#11142D]
                        "
                      >
                        {item.qty}
                      </td>

                      <td
                        className="
                          py-5
                          text-center
                          text-[15px]
                          text-[#11142D]
                        "
                      >
                        ${item.price.toLocaleString()}
                      </td>

                      <td
                        className="
                          py-5
                          text-right
                          text-[15px]
                          font-medium
                          text-[#39A85B]
                        "
                      >
                        ${(item.price * item.qty).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals */}

            <div
              className="
                flex
                justify-end
                mt-10
              "
            >
              <div
                className="
                  w-full
                  max-w-[300px]
                "
              >
                <div className="flex justify-between">
                  <span
                    className="
                      text-[15px]
                      text-[#8A8AA0]
                    "
                  >
                    Subtotal
                  </span>

                  <span
                    className="
                      text-[15px]
                      text-[#11142D]
                    "
                  >
                    ${totalAmount.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between mt-3">
                  <span
                    className="
                      text-[15px]
                      text-[#8A8AA0]
                    "
                  >
                    Tax
                  </span>

                  <span
                    className="
                      text-[15px]
                      text-[#11142D]
                    "
                  >
                    $0
                  </span>
                </div>

                <div
                  className="
                    border-t
                    border-[#ECECF5]
                    mt-5
                    pt-5
                  "
                >
                  <div className="flex justify-between">
                    <span
                      className="
                        text-[18px]
                        font-medium
                        text-[#11142D]
                      "
                    >
                      Total
                    </span>

                    <span
                      className="
                        text-[30px]
                        font-bold
                        text-[#5B5CF0]
                      "
                    >
                      ${totalAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}

            <div
              className="
                mt-14
                pt-8
                border-t
                border-[#ECECF5]
              "
            >
              <h4
                className="
                  text-[16px]
                  font-medium
                  text-[#11142D]
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
