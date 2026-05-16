const loanCards = [
  {
    title: "Personal Loans",
    amount: "$50,000",
    bg: "bg-[#E7EDFF]",
    icon: "👤",
  },
  {
    title: "Corporate Loans",
    amount: "$100,000",
    bg: "bg-[#FFF5D9]",
    icon: "💼",
  },
  {
    title: "Business Loans",
    amount: "$500,000",
    bg: "bg-[#FFE0EB]",
    icon: "📊",
  },
  {
    title: "Custom Loans",
    amount: "Choose Money",
    bg: "bg-[#DCFAF8]",
    icon: "🛠️",
  },
];

const loansData = [
  {
    id: "01.",
    money: "$100,000",
    left: "$40,500",
    duration: "8 Months",
    rate: "12%",
    installment: "$2,000 / month",
    active: true,
  },
  {
    id: "02.",
    money: "$500,000",
    left: "$250,000",
    duration: "36 Months",
    rate: "10%",
    installment: "$8,000 / month",
  },
  {
    id: "03.",
    money: "$900,000",
    left: "$40,500",
    duration: "12 Months",
    rate: "12%",
    installment: "$5,000 / month",
  },
  {
    id: "04.",
    money: "$50,000",
    left: "$40,500",
    duration: "25 Months",
    rate: "5%",
    installment: "$2,000 / month",
  },
  {
    id: "05.",
    money: "$50,000",
    left: "$40,500",
    duration: "5 Months",
    rate: "16%",
    installment: "$10,000 / month",
  },
  {
    id: "06.",
    money: "$80,000",
    left: "$25,500",
    duration: "14 Months",
    rate: "8%",
    installment: "$2,000 / month",
  },
  {
    id: "07.",
    money: "$12,000",
    left: "$5,500",
    duration: "9 Months",
    rate: "13%",
    installment: "$500 / month",
  },
  {
    id: "08.",
    money: "$160,000",
    left: "$100,800",
    duration: "3 Months",
    rate: "12%",
    installment: "$900 / month",
  },
];

const BankDashLoans = () => {
  return (
    <div className="space-y-5 max-w-[1400px] mx-auto">
      {/* TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {loanCards.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-[20px] p-4 flex items-center gap-4"
          >
            <div
              className={`w-[55px] h-[55px] rounded-full flex items-center justify-center text-[22px] ${item.bg}`}
            >
              {item.icon}
            </div>

            <div className="min-w-0">
              <p className="text-[12px] text-[#718EBF] truncate">
                {item.title}
              </p>

              <h2 className="text-[22px] font-semibold text-[#232323] mt-1 truncate">
                {item.amount}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* LOAN TABLE */}
      <div>
        <h2 className="text-[16px] md:text-[18px] font-semibold text-[#343C6A] mb-3">
          Active Loans Overview
        </h2>

        {/* DESKTOP */}
        <div className="hidden lg:block bg-white rounded-[20px] p-4 overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b border-[#E6EFF5]">
                <th className="text-left py-4 text-[12px] font-medium text-[#718EBF]">
                  SL No
                </th>

                <th className="text-left py-4 text-[12px] font-medium text-[#718EBF]">
                  Loan Money
                </th>

                <th className="text-left py-4 text-[12px] font-medium text-[#718EBF]">
                  Left to repay
                </th>

                <th className="text-left py-4 text-[12px] font-medium text-[#718EBF]">
                  Duration
                </th>

                <th className="text-left py-4 text-[12px] font-medium text-[#718EBF]">
                  Interest rate
                </th>

                <th className="text-left py-4 text-[12px] font-medium text-[#718EBF]">
                  Installment
                </th>

                <th className="text-left py-4 text-[12px] font-medium text-[#718EBF]">
                  Repay
                </th>
              </tr>
            </thead>

            <tbody>
              {loansData.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-[#F3F5F7] last:border-none"
                >
                  <td className="py-4 text-[13px] text-[#232323]">
                    {item.id}
                  </td>

                  <td className="py-4 text-[13px] text-[#232323]">
                    {item.money}
                  </td>

                  <td className="py-4 text-[13px] text-[#232323]">
                    {item.left}
                  </td>

                  <td className="py-4 text-[13px] text-[#232323]">
                    {item.duration}
                  </td>

                  <td className="py-4 text-[13px] text-[#232323]">
                    {item.rate}
                  </td>

                  <td className="py-4 text-[13px] text-[#232323]">
                    {item.installment}
                  </td>

                  <td className="py-4">
                    <button
                      className={`h-[34px] px-6 rounded-full border text-[12px] font-medium transition-all ${
                        item.active
                          ? "border-[#1814F3] text-[#1814F3]"
                          : "border-[#232323] text-[#232323]"
                      }`}
                    >
                      Repay
                    </button>
                  </td>
                </tr>
              ))}

              {/* TOTAL */}
              <tr>
                <td className="pt-4 text-[13px] font-medium text-[#FE5C73]">
                  Total
                </td>

                <td className="pt-4 text-[13px] font-medium text-[#FE5C73]">
                  $125,0000
                </td>

                <td className="pt-4 text-[13px] font-medium text-[#FE5C73]">
                  $750,000
                </td>

                <td></td>

                <td></td>

                <td className="pt-4 text-[13px] font-medium text-[#FE5C73]">
                  $50,000 / month
                </td>

                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden space-y-3">
          {loansData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[20px] p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] text-[#718EBF]">
                    Loan Amount
                  </p>

                  <h3 className="text-[16px] font-semibold text-[#232323] mt-1">
                    {item.money}
                  </h3>
                </div>

                <button
                  className={`h-[32px] px-5 rounded-full border text-[11px] font-medium ${
                    item.active
                      ? "border-[#1814F3] text-[#1814F3]"
                      : "border-[#232323] text-[#232323]"
                  }`}
                >
                  Repay
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-5">
                <div>
                  <p className="text-[10px] text-[#718EBF]">
                    Left to repay
                  </p>

                  <h4 className="text-[13px] text-[#232323] mt-1">
                    {item.left}
                  </h4>
                </div>

                <div>
                  <p className="text-[10px] text-[#718EBF]">
                    Duration
                  </p>

                  <h4 className="text-[13px] text-[#232323] mt-1">
                    {item.duration}
                  </h4>
                </div>

                <div>
                  <p className="text-[10px] text-[#718EBF]">
                    Interest Rate
                  </p>

                  <h4 className="text-[13px] text-[#232323] mt-1">
                    {item.rate}
                  </h4>
                </div>

                <div>
                  <p className="text-[10px] text-[#718EBF]">
                    Installment
                  </p>

                  <h4 className="text-[13px] text-[#232323] mt-1">
                    {item.installment}
                  </h4>
                </div>
              </div>
            </div>
          ))}

          {/* MOBILE TOTAL */}
          <div className="bg-white rounded-[20px] p-4">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-medium text-[#FE5C73]">
                Total Loan
              </p>

              <p className="text-[13px] font-medium text-[#FE5C73]">
                $125,0000
              </p>
            </div>

            <div className="flex items-center justify-between mt-3">
              <p className="text-[13px] font-medium text-[#FE5C73]">
                Monthly Installment
              </p>

              <p className="text-[13px] font-medium text-[#FE5C73]">
                $50,000 / month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDashLoans;