import { useMemo, useState } from "react";
import {
  ArrowUpRight,
} from "lucide-react";

const filters = [
  "All",
  "Category",
  "Category 2",
  "Category 3",
  "Category 4",
];

const expensesData = [
  {
    id: 1,
    title: "Airtable Yearly Subscription",
    type: "Vendor",
    description:
      "Airtable is used to build the application form and store all application data.",
    amount: "$500.00",
    category: "Category",
  },

  {
    id: 2,
    title: "Expense title",
    type: "Type",
    description: "Description",
    amount: "-5,198.37 USDC",
    category: "Category 2",
  },

  {
    id: 3,
    title: "Expense title",
    type: "Type",
    description: "Description",
    amount: "-5,198.37 USDC",
    category: "Category 3",
  },

  {
    id: 4,
    title: "Expense title",
    type: "Type",
    description: "Description",
    amount: "-5,198.37 USDC",
    category: "Category 4",
  },

  {
    id: 5,
    title: "Expense title",
    type: "Type",
    description: "Description",
    amount: "-5,198.37 USDC",
    category: "Category",
  },

  {
    id: 6,
    title: "Expense title",
    type: "Type",
    description: "Description",
    amount: "-5,198.37 USDC",
    category: "Category 2",
  },

  {
    id: 7,
    title: "Expense title",
    type: "Type",
    description: "Description",
    amount: "-5,198.37 USDC",
    category: "Category 3",
  },

  {
    id: 8,
    title: "Expense title",
    type: "Type",
    description: "Description",
    amount: "-5,198.37 USDC",
    category: "Category 4",
  },

  {
    id: 9,
    title: "Expense title",
    type: "Type",
    description: "Description",
    amount: "-5,198.37 USDC",
    category: "Category",
  },
];

export default function ProgramExpenses() {
  const [activeFilter, setActiveFilter] =
    useState("All");

  const filteredExpenses = useMemo(() => {
    if (activeFilter === "All") {
      return expensesData;
    }

    return expensesData.filter(
      (item) => item.category === activeFilter,
    );
  }, [activeFilter]);

  return (
    <section className="relative overflow-hidden bg-[#17172B] min-h-screen">
      {/* Grid Background */}
      <div
        className="
          absolute
          inset-0
          opacity-30
          [background-image:linear-gradient(#2D2D52_1px,transparent_1px),linear-gradient(to_right,#2D2D52_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-[#5E5BFF]
          opacity-[0.08]
          blur-[180px]
          rounded-full
        "
      />

      <div className="relative z-20 max-w-[980px] mx-auto px-5 lg:px-8 py-20 md:py-28">
        {/* Heading */}
        <div className="text-center">
          <h1
            className="
              text-white
              text-[38px]
              md:text-[60px]
              font-semibold
              tracking-[-0.04em]
              leading-[1.05]
            "
          >
            Program expenses
          </h1>
        </div>

        {/* Filters */}
        <div
          className="
            mt-12
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
          "
        >
          {filters.map((item) => {
            const active = activeFilter === item;

            return (
              <button
                key={item}
                onClick={() => setActiveFilter(item)}
                className={`
                  h-[38px]
                  px-5
                  rounded-[10px]
                  text-[12px]
                  md:text-[13px]
                  whitespace-nowrap
                  transition-all
                  duration-300
                  ${
                    active
                      ? "bg-[#434064] text-white"
                      : "text-[#A8A8C7] hover:text-white"
                  }
                `}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Expense List */}
        <div className="mt-16 flex flex-col gap-5">
          {filteredExpenses.map((item) => (
            <div
              key={item.id}
              className="
                rounded-[20px]
                bg-[#3B3A5B]
                p-5
                md:p-6
              "
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3
                    className="
                      text-white
                      text-[18px]
                      md:text-[22px]
                      font-semibold
                      leading-[1.3]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-[#8F8FB2]
                      text-[12px]
                      mt-2
                    "
                  >
                    {item.type}
                  </p>
                </div>

                {/* Amount */}
                <button
                  className="
                    shrink-0
                    text-white
                    text-[12px]
                    md:text-[13px]
                    inline-flex
                    items-center
                    gap-2
                  "
                >
                  {item.amount}

                  <ArrowUpRight size={15} />
                </button>
              </div>

              {/* Description */}
              <p
                className="
                  text-[#D4D4E8]
                  text-[13px]
                  md:text-[14px]
                  leading-[1.9]
                  mt-5
                  max-w-[620px]
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}