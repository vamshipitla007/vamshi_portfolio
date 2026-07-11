/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Download,
  CalendarDays,
  ChevronDown,
  DollarSign,
  Users,
  BarChart3,
  MoreHorizontal,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  Area,
  AreaChart,
  RadialBarChart,
  RadialBar,
} from "recharts";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

interface SummaryCard {
  title: string;
  value: string;
  percentage: string;
  increase: boolean;
  icon: React.ReactNode;
}

interface Order {
  id: number;
  customer: string;
  orderNo: string;
  amount: string;
  payment: string;
  date: string;
}

interface Transaction {
  id: number;
  name: string;
  amount: string;
  payment: string;
  time: string;
  positive: boolean;
}

/* -------------------------------------------------------------------------- */
/*                               SUMMARY DATA                                 */
/* -------------------------------------------------------------------------- */

const summaryCards: SummaryCard[] = [
  {
    title: "Total Income",
    value: "$8.500",
    percentage: "+50.8%",
    increase: true,
    icon: <DollarSign className="w-9 h-9 text-emerald-500" />,
  },
  {
    title: "Total Sales",
    value: "3.500K",
    percentage: "-10.5%",
    increase: false,
    icon: <BarChart3 className="w-9 h-9 text-teal-500" />,
  },
  {
    title: "New Clients",
    value: "2.500K",
    percentage: "+24.9%",
    increase: true,
    icon: <Users className="w-9 h-9 text-teal-500" />,
  },
];

/* -------------------------------------------------------------------------- */
/*                               CHART DATA                                   */
/* -------------------------------------------------------------------------- */
const weeklyIncome = [
  { day: "Mon", income: 180, expense: 340 },
  { day: "Tue", income: 100, expense: 260 },
  { day: "Wed", income: 250, expense: 380 },
  { day: "Thu", income: 180, expense: 260 },
  { day: "Fri", income: 200, expense: 370 },
  { day: "Sat", income: 170, expense: 320 },
  { day: "Sun", income: 150, expense: 220 },
];

const analyticsData = [
  { day: "Mon", income: 0, expense: 0 },
  { day: "Tue", income: 40, expense: 25 },
  { day: "Wed", income: 30, expense: 50 },
  { day: "Thu", income: 90, expense: 25 },
  { day: "Fri", income: 40, expense: 60 },
  { day: "Sat", income: 120, expense: 42 },
  { day: "Sun", income: 160, expense: 28 },
];

const radialData = [
  {
    name: "Sales",
    value: 72,
    fill: "#25A95A",
  },
];

/* -------------------------------------------------------------------------- */
/*                                TABLE DATA                                  */
/* -------------------------------------------------------------------------- */

const orders: Order[] = [
  {
    id: 1,
    customer: "Regina Cooper",
    orderNo: "#790841",
    amount: "$2.500",
    payment: "Credit Card",
    date: "12.09.2019",
  },
  {
    id: 2,
    customer: "Robert Edwards",
    orderNo: "#799894",
    amount: "$1.500",
    payment: "Paypal",
    date: "12.09.2019",
  },
  {
    id: 3,
    customer: "Gloria Mckinney",
    orderNo: "#790857",
    amount: "$5.600",
    payment: "Credit Card",
    date: "12.09.2019",
  },
  {
    id: 4,
    customer: "Randall Fisher",
    orderNo: "#790687",
    amount: "$2.850",
    payment: "Paypal",
    date: "12.09.2019",
  },
];

 const transactions: Transaction[] = [
  {
    id: 1,
    name: "Devon Williamson",
    amount: "+$1.400",
    payment: "Payment",
    time: "08:00 AM",
    positive: true,
  },
  {
    id: 2,
    name: "Debra Wilson",
    amount: "-$850",
    payment: "Refund",
    time: "09:45 AM",
    positive: false,
  },
  {
    id: 3,
    name: "Judith Black",
    amount: "+$2.050",
    payment: "Payment",
    time: "10:15 AM",
    positive: true,
  },
  {
    id: 4,
    name: "Philip Henry",
    amount: "+$650",
    payment: "Payment",
    time: "10:50 AM",
    positive: true,
  },
  {
    id: 5,
    name: "Mitchell Cooper",
    amount: "+$900",
    payment: "Payment",
    time: "12:45 AM",
    positive: true,
  },
];

