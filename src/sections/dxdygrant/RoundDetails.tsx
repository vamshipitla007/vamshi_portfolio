import { ArrowLeft } from "lucide-react";

const fundedGrants = [
  {
    id: 1,
    category: "Analytics Dashboard",
    title: "Analytics Dashboard Llama Partnership",
    amount: "$5,000 - $10,000",
    description:
      "Partnership with Llama dashboard and analytics integrations.",
    users: ["1", "2", "3"],
  },

  {
    id: 2,
    category: "Growth / Marketing",
    title:
      "Japanese Website with Educational and Newsletter Content",
    amount: "$5,000 - $10,000",
    description:
      "Japanese dYdX educational website to include educational content.",
    users: ["4", "5", "6"],
  },

  {
    id: 3,
    category: "Growth / Marketing",
    title: "Educational Content using Hedgees",
    amount: "$5,000 - $10,000",
    description: "Description",
    users: ["7", "8"],
  },

  {
    id: 4,
    category: "Growth / Marketing",
    title: "Growth / Marketing",
    amount: "$5,000 - $10,000",
    description: "Description",
    users: ["9", "10"],
  },
];

export default function RoundDetails() {
  return (
    <section className="relative overflow-hidden bg-[#17172B] py-20 md:py-28">
      {/* Grid */}
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

      <div className="relative z-20 max-w-[860px] mx-auto px-5 lg:px-8">
        {/* Back */}
        <button
          className="
            w-10
            h-10
            rounded-full
            bg-[#343352]
            flex
            items-center
            justify-center
            text-white
            hover:bg-[#4A4968]
            transition-all
          "
        >
          <ArrowLeft size={18} />
        </button>

        {/* Heading */}
        <div className="text-center mt-10">
          <p
            className="
              text-[#8F8FB2]
              text-[12px]
              tracking-[0.08em]
            "
          >
            Funding round
          </p>

          <h1
            className="
              text-white
              text-[40px]
              md:text-[68px]
              font-semibold
              tracking-[-0.04em]
              leading-[1.05]
              mt-4
            "
          >
            Round 9 of approvals
          </h1>

          {/* Author */}
          <div className="mt-8 flex flex-col items-center">
            <p
              className="
                text-[#8F8FB2]
                text-[12px]
              "
            >
              By
            </p>

            <div
              className="
                mt-3
                h-[34px]
                px-4
                rounded-full
                bg-[#343352]
                text-white
                text-[12px]
                flex
                items-center
                justify-center
              "
            >
              dYdX Grants Team
            </div>
          </div>
        </div>

        {/* Hero Card */}
        <div
          className="
            relative
            mt-16
            h-[220px]
            md:h-[320px]
            rounded-[24px]
            overflow-hidden
            border
            border-[#5E5BFF]
            bg-[#17172B]
          "
        >
          {/* Grid */}
          <div
            className="
              absolute
              inset-0
              opacity-20
              [background-image:linear-gradient(#2D2D52_1px,transparent_1px),linear-gradient(to_right,#2D2D52_1px,transparent_1px)]
              [background-size:24px_24px]
            "
          />

          {/* Oval */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[260px]
              h-[110px]
              border
              border-[#5E5BFF]
              rounded-full
            "
          />

          {/* Text */}
          <div
            className="
              relative
              z-20
              h-full
              flex
              flex-col
              items-center
              justify-center
              text-center
              px-6
            "
          >
            <p
              className="
                text-[#8F8FB2]
                text-[12px]
                tracking-[0.08em]
              "
            >
              Funding Round
            </p>

            <h2
              className="
                text-white
                text-[34px]
                md:text-[58px]
                font-semibold
                leading-[1]
                tracking-[-0.03em]
                mt-4
              "
            >
              Round 9
              <br />
              of approvals
            </h2>
          </div>
        </div>

        {/* Article */}
        <div className="mt-16 space-y-10">
          <div>
            <p
              className="
                text-[#D7D7E8]
                text-[13px]
                md:text-[14px]
                leading-[2]
              "
            >
              Hi Everyone!
              <br />
              <br />
              Excited to share another round of funding
              approved by the Committee! For Round 9,
              we have 9 grantees with a total of
              $240,000 in dYdX funding.
            </p>
          </div>

          <div>
            <h3
              className="
                text-white
                text-[28px]
                md:text-[42px]
                font-semibold
                leading-[1.2]
                tracking-[-0.03em]
              "
            >
              Centralization lets you make decisions
              quickly
            </h3>

            <p
              className="
                mt-6
                text-[#D7D7E8]
                text-[13px]
                md:text-[14px]
                leading-[2]
              "
            >
              We’re happy to share that the Committee
              example is close to getting finalized.
              This review will enable payments to be
              completed by the Grants multi-sig.
            </p>
          </div>

          <div>
            <h4
              className="
                text-white
                text-[20px]
                md:text-[30px]
                font-semibold
                leading-[1.3]
              "
            >
              Centralization lets you make decisions
              quickly
            </h4>

            <p
              className="
                mt-5
                text-[#D7D7E8]
                text-[13px]
                md:text-[14px]
                leading-[2]
              "
            >
              We’re happy to share that the Committee
              example is close to getting finalized.
              This review will enable payments to be
              completed by the Grants multi-sig.
            </p>
          </div>

          {/* Quote */}
          <div
            className="
              rounded-[20px]
              bg-[#343352]
              p-6
              md:p-8
            "
          >
            <p
              className="
                text-white
                text-[14px]
                md:text-[16px]
                leading-[2]
                italic
              "
            >
              “The more realistic an experience feels,
              the more we feel feedback we can get.”
            </p>

            <p
              className="
                text-[#9A9ABC]
                text-[12px]
                mt-5
              "
            >
              — Colophon Abrams
            </p>
          </div>

          <p
            className="
              text-[#D7D7E8]
              text-[13px]
              md:text-[14px]
              leading-[2]
            "
          >
            Hope everyone has a great week!
          </p>
        </div>

        {/* Funded Grants */}
        <div className="mt-28">
          <div className="text-center">
            <h2
              className="
                text-white
                text-[34px]
                md:text-[58px]
                font-semibold
                tracking-[-0.04em]
                leading-[1.05]
              "
            >
              Funded grants
            </h2>
          </div>

          {/* Grid */}
          <div
            className="
              mt-14
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
            "
          >
            {fundedGrants.map((item) => (
              <div
                key={item.id}
                className="
                  rounded-[22px]
                  bg-[#3B3A5B]
                  p-5
                  flex
                  flex-col
                  min-h-[320px]
                "
              >
                {/* Category */}
                <p
                  className="
                    text-[#8F8FB2]
                    text-[11px]
                    tracking-[0.08em]
                  "
                >
                  {item.category}
                </p>

                {/* Title */}
                <h3
                  className="
                    text-white
                    text-[22px]
                    font-semibold
                    leading-[1.3]
                    mt-3
                  "
                >
                  {item.title}
                </h3>

                {/* Amount */}
                <p
                  className="
                    text-[#8F8FB2]
                    text-[12px]
                    mt-3
                  "
                >
                  Funding amount : {item.amount}
                </p>

                {/* Description */}
                <p
                  className="
                    text-[#D7D7E8]
                    text-[13px]
                    leading-[1.9]
                    mt-5
                  "
                >
                  {item.description}
                </p>

                <div className="flex-1" />

                {/* Users */}
                <div className="flex items-center mt-8">
                  {item.users.map((user, index) => (
                    <img
                      key={index}
                      src={`https://i.pravatar.cc/100?img=${user}`}
                      alt="user"
                      className="
                        w-9
                        h-9
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
      </div>
    </section>
  );
}