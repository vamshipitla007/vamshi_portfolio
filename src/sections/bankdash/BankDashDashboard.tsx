import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

import { ChevronRight, SendHorizontal } from "lucide-react";

const weeklyData = [
  { day: "Sat", deposit: 480, withdraw: 250 },
  { day: "Sun", deposit: 350, withdraw: 130 },
  { day: "Mon", deposit: 330, withdraw: 270 },
  { day: "Tue", deposit: 480, withdraw: 380 },
  { day: "Wed", deposit: 150, withdraw: 250 },
  { day: "Thu", deposit: 390, withdraw: 250 },
  { day: "Fri", deposit: 400, withdraw: 350 },
];

const expenseData = [
  { name: "Entertainment", value: 30, color: "#343C7A" },
  { name: "Bill Expense", value: 15, color: "#FC7900" },
  { name: "Others", value: 35, color: "#2323FF" },
  { name: "Investment", value: 20, color: "#F900E7" },
];

const balanceData = [
  { month: "Jul", value: 120 },
  { month: "Aug", value: 340 },
  { month: "Sep", value: 260 },
  { month: "Oct", value: 790 },
  { month: "Nov", value: 210 },
  { month: "Dec", value: 580 },
  { month: "Jan", value: 260 },
  { month: "Feb", value: 650 },
];

const transactions = [
  {
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: "-$850",
    color: "text-[#FF4B4A]",
    bg: "bg-[#FFF5D9]",
  },
  {
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: "+$2,500",
    color: "text-[#41D4A8]",
    bg: "bg-[#E7EDFF]",
  },
  {
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    color: "text-[#41D4A8]",
    bg: "bg-[#DCFAF8]",
  },
];

const users = [
  {
    name: "Livia Bator",
    role: "CEO",
    image: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Randy Press",
    role: "Director",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Workman",
    role: "Designer",
    image: "https://i.pravatar.cc/100?img=15",
  },
];

