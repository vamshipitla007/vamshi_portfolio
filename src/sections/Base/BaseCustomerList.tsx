/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Plus, MoreHorizontal, Phone, MapPin, Mail } from "lucide-react";

type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: "Male" | "Female";
  role: string;
  address: string;
  image: string;
};

export default function BaseCustomerList() {
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: 1,
      name: "John Deo",
      email: "johndoe2211@gmail.com",
      phone: "+33757005467",
      gender: "Male",
      role: "UI/UX Designer",
      address: "2239 Hog Camp Road Schaumburg",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Shelby Goode",
      email: "shelbygoode481@gmail.com",
      phone: "+33757005467",
      gender: "Female",
      role: "Product Designer",
      address: "112 New Street California",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 3,
      name: "Robert Bacins",
      email: "robertbacins4182@gmail.com",
      phone: "+33757005467",
      gender: "Male",
      role: "Frontend Developer",
      address: "234 Main Street New York",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      id: 4,
      name: "John Carilo",
      email: "johncarilo182@gmail.com",
      phone: "+33757005467",
      gender: "Male",
      role: "Backend Developer",
      address: "567 River Road Chicago",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
      id: 5,
      name: "Adriene Watson",
      email: "adrienewatson82@gmail.com",
      phone: "+83757305467",
      gender: "Female",
      role: "Marketing Manager",
      address: "450 Sunset Blvd Los Angeles",
      image: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      id: 6,
      name: "James Mullican",
      email: "jamesmullican5346@gmail.com",
      phone: "+33757005467",
      gender: "Male",
      role: "Mobile Developer",
      address: "879 Green Street Miami",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ]);
  // Selected customer (opens right panel)
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>(
    customers[0],
  );

  const [panelType, setPanelType] = useState<"details" | "add" | null>(
    "details",
  );

  const [openAddCustomer, setOpenAddCustomer] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "Male" as "Male" | "Female",
    image: "",
  });

  const addCustomer = () => {
    if (!form.firstName || !form.lastName || !form.email || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    const newCustomer: Customer = {
      id: Date.now(),
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      phone: form.phone,
      gender: form.gender,
      role: "New Customer",
      address: "Not Added",
      image: form.image || "https://randomuser.me/api/portraits/men/1.jpg",
    };

    setCustomers((prev) => [newCustomer, ...prev]);

    setSelectedCustomer(newCustomer);

    setOpenAddCustomer(false);

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "Male",
      image: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <h1 className="text-[20px] md:text-[32px] font-medium text-[#11142D]">
          Customer List
        </h1>

        <button
          onClick={() => {
            setPanelType("add");
          }}
          className="
    h-[48px]
    px-5
    bg-[#5B5CF0]
    rounded-xl
    text-white
    text-[15px]
    font-medium
    flex items-center gap-2
  "
        >
          <Plus size={18} />
          Add Customer
        </button>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_290px] gap-6">
        {/* Customer Table */}
        <div>
          {/* Table Heading */}
          <div
            className="
              hidden md:grid
              grid-cols-[1.2fr_1.5fr_1fr_120px_50px]
              text-[#8A8AA0]
              text-[14px]
              px-5 mb-3
            "
          >
            <p>Name</p>
            <p>Email</p>
            <p>Phone Number</p>
            <p>Gender</p>
            <div />
          </div>

          {/* Customer Rows */}
          <div className="space-y-3">
            {customers.map((customer) => (
              <button
                key={customer.id}
                onClick={() => {
                  setSelectedCustomer(customer);
                  setPanelType("details");
                }}
                className={`
                  w-full
                  bg-white
                  rounded-2xl
                  p-4
                  text-left
                  transition-all
                  border-2

                  ${
                    selectedCustomer.id === customer.id
                      ? "border-[#1D9BF0]"
                      : "border-transparent"
                  }

                  md:grid
                  md:grid-cols-[1.2fr_1.5fr_1fr_120px_50px]
                  items-center
                  gap-3
                  hover:shadow-sm
                `}
              >
                {/* User */}
                <div className="flex items-center gap-3">
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="
                      w-9 h-9
                      rounded-full
                      object-cover
                    "
                  />

                  <p className="text-[15px] text-[#11142D] font-medium">
                    {customer.name}
                  </p>
                </div>

                {/* Email */}
                <p
                  className="
                    text-[14px]
                    text-[#555577]
                    mt-2 md:mt-0
                  "
                >
                  {customer.email}
                </p>

                {/* Phone */}
                <p
                  className="
                    text-[14px]
                    text-[#555577]
                    mt-2 md:mt-0
                  "
                >
                  {customer.phone}
                </p>

                {/* Gender */}
                <div className="mt-3 md:mt-0">
                  <span
                    className={`
                      px-4
                      h-[30px]
                      inline-flex
                      items-center
                      rounded-full
                      text-[13px]
                      font-medium

                      ${
                        customer.gender === "Male"
                          ? "bg-[#EEF4FF] text-[#5B8CF6]"
                          : "bg-[#FFF0EB] text-[#FA8458]"
                      }
                    `}
                  >
                    {customer.gender}
                  </span>
                </div>

                {/* Action */}
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="
                    text-[#A0A0B5]
                    mt-3 md:mt-0
                  "
                >
                  <MoreHorizontal size={20} />
                </button>
              </button>
            ))}
          </div>
        </div>

        {/* Right Details Panel */}
        {/* Part 2 continues here */}
        {/* Right Details Panel */}

        <div
          className="
    bg-white
    rounded-2xl
    p-6
    h-fit
    sticky
    top-6
  "
        >
          {panelType === "details" && (
            <div
              className="
    bg-white
    rounded-2xl
    p-6
    h-fit
    sticky
    top-6
  "
            >
              {/* Profile */}
              <div className="text-center">
                <img
                  src={selectedCustomer.image}
                  alt={selectedCustomer.name}
                  className="
        w-[72px]
        h-[72px]
        rounded-full
        object-cover
        mx-auto
      "
                />

                <h2
                  className="
      mt-4
      text-[28px]
      font-medium
      text-[#11142D]
    "
                >
                  {selectedCustomer.name}
                </h2>

                <p
                  className="
      text-[15px]
      text-[#8A8AA0]
      mt-1
    "
                >
                  {selectedCustomer.role}
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-[#ECECF5] my-6" />

              {/* Contact Info */}
              <div>
                <h3
                  className="
      text-[18px]
      font-medium
      text-[#11142D]
      mb-5
    "
                >
                  Contact Info
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div
                      className="
          w-9 h-9 rounded-full
          bg-[#F5F5F7]
          flex items-center justify-center
        "
                    >
                      <Mail size={16} color="#8A8AA0" />
                    </div>

                    <p
                      className="
          text-[14px]
          text-[#555577]
          break-all
        "
                    >
                      {selectedCustomer.email}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className="
          w-9 h-9 rounded-full
          bg-[#F5F5F7]
          flex items-center justify-center
        "
                    >
                      <Phone size={16} color="#8A8AA0" />
                    </div>

                    <p
                      className="
          text-[14px]
          text-[#555577]
        "
                    >
                      {selectedCustomer.phone}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="
          w-9 h-9 rounded-full
          bg-[#F5F5F7]
          flex items-center justify-center
        "
                    >
                      <MapPin size={16} color="#8A8AA0" />
                    </div>

                    <p
                      className="
          text-[14px]
          text-[#555577]
        "
                    >
                      {selectedCustomer.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#ECECF5] my-6" />

              {/* Performance */}
              <div>
                <div className="flex justify-between items-center">
                  <h3
                    className="
        text-[18px]
        font-medium
        text-[#11142D]
      "
                  >
                    Performance
                  </h3>

                  <MoreHorizontal size={18} color="#A0A0B5" />
                </div>

                {/* Bar Chart */}
                <div
                  className="
      mt-6
      flex items-end
      justify-between
      h-[110px]
      px-2
    "
                >
                  {[
                    { month: "Jan", height: 35 },
                    { month: "Feb", height: 70, active: true },
                    { month: "Mar", height: 40 },
                    { month: "Apr", height: 55 },
                    { month: "May", height: 80 },
                    { month: "Jun", height: 95 },
                  ].map((item) => (
                    <div
                      key={item.month}
                      className="flex flex-col items-center"
                    >
                      <div
                        className={`
              w-[6px]
              rounded-full
              ${item.active ? "bg-[#FA8458]" : "bg-[#F4D7CF]"}
            `}
                        style={{
                          height: item.height,
                        }}
                      />

                      <span
                        className="
            mt-3
            text-[12px]
            text-[#8A8AA0]
          "
                      >
                        {item.month}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress Cards */}
                <div
                  className="
      grid
      grid-cols-2
      gap-4
      mt-6
    "
                >
                  <div
                    className="
        border border-[#ECECF5]
        rounded-xl
        h-[90px]
        flex items-center justify-center
      "
                  >
                    <div
                      className="
          w-[55px]
          h-[55px]
          rounded-full
          border-[5px]
          border-[#F6C445]
          flex items-center justify-center
          text-[13px]
          font-medium
          text-[#11142D]
        "
                    >
                      70%
                    </div>
                  </div>

                  <div
                    className="
        border border-[#ECECF5]
        rounded-xl
        h-[90px]
        flex items-center justify-center
      "
                  >
                    <div
                      className="
          w-[55px]
          h-[55px]
          rounded-full
          border-[5px]
          border-[#5B8CF6]
          flex items-center justify-center
          text-[13px]
          font-medium
          text-[#11142D]
        "
                    >
                      60%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {panelType === "add" && (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-[24px] font-medium text-[#11142D]">
                  Add Customer
                </h2>

                <button
                  onClick={() => setPanelType(null)}
                  className="
            w-8 h-8
            rounded-full
            bg-[#FFF1F1]
            text-[#FA8458]
          "
                >
                  ✕
                </button>
              </div>

              {/* Avatar */}
              <div className="flex justify-center mb-8">
                <div
                  className="
            w-[110px]
            h-[110px]
            rounded-full
            bg-[#F5F5F7]
            flex items-center
            justify-center
            text-[30px]
          "
                >
                  📷
                </div>
              </div>

              {/* Form */}
              <div className="space-y-4">
                <input
                  placeholder="First Name"
                  className="
            w-full h-[48px]
            rounded-xl
            bg-[#F5F5F7]
            text-[#000000]
            px-4 text-[14px]
            outline-none
          "
                />

                <input
                  placeholder="Last Name"
                  className="
            w-full h-[48px]
            rounded-xl
            bg-[#F5F5F7]
            text-[#000000]
            px-4 text-[14px]
            outline-none
          "
                />

                <input
                  placeholder="Email"
                  className="
            w-full h-[48px]
            rounded-xl
            bg-[#F5F5F7]
            text-[#000000]
            px-4 text-[14px]
            outline-none
          "
                />

                <input
                  placeholder="Phone Number"
                  className="
            w-full h-[48px]
            rounded-xl
            bg-[#F5F5F7]
            text-[#000000]
            px-4 text-[14px]
            outline-none
          "
                />

                <select
                  className="
            w-full h-[48px]
            rounded-xl
            bg-[#F5F5F7]
            px-4 text-[14px]
            text-[#000000]
            outline-none
          "
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>

                <button
                  className="
            w-full h-[50px]
            mt-3
            rounded-xl
            bg-[#5B5CF0]
            text-white
            text-[15px]
            font-medium
          "
                  onClick={addCustomer}
                >
                  Add Customer
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
