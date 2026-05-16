import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const cards = [
  {
    id: 1,
    dark: false,
    gradient: "from-[#539BFF] to-[#396AFF]",
  },
  {
    id: 2,
    dark: true,
    gradient: "from-[#4C49ED] to-[#0A06F4]",
  },
  {
    id: 3,
    dark: false,
    white: true,
  },
];

const expenseData = [
  {
    name: "DBL Bank",
    value: 25,
    color: "#396AFF",
  },
  {
    name: "BRC Bank",
    value: 20,
    color: "#FF82AC",
  },
  {
    name: "ABM Bank",
    value: 30,
    color: "#16DBCC",
  },
  {
    name: "MCP Bank",
    value: 25,
    color: "#FFB100",
  },
];

const cardList = [
  {
    bank: "DBL Bank",
    number: "**** **** 5600",
    holder: "William",
    bg: "bg-[#E7EDFF]",
  },
  {
    bank: "BRC Bank",
    number: "**** **** 4300",
    holder: "Michel",
    bg: "bg-[#FFE0EB]",
  },
  {
    bank: "ABM Bank",
    number: "**** **** 7560",
    holder: "Edward",
    bg: "bg-[#FFF5D9]",
  },
];

const settings = [
  {
    title: "Block Card",
    desc: "Instantly block your card",
    bg: "bg-[#FFF5D9]",
  },
  {
    title: "Change Pin Code",
    desc: "Choose another pin code",
    bg: "bg-[#E7EDFF]",
  },
  {
    title: "Add to Google Pay",
    desc: "Withdraw without any card",
    bg: "bg-[#FFE0EB]",
  },
  {
    title: "Add to Apple Pay",
    desc: "Withdraw without any card",
    bg: "bg-[#DCFAF8]",
  },
  {
    title: "Add to Apple Store",
    desc: "Withdraw without any card",
    bg: "bg-[#DCFAF8]",
  },
];