const BankDashDashboard = () => {
  return (
    <div className="space-y-4 max-w-[1400px] mx-auto">
      {/* TOP */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_420px] gap-[30px]">
        {/* CARDS */}
        <div className="min-w-0">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A]">
              My Cards
            </h2>

            <button className="text-[12px] md:text-[13px] font-semibold text-[#343C6A]">
              See All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {/* CARD 1 */}
            <div className="rounded-[20px] overflow-hidden bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] text-white">
              <div className="p-4 md:p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] opacity-80">Balance</p>

                    <h3 className="text-[18px] md:text-[22px] font-semibold mt-1">
                      $5,756
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-white/20"></div>
                </div>

                <div className="flex justify-between mt-7">
                  <div>
                    <p className="text-[10px] opacity-80">CARD HOLDER</p>

                    <h4 className="text-[12px] md:text-[13px] mt-1">
                      Eddy Cusuma
                    </h4>
                  </div>

                  <div>
                    <p className="text-[10px] opacity-80">VALID THRU</p>

                    <h4 className="text-[12px] md:text-[13px] mt-1">12/22</h4>
                  </div>
                </div>
              </div>

              <div className="h-[56px] px-4 bg-white/10 flex items-center justify-between">
                <h2 className="text-[16px] md:text-[20px] tracking-wide">
                  3778 **** 1234
                </h2>

                <div className="flex">
                  <div className="w-7 h-7 rounded-full bg-white/50"></div>

                  <div className="w-7 h-7 rounded-full bg-white/30 -ml-3"></div>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="rounded-[20px] overflow-hidden border border-[#DFEAF2] bg-white">
              <div className="p-4 md:p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] text-[#718EBF]">Balance</p>

                    <h3 className="text-[18px] md:text-[22px] font-semibold text-[#343C6A] mt-1">
                      $5,756
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-[#343C6A]"></div>
                </div>

                <div className="flex justify-between mt-7">
                  <div>
                    <p className="text-[10px] text-[#718EBF]">CARD HOLDER</p>

                    <h4 className="text-[12px] md:text-[13px] text-[#343C6A] mt-1">
                      Eddy Cusuma
                    </h4>
                  </div>

                  <div>
                    <p className="text-[10px] text-[#718EBF]">VALID THRU</p>

                    <h4 className="text-[12px] md:text-[13px] text-[#343C6A] mt-1">
                      12/22
                    </h4>
                  </div>
                </div>
              </div>

              <div className="h-[56px] px-4 border-t border-[#DFEAF2] flex items-center justify-between">
                <h2 className="text-[16px] md:text-[20px] text-[#343C6A] tracking-wide">
                  3778 **** 1234
                </h2>

                <div className="flex">
                  <div className="w-7 h-7 rounded-full bg-[#9199AF]/60"></div>

                  <div className="w-7 h-7 rounded-full bg-[#9199AF]/30 -ml-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRANSACTION */}
        <div className="min-w-0">
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-3">
            Recent Transaction
          </h2>

          <div className="bg-white rounded-[20px] p-4 h-full space-y-4">
            {transactions.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-[42px] h-[42px] rounded-full flex-shrink-0 ${item.bg}`}
                  ></div>

                  <div className="min-w-0">
                    <h3 className="text-[13px] md:text-[14px] font-medium text-[#232323] truncate">
                      {item.title}
                    </h3>

                    <p className="text-[11px] md:text-[12px] text-[#718EBF]">
                      {item.date}
                    </p>
                  </div>
                </div>

                <p
                  className={`text-[13px] md:text-[14px] font-medium whitespace-nowrap ${item.color}`}
                >
                  {item.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-4">
        {/* WEEKLY */}
        <div>
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-3">
            Weekly Activity
          </h2>

          <div className="bg-white rounded-[20px] p-3 md:p-4 h-[220px] md:h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <XAxis dataKey="day" tick={{ fontSize: 10 }} />

                <Tooltip />

                <Bar
                  dataKey="deposit"
                  fill="#1814F3"
                  radius={[20, 20, 20, 20]}
                  barSize={10}
                />

                <Bar
                  dataKey="withdraw"
                  fill="#16DBCC"
                  radius={[20, 20, 20, 20]}
                  barSize={10}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PIE */}
        <div>
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-3">
            Expense Statistics
          </h2>

          <div className="bg-white rounded-[20px] p-3 md:p-4 h-[220px] md:h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseData}
                  dataKey="value"
                  outerRadius={75}
                  paddingAngle={4}
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-4">
        {/* QUICK TRANSFER */}
        <div>
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-3">
            Quick Transfer
          </h2>

          <div className="bg-white rounded-[20px] p-4">
            <div className="flex items-start gap-4 overflow-x-auto scrollbar-hide pb-2">
              {users.map((user) => (
                <div key={user.name} className="text-center min-w-[75px]">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-[45px] h-[45px] rounded-full object-cover mx-auto"
                  />

                  <h3 className="text-[12px] md:text-[13px] font-semibold text-[#232323] mt-2">
                    {user.name}
                  </h3>

                  <p className="text-[11px] text-[#718EBF] mt-1">{user.role}</p>
                </div>
              ))}

              <button className="min-w-[40px] h-[40px] rounded-full shadow-md flex items-center justify-center">
                <ChevronRight className="text-[#718EBF] w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-3 mt-5">
              <p className="text-[12px] text-[#718EBF]">Write Amount</p>

              <div className="flex items-center justify-between gap-2 h-[44px] rounded-full bg-[#EDF1F7] px-3">
                <span className="text-[#718EBF] text-[13px]">525.50</span>

                <button className="h-[36px] px-5 rounded-full bg-[#1814F3] text-white flex items-center gap-2 text-[12px] font-medium">
                  Send
                  <SendHorizontal size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BALANCE */}
        <div>
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-3">
            Balance History
          </h2>

          <div className="bg-white rounded-[20px] p-3 md:p-4 h-[220px] md:h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={balanceData}>
                <XAxis dataKey="month" tick={{ fontSize: 10 }} />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#1814F3"
                  fill="#1814F3"
                  fillOpacity={0.08}
                  strokeWidth={2.5}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDashDashboard;
