import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts";

const statsData = [
  {
    title: "My Balance",
    amount: "$12,750",
    iconBg: "bg-[#FFF5D9]",
    iconColor: "text-[#FFBB38]",
    icon: "💰",
  },
  {
    title: "Income",
    amount: "$5,600",
    iconBg: "bg-[#E7EDFF]",
    iconColor: "text-[#396AFF]",
    icon: "💵",
  },
  {
    title: "Expense",
    amount: "$3,460",
    iconBg: "bg-[#FFE0EB]",
    iconColor: "text-[#FF82AC]",
    icon: "💸",
  },
  {
    title: "Total Saving",
    amount: "$7,920",
    iconBg: "bg-[#DCFAF8]",
    iconColor: "text-[#16DBCC]",
    icon: "🐷",
  },
];

const transactions = [
  {
    title: "Spotify Subscription",
    date: "25 Jan 2021",
    type: "Shopping",
    card: "1234 ****",
    status: "Pending",
    amount: "-$150",
    amountColor: "text-[#FE5C73]",
    iconBg: "bg-[#DCFAF8]",
  },
  {
    title: "Mobile Service",
    date: "25 Jan 2021",
    type: "Service",
    card: "1234 ****",
    status: "Completed",
    amount: "-$340",
    amountColor: "text-[#FE5C73]",
    iconBg: "bg-[#E7EDFF]",
  },
  {
    title: "Emily Wilson",
    date: "25 Jan 2021",
    type: "Transfer",
    card: "1234 ****",
    status: "Completed",
    amount: "+$780",
    amountColor: "text-[#16DBAA]",
    iconBg: "bg-[#FFE0EB]",
  },
];

const invoiceData = [
  {
    title: "Apple Store",
    date: "5h ago",
    amount: "$450",
    bg: "bg-[#DCFAF8]",
  },
  {
    title: "Michael",
    date: "2 days ago",
    amount: "$160",
    bg: "bg-[#FFF5D9]",
  },
  {
    title: "Playstation",
    date: "5 days ago",
    amount: "$1085",
    bg: "bg-[#E7EDFF]",
  },
  {
    title: "William",
    date: "10 days ago",
    amount: "$90",
    bg: "bg-[#FFE0EB]",
  },
];

const chartData = [
  { day: "Sat", debit: 280, credit: 470 },
  { day: "Sun", debit: 220, credit: 370 },
  { day: "Mon", debit: 210, credit: 290 },
  { day: "Tue", debit: 430, credit: 250 },
  { day: "Wed", debit: 310, credit: 430 },
  { day: "Thu", debit: 330, credit: 220 },
  { day: "Fri", debit: 360, credit: 440 },
];

const BankDashAccount = () => {
  return (
    <div className="space-y-5 max-w-[1400px] mx-auto">
      {/* TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {statsData.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-[20px] p-4 flex items-center gap-4"
          >
            <div
              className={`w-[55px] h-[55px] rounded-full flex items-center justify-center text-[22px] ${item.iconBg} ${item.iconColor}`}
            >
              {item.icon}
            </div>

            <div>
              <p className="text-[12px] text-[#718EBF]">{item.title}</p>

              <h2 className="text-[22px] font-semibold text-[#232323] mt-1">
                {item.amount}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* TRANSACTION + CARD */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_320px] gap-5">
        {/* LAST TRANSACTION */}
        <div>
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-3">
            Last Transaction
          </h2>

          <div className="bg-white rounded-[20px] p-4 space-y-4">
            {transactions.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-[42px] h-[42px] rounded-full flex-shrink-0 ${item.iconBg}`}
                  ></div>

                  <div className="min-w-0">
                    <h3 className="text-[13px] md:text-[14px] font-medium text-[#232323] truncate">
                      {item.title}
                    </h3>

                    <p className="text-[11px] text-[#718EBF] mt-1">
                      {item.date}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block text-[12px] text-[#718EBF]">
                  {item.type}
                </div>

                <div className="hidden md:block text-[12px] text-[#718EBF]">
                  {item.card}
                </div>

                <div className="hidden md:block text-[12px] text-[#718EBF]">
                  {item.status}
                </div>

                <div
                  className={`text-[13px] font-medium whitespace-nowrap ${item.amountColor}`}
                >
                  {item.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MY CARD */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A]">
              My Card
            </h2>

            <button className="text-[12px] font-semibold text-[#343C6A]">
              See All
            </button>
          </div>

          <div className="rounded-[20px] overflow-hidden bg-gradient-to-r from-[#4C49ED] to-[#539BFF] text-white">
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] text-white/80">Balance</p>

                  <h3 className="text-[20px] font-semibold mt-1">$5,756</h3>
                </div>

                <div className="w-8 h-8 rounded-lg bg-white/20"></div>
              </div>

              <div className="flex justify-between mt-7">
                <div>
                  <p className="text-[10px] text-white/80">CARD HOLDER</p>

                  <h4 className="text-[12px] mt-1">Eddy Cusuma</h4>
                </div>

                <div>
                  <p className="text-[10px] text-white/80">VALID THRU</p>

                  <h4 className="text-[12px] mt-1">12/22</h4>
                </div>
              </div>
            </div>

            <div className="h-[56px] px-4 bg-white/10 flex items-center justify-between">
              <h2 className="text-[18px] tracking-wide">3778 **** 1234</h2>

              <div className="flex">
                <div className="w-7 h-7 rounded-full bg-white/50"></div>

                <div className="w-7 h-7 rounded-full bg-white/30 -ml-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CHART + INVOICE */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_320px] gap-5">
        {/* CHART */}
        <div>
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-3">
            Debit & Credit Overview
          </h2>

          <div className="bg-white rounded-[20px] p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
              <p className="text-[12px] text-[#718EBF]">
                $7,560 Debited & $5,420 Credited in this Week
              </p>

              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#1814F3]"></div>

                  <span className="text-[12px] text-[#718EBF]">Debit</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF82AC]"></div>

                  <span className="text-[12px] text-[#718EBF]">Credit</span>
                </div>
              </div>
            </div>

            <div className="h-[220px] md:h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="day" tick={{ fontSize: 10 }} />

                  <Tooltip />

                  <Bar
                    dataKey="debit"
                    fill="#1814F3"
                    radius={[10, 10, 10, 10]}
                    barSize={16}
                  />

                  <Bar
                    dataKey="credit"
                    fill="#FFB100"
                    radius={[10, 10, 10, 10]}
                    barSize={16}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* INVOICES */}
        <div>
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-3">
            Invoices Sent
          </h2>

          <div className="bg-white rounded-[20px] p-4 space-y-4">
            {invoiceData.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-[44px] h-[44px] rounded-[14px] ${item.bg}`}
                  ></div>

                  <div className="min-w-0">
                    <h3 className="text-[13px] font-medium text-[#232323] truncate">
                      {item.title}
                    </h3>

                    <p className="text-[11px] text-[#718EBF] mt-1">
                      {item.date}
                    </p>
                  </div>
                </div>

                <p className="text-[13px] font-medium text-[#718EBF] whitespace-nowrap">
                  {item.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDashAccount;
