import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projectCards = [
  {
    id: 1,
    category: "Crowdfund",
    title: "Funding rates page",
    amount: "$5,000 - $6,000",
    description:
      "Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes.",
    users: ["https://i.pravatar.cc/40?img=1", "https://i.pravatar.cc/40?img=2"],
  },

  {
    id: 2,
    category: "Edition",
    title: "Tradingview integration",
    amount: "$5,000 - $6,000",
    description:
      "The grant will be used to build a web application that integrates Tradingview strategies into a dYdX Trading account.",
    users: [
      "https://i.pravatar.cc/40?img=3",
      "https://i.pravatar.cc/40?img=4",
      "https://i.pravatar.cc/40?img=5",
    ],
    image: true,
  },

  {
    id: 3,
    category: "Entry",
    title: "Rewards optimization research and paper",
    amount: "$5,000 - $6,000",
    description:
      "The Grant will be used to write a full research report and code samples that determine optimal trading strategies.",
    users: [
      "https://i.pravatar.cc/40?img=6",
      "https://i.pravatar.cc/40?img=7",
      "https://i.pravatar.cc/40?img=8",
    ],
  },

  {
    id: 4,
    category: "Crowdfund",
    title: "DAO strategy research",
    amount: "$5,000 - $6,000",
    description:
      "The grant will fund research into DAO structures and governance contributions.",
    users: ["https://i.pravatar.cc/40?img=9"],
  },
];

export default function HeroSection() {
  const navigate = useNavigate();

  const handleApplyGrant = () => {
    navigate("/dydx/apply");
  }
  return (
    <section className="relative overflow-hidden bg-[#17172B]">
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

      {/* Glow Effect */}
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

      <div className="relative z-20 max-w-[1280px] mx-auto px-5 lg:px-8">
        <div
          className="
            min-h-[920px]
            flex
            flex-col
            items-center
            text-center
            pt-[90px]
            md:pt-[120px]
          "
        >
          {/* Heading */}
          <div className="max-w-[920px]">
            <h1
              className="
                text-white
                font-semibold
                leading-[1.05]
                tracking-[-0.04em]
                text-[42px]
                sm:text-[56px]
                md:text-[74px]
                lg:text-[88px]
              "
            >
              Powering the future of dYdX through community grants
            </h1>

            {/* Curved Line */}
            <div className="flex justify-center mt-2 md:mt-3">
              <div
                className="
                  w-[120px]
                  md:w-[180px]
                  h-[10px]
                  border-b-2
                  border-[#5E5BFF]
                  rounded-[100%]
                "
              />
            </div>
          </div>

          {/* Buttons */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              gap-4
              mt-10
            "
          >
            <button
              className="
                h-[50px]
                px-7
                rounded-[12px]
                bg-[#31314F]
                hover:bg-[#3C3C63]
                transition-all
                duration-300
                text-white
                text-[14px]
                font-medium
              "
            >
              Discover RFPs
            </button>

            <button
              className="
                h-[50px]
                px-7
                rounded-[12px]
                bg-[#5E5BFF]
                hover:bg-[#716EFF]
                transition-all
                duration-300
                text-white
                text-[14px]
                font-medium
                flex
                items-center
                gap-2
              "
              onClick={handleApplyGrant}
            >
              Apply for grant
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Stats */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-10
              sm:gap-16
              mt-16
              md:mt-20
            "
          >
            <div>
              <h3
                className="
                  text-white
                  text-[24px]
                  md:text-[30px]
                  font-medium
                "
              >
                100+
              </h3>

              <p
                className="
                  text-[#B4B4CC]
                  text-[12px]
                  md:text-[13px]
                  mt-1
                  tracking-[0.08em]
                "
              >
                projects funded
              </p>
            </div>

            <div>
              <h3
                className="
                  text-white
                  text-[24px]
                  md:text-[30px]
                  font-medium
                "
              >
                $3+ million
              </h3>

              <p
                className="
                  text-[#B4B4CC]
                  text-[12px]
                  md:text-[13px]
                  mt-1
                  tracking-[0.08em]
                "
              >
                awarded
              </p>
            </div>

            <div>
              <h3
                className="
                  text-white
                  text-[24px]
                  md:text-[30px]
                  font-medium
                "
              >
                400+
              </h3>

              <p
                className="
                  text-[#B4B4CC]
                  text-[12px]
                  md:text-[13px]
                  mt-1
                  tracking-[0.08em]
                "
              >
                projects funded
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="mt-20 md:mt-28 animate-bounce">
            <svg
              width="30"
              height="70"
              viewBox="0 0 30 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 1V62"
                stroke="#5E5BFF"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <path
                d="M3 50L15 65L27 50"
                stroke="#5E5BFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Bottom Content */}
          <div className="max-w-[720px] mt-10 md:mt-16">
            <h2
              className="
                text-white
                text-[32px]
                md:text-[52px]
                leading-[1.1]
                font-semibold
                tracking-[-0.03em]
              "
            >
              Projects built with grants
            </h2>

            <p
              className="
                text-[#B4B4CC]
                text-[14px]
                md:text-[16px]
                leading-[1.8]
                mt-6
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nulla risus, consectetur ut bibendum non, gravida non libero.
            </p>

            <button
              className="
                mt-8
                text-[#6A67FF]
                text-[14px]
                md:text-[15px]
                font-medium
                hover:text-white
                transition-all
                duration-300
                inline-flex
                items-center
                gap-2
              "
            >
              View all funded projects
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
      {/* Cards Section */}
      <div
        className="
        w-full
        mt-20
        overflow-x-auto
        scrollbar-hide
    "
      >
        <div
          className="
            flex
            justify-center
            gap-6
            pb-5
            w-max
            mx-auto
            "
        >
          {projectCards.map((card) => (
            <div
              key={card.id}
              className="
                    w-[300px]
                    md:w-[300px]
                    min-h-[480px]
                    rounded-[24px]
                    bg-[#3B3A5B]
                    overflow-hidden
                    flex
                    flex-col
                    p-6
                    shrink-0
                  "
            >
              {/* Top Image */}
              {card.image && (
                <div
                  className="
                        h-[160px]
                        rounded-[18px]
                        bg-[#23233A]
                        mb-6
                        -mx-6
                        -mt-6
                      "
                />
              )}

              {/* Category */}
              <p
                className="
                      text-[#B7B7D4]
                      text-[13px]
                      tracking-[0.08em]
                    "
              >
                {card.category}
              </p>

              {/* Title */}
              <h3
                className="
                      text-white
                      text-[22px]
                      leading-[1.3]
                      font-semibold
                      mt-3
                    "
              >
                {card.title}
              </h3>

              {/* Funding */}
              <p
                className="
                      text-[#A8A8C7]
                      text-[13px]
                      mt-3
                      tracking-[0.04em]
                    "
              >
                Funding amount : {card.amount}
              </p>

              {/* Description */}
              <p
                className="
                      text-white
                      text-[14px]
                      leading-[1.9]
                      mt-6
                    "
              >
                {card.description}
              </p>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Users */}
              <div className="flex items-center mt-10">
                {card.users.map((user, index) => (
                  <img
                    key={index}
                    src={user}
                    alt="user"
                    className="
                          w-10
                          h-10
                          rounded-full
                          border-2
                          border-[#3B3A5B]
                          object-cover
                          -ml-2
                          first:ml-0
                        "
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-24" />
    </section>
  );
}
