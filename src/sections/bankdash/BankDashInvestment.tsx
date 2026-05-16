import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const overviewCards = [
  {
    title: "Total Invested Amount",
    amount: "$150,000",
    bg: "bg-[#DCFAF8]",
    icon: "💰",
  },
  {
    title: "Number of Investments",
    amount: "1,250",
    bg: "bg-[#FFE0EB]",
    icon: "📈",
  },
  {
    title: "Rate of Return",
    amount: "+5.80%",
    bg: "bg-[#E7EDFF]",
    icon: "🔄",
  },
];

const yearlyInvestmentData = [
  { year: "2016", value: 5000 },
  { year: "2017", value: 23000 },
  { year: "2018", value: 15000 },
  { year: "2019", value: 37000 },
  { year: "2020", value: 20000 },
  { year: "2021", value: 29000 },
];

const monthlyRevenueData = [
  { year: "2016", value: 10000 },
  { year: "2017", value: 20000 },
  { year: "2018", value: 12000 },
  { year: "2019", value: 32000 },
  { year: "2020", value: 22000 },
  { year: "2021", value: 34000 },
];

const investments = [
  {
    name: "Apple Store",
    category: "E-commerce, Marketplace",
    value: "$54,000",
    return: "+16%",
    returnColor: "text-[#16DBAA]",
    bg: "bg-[#FFE0EB]",
    icon: "🍎",
  },
  {
    name: "Samsung Mobile",
    category: "E-commerce, Marketplace",
    value: "$25,300",
    return: "-4%",
    returnColor: "text-[#FE5C73]",
    bg: "bg-[#E7EDFF]",
    icon: "🅶",
  },
  {
    name: "Tesla Motors",
    category: "Electric Vehicles",
    value: "$8,200",
    return: "+25%",
    returnColor: "text-[#16DBAA]",
    bg: "bg-[#FFF5D9]",
    icon: "⚡",
  },
];

const trendingStocks = [
  {
    id: "01.",
    name: "Trivago",
    price: "$520",
    return: "+5%",
    color: "text-[#16DBAA]",
  },
  {
    id: "02.",
    name: "Canon",
    price: "$480",
    return: "+10%",
    color: "text-[#16DBAA]",
  },
  {
    id: "03.",
    name: "Uber Food",
    price: "$350",
    return: "-3%",
    color: "text-[#FE5C73]",
  },
  {
    id: "04.",
    name: "Nokia",
    price: "$940",
    return: "+2%",
    color: "text-[#16DBAA]",
  },
  {
    id: "05.",
    name: "Tiktok",
    price: "$670",
    return: "-12%",
    color: "text-[#FE5C73]",
  },
];

const BankDashInvestment = () => {
  return (
    <div className="space-y-5 max-w-[1400px] mx-auto">
      {/* OVERVIEW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {overviewCards.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-[20px] p-4 flex items-center gap-4"
          >
            <div
              className={`w-[55px] h-[55px] rounded-full flex items-center justify-center text-[22px] ${item.bg}`}
            >
              {item.icon}
            </div>

            <div>
              <p className="text-[12px] text-[#718EBF]">
                {item.title}
              </p>

              <h2 className="text-[22px] font-semibold text-[#232323] mt-1">
                {item.amount}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {/* YEARLY */}
        <div>
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-3">
            Yearly Total Investment
          </h2>

          <div className="bg-white rounded-[20px] p-4">
            <div className="h-[220px] md:h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={yearlyInvestmentData}>
                  <XAxis
                    dataKey="year"
                    tick={{ fontSize: 10 }}
                  />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#FFB100"
                    fill="#FFB100"
                    fillOpacity={0.08}
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* REVENUE */}
        <div>
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-3">
            Monthly Revenue
          </h2>

          <div className="bg-white rounded-[20px] p-4">
            <div className="h-[220px] md:h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyRevenueData}>
                  <XAxis
                    dataKey="year"
                    tick={{ fontSize: 10 }}
                  />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#16DBCC"
                    fill="#16DBCC"
                    fillOpacity={0.08}
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_380px] gap-5">
        {/* INVESTMENTS */}
        <div>
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-3">
            My Investment
          </h2>

          <div className="space-y-4">
            {investments.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-[20px] p-4 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className={`w-[50px] h-[50px] rounded-[16px] flex items-center justify-center text-[22px] flex-shrink-0 ${item.bg}`}
                  >
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[13px] md:text-[14px] font-medium text-[#232323] truncate">
                      {item.name}
                    </h3>

                    <p className="text-[11px] text-[#718EBF] mt-1 truncate">
                      {item.category}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block">
                  <h4 className="text-[14px] font-medium text-[#232323]">
                    {item.value}
                  </h4>

                  <p className="text-[11px] text-[#718EBF] mt-1">
                    Investment Value
                  </p>
                </div>

                <div>
                  <h4
                    className={`text-[14px] font-medium ${item.returnColor}`}
                  >
                    {item.return}
                  </h4>

                  <p className="text-[11px] text-[#718EBF] mt-1">
                    Return Value
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TRENDING */}
        <div>
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-3">
            Trending Stock
          </h2>

          <div className="bg-white rounded-[20px] p-4 overflow-x-auto">
            <table className="w-full min-w-[260px]">
              <thead>
                <tr className="border-b border-[#F3F5F7]">
                  <th className="text-left pb-3 text-[11px] font-medium text-[#718EBF]">
                    SL No
                  </th>

                  <th className="text-left pb-3 text-[11px] font-medium text-[#718EBF]">
                    Name
                  </th>

                  <th className="text-left pb-3 text-[11px] font-medium text-[#718EBF]">
                    Price
                  </th>

                  <th className="text-left pb-3 text-[11px] font-medium text-[#718EBF]">
                    Return
                  </th>
                </tr>
              </thead>

              <tbody>
                {trendingStocks.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-[#F8F9FB] last:border-none"
                  >
                    <td className="py-4 text-[13px] text-[#232323]">
                      {item.id}
                    </td>

                    <td className="py-4 text-[13px] text-[#232323] whitespace-nowrap">
                      {item.name}
                    </td>

                    <td className="py-4 text-[13px] text-[#232323]">
                      {item.price}
                    </td>

                    <td
                      className={`py-4 text-[13px] font-medium ${item.color}`}
                    >
                      {item.return}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDashInvestment;