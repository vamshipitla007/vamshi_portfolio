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
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
    },
    {
      name: "iPhone 12",
      price: "$987",
      image:
        "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=200",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F7] p-4 md:p-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-[30px] font-medium text-[#1E1E3F]">
          Dashboard
        </h1>

        <div className="flex gap-3">
          <button className="bg-white h-[40px] px-5 rounded-xl text-[14px] text-[#555577]">
            10-06-2021
          </button>
          <button className="bg-white h-[40px] px-5 rounded-xl text-[14px] text-[#555577]">
            10-10-2021
          </button>
        </div>
      </div>


      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        {stats.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="bg-white rounded-[20px] p-6 flex items-center gap-5"
            >
              <div
                className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
                style={{ background: item.bg }}
              >
                <Icon size={22} color={item.color} />
              </div>

              <div>
                <h3 className="text-[16px] font-semibold text-[#444466]">
                  {item.value}
                </h3>

                <p className="text-[14px] text-[#7C7C98]">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>


      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
        
        <div className="xl:col-span-2 bg-white rounded-[20px] p-6">
          <div className="flex justify-between">
            <h2 className="text-[18px] font-medium text-[#303050]">
              Reports
            </h2>
            <Ellipsis color="#A0A0B5" />
          </div>

          <div className="h-[320px] mt-4">
            <ResponsiveContainer>
              <LineChart data={reports}>
                <CartesianGrid stroke="#F2F2F7" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line
                  dataKey="sales"
                  stroke="#5B5CF0"
                  strokeWidth={4}
                  dot={{
                    r: 5,
                    fill: "white",
                    stroke: "#5B5CF0",
                    strokeWidth: 3,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>


        <div className="bg-white rounded-[20px] p-6">
          <div className="flex justify-between">
            <h2 className="text-[18px] font-medium text-[#303050]">
              Analytics
            </h2>
            <Ellipsis color="#A0A0B5" />
          </div>

          <div className="relative h-[280px]">
            <ResponsiveContainer>
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

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-[22px] font-bold text-[#202040]">
                80%
              </h3>
              <p className="text-[#7C7C98] text-[15px]">
                Transactions
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-5 text-[14px] text-[#555577]">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-[#5B8CF6]" />
              Sale
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-[#F6C445]" />
              Distribute
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-[#FA8458]" />
              Return
            </span>
          </div>
        </div>

      </div>


      {/* Bottom */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">

        <div className="xl:col-span-2 bg-white rounded-[20px] p-6 overflow-x-auto">
          <div className="flex justify-between mb-5">
            <h2 className="text-[18px] font-medium text-[#303050]">
              Recent Orders
            </h2>
            <Ellipsis color="#A0A0B5" />
          </div>

          <table className="w-full min-w-[650px] text-[14px]">
            <thead className="text-[#8A8AA0]">
              <tr>
                <th className="text-left pb-4">Tracking no</th>
                <th className="text-left">Product Name</th>
                <th className="text-left">Price</th>
                <th className="text-left">Total Order</th>
                <th className="text-left">Total Amount</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((item) => (
                <tr key={item.id} className="border-t border-[#F2F2F7]">
                  <td className="py-4 text-[#303050]">{item.id}</td>
                  <td className="text-[#303050]">{item.icon} {item.product}</td>
                  <td className="text-[#303050]">{item.price}</td>
                  <td>
                    <span className="bg-[#E7F8FF] px-4 py-1 rounded-lg text-[#2AA7D8]">
                      {item.total}
                    </span>
                  </td>
                  <td className="text-[#303050]">{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <div className="bg-white rounded-[20px] p-6">
          <div className="flex justify-between mb-5">
            <h2 className="text-[18px] font-medium text-[#303050]">
              Top Selling Products
            </h2>
            <Ellipsis color="#A0A0B5" />
          </div>

          <div className="space-y-6">
            {products.map((item, i) => (
              <div key={i} className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[90px] h-[90px] rounded-xl object-cover bg-[#E8F0FF]"
                />

                <div>
                  <h3 className="text-[16px] font-medium text-[#303050]">
                    {item.name}
                  </h3>

                  <div className="flex my-2">
                    {[1,2,3,4,5].map((star) => (
                      <Star
                        key={star}
                        size={15}
                        fill="#F6C445"
                        color="#F6C445"
                      />
                    ))}
                  </div>

                  <p className="text-[24px] font-semibold text-[#1E1E3F]">
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