const BankDashCreditCard = () => {
  return (
    <div className="space-y-5 max-w-[1400px] mx-auto">
      {/* TOP CARDS */}
      <div>
        <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-3">
          My Cards
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`rounded-[20px] overflow-hidden ${
                card.white
                  ? "bg-white border border-[#DFEAF2]"
                  : `bg-gradient-to-r ${card.gradient} text-white`
              }`}
            >
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p
                      className={`text-[10px] ${
                        card.white
                          ? "text-[#718EBF]"
                          : "text-white/80"
                      }`}
                    >
                      Balance
                    </p>

                    <h3
                      className={`text-[20px] font-semibold mt-1 ${
                        card.white
                          ? "text-[#343C6A]"
                          : "text-white"
                      }`}
                    >
                      $5,756
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-lg ${
                      card.white
                        ? "bg-[#343C6A]/20"
                        : "bg-white/20"
                    }`}
                  ></div>
                </div>

                <div className="flex justify-between mt-7">
                  <div>
                    <p
                      className={`text-[10px] ${
                        card.white
                          ? "text-[#718EBF]"
                          : "text-white/80"
                      }`}
                    >
                      CARD HOLDER
                    </p>

                    <h4
                      className={`text-[12px] mt-1 ${
                        card.white
                          ? "text-[#343C6A]"
                          : "text-white"
                      }`}
                    >
                      Eddy Cusuma
                    </h4>
                  </div>

                  <div>
                    <p
                      className={`text-[10px] ${
                        card.white
                          ? "text-[#718EBF]"
                          : "text-white/80"
                      }`}
                    >
                      VALID THRU
                    </p>

                    <h4
                      className={`text-[12px] mt-1 ${
                        card.white
                          ? "text-[#343C6A]"
                          : "text-white"
                      }`}
                    >
                      12/22
                    </h4>
                  </div>
                </div>
              </div>

              <div
                className={`h-[56px] px-4 flex items-center justify-between ${
                  card.white
                    ? "border-t border-[#DFEAF2]"
                    : "bg-white/10"
                }`}
              >
                <h2
                  className={`text-[18px] tracking-wide ${
                    card.white
                      ? "text-[#343C6A]"
                      : "text-white"
                  }`}
                >
                  3778 **** 1234
                </h2>

                <div className="flex">
                  <div
                    className={`w-7 h-7 rounded-full ${
                      card.white
                        ? "bg-[#9199AF]/60"
                        : "bg-white/50"
                    }`}
                  ></div>

                  <div
                    className={`w-7 h-7 rounded-full -ml-3 ${
                      card.white
                        ? "bg-[#9199AF]/30"
                        : "bg-white/30"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CHART + CARD LIST */}
      <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-5">
        {/* EXPENSE */}
        <div>
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-3">
            Card Expense Statistics
          </h2>

          <div className="bg-white rounded-[20px] p-4">
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseData}
                    dataKey="value"
                    innerRadius={35}
                    outerRadius={75}
                    paddingAngle={2}
                  >
                    {expenseData.map((item, index) => (
                      <Cell
                        key={index}
                        fill={item.color}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              {expenseData.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2"
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: item.color,
                    }}
                  ></div>

                  <p className="text-[11px] text-[#718EBF]">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CARD LIST */}
        <div>
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-3">
            Card List
          </h2>

          <div className="space-y-4">
            {cardList.map((item) => (
              <div
                key={item.bank}
                className="bg-white rounded-[20px] p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className={`w-[48px] h-[48px] rounded-[16px] flex-shrink-0 ${item.bg}`}
                  ></div>

                  <div>
                    <h3 className="text-[13px] font-medium text-[#232323]">
                      Card Type
                    </h3>

                    <p className="text-[11px] text-[#718EBF] mt-1">
                      Secondary
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[13px] font-medium text-[#232323]">
                    Bank
                  </h3>

                  <p className="text-[11px] text-[#718EBF] mt-1">
                    {item.bank}
                  </p>
                </div>

                <div>
                  <h3 className="text-[13px] font-medium text-[#232323]">
                    Card Number
                  </h3>

                  <p className="text-[11px] text-[#718EBF] mt-1">
                    {item.number}
                  </p>
                </div>

                <div>
                  <h3 className="text-[13px] font-medium text-[#232323]">
                    Name in Card
                  </h3>

                  <p className="text-[11px] text-[#718EBF] mt-1">
                    {item.holder}
                  </p>
                </div>

                <button className="text-[12px] font-medium text-[#1814F3] whitespace-nowrap">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FORM + SETTINGS */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-5">
        {/* ADD CARD */}
        <div>
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-3">
            Add New Card
          </h2>

          <div className="bg-white rounded-[20px] p-5">
            <p className="text-[12px] leading-6 text-[#718EBF] max-w-[700px]">
              Credit Card generally means a plastic card issued by
              Scheduled Commercial Banks assigned to a Cardholder,
              with a credit limit, that can be used to purchase
              goods and services on credit or obtain cash advances.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <label className="text-[12px] text-[#232323] block mb-2">
                  Card Type
                </label>

                <input
                  type="text"
                  placeholder="Classic"
                  className="w-full h-[44px] rounded-[12px] border border-[#DFEAF2] px-4 text-[12px] outline-none"
                />
              </div>

              <div>
                <label className="text-[12px] text-[#232323] block mb-2">
                  Name On Card
                </label>

                <input
                  type="text"
                  placeholder="My Cards"
                  className="w-full h-[44px] rounded-[12px] border border-[#DFEAF2] px-4 text-[12px] outline-none"
                />
              </div>

              <div>
                <label className="text-[12px] text-[#232323] block mb-2">
                  Card Number
                </label>

                <input
                  type="text"
                  placeholder="**** **** **** ****"
                  className="w-full h-[44px] rounded-[12px] border border-[#DFEAF2] px-4 text-[12px] outline-none"
                />
              </div>

              <div>
                <label className="text-[12px] text-[#232323] block mb-2">
                  Expiration Date
                </label>

                <select className="w-full h-[44px] rounded-[12px] border border-[#DFEAF2] px-4 text-[12px] outline-none text-[#718EBF]">
                  <option>25 January 2025</option>
                </select>
              </div>
            </div>

            <button className="mt-6 h-[42px] px-8 rounded-[12px] bg-[#1814F3] text-white text-[13px] font-medium">
              Add Card
            </button>
          </div>
        </div>

        {/* SETTINGS */}
        <div>
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-3">
            Card Setting
          </h2>

          <div className="bg-white rounded-[20px] p-4 space-y-4">
            {settings.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4"
              >
                <div
                  className={`w-[48px] h-[48px] rounded-[16px] flex-shrink-0 ${item.bg}`}
                ></div>

                <div>
                  <h3 className="text-[13px] font-medium text-[#232323]">
                    {item.title}
                  </h3>

                  <p className="text-[11px] text-[#718EBF] mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDashCreditCard;