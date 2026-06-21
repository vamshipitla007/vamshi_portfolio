import { useTheme } from "@/utils/BaseThemeContext";
import {
  Heart,
  ShoppingBag,
  Briefcase,
  Lock,
  Ellipsis,
  Star,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function BaseDashboard() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const stats = [
    {
      value: "178+",
      title: "Save Products",
      icon: Heart,
      color: "#5B8CF6",
      bg: "#EEF4FF",
    },
    {
      value: "20+",
      title: "Stock Products",
      icon: ShoppingBag,
      color: "#F6C445",
      bg: "#FFF7DD",
    },
    {
      value: "190+",
      title: "Sales Products",
      icon: Lock,
      color: "#FA8458",
      bg: "#FFF1EB",
    },
    {
      value: "12+",
      title: "Job Application",
      icon: Briefcase,
      color: "#5B5CF0",
      bg: "#EFEAFF",
    },
  ];

  const reports = [
    { time: "10am", sales: 55 },
    { time: "11am", sales: 32 },
    { time: "12am", sales: 58 },
    { time: "01am", sales: 36 },
    { time: "02am", sales: 22 },
    { time: "03am", sales: 50 },
    { time: "04am", sales: 12 },
    { time: "05am", sales: 35 },
    { time: "06am", sales: 67 },
    { time: "07am", sales: 74 },
  ];

  const analytics = [
    { value: 50, color: "#5B8CF6" },
    { value: 20, color: "#F6C445" },
    { value: 30, color: "#FA8458" },
  ];

  const orders = [
    {
      id: "#876364",
      product: "Camera Lens",
      price: "$178",
      total: 325,
      amount: "$1,46,660",
      icon: "📷",
    },
    {
      id: "#876368",
      product: "Black Sleep Dress",
      price: "$14",
      total: 53,
      amount: "$46,660",
      icon: "👗",
    },
    {
      id: "#876412",
      product: "Argan Oil",
      price: "$21",
      total: 78,
      amount: "$3,46,676",
      icon: "🧴",
    },
    {
      id: "#876621",
      product: "EAU DE Parfum",
      price: "$32",
      total: 98,
      amount: "$3,46,981",
      icon: "🧴",
    },
  ];

  const products = [
    {
      name: "NIKE Shoes Black Pattern",
      price: "$87",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
    },
    {
      name: "iPhone 12",
      price: "$987",
      image:
        "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=200",
    },
  ];

  return (
    <div
      className="
        min-h-screen
        bg-[#F5F5F7]
        dark:bg-slate-950
        transition-colors
        duration-300
      "
    >
      {/* Header */}
      <div
        className="
    flex
    flex-col
    lg:flex-row
    lg:items-center
    lg:justify-between
    gap-5
    mb-8
  "
      >
        {/* Left */}
        <div>
          <h1
            className="
        text-[26px]
        sm:text-[30px]
        font-semibold
        text-[#1E1E3F]
        dark:text-white
        transition-colors
      "
          >
            Dashboard
          </h1>

          <p
            className="
        mt-1
        text-[14px]
        text-[#7C7C98]
        dark:text-gray-400
      "
          >
            Welcome back. Here's what's happening today.
          </p>
        </div>

        {/* Right */}
        <div
          className="
      flex
      flex-col
      sm:flex-row
      gap-3
      w-full
      lg:w-auto
    "
        >
          <button
            className="
        h-[44px]
        px-5
        rounded-xl

        bg-white
        dark:bg-gray-900

        border
        border-[#ECECF5]
        dark:border-gray-800

        text-[14px]
        font-medium

        text-[#555577]
        dark:text-gray-300

        hover:bg-[#F8F8FB]
        dark:hover:bg-gray-800

        transition-all
      "
          >
            10-06-2021
          </button>

          <button
            className="
        h-[44px]
        px-5
        rounded-xl

        bg-white
        dark:bg-gray-900

        border
        border-[#ECECF5]
        dark:border-gray-800

        text-[14px]
        font-medium

        text-[#555577]
        dark:text-gray-300

        hover:bg-[#F8F8FB]
        dark:hover:bg-gray-800

        transition-all
      "
          >
            10-10-2021
          </button>
        </div>
      </div>

      {/* Stats */}
      <div
        className="
    grid
    grid-cols-1
    sm:grid-cols-2
    xl:grid-cols-4
    gap-5
    lg:gap-6
    mt-8
  "
      >
        {stats.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="
          bg-white
          dark:bg-gray-900

          border
          border-[#ECECF5]
          dark:border-gray-800

          rounded-[20px]

          p-5
          sm:p-6

          flex
          items-center
          gap-4

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-lg
          dark:hover:border-gray-700
        "
            >
              {/* Icon */}
              <div
                className="
            w-[56px]
            h-[56px]
            sm:w-[60px]
            sm:h-[60px]

            rounded-full
            flex
            items-center
            justify-center

            shrink-0
          "
                style={{
                  background: item.bg,
                }}
              >
                <Icon size={22} color={item.color} />
              </div>

              {/* Content */}
              <div className="min-w-0">
                <h3
                  className="
              text-[18px]
              sm:text-[20px]
              font-semibold

              text-[#1E1E3F]
              dark:text-white

              truncate
            "
                >
                  {item.value}
                </h3>

                <p
                  className="
              text-[13px]
              sm:text-[14px]

              text-[#7C7C98]
              dark:text-gray-400

              mt-1
            "
                >
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
        {/* Reports */}
        <div
          className="
      xl:col-span-2
      bg-white
      dark:bg-gray-900

      border
      border-[#ECECF5]
      dark:border-gray-800

      rounded-[20px]
      p-5
      sm:p-6

      transition-all
      duration-300
    "
        >
          <div className="flex items-center justify-between">
            <h2
              className="
          text-[18px]
          font-semibold
          text-[#1E1E3F]
          dark:text-white
        "
            >
              Reports
            </h2>

            <button
              className="
          w-9
          h-9
          rounded-lg

          hover:bg-[#F5F5F7]
          dark:hover:bg-gray-800

          flex
          items-center
          justify-center

          transition-all
        "
            >
              <Ellipsis color={isDark ? "#9CA3AF" : "#A0A0B5"} />
            </button>
          </div>

          <div className="h-[280px] sm:h-[320px] mt-5">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={reports}>
                <CartesianGrid
                  stroke={isDark ? "#374151" : "#F2F2F7"}
                  strokeDasharray="3 3"
                />

                <XAxis dataKey="time" stroke={isDark ? "#9CA3AF" : "#6B7280"} />

                <YAxis stroke={isDark ? "#9CA3AF" : "#6B7280"} />

                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? "#111827" : "#FFFFFF",
                    border: isDark ? "1px solid #374151" : "1px solid #E5E7EB",
                    borderRadius: "12px",
                    color: isDark ? "#FFFFFF" : "#111827",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#5B5CF0"
                  strokeWidth={4}
                  dot={{
                    r: 5,
                    fill: isDark ? "#111827" : "#FFFFFF",
                    stroke: "#5B5CF0",
                    strokeWidth: 3,
                  }}
                  activeDot={{
                    r: 8,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Analytics */}
        <div
          className="
      bg-white
      dark:bg-gray-900

      border
      border-[#ECECF5]
      dark:border-gray-800

      rounded-[20px]
      p-5
      sm:p-6

      transition-all
      duration-300
    "
        >
          <div className="flex items-center justify-between">
            <h2
              className="
          text-[18px]
          font-semibold
          text-[#1E1E3F]
          dark:text-white
        "
            >
              Analytics
            </h2>

            <button
              className="
          w-9
          h-9
          rounded-lg

          hover:bg-[#F5F5F7]
          dark:hover:bg-gray-800

          flex
          items-center
          justify-center

          transition-all
        "
            >
              <Ellipsis color={isDark ? "#9CA3AF" : "#A0A0B5"} />
            </button>
          </div>

          <div className="relative h-[260px] sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analytics}
                  innerRadius={70}
                  outerRadius={100}
                  dataKey="value"
                  stroke="none"
                >
                  {analytics.map((item, i) => (
                    <Cell key={i} fill={item.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <div
              className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
        "
            >
              <h3
                className="
            text-[24px]
            font-bold
            text-[#1E1E3F]
            dark:text-white
          "
              >
                80%
              </h3>

              <p
                className="
            text-[14px]
            text-[#7C7C98]
            dark:text-gray-400
          "
              >
                Transactions
              </p>
            </div>
          </div>

          <div
            className="
        flex
        flex-wrap
        justify-center
        gap-4
        mt-3

        text-[13px]
        sm:text-[14px]

        text-[#555577]
        dark:text-gray-300
      "
          >
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#5B8CF6]" />
              Sale
            </span>

            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#F6C445]" />
              Distribute
            </span>

            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FA8458]" />
              Return
            </span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
        {/* Recent Orders */}
        <div
          className="
      xl:col-span-2

      bg-white
      dark:bg-gray-900

      border
      border-[#ECECF5]
      dark:border-gray-800

      rounded-[20px]
      p-5
      sm:p-6

      transition-all
      duration-300

      overflow-hidden
    "
        >
          <div className="flex items-center justify-between mb-6">
            <h2
              className="
          text-[18px]
          font-semibold
          text-[#1E1E3F]
          dark:text-white
        "
            >
              Recent Orders
            </h2>

            <button
              className="
          w-9
          h-9
          rounded-lg

          hover:bg-[#F5F5F7]
          dark:hover:bg-gray-800

          flex
          items-center
          justify-center

          transition-all
        "
            >
              <Ellipsis color={isDark ? "#9CA3AF" : "#A0A0B5"} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr
                  className="
              border-b
              border-[#F2F2F7]
              dark:border-gray-800
            "
                >
                  <th
                    className="
                text-left
                py-4
                text-[13px]
                font-medium
                text-[#8A8AA0]
                dark:text-gray-400
              "
                  >
                    Tracking No
                  </th>

                  <th
                    className="
                text-left
                py-4
                text-[13px]
                font-medium
                text-[#8A8AA0]
                dark:text-gray-400
              "
                  >
                    Product Name
                  </th>

                  <th
                    className="
                text-left
                py-4
                text-[13px]
                font-medium
                text-[#8A8AA0]
                dark:text-gray-400
              "
                  >
                    Price
                  </th>

                  <th
                    className="
                text-left
                py-4
                text-[13px]
                font-medium
                text-[#8A8AA0]
                dark:text-gray-400
              "
                  >
                    Total Order
                  </th>

                  <th
                    className="
                text-left
                py-4
                text-[13px]
                font-medium
                text-[#8A8AA0]
                dark:text-gray-400
              "
                  >
                    Total Amount
                  </th>
                </tr>
              </thead>

              <tbody>
                {orders.map((item) => (
                  <tr
                    key={item.id}
                    className="
                border-b
                border-[#F2F2F7]
                dark:border-gray-800

                hover:bg-[#FAFAFC]
                dark:hover:bg-gray-800/50

                transition-colors
              "
                  >
                    <td
                      className="
                  py-4

                  text-[#303050]
                  dark:text-white

                  font-medium
                "
                    >
                      {item.id}
                    </td>

                    <td
                      className="
                  py-4

                  text-[#303050]
                  dark:text-white
                "
                    >
                      {item.icon} {item.product}
                    </td>

                    <td
                      className="
                  py-4

                  text-[#303050]
                  dark:text-gray-300
                "
                    >
                      {item.price}
                    </td>

                    <td className="py-4">
                      <span
                        className="
                    px-4
                    py-1.5

                    rounded-lg

                    bg-[#E7F8FF]
                    dark:bg-cyan-950

                    text-[#2AA7D8]
                    dark:text-cyan-300

                    text-[13px]
                    font-medium
                  "
                      >
                        {item.total}
                      </span>
                    </td>

                    <td
                      className="
                  py-4

                  font-semibold

                  text-[#303050]
                  dark:text-white
                "
                    >
                      {item.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Selling Products */}
        <div
          className="
      bg-white
      dark:bg-gray-900

      border
      border-[#ECECF5]
      dark:border-gray-800

      rounded-[20px]
      p-5
      sm:p-6

      transition-all
      duration-300
    "
        >
          <div className="flex items-center justify-between mb-6">
            <h2
              className="
          text-[18px]
          font-semibold
          text-[#1E1E3F]
          dark:text-white
        "
            >
              Top Selling Products
            </h2>

            <button
              className="
          w-9
          h-9
          rounded-lg

          hover:bg-[#F5F5F7]
          dark:hover:bg-gray-800

          flex
          items-center
          justify-center

          transition-all
        "
            >
              <Ellipsis color={isDark ? "#9CA3AF" : "#A0A0B5"} />
            </button>
          </div>

          <div className="space-y-5">
            {products.map((item, i) => (
              <div
                key={i}
                className="
            flex
            gap-4

            p-3

            rounded-xl

            hover:bg-[#F8F8FB]
            dark:hover:bg-gray-800

            transition-all
          "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="
              w-[80px]
              h-[80px]
              sm:w-[90px]
              sm:h-[90px]

              rounded-xl
              object-cover

              bg-[#E8F0FF]
              dark:bg-gray-800

              shrink-0
            "
                />

                <div className="min-w-0 flex-1">
                  <h3
                    className="
                text-[15px]
                sm:text-[16px]
                font-medium

                text-[#303050]
                dark:text-white

                truncate
              "
                  >
                    {item.name}
                  </h3>

                  <div className="flex gap-1 my-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        fill="#F6C445"
                        color="#F6C445"
                      />
                    ))}
                  </div>

                  <p
                    className="
                text-[20px]
                sm:text-[24px]
                font-semibold

                text-[#1E1E3F]
                dark:text-white
              "
                  >
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
