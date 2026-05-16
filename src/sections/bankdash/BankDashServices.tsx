const topServices = [
  {
    title: "Life Insurance",
    subtitle: "Unlimited protection",
    bg: "bg-[#E7EDFF]",
    icon: "🛡️",
  },
  {
    title: "Shopping",
    subtitle: "Buy. Think. Grow",
    bg: "bg-[#FFF5D9]",
    icon: "🛍️",
  },
  {
    title: "Safety",
    subtitle: "We are your allies",
    bg: "bg-[#DCFAF8]",
    icon: "🛡",
  },
];

const servicesList = [
  {
    title: "Business loans",
    subtitle: "It is a long established",
    bg: "bg-[#FFE0EB]",
    icon: "💸",
    active: false,
  },
  {
    title: "Checking accounts",
    subtitle: "It is a long established",
    bg: "bg-[#FFF5D9]",
    icon: "💼",
    active: false,
  },
  {
    title: "Savings accounts",
    subtitle: "It is a long established",
    bg: "bg-[#FFE0EB]",
    icon: "📊",
    active: false,
  },
  {
    title: "Debit and credit cards",
    subtitle: "It is a long established",
    bg: "bg-[#E7EDFF]",
    icon: "👤",
    active: false,
  },
  {
    title: "Life Insurance",
    subtitle: "It is a long established",
    bg: "bg-[#DCFAF8]",
    icon: "🛡️",
    active: false,
  },
  {
    title: "Business loans",
    subtitle: "It is a long established",
    bg: "bg-[#FFE0EB]",
    icon: "💸",
    active: false,
  },
];

const BankDashServices = () => {
  return (
    <div className="space-y-5 max-w-[1400px] mx-auto">
      {/* TOP SERVICES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 overflow-x-hidden">
        {topServices.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-[22px] px-5 py-6 flex items-center gap-4 min-w-0"
          >
            <div
              className={`w-[60px] h-[60px] rounded-full flex items-center justify-center text-[24px] flex-shrink-0 ${item.bg}`}
            >
              {item.icon}
            </div>

            <div className="min-w-0">
              <h2 className="text-[15px] md:text-[17px] font-semibold text-[#232323] truncate">
                {item.title}
              </h2>

              <p className="text-[12px] md:text-[13px] text-[#718EBF] mt-1 truncate">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* SERVICE LIST */}
      <div>
        <h2 className="text-[18px] md:text-[20px] font-semibold text-[#343C6A] mb-4">
          Bank Services List
        </h2>

        {/* DESKTOP */}
        <div className="hidden lg:flex flex-col gap-4">
          {servicesList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[22px] px-5 py-4 flex items-center justify-between gap-4"
            >
              {/* LEFT */}
              <div className="flex items-center gap-4 min-w-0 w-[280px]">
                <div
                  className={`w-[60px] h-[60px] rounded-[18px] flex items-center justify-center text-[24px] flex-shrink-0 ${item.bg}`}
                >
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <h3 className="text-[15px] font-medium text-[#232323] truncate">
                    {item.title}
                  </h3>

                  <p className="text-[12px] text-[#718EBF] mt-1 truncate">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* CENTER */}
              <div className="hidden xl:block">
                <h3 className="text-[15px] font-medium text-[#232323]">
                  Lorem Ipsum
                </h3>

                <p className="text-[12px] text-[#718EBF] mt-1">
                  Many publishing
                </p>
              </div>

              <div className="hidden xl:block">
                <h3 className="text-[15px] font-medium text-[#232323]">
                  Lorem Ipsum
                </h3>

                <p className="text-[12px] text-[#718EBF] mt-1">
                  Many publishing
                </p>
              </div>

              <div className="hidden xl:block">
                <h3 className="text-[15px] font-medium text-[#232323]">
                  Lorem Ipsum
                </h3>

                <p className="text-[12px] text-[#718EBF] mt-1">
                  Many publishing
                </p>
              </div>

              {/* BUTTON */}
              <button
                className={`h-[42px] px-8 rounded-full border text-[14px] font-medium whitespace-nowrap transition-all ${
                  item.active
                    ? "border-[#1814F3] text-[#1814F3]"
                    : "border-[#9DB2D6] text-[#718EBF]"
                }`}
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* MOBILE */}
        <div className="lg:hidden space-y-3">
          {servicesList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-4 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-[54px] h-[54px] rounded-[16px] flex items-center justify-center text-[22px] flex-shrink-0 ${item.bg}`}
                >
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <h3 className="text-[14px] font-medium text-[#232323] truncate">
                    {item.title}
                  </h3>

                  <p className="text-[11px] text-[#718EBF] mt-1 truncate">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <button className="text-[12px] font-medium text-[#1814F3] whitespace-nowrap">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BankDashServices;
