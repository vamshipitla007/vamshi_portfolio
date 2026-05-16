import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    id: 1,
    balance: "$5,756",
    holder: "Eddy Cusuma",
    valid: "12/22",
    dark: true,
  },
  {
    id: 2,
    balance: "$5,756",
    holder: "Eddy Cusuma",
    valid: "12/22",
    dark: false,
  },
];

const expenseData = [
  { month: "Aug", height: "h-[90px]" },
  { month: "Sep", height: "h-[140px]" },
  { month: "Oct", height: "h-[92px]" },
  { month: "Nov", height: "h-[52px]" },
  { month: "Dec", height: "h-[128px]", active: true },
  { month: "Jan", height: "h-[84px]" },
];

const transactions = [
  {
    id: "#12548796",
    title: "Spotify Subscription",
    type: "Shopping",
    card: "1234 ****",
    date: "28 Jan, 12.30 AM",
    amount: "-$2,500",
    status: "expense",
  },
  {
    id: "#12548797",
    title: "Freepik Sales",
    type: "Transfer",
    card: "1234 ****",
    date: "25 Jan, 10.40 PM",
    amount: "+$750",
    status: "income",
  },
  {
    id: "#12548798",
    title: "Mobile Service",
    type: "Service",
    card: "1234 ****",
    date: "20 Jan, 10.40 PM",
    amount: "-$150",
    status: "expense",
  },
  {
    id: "#12548799",
    title: "Wilson",
    type: "Transfer",
    card: "1234 ****",
    date: "15 Jan, 03.29 PM",
    amount: "-$1050",
    status: "expense",
  },
  {
    id: "#12548800",
    title: "Emilly",
    type: "Transfer",
    card: "1234 ****",
    date: "14 Jan, 10.40 PM",
    amount: "+$840",
    status: "income",
  },
];

const tabs = ["All Transactions", "Income", "Expense"];