/* -------------------------------------------------------------------------- */
/*                            REUSABLE TOOLTIP                                */
/* -------------------------------------------------------------------------- */

const ChartTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-2xl border border-gray-100 bg-white px-5 py-3 shadow-xl">
      <div className="flex items-center gap-3 text-sm">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-600" />
          {payload[0]?.value}
        </span>

        {payload[1] && (
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            {payload[1]?.value}
          </span>
        )}
      </div>

      <p className="mt-2 text-xs text-gray-500">23 August, 2020</p>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                              SUMMARY CARD                                  */
/* -------------------------------------------------------------------------- */

const Summary = ({ card }: { card: SummaryCard }) => (
  <div className="rounded-3xl border border-[#ECECEC] bg-white p-6 shadow-sm transition hover:shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-400">{card.title}</p>

        <div className="mt-2 flex items-center gap-3">
          <h2 className="text-[38px] leading-none font-semibold text-[#2F2F2F]">
            {card.value}
          </h2>

          <span
            className={`text-sm font-medium ${
              card.increase ? "text-green-500" : "text-red-400"
            }`}
          >
            {card.percentage}
          </span>
        </div>
      </div>

      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#ECFBF8]">
        {card.icon}
      </div>
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/*                           SALES PROGRESS CARD                              */
/* -------------------------------------------------------------------------- */

const SalesCircle = () => {
  return (
    <div className="relative mx-auto h-[240px] w-[240px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="80%"
          outerRadius="100%"
          data={radialData}
          startAngle={90}
          endAngle={-270}
        >
          <RadialBar background cornerRadius={12} dataKey="value" />
        </RadialBarChart>
      </ResponsiveContainer>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-semibold text-[#2F2F2F]">3.500</h2>

        <p className="mt-1 text-gray-400">Total</p>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                           MAIN COMPONENT                                   */
/* -------------------------------------------------------------------------- */

const DashboardOverview = () => {


  return (
    <div className="min-h-screen bg-[#F8FAFB] ">
      {/* HEADER */}

      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-4xl font-semibold text-[#2F2F2F]">Overview</h1>

        <div className="flex items-center gap-4">
          <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm transition hover:bg-gray-50">
            <Download color="#333" className="h-5 w-5" />
          </button>

          <button className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-sm">
            <span className="font-medium text-[#333]">{'Last 7 day'}</span>

            <ChevronDown color="#333" size={18} />
          </button>
        </div>
      </div>

      {/* SUMMARY CARDS */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {summaryCards.map((card) => (
          <Summary key={card.title} card={card} />
        ))}
      </div>

      {/* NEXT PART WILL CONTINUE HERE */}
      {/* =================================================================== */}
      {/* CHARTS */}
      {/* =================================================================== */}

      <div className="mt-7 grid grid-cols-1 gap-7 xl:grid-cols-2">
        {/* =============================================================== */}
        {/* Statistics */}
        {/* =============================================================== */}

        <div className="rounded-3xl border border-[#ECECEC] bg-white p-6 shadow-sm">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-[#2F2F2F]">
                Statistics
              </h2>
            </div>

            <button className="flex items-center gap-2 rounded-xl border border-[#ECECEC] px-4 py-2 text-sm font-medium transition hover:bg-gray-50">
              <CalendarDays size={17} />
              19 Aug – 25 Aug
              <ChevronDown size={16} />
            </button>
          </div>

          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyIncome} barGap={10}>
                <CartesianGrid stroke="#EEF1F5" vertical={false} />

                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: "#8D98A8",
                    fontSize: 13,
                  }}
                />

                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: "#8D98A8",
                    fontSize: 13,
                  }}
                />

                <Tooltip cursor={false} content={<ChartTooltip />} />

                <Bar
                  dataKey="income"
                  radius={[10, 10, 0, 0]}
                  fill="#23A455"
                  maxBarSize={14}
                />

                <Bar
                  dataKey="expense"
                  radius={[10, 10, 0, 0]}
                  fill="#56D6CF"
                  maxBarSize={14}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-5 flex justify-center gap-10">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <span className="h-3 w-3 rounded-full bg-[#23A455]" />
              Income
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <span className="h-3 w-3 rounded-full bg-[#56D6CF]" />
              Expense
            </div>
          </div>
        </div>

        {/* =============================================================== */}
        {/* Analytics */}
        {/* =============================================================== */}

        <div className="rounded-3xl border border-[#ECECEC] bg-white p-6 shadow-sm">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-semibold text-[#2F2F2F]">Analytics</h2>

            <button className="flex items-center gap-2 rounded-xl border border-[#ECECEC] px-4 py-2 text-sm font-medium transition hover:bg-gray-50">
              <CalendarDays size={17} />
              19 Aug – 25 Aug
              <ChevronDown size={16} />
            </button>
          </div>

          {/* income expense values */}

          <div className="mb-8 flex flex-wrap gap-8">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF9F1]">
                <span className="text-lg text-[#23A455]">↑</span>
              </div>

              <div>
                <p className="text-sm text-gray-400">Income</p>

                <h3 className="text-2xl font-semibold text-[#2F2F2F]">
                  $5.850
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ECFBFB]">
                <span className="text-lg text-[#56D6CF]">↓</span>
              </div>

              <div>
                <p className="text-sm text-gray-400">Expense</p>

                <h3 className="text-2xl font-semibold text-[#2F2F2F]">
                  $1.750
                </h3>
              </div>
            </div>
          </div>

          {/* chart */}

          <div className="h-[310px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analyticsData}>
                <defs>
                  <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#23A455" stopOpacity={0.25} />

                    <stop offset="100%" stopColor="#23A455" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid stroke="#EEF1F5" vertical={false} />

                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: "#8D98A8",
                    fontSize: 13,
                  }}
                />

                <YAxis hide />

                <Tooltip content={<ChartTooltip />} />

                <Area
                  dataKey="income"
                  stroke="#23A455"
                  strokeWidth={3}
                  fill="url(#income)"
                />

                <Line
                  type="monotone"
                  dataKey="income"
                  stroke="#23A455"
                  strokeWidth={3}
                  dot={{
                    r: 4,
                    fill: "#23A455",
                  }}
                  activeDot={{
                    r: 6,
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="expense"
                  stroke="#56D6CF"
                  strokeWidth={3}
                  dot={{
                    r: 4,
                    fill: "#56D6CF",
                  }}
                  activeDot={{
                    r: 6,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* =================================================================== */}
      {/* SALES + HORIZONTAL STATISTICS */}
      {/* =================================================================== */}

      <div className="mt-7 grid grid-cols-1 gap-7 xl:grid-cols-3">
        {/* ================================================================ */}
        {/* Sales */}
        {/* ================================================================ */}

        <div className="rounded-3xl border border-[#ECECEC] bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-[#2F2F2F]">Sales</h2>

            <button className="rounded-xl p-2 transition hover:bg-gray-100">
              <MoreHorizontal size={20} />
            </button>
          </div>

          <div className="mt-8">
            <SalesCircle />
          </div>

          <div className="mt-8 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#23A455]" />

                <p className="font-medium text-gray-500">Product Sales</p>
              </div>

              <span className="font-semibold text-[#2F2F2F]">72%</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#56D6CF]" />

                <p className="font-medium text-gray-500">Service Sales</p>
              </div>

              <span className="font-semibold text-[#2F2F2F]">28%</span>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* Horizontal Statistics */}
        {/* ================================================================ */}

        <div className="xl:col-span-2 rounded-3xl border border-[#ECECEC] bg-white p-6 shadow-sm">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-[#2F2F2F]">
              Statistics
            </h2>

            <button className="flex items-center gap-2 rounded-xl border border-[#ECECEC] px-4 py-2 text-sm font-medium transition hover:bg-gray-50">
              <CalendarDays size={17} />
              Last 7 Days
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Bars */}

          <div className="space-y-8">
            {[
              {
                title: "Product Sales",
                value: 92,
                color: "#23A455",
              },
              {
                title: "Service Sales",
                value: 75,
                color: "#56D6CF",
              },
              {
                title: "Subscription",
                value: 58,
                color: "#8B5CF6",
              },
              {
                title: "Marketing",
                value: 42,
                color: "#F97316",
              },
              {
                title: "Other",
                value: 33,
                color: "#CBD5E1",
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-medium text-[#374151]">
                    {item.title}
                  </span>

                  <span className="font-semibold text-[#2F2F2F]">
                    {item.value}%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-[#EEF2F5]">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${item.value}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}

          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
            <div className="rounded-2xl bg-[#F8FAFB] p-5">
              <p className="text-sm text-gray-400">Revenue</p>

              <h3 className="mt-2 text-2xl font-semibold">$18.5K</h3>
            </div>

            <div className="rounded-2xl bg-[#F8FAFB] p-5">
              <p className="text-sm text-gray-400">Orders</p>

              <h3 className="mt-2 text-2xl font-semibold">2,840</h3>
            </div>

            <div className="rounded-2xl bg-[#F8FAFB] p-5">
              <p className="text-sm text-gray-400">Customers</p>

              <h3 className="mt-2 text-2xl font-semibold">8,520</h3>
            </div>

            <div className="rounded-2xl bg-[#F8FAFB] p-5">
              <p className="text-sm text-gray-400">Growth</p>

              <h3 className="mt-2 text-2xl font-semibold text-[#23A455]">
                +24.8%
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* =================================================================== */}
      {/* LAST ORDERS + TRANSACTIONS */}
      {/* =================================================================== */}

      <div className="mt-7 grid grid-cols-1 gap-7 xl:grid-cols-3">
        {/* =============================================================== */}
        {/* Last Orders */}
        {/* =============================================================== */}

        <div className="xl:col-span-2 rounded-3xl border border-[#ECECEC] bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-[#2F2F2F]">
                Last Orders
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                Recent customer orders
              </p>
            </div>

            <button className="rounded-xl border border-[#ECECEC] px-5 py-2.5 text-sm font-medium transition hover:bg-gray-50">
              View All
            </button>
          </div>

          {/* Desktop Table */}

          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#ECECEC]">
                  <th className="py-4 text-left text-sm font-medium text-gray-400">
                    Customer
                  </th>

                  <th className="py-4 text-left text-sm font-medium text-gray-400">
                    Order No
                  </th>

                  <th className="py-4 text-left text-sm font-medium text-gray-400">
                    Amount
                  </th>

                  <th className="py-4 text-left text-sm font-medium text-gray-400">
                    Payment
                  </th>

                  <th className="py-4 text-left text-sm font-medium text-gray-400">
                    Date
                  </th>

                  <th className="py-4"></th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order, index) => (
                  <tr
                    key={order.id}
                    className={`transition hover:bg-[#F8FAFB] ${
                      index !== orders.length - 1
                        ? "border-b border-[#F1F3F6]"
                        : ""
                    }`}
                  >
                    <td className="py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF9F1] text-sm font-semibold text-[#23A455]">
                          {order.customer
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>

                        <span className="font-medium text-[#374151]">
                          {order.customer}
                        </span>
                      </div>
                    </td>

                    <td className="font-medium text-gray-500">
                      {order.orderNo}
                    </td>

                    <td className="font-semibold text-[#2F2F2F]">
                      {order.amount}
                    </td>

                    <td>
                      <span
                        className={`rounded-full px-4 py-2 text-sm font-medium ${
                          order.payment === "Credit Card"
                            ? "bg-[#ECFBF8] text-[#23A455]"
                            : "bg-[#EEF7FF] text-[#2563EB]"
                        }`}
                      >
                        {order.payment}
                      </span>
                    </td>

                    <td className="text-gray-500">{order.date}</td>

                    <td>
                      <button className="rounded-lg p-2 transition hover:bg-gray-100">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}

          <div className="space-y-4 lg:hidden">
            {orders.map((order) => (
              <div
                key={order.id}
                className="rounded-2xl border border-[#ECECEC] p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF9F1] font-semibold text-[#23A455]">
                      {order.customer
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <div>
                      <h4 className="font-medium">{order.customer}</h4>

                      <p className="text-sm text-gray-400">{order.orderNo}</p>
                    </div>
                  </div>

                  <button>
                    <MoreHorizontal size={18} />
                  </button>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="font-semibold">{order.amount}</span>

                  <span className="text-sm text-gray-400">{order.date}</span>
                </div>

                <div className="mt-4">
                  <span
                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                      order.payment === "Credit Card"
                        ? "bg-[#ECFBF8] text-[#23A455]"
                        : "bg-[#EEF7FF] text-[#2563EB]"
                    }`}
                  >
                    {order.payment}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =============================================================== */}
        {/* Transactions */}
        {/* =============================================================== */}

        <div className="rounded-3xl border border-[#ECECEC] bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-[#2F2F2F]">
                Transactions
              </h2>

              <p className="mt-1 text-sm text-gray-400">Latest activity</p>
            </div>

            <button className="rounded-lg p-2 transition hover:bg-gray-100">
              <MoreHorizontal size={18} />
            </button>
          </div>

          <div className="space-y-5">
            {transactions.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-2xl p-3 transition hover:bg-[#F8FAFB]"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      item.positive ? "bg-[#EAF9F1]" : "bg-[#FFF2F2]"
                    }`}
                  >
                    <DollarSign
                      className={`h-5 w-5 ${
                        item.positive ? "text-[#23A455]" : "text-red-500"
                      }`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-[#2F2F2F]">{item.name}</h4>

                    <p className="text-sm text-gray-400">{item.payment}</p>
                  </div>
                </div>

                <div className="text-right">
                  <h4
                    className={`font-semibold ${
                      item.positive ? "text-[#23A455]" : "text-red-500"
                    }`}
                  >
                    {item.amount}
                  </h4>

                  <p className="text-sm text-gray-400">{item.time}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-8 w-full rounded-2xl bg-[#23A455] py-3 font-medium text-white transition hover:bg-[#1d934b]">
            View All Transactions
          </button>
        </div>
      </div>
      {/* =================================================================== */}
      {/* FOOTER STATS */}
      {/* =================================================================== */}

      <div className="mt-7 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {[
          {
            title: "Today's Revenue",
            value: "$24,580",
            change: "+12.4%",
            positive: true,
          },
          {
            title: "Today's Orders",
            value: "1,245",
            change: "+8.2%",
            positive: true,
          },
          {
            title: "Refunds",
            value: "52",
            change: "-4.3%",
            positive: false,
          },
          {
            title: "Conversion",
            value: "8.45%",
            change: "+1.8%",
            positive: true,
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-[#ECECEC] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm font-medium text-[#8B95A7]">{item.title}</p>

            <h3 className="mt-3 text-3xl font-semibold text-[#2F2F2F]">
              {item.value}
            </h3>

            <div className="mt-4 flex items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  item.positive
                    ? "bg-[#ECFBF8] text-[#23A455]"
                    : "bg-[#FFF2F2] text-[#E5484D]"
                }`}
              >
                {item.change}
              </span>

              <span className="text-sm text-[#8B95A7]">vs last week</span>
            </div>
          </div>
        ))}
      </div>

      {/* =================================================================== */}
      {/* RESPONSIVE SPACING */}
      {/* =================================================================== */}

      <div className="h-10" />
    </div>
  );
};

export default DashboardOverview;
