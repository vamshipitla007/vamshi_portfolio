import { useState } from "react";
import { ChevronDown, Pencil } from "lucide-react";
import Toggle from "@/components/ui/Toggle";

const tabs = [
  "Edit Profile",
  "Preference",
  "Security",
];

const initialForm = {
  name: "Charlene Reed",
  username: "Charlene Reed",
  email: "charlenereed@gmail.com",
  password: "**********",
  dob: "25 January 1990",
  presentAddress: "San Jose, California, USA",
  permanentAddress: "San Jose, California, USA",
  city: "San Jose",
  postalCode: "45962",
  country: "USA",
};




const PreferenceTab = () => {
  const [preferences, setPreferences] = useState({
    currency: "USD",
    timezone: "(GMT-12:00) International Date Line West",
    digitalCurrency: true,
    merchantOrder: false,
    recommendations: true,
  });

  const handleToggle = (
    key:
      | "digitalCurrency"
      | "merchantOrder"
      | "recommendations"
  ) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };



  return (
    <div className="space-y-7">
      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* CURRENCY */}
        <div>
          <label className="text-[13px] md:text-[15px] text-[#232323] block mb-2">
            Currency
          </label>

          <input
            type="text"
            value={preferences.currency}
            onChange={(e) =>
              setPreferences((prev) => ({
                ...prev,
                currency: e.target.value,
              }))
            }
            className="w-full h-[46px] md:h-[50px] rounded-[14px] border border-[#DFEAF2] px-5 text-[12px] md:text-[14px] text-[#718EBF] outline-none"
          />
        </div>

        {/* TIMEZONE */}
        <div>
          <label className="text-[13px] md:text-[15px] text-[#232323] block mb-2">
            Time Zone
          </label>

          <input
            type="text"
            value={preferences.timezone}
            onChange={(e) =>
              setPreferences((prev) => ({
                ...prev,
                timezone: e.target.value,
              }))
            }
            className="w-full h-[46px] md:h-[50px] rounded-[14px] border border-[#DFEAF2] px-5 text-[12px] md:text-[14px] text-[#718EBF] outline-none"
          />
        </div>
      </div>

      {/* NOTIFICATION */}
      <div>
        <h2 className="text-[18px] font-semibold text-[#343C6A] mb-5">
          Notification
        </h2>

        <div className="space-y-5">
          {/* DIGITAL */}
          <div className="flex items-center gap-4">
            <Toggle
              active={preferences.digitalCurrency}
              onClick={() =>
                handleToggle("digitalCurrency")
              }
            />

            <p className="text-[13px] md:text-[15px] text-[#232323]">
              I send or receive digital currency
            </p>
          </div>

          {/* MERCHANT */}
          <div className="flex items-center gap-4">
            <Toggle
              active={preferences.merchantOrder}
              onClick={() =>
                handleToggle("merchantOrder")
              }
            />

            <p className="text-[13px] md:text-[15px] text-[#232323]">
              I receive merchant order
            </p>
          </div>

          {/* RECOMMENDATION */}
          <div className="flex items-center gap-4">
            <Toggle
              active={preferences.recommendations}
              onClick={() =>
                handleToggle("recommendations")
              }
            />

            <p className="text-[13px] md:text-[15px] text-[#232323]">
              There are recommendation for my account
            </p>
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-center md:justify-end pt-4">
        <button className="w-full md:w-[170px] h-[48px] md:h-[50px] rounded-[14px] bg-[#1814F3] text-white text-[14px] md:text-[16px] font-medium">
          Save
        </button>
      </div>
    </div>
  );
};

