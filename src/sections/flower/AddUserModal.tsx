import React, { useRef, useState } from "react";

import { CheckCircle2, Pencil, X } from "lucide-react";

interface AddUserModalProps {
  open: boolean;
  onClose: () => void;
}

type Step = "profile" | "address" | "payment" | "submission";

interface UserForm {
  avatar: string;

  firstName: string;

  lastName: string;

  email: string;

  countryCode: string;

  phone: string;

  status: string;

  address1: string;

  address2: string;

  city: string;

  country: string;

  state: string;

  postcode: string;

  payment: "Credit Card" | "PayPal";

  cardNumber: string;

  cardHolder: string;

  month: string;

  year: string;
}

const initialForm: UserForm = {
  avatar: "https://i.pravatar.cc/300?img=12",

  firstName: "Regina",

  lastName: "Cooper",

  email: "regina_cooper@mail.com",

  countryCode: "+1",

  phone: "(070) 4567-8800",

  status: "Active",

  address1: "",

  address2: "",

  city: "",

  country: "",

  state: "",

  postcode: "",

  payment: "Credit Card",

  cardNumber: "",

  cardHolder: "",

  month: "12",

  year: "2023",
};

const steps = [
  {
    id: "profile",
    label: "PROFILE",
  },
  {
    id: "address",
    label: "ADDRESS",
  },
  {
    id: "payment",
    label: "PAYMENT",
  },
  {
    id: "submission",
    label: "SUBMISSION",
  },
];

const AddUserModal: React.FC<AddUserModalProps> = ({ open, onClose }) => {
  const fileInput = useRef<HTMLInputElement>(null);

  const [step, setStep] = useState<Step>("profile");

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<UserForm>(initialForm);

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!open) return null;

  const change = (key: keyof UserForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [key]: "",
    }));
  };

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const url = URL.createObjectURL(file);

    change("avatar", url);
  };

  const validateProfile = () => {
    const e: Record<string, string> = {};

    if (!form.firstName.trim()) e.firstName = "Required";

    if (!form.lastName.trim()) e.lastName = "Required";

    if (!form.email.trim()) e.email = "Required";

    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";

    if (!form.phone.trim()) e.phone = "Required";

    setErrors(e);

    if (Object.keys(e).length) return;

    setStep("address");
  };

  const validateAddress = () => {
    const e: Record<string, string> = {};

    if (!form.address1.trim()) e.address1 = "Address is required";

    if (!form.city.trim()) e.city = "City is required";

    if (!form.country.trim()) e.country = "Country is required";

    if (!form.state.trim()) e.state = "State is required";

    if (!form.postcode.trim()) e.postcode = "Postcode is required";

    setErrors(e);

    if (Object.keys(e).length) return;

    setStep("payment");
  };

  const validatePayment = () => {
    if (form.payment === "PayPal") {
      setStep("submission");

      return;
    }

    const e: Record<string, string> = {};

    if (!form.cardNumber.trim()) e.cardNumber = "Card number is required";

    if (!form.cardHolder.trim()) e.cardHolder = "Card holder is required";

    setErrors(e);

    if (Object.keys(e).length) return;

    setStep("submission");
  };

  const submitForm = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1800));

    setLoading(false);

    alert("Customer created successfully!");

    setForm(initialForm);

    setErrors({});

    setStep("profile");

    onClose();
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setStep("profile");
    setLoading(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <div>
      <div
        onClick={handleClose}
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
        <div className="flex h-[92vh] w-full max-w-[980px] flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_25px_80px_rgba(0,0,0,.12)]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#ECECEC] px-8">
            <div className="flex gap-10">
              {steps.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setStep(item.id as Step)}
                  className={`relative py-6 text-[13px] font-semibold tracking-wide
                  ${step === item.id ? "text-[#2BA84A]" : "text-[#4B5563]"}`}
                >
                  {item.label}
                  {step === item.id && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#2BA84A]" />
                  )}
                </button>
              ))}
            </div>

            <button onClick={onClose} className="rounded-full bg-[#F7F8FA] p-3">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-8 py-8">
            {step === "profile" && (
              <>
                <h2 className="mb-8 text-[34px] font-semibold text-[#374151]">
                  Profile
                </h2>

                <div className="mb-10 flex justify-center">
                  <div className="relative">
                    <div className="flex h-[180px] w-[180px] items-center justify-center rounded-full border-2 border-dashed border-[#D9DDE5]">
                      <img
                        src={form.avatar}
                        className="h-[150px] w-[150px] rounded-full object-cover"
                      />
                    </div>

                    <button
                      onClick={() => fileInput.current?.click()}
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#ECECEC] bg-white shadow"
                    >
                      <Pencil size={16} />
                    </button>

                    <input
                      hidden
                      type="file"
                      accept="image/*"
                      ref={fileInput}
                      onChange={uploadImage}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[13px] text-[#8B95A7]">
                      First Name
                    </label>
                    <input
                      value={form.firstName}
                      onChange={(e) => change("firstName", e.target.value)}
                      className="h-12 w-full rounded-2xl border border-[#E5E7EB] px-4 text-[14px] outline-none focus:border-[#2BA84A]"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] text-[#8B95A7]">
                      Last Name
                    </label>
                    <input
                      value={form.lastName}
                      onChange={(e) => change("lastName", e.target.value)}
                      className="h-12 w-full rounded-2xl border border-[#E5E7EB] px-4"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-[13px] text-[#8B95A7]">
                      Email
                    </label>
                    <input
                      value={form.email}
                      onChange={(e) => change("email", e.target.value)}
                      className="h-12 w-full rounded-2xl border border-[#E5E7EB] px-4"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-[13px] text-[#8B95A7]">
                      Phone
                    </label>
                    <div className="flex">
                      <select
                        value={form.countryCode}
                        onChange={(e) => change("countryCode", e.target.value)}
                        className="h-12 rounded-l-2xl border border-r-0 border-[#E5E7EB] bg-[#F8F9FC] px-3"
                      >
                        <option>+1</option>
                        <option>+91</option>
                        <option>+44</option>
                      </select>
                      <input
                        value={form.phone}
                        onChange={(e) => change("phone", e.target.value)}
                        className="h-12 flex-1 rounded-r-2xl border border-[#E5E7EB] px-4"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-[13px] text-[#8B95A7]">
                      Status
                    </label>
                    <select
                      value={form.status}
                      onChange={(e) => change("status", e.target.value)}
                      className="h-12 w-full rounded-2xl border border-[#E5E7EB] px-4"
                    >
                      <option>Active</option>
                      <option>Blocked</option>
                    </select>
                  </div>

                  <div className="mt-10 flex justify-end">
                    <button
                      onClick={validateProfile}
                      className="rounded-xl bg-[#2BA84A] px-10 py-3 text-[14px] font-semibold text-white transition hover:bg-[#23913D]"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
                {/* ← WAS MISSING: closes the grid wrapper */}
              </>
            )}
            {/* other steps (security, etc.) go here, still inside the "flex-1 overflow-y-auto" div */}
            {/* ========================================================= */}
            {/* ADDRESS */}
            {/* ========================================================= */}

            {step === "address" && (
              <>
                <h2 className="mb-8 text-[34px] font-semibold text-[#374151]">
                  Address
                </h2>

                <div className="space-y-6">
                  {/* Address Line 1 */}

                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#8B95A7]">
                      Address Line 1
                    </label>

                    <input
                      value={form.address1}
                      onChange={(e) => change("address1", e.target.value)}
                      placeholder="993 E. Brewer St. Holtsville"
                      className={`h-12 w-full rounded-2xl border px-4 text-[14px] text-[#374151] outline-none transition

                  ${
                    errors.address1
                      ? "border-red-500"
                      : "border-[#E5E7EB] focus:border-[#2BA84A]"
                  }`}
                    />

                    {errors.address1 && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.address1}
                      </p>
                    )}
                  </div>

                  {/* Address Line 2 */}

                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#8B95A7]">
                      Address Line 2
                    </label>

                    <input
                      value={form.address2}
                      onChange={(e) => change("address2", e.target.value)}
                      placeholder="Optional"
                      className="h-12 w-full rounded-2xl border border-[#E5E7EB] px-4 text-[14px] text-[#374151] outline-none focus:border-[#2BA84A]"
                    />
                  </div>

                  {/* City */}

                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#8B95A7]">
                      City
                    </label>

                    <input
                      value={form.city}
                      onChange={(e) => change("city", e.target.value)}
                      placeholder="New York"
                      className={`h-12 w-full rounded-2xl border px-4 text-[14px] text-[#374151] outline-none transition

                  ${
                    errors.city
                      ? "border-red-500"
                      : "border-[#E5E7EB] focus:border-[#2BA84A]"
                  }`}
                    />
                  </div>

                  {/* Country */}

                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#8B95A7]">
                      Country
                    </label>

                    <select
                      value={form.country}
                      onChange={(e) => change("country", e.target.value)}
                      className={`h-12 w-full rounded-2xl border px-4 text-[14px] text-[#374151] outline-none transition

                  ${
                    errors.country
                      ? "border-red-500"
                      : "border-[#E5E7EB] focus:border-[#2BA84A]"
                  }`}
                    >
                      <option value="">Select Country</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                      <option>India</option>
                    </select>
                  </div>

                  {/* State + Zip */}

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-[#8B95A7]">
                        State / Region
                      </label>

                      <input
                        value={form.state}
                        onChange={(e) => change("state", e.target.value)}
                        placeholder="New York"
                        className={`h-12 w-full rounded-2xl border px-4 text-[14px] text-[#374151] outline-none transition

                    ${
                      errors.state
                        ? "border-red-500"
                        : "border-[#E5E7EB] focus:border-[#2BA84A]"
                    }`}
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-[#8B95A7]">
                        Postcode
                      </label>

                      <input
                        value={form.postcode}
                        onChange={(e) => change("postcode", e.target.value)}
                        placeholder="11742"
                        className={`h-12 w-full rounded-2xl border px-4 text-[14px] text-[#374151] outline-none transition

                    ${
                      errors.postcode
                        ? "border-red-500"
                        : "border-[#E5E7EB] focus:border-[#2BA84A]"
                    }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Footer */}

                <div className="mt-10 flex items-center justify-between">
                  <button
                    onClick={() => setStep("profile")}
                    className="rounded-xl border border-[#E5E7EB] px-8 py-3 text-[14px] font-medium text-[#4B5563] transition hover:bg-[#F8F9FC]"
                  >
                    Previous
                  </button>

                  <button
                    onClick={validateAddress}
                    className="rounded-xl bg-[#2BA84A] px-10 py-3 text-[14px] font-semibold text-white transition hover:bg-[#23913D]"
                  >
                    Next Step
                  </button>
                </div>
              </>
            )}

            {/* ========================================================= */}
            {/* PAYMENT CONTINUES IN PART 3 */}

            {/* ========================================================= */}
            {/* PAYMENT */}
            {/* ========================================================= */}

            {step === "payment" && (
              <>
                <h2 className="mb-8 text-[34px] font-semibold text-[#374151]">
                  Payment
                </h2>

                <div className="space-y-8">
                  {/* Payment Method */}

                  <div>
                    <label className="mb-4 block text-[13px] font-medium text-[#8B95A7]">
                      Choose payment method
                    </label>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      {/* Credit Card */}

                      <button
                        type="button"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            payment: "Credit Card",
                          }))
                        }
                        className={`flex h-14 items-center gap-3 rounded-2xl border px-5 transition

                    ${
                      form.payment === "Credit Card"
                        ? "border-[#2BA84A] bg-[#F8FFF9]"
                        : "border-[#ECECEC] bg-[#F8F9FB]"
                    }`}
                      >
                        <CheckCircle2
                          size={18}
                          className={
                            form.payment === "Credit Card"
                              ? "text-[#2BA84A]"
                              : "text-[#D1D5DB]"
                          }
                        />

                        <span className="text-[15px] font-medium text-[#374151]">
                          Credit Card
                        </span>
                      </button>

                      {/* PayPal */}

                      <button
                        type="button"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            payment: "PayPal",
                          }))
                        }
                        className={`flex h-14 items-center gap-3 rounded-2xl border px-5 transition

                    ${
                      form.payment === "PayPal"
                        ? "border-[#2BA84A] bg-[#F8FFF9]"
                        : "border-[#ECECEC] bg-[#F8F9FB]"
                    }`}
                      >
                        <CheckCircle2
                          size={18}
                          className={
                            form.payment === "PayPal"
                              ? "text-[#2BA84A]"
                              : "text-[#D1D5DB]"
                          }
                        />

                        <span className="text-[15px] font-medium text-[#374151]">
                          PayPal
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Credit Card Fields */}

                  {form.payment === "Credit Card" && (
                    <>
                      {/* Card Number */}

                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-[#8B95A7]">
                          Card Number
                        </label>

                        <div className="relative">
                          <input
                            value={form.cardNumber}
                            onChange={(e) =>
                              change("cardNumber", e.target.value)
                            }
                            placeholder="5890 - 6858 - 6332 - 9843"
                            className={`h-12 w-full rounded-2xl border px-4 pr-14 text-[14px] text-[#374151] outline-none transition

                        ${
                          errors.cardNumber
                            ? "border-red-500"
                            : "border-[#E5E7EB] focus:border-[#2BA84A]"
                        }`}
                          />

                          {/* Card Logo */}

                          <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-1">
                            <div className="h-4 w-4 rounded-full bg-[#EB001B]" />

                            <div className="-ml-2 h-4 w-4 rounded-full bg-[#F79E1B]/90" />
                          </div>
                        </div>

                        {errors.cardNumber && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.cardNumber}
                          </p>
                        )}
                      </div>

                      {/* Card Holder */}

                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-[#8B95A7]">
                          Card Holder
                        </label>

                        <input
                          value={form.cardHolder}
                          onChange={(e) => change("cardHolder", e.target.value)}
                          placeholder="Regina Cooper"
                          className={`h-12 w-full rounded-2xl border px-4 text-[14px] text-[#374151] outline-none transition

                      ${
                        errors.cardHolder
                          ? "border-red-500"
                          : "border-[#E5E7EB] focus:border-[#2BA84A]"
                      }`}
                        />
                      </div>

                      {/* Month & Year */}

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="mb-2 block text-[13px] font-medium text-[#8B95A7]">
                            Month
                          </label>

                          <select
                            value={form.month}
                            onChange={(e) => change("month", e.target.value)}
                            className="h-12 w-full rounded-2xl border border-[#E5E7EB] px-4 text-[14px] text-[#374151] outline-none focus:border-[#2BA84A]"
                          >
                            {Array.from({ length: 12 }).map((_, i) => (
                              <option
                                key={i + 1}
                                value={String(i + 1).padStart(2, "0")}
                              >
                                {String(i + 1).padStart(2, "0")}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="mb-2 block text-[13px] font-medium text-[#8B95A7]">
                            Year
                          </label>

                          <select
                            value={form.year}
                            onChange={(e) => change("year", e.target.value)}
                            className="h-12 w-full rounded-2xl border border-[#E5E7EB] px-4 text-[14px] text-[#374151] outline-none focus:border-[#2BA84A]"
                          >
                            {Array.from({ length: 10 }).map((_, i) => (
                              <option key={2024 + i} value={2024 + i}>
                                {2024 + i}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {/* PayPal View */}

                  {form.payment === "PayPal" && (
                    <div className="rounded-2xl border border-[#2BA84A] bg-[#F8FFF9] p-6">
                      <h3 className="text-[16px] font-semibold text-[#374151]">
                        PayPal Selected
                      </h3>

                      <p className="mt-2 text-[13px] leading-6 text-[#6B7280]">
                        The customer will complete payment securely using their
                        PayPal account after the user has been created.
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer */}

                <div className="mt-10 flex items-center justify-between">
                  <button
                    onClick={() => setStep("address")}
                    className="rounded-xl border border-[#E5E7EB] px-8 py-3 text-[14px] font-medium text-[#4B5563] transition hover:bg-[#F8F9FC]"
                  >
                    Previous
                  </button>

                  <button
                    onClick={validatePayment}
                    disabled={loading}
                    className="rounded-xl bg-[#2BA84A] px-10 py-3 text-[14px] font-semibold text-white transition hover:bg-[#23913D] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Loading..." : "Next Step"}
                  </button>
                </div>
              </>
            )}

            {/* ========================================================= */}
            {/* SUBMISSION CONTINUES IN PART 4 */}

            {/* ========================================================= */}
            {/* SUBMISSION */}
            {/* ========================================================= */}

            {step === "submission" && (
              <>
                <h2 className="mb-10 text-[34px] font-semibold text-[#374151]">
                  Submission
                </h2>

                <div className="space-y-8">
                  {/* Profile Details */}

                  <div>
                    <h3 className="mb-4 text-[22px] font-semibold text-[#374151]">
                      Profile Details
                    </h3>

                    <div className="space-y-3 text-[15px]">
                      <div className="flex gap-2">
                        <span className="font-medium text-[#98A2B3]">
                          Name:
                        </span>

                        <span className="text-[#374151]">
                          {form.firstName} {form.lastName}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <span className="font-medium text-[#98A2B3]">
                          Email:
                        </span>

                        <span className="text-[#374151]">{form.email}</span>
                      </div>

                      <div className="flex gap-2">
                        <span className="font-medium text-[#98A2B3]">
                          Phone:
                        </span>

                        <span className="text-[#374151]">
                          {form.countryCode} {form.phone}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <span className="font-medium text-[#98A2B3]">
                          Status:
                        </span>

                        <span className="text-[#374151]">{form.status}</span>
                      </div>
                    </div>
                  </div>

                  <hr className="border-[#ECECEC]" />

                  {/* Address */}

                  <div>
                    <h3 className="mb-4 text-[22px] font-semibold text-[#374151]">
                      Address Details
                    </h3>

                    <div className="space-y-3 text-[15px]">
                      <div className="flex gap-2">
                        <span className="font-medium text-[#98A2B3]">
                          Address:
                        </span>

                        <span className="text-[#374151]">{form.address1}</span>
                      </div>

                      {form.address2 && (
                        <div className="flex gap-2">
                          <span className="font-medium text-[#98A2B3]">
                            Address 2:
                          </span>

                          <span className="text-[#374151]">
                            {form.address2}
                          </span>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <span className="font-medium text-[#98A2B3]">
                          City:
                        </span>

                        <span className="text-[#374151]">{form.city}</span>
                      </div>

                      <div className="flex gap-2">
                        <span className="font-medium text-[#98A2B3]">
                          Country:
                        </span>

                        <span className="text-[#374151]">{form.country}</span>
                      </div>

                      <div className="flex gap-2">
                        <span className="font-medium text-[#98A2B3]">
                          State:
                        </span>

                        <span className="text-[#374151]">{form.state}</span>
                      </div>

                      <div className="flex gap-2">
                        <span className="font-medium text-[#98A2B3]">
                          Postcode:
                        </span>

                        <span className="text-[#374151]">{form.postcode}</span>
                      </div>
                    </div>
                  </div>

                  <hr className="border-[#ECECEC]" />

                  {/* Payment */}

                  <div>
                    <h3 className="mb-4 text-[22px] font-semibold text-[#374151]">
                      Payment Details
                    </h3>

                    <div className="space-y-3 text-[15px]">
                      <div className="flex gap-2">
                        <span className="font-medium text-[#98A2B3]">
                          Payment:
                        </span>

                        <span className="text-[#374151]">{form.payment}</span>
                      </div>

                      {form.payment === "Credit Card" && (
                        <>
                          <div className="flex gap-2">
                            <span className="font-medium text-[#98A2B3]">
                              Card Number:
                            </span>

                            <span className="text-[#374151]">
                              {form.cardNumber}
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <span className="font-medium text-[#98A2B3]">
                              Card Holder:
                            </span>

                            <span className="text-[#374151]">
                              {form.cardHolder}
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <span className="font-medium text-[#98A2B3]">
                              Expiry:
                            </span>

                            <span className="text-[#374151]">
                              {form.month}/{form.year}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer */}

                <div className="mt-12 flex items-center justify-between">
                  <button
                    onClick={() => setStep("payment")}
                    disabled={loading}
                    className="rounded-xl border border-[#E5E7EB] px-8 py-3 text-[14px] font-medium text-[#4B5563] transition hover:bg-[#F8F9FC]"
                  >
                    Previous
                  </button>

                  <button
                    onClick={submitForm}
                    disabled={loading}
                    className="rounded-xl bg-[#2BA84A] px-10 py-3 text-[14px] font-semibold text-white transition hover:bg-[#23913D] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </>
            )}
          </div>
          {/* closes the modal container's inner flex-1 content wrapper */}
        </div>
        {/* closes the h-[92vh] modal card */}
      </div>
      {/* closes the fixed overlay wrapper */}
    </div>
  );
};

export default AddUserModal;