const BankDashTransaction = () => {
  const [activeTab, setActiveTab] = useState("All Transactions");

  const filteredTransactions = useMemo(() => {
    if (activeTab === "Income") {
      return transactions.filter((item) => item.status === "income");
    }

    if (activeTab === "Expense") {
      return transactions.filter((item) => item.status === "expense");
    }

    return transactions;
  }, [activeTab]);

  return (
    <div className="space-y-5 max-w-[1400px] mx-auto">
      {/* TOP */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_320px] gap-[24px]">
        {/* CARDS */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A]">
              My Cards
            </h2>

            <button className="text-[12px] md:text-[13px] font-semibold text-[#343C6A]">
              + Add Card
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`rounded-[20px] overflow-hidden ${
                  card.dark
                    ? "bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] text-white"
                    : "bg-white border border-[#DFEAF2] text-[#343C6A]"
                }`}
              >
                <div className="p-4 md:p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p
                        className={`text-[10px] ${
                          card.dark ? "text-white/80" : "text-[#718EBF]"
                        }`}
                      >
                        Balance
                      </p>

                      <h3 className="text-[18px] md:text-[22px] font-semibold mt-1">
                        {card.balance}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-lg ${
                        card.dark ? "bg-white/20" : "bg-[#343C6A]"
                      }`}
                    ></div>
                  </div>

                  <div className="flex justify-between mt-7">
                    <div>
                      <p
                        className={`text-[10px] ${
                          card.dark ? "text-white/80" : "text-[#718EBF]"
                        }`}
                      >
                        CARD HOLDER
                      </p>

                      <h4 className="text-[12px] md:text-[13px] mt-1">
                        {card.holder}
                      </h4>
                    </div>

                    <div>
                      <p
                        className={`text-[10px] ${
                          card.dark ? "text-white/80" : "text-[#718EBF]"
                        }`}
                      >
                        VALID THRU
                      </p>

                      <h4 className="text-[12px] md:text-[13px] mt-1">
                        {card.valid}
                      </h4>
                    </div>
                  </div>
                </div>

                <div
                  className={`h-[56px] px-4 flex items-center justify-between ${
                    card.dark ? "bg-white/10" : "border-t border-[#DFEAF2]"
                  }`}
                >
                  <h2 className="text-[16px] md:text-[20px] tracking-wide">
                    3778 **** 1234
                  </h2>

                  <div className="flex">
                    <div
                      className={`w-7 h-7 rounded-full ${
                        card.dark ? "bg-white/50" : "bg-[#9199AF]/60"
                      }`}
                    ></div>

                    <div
                      className={`w-7 h-7 rounded-full -ml-3 ${
                        card.dark ? "bg-white/30" : "bg-[#9199AF]/30"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EXPENSE */}
        <div>
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-6">
            My Expense
          </h2>

          <div className="bg-white rounded-[20px] p-5 flex items-end justify-between">
            {expenseData.map((item) => (
              <div
                key={item.month}
                className="flex flex-col items-center gap-3"
              >
                <div
                  className={`w-[40px] md:w-[42px] rounded-[12px] ${
                    item.active ? "bg-[#16DBCC]" : "bg-[#EDF1F7]"
                  } ${item.height}`}
                ></div>

                <p className="text-[11px] text-[#718EBF]">{item.month}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TRANSACTION */}
      <div>
        <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-4">
          Recent Transactions
        </h2>

        {/* TABS */}
        <div className="flex items-center gap-6 md:gap-8 border-b border-[#E6EFF5] overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-3 text-[12px] md:text-[14px] font-medium whitespace-nowrap transition-all ${
                activeTab === tab ? "text-[#1814F3]" : "text-[#718EBF]"
              }`}
            >
              {tab}

              {activeTab === tab && (
                <div className="absolute left-0 bottom-0 w-full h-[3px] rounded-full bg-[#1814F3]"></div>
              )}
            </button>
          ))}
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden lg:block bg-white rounded-[22px] mt-5 overflow-hidden overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E6EFF5]">
                <th className="text-left py-4 px-5 text-[12px] font-semibold text-[#718EBF]">
                  Description
                </th>

                <th className="text-left py-4 px-5 text-[12px] font-semibold text-[#718EBF]">
                  Transaction ID
                </th>

                <th className="text-left py-4 px-5 text-[12px] font-semibold text-[#718EBF]">
                  Type
                </th>

                <th className="text-left py-4 px-5 text-[12px] font-semibold text-[#718EBF]">
                  Card
                </th>

                <th className="text-left py-4 px-5 text-[12px] font-semibold text-[#718EBF]">
                  Date
                </th>

                <th className="text-left py-4 px-5 text-[12px] font-semibold text-[#718EBF]">
                  Amount
                </th>

                <th className="text-left py-4 px-5 text-[12px] font-semibold text-[#718EBF]">
                  Receipt
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredTransactions.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-[#F3F5F7] last:border-none"
                >
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-[32px] h-[32px] rounded-full border border-[#718EBF] flex items-center justify-center">
                        {item.status === "income" ? (
                          <ArrowDown className="w-4 h-4 text-[#718EBF]" />
                        ) : (
                          <ArrowUp className="w-4 h-4 text-[#718EBF]" />
                        )}
                      </div>

                      <p className="text-[13px] text-[#232323] whitespace-nowrap">
                        {item.title}
                      </p>
                    </div>
                  </td>

                  <td className="py-4 px-5 text-[13px] text-[#232323]">
                    {item.id}
                  </td>

                  <td className="py-4 px-5 text-[13px] text-[#232323]">
                    {item.type}
                  </td>

                  <td className="py-4 px-5 text-[13px] text-[#232323]">
                    {item.card}
                  </td>

                  <td className="py-4 px-5 text-[13px] text-[#232323] whitespace-nowrap">
                    {item.date}
                  </td>

                  <td
                    className={`py-4 px-5 text-[13px] font-medium whitespace-nowrap ${
                      item.status === "income"
                        ? "text-[#16DBAA]"
                        : "text-[#FE5C73]"
                    }`}
                  >
                    {item.amount}
                  </td>

                  <td className="py-4 px-5">
                    <button className="h-[34px] px-4 rounded-full border border-[#1814F3] text-[#1814F3] text-[12px] font-medium">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE CARDS */}
        <div className="lg:hidden mt-4 space-y-3">
          {filteredTransactions.map((item) => (
            <div key={item.id} className="bg-white rounded-[20px] p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-[36px] h-[36px] rounded-full border border-[#718EBF] flex items-center justify-center flex-shrink-0">
                    {item.status === "income" ? (
                      <ArrowDown className="w-4 h-4 text-[#718EBF]" />
                    ) : (
                      <ArrowUp className="w-4 h-4 text-[#718EBF]" />
                    )}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[14px] font-medium text-[#232323]">
                      {item.title}
                    </h3>

                    <p className="text-[11px] text-[#718EBF] mt-1">
                      {item.date}
                    </p>

                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                      <span className="text-[11px] text-[#718EBF]">
                        {item.type}
                      </span>

                      <span className="w-[4px] h-[4px] rounded-full bg-[#D1D5DB]"></span>

                      <span className="text-[11px] text-[#718EBF]">
                        {item.card}
                      </span>
                    </div>
                  </div>
                </div>

                <p
                  className={`text-[14px] font-medium whitespace-nowrap ${
                    item.status === "income"
                      ? "text-[#16DBAA]"
                      : "text-[#FE5C73]"
                  }`}
                >
                  {item.amount}
                </p>
              </div>

              <button className="mt-4 h-[34px] w-full rounded-full border border-[#1814F3] text-[#1814F3] text-[12px] font-medium">
                Download Receipt
              </button>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-center md:justify-end gap-1 md:gap-2 mt-5 flex-wrap">
          <button className="flex items-center gap-1 text-[12px] md:text-[13px] text-[#1814F3] font-medium">
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <button className="w-[34px] h-[34px] rounded-[10px] bg-[#1814F3] text-white text-[12px]">
            1
          </button>

          <button className="w-[34px] h-[34px] rounded-[10px] text-[#1814F3] text-[12px]">
            2
          </button>

          <button className="w-[34px] h-[34px] rounded-[10px] text-[#1814F3] text-[12px]">
            3
          </button>

          <button className="flex items-center gap-1 text-[12px] md:text-[13px] text-[#1814F3] font-medium">
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankDashTransaction;