const SecurityTab = () => {
  const [security, setSecurity] = useState({
    twoFactor: true,
    currentPassword: "**********",
    newPassword: "**********",
  });


  return (
    <div className="space-y-8">
      {/* TWO FACTOR */}
      <div>
        <h2 className="text-[18px] font-semibold text-[#343C6A] mb-5">
          Two-factor Authentication
        </h2>

        <div className="flex items-center gap-4">
          <Toggle
            active={security.twoFactor}
            onClick={() =>
              setSecurity((prev) => ({
                ...prev,
                twoFactor: !prev.twoFactor,
              }))
            }
          />

          <p className="text-[13px] md:text-[15px] text-[#232323] leading-6">
            Enable or disable two factor authentication
          </p>
        </div>
      </div>

      {/* PASSWORD */}
      <div>
        <h2 className="text-[18px] font-semibold text-[#343C6A] mb-5">
          Change Password
        </h2>

        <div className="grid grid-cols-1 gap-5 max-w-[420px]">
          {/* CURRENT */}
          <div>
            <label className="text-[13px] md:text-[15px] text-[#232323] block mb-2">
              Current Password
            </label>

            <input
              type="password"
              value={security.currentPassword}
              onChange={(e) =>
                setSecurity((prev) => ({
                  ...prev,
                  currentPassword: e.target.value,
                }))
              }
              className="w-full h-[46px] md:h-[50px] rounded-[14px] border border-[#DFEAF2] px-5 text-[12px] md:text-[14px] text-[#718EBF] outline-none"
            />
          </div>

          {/* NEW */}
          <div>
            <label className="text-[13px] md:text-[15px] text-[#232323] block mb-2">
              New Password
            </label>

            <input
              type="password"
              value={security.newPassword}
              onChange={(e) =>
                setSecurity((prev) => ({
                  ...prev,
                  newPassword: e.target.value,
                }))
              }
              className="w-full h-[46px] md:h-[50px] rounded-[14px] border border-[#DFEAF2] px-5 text-[12px] md:text-[14px] text-[#718EBF] outline-none"
            />
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-center md:justify-end pt-4">
        <button className="w-full md:w-[170px] h-[48px] md:h-[50px] rounded-[14px] bg-[#1814F3] text-white text-[14px] md:text-[16px] font-medium">
          Save
        </button>
      </div>
    </div>
  );
};


const BankDashSettings = () => {
  const [activeTab, setActiveTab] = useState(
    "Edit Profile"
  );

  const [formData, setFormData] =
    useState(initialForm);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saved Data:", formData);
  };

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="bg-white rounded-[24px] overflow-hidden">
        {/* TABS */}
        <div className="px-5 md:px-8 pt-5 border-b border-[#E6EFF5] overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-8 md:gap-12 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-4 text-[13px] md:text-[16px] font-medium whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? "text-[#1814F3]"
                    : "text-[#718EBF]"
                }`}
              >
                {tab}

                {activeTab === tab && (
                  <div className="absolute left-0 bottom-0 w-full h-[3px] rounded-full bg-[#1814F3]"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5 md:p-8">
          {/* EDIT PROFILE */}
          {activeTab === "Edit Profile" && (
            <div className="flex flex-col xl:flex-row gap-8">
              {/* PROFILE IMAGE */}
              <div className="flex justify-center xl:block">
                <div className="relative w-fit">
                  <img
                    src="https://i.pravatar.cc/300?img=47"
                    alt="profile"
                    className="w-[140px] h-[140px] md:w-[170px] md:h-[170px] rounded-full object-cover"
                  />

                  <button className="absolute bottom-2 right-1 w-[38px] h-[38px] rounded-full bg-[#1814F3] flex items-center justify-center shadow-lg">
                    <Pencil className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* FORM */}
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                  {/* NAME */}
                  <div>
                    <label className="text-[13px] md:text-[15px] text-[#232323] block mb-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-[46px] md:h-[50px] rounded-[14px] border border-[#DFEAF2] px-4 text-[12px] md:text-[14px] text-[#718EBF] outline-none"
                    />
                  </div>

                  {/* USERNAME */}
                  <div>
                    <label className="text-[13px] md:text-[15px] text-[#232323] block mb-2">
                      User Name
                    </label>

                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="w-full h-[46px] md:h-[50px] rounded-[14px] border border-[#DFEAF2] px-4 text-[12px] md:text-[14px] text-[#718EBF] outline-none"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="text-[13px] md:text-[15px] text-[#232323] block mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-[46px] md:h-[50px] rounded-[14px] border border-[#DFEAF2] px-4 text-[12px] md:text-[14px] text-[#718EBF] outline-none"
                    />
                  </div>

                  {/* PASSWORD */}
                  <div>
                    <label className="text-[13px] md:text-[15px] text-[#232323] block mb-2">
                      Password
                    </label>

                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full h-[46px] md:h-[50px] rounded-[14px] border border-[#DFEAF2] px-4 text-[12px] md:text-[14px] text-[#718EBF] outline-none"
                    />
                  </div>

                  {/* DOB */}
                  <div>
                    <label className="text-[13px] md:text-[15px] text-[#232323] block mb-2">
                      Date of Birth
                    </label>

                    <div className="relative">
                      <select
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="appearance-none w-full h-[46px] md:h-[50px] rounded-[14px] border border-[#DFEAF2] px-4 text-[12px] md:text-[14px] text-[#718EBF] outline-none"
                      >
                        <option>
                          25 January 1990
                        </option>

                        <option>
                          15 March 1995
                        </option>
                      </select>

                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718EBF]" />
                    </div>
                  </div>

                  {/* PRESENT ADDRESS */}
                  <div>
                    <label className="text-[13px] md:text-[15px] text-[#232323] block mb-2">
                      Present Address
                    </label>

                    <input
                      type="text"
                      name="presentAddress"
                      value={
                        formData.presentAddress
                      }
                      onChange={handleChange}
                      className="w-full h-[46px] md:h-[50px] rounded-[14px] border border-[#DFEAF2] px-4 text-[12px] md:text-[14px] text-[#718EBF] outline-none"
                    />
                  </div>

                  {/* PERMANENT ADDRESS */}
                  <div>
                    <label className="text-[13px] md:text-[15px] text-[#232323] block mb-2">
                      Permanent Address
                    </label>

                    <input
                      type="text"
                      name="permanentAddress"
                      value={
                        formData.permanentAddress
                      }
                      onChange={handleChange}
                      className="w-full h-[46px] md:h-[50px] rounded-[14px] border border-[#DFEAF2] px-4 text-[12px] md:text-[14px] text-[#718EBF] outline-none"
                    />
                  </div>

                  {/* CITY */}
                  <div>
                    <label className="text-[13px] md:text-[15px] text-[#232323] block mb-2">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full h-[46px] md:h-[50px] rounded-[14px] border border-[#DFEAF2] px-4 text-[12px] md:text-[14px] text-[#718EBF] outline-none"
                    />
                  </div>

                  {/* POSTAL */}
                  <div>
                    <label className="text-[13px] md:text-[15px] text-[#232323] block mb-2">
                      Postal Code
                    </label>

                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="w-full h-[46px] md:h-[50px] rounded-[14px] border border-[#DFEAF2] px-4 text-[12px] md:text-[14px] text-[#718EBF] outline-none"
                    />
                  </div>

                  {/* COUNTRY */}
                  <div>
                    <label className="text-[13px] md:text-[15px] text-[#232323] block mb-2">
                      Country
                    </label>

                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full h-[46px] md:h-[50px] rounded-[14px] border border-[#DFEAF2] px-4 text-[12px] md:text-[14px] text-[#718EBF] outline-none"
                    />
                  </div>
                </div>

                {/* BUTTON */}
                <div className="flex justify-center md:justify-end mt-7">
                  <button
                    onClick={handleSave}
                    className="w-full md:w-[170px] h-[48px] md:h-[50px] rounded-[14px] bg-[#1814F3] text-white text-[14px] md:text-[16px] font-medium"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* PREFERENCE */}
          {activeTab === "Preference" && (
            <PreferenceTab />
          )}

          {/* SECURITY */}
          {activeTab === "Security" && (
            <SecurityTab />
          )}
        </div>
      </div>
    </div>
  );
};

export default BankDashSettings;