/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const initiativesData = [
  {
    id: 1,
    title: "Funding Rate Page",
    description:
      "Page that provides a live look at all funding rates with popular timeframes in annualized format",
    amount: "$45,000 - $85,000",
    status: "Funded",
  },

  {
    id: 2,
    title: "CLI Trading Tool",
    description:
      "Self-hosted CLI tool leveraging the dYdX API to allow all functionalities from a terminal",
    amount: "$25,000 - $40,000",
    status: "Funded",
  },

  {
    id: 3,
    title: "New Language SDKs",
    description:
      "Replicate existing Python SDK to new programming languages with all the same features",
    amount: "$25,000 - $40,000",
    status: "Open",
  },

  {
    id: 4,
    title: "Liquidation Alert Tool",
    description:
      "Self-hosted tool that alerts the trader of upcoming liquidation prices across multiple messaging venues",
    amount: "$30,000 - $50,000",
    status: "Completed",
  },

  {
    id: 5,
    title: "Governance Dashboard",
    description:
      "Governance page to promote discussions, proposals, delegation and voting",
    amount: "$15,000 - $30,000",
    status: "Funded",
  },

  {
    id: 6,
    title: "Delegation Tool",
    description:
      "Webpage to allow active participants to market their voting and enable direct delegation from dYdX holders",
    amount: "$15,000 - $30,000",
    status: "Funded",
  },

  {
    id: 7,
    title: "Newsletter",
    description:
      "Weekly or Monthly newsletters promoting and educating the dYdX platform",
    amount: "$10,000 - $20,000",
    status: "Funded",
  },

  {
    id: 8,
    title: "Academy Contributions",
    description:
      "Webpages, Courses, Glossaries and Youtube libraries educating new users on dYdX",
    amount: "$10,000 - $25,000",
    status: "Funded",
  },

  {
    id: 9,
    title: "Discord bots",
    description:
      "Additional Discord bots that notify members of activity on dYdX and governance",
    amount: "$5,000 - $10,000",
    status: "Open",
  },

  {
    id: 10,
    title: "Reward tracking & Simulator",
    description:
      "Page or tool that allows traders to calculate future rewards and simulate earnings from activity",
    amount: "$20,000 - $30,000",
    status: "Funded",
  },
];

const filters = [
  "All",
  "Open",
  "Funded",
  "Completed",
];

export default function DiscoverInitiatives() {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const handleApplyGrant = () => {
    navigate("/dydx/apply");
  }

  const filteredData = useMemo(() => {
    if (activeFilter === "All") {
      return initiativesData;
    }

    return initiativesData.filter(
      (item) => item.status === activeFilter,
    );
  }, [activeFilter]);

  const getBadgeStyles = (status:any) => {
    switch (status) {
      case "Open":
        return "bg-[#5E5BFF] text-white";

      case "Completed":
        return "bg-[#17C964] text-white";

      default:
        return "bg-[#0F0F1A] text-white";
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#17172B] py-24 md:py-32">
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

      <div className="relative z-20 max-w-[920px] mx-auto px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="
              text-white
              text-[34px]
              md:text-[56px]
              font-semibold
              tracking-[-0.03em]
              leading-[1.05]
            "
          >
            Discover initiatives (RFPs)
          </h2>

          <p
            className="
              max-w-[700px]
              mx-auto
              text-[#A8A8C7]
              text-[13px]
              md:text-[14px]
              leading-[1.9]
              mt-5
            "
          >
            The list below includes initial ideas that we think
            could make excellent Grants. This is a living list
            that will continue to update as ideas popup.
          </p>
        </div>

        {/* Filters */}
        <div
          className="
            flex
            items-center
            justify-center
            flex-wrap
            gap-3
            mt-12
          "
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  h-[38px]
                  px-5
                  rounded-[10px]
                  text-[13px]
                  font-medium
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-[#3F3D63] text-white"
                      : "bg-transparent text-[#A8A8C7] hover:text-white"
                  }
                `}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className="mt-14 flex flex-col gap-5">
          {filteredData.map((item) => (
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
                      text-[20px]
                      md:text-[24px]
                      font-semibold
                      leading-[1.2]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-[#D0D0E6]
                      text-[12px]
                      md:text-[13px]
                      leading-[1.8]
                      mt-3
                      max-w-[620px]
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {/* Status */}
                <div
                  className={`
                    shrink-0
                    h-[32px]
                    px-4
                    rounded-full
                    text-[11px]
                    font-medium
                    flex
                    items-center
                    gap-1
                    ${getBadgeStyles(item.status)}
                  `}
                >
                  {item.status}

                  {item.status === "Completed" && (
                    <Check size={12} />
                  )}
                </div>
              </div>

              {/* Funding */}
              <p
                className="
                  text-[#8F8FB2]
                  text-[12px]
                  md:text-[13px]
                  tracking-[0.05em]
                  mt-5
                "
              >
                Funding amount : {item.amount}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="
            relative
            mt-24
            rounded-[28px]
            overflow-hidden
            bg-gradient-to-r
            from-[#4B46D1]
            to-[#6A67FF]
            px-6
            md:px-12
            py-14
            text-center
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              w-[260px]
              h-[260px]
              bg-white
              opacity-10
              blur-[120px]
              rounded-full
            "
          />

          <div className="relative z-20">
            <p
              className="
                text-white/80
                text-[13px]
                md:text-[14px]
              "
            >
              Have a project in mind?
            </p>

            <h3
              className="
                text-white
                text-[30px]
                md:text-[52px]
                font-semibold
                leading-[1.1]
                tracking-[-0.03em]
                mt-4
              "
            >
              Let’s create something awesome.
            </h3>

            <button
              className="
                mt-8
                h-[50px]
                px-7
                rounded-[12px]
                bg-white
                text-[#5E5BFF]
                text-[14px]
                font-medium
                inline-flex
                items-center
                gap-2
                hover:scale-[1.02]
                transition-all
              "
              onClick={handleApplyGrant}
            >
              Apply for grant

              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}