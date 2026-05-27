import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  "All",
  "Technical / Tool Development",
  "Governance",
  "Growth / Marketing",
  "Analytics",
  "Third Party Provider",
];

const grantsData = [
  {
    id: 1,
    category: "Technical / Tool Development",
    title: "Hedgie banner",
    amount: "$5,000 - $5,000",
    description:
      "They can be used to deliver spacecraft to the ends of the solar system with hyper-pierpoint accuracy.",
    users: ["1"],
  },

  {
    id: 2,
    category: "Governance",
    title: "Hedgie educational content",
    amount: "$5,000 - $5,000",
    description:
      "They are mathematically consistent in the sense that no one rule would ever violate another.",
    users: ["2", "3"],
  },

  {
    id: 3,
    category: "Growth / Marketing",
    title: "Hedgie educational content",
    amount: "$5,000 - $5,000",
    description:
      "This proved to be impossible using the traditional concepts of space and time.",
    users: ["4", "5", "6"],
    image: true,
  },

  {
    id: 4,
    category: "Analytics",
    title: "Japanese content website",
    amount: "$5,000 - $5,000",
    description:
      "Historically, the electron, for example, was thought to behave like a particle.",
    users: ["7", "8", "9"],
    image: true,
  },

  {
    id: 5,
    category: "Technical / Tool Development",
    title: "DGP referral program",
    amount: "$5,000 - $5,000",
    description:
      "They finally obtained a consistent description of the behavior of matter on a small scale.",
    users: ["10", "11", "12"],
  },

  {
    id: 6,
    category: "Third Party Provider",
    title: "ETHGlobal event sponsorship",
    amount: "$5,000 - $5,000",
    description:
      "Because atomic behavior is so unlike ordinary experience, it is very difficult to get used to.",
    users: ["13"],
    image: true,
  },

  {
    id: 7,
    category: "Governance",
    title: "Rust SDK",
    amount: "$5,000 - $5,000",
    description:
      "At the end of the 19th century physics appeared to be an open science.",
    users: ["14", "15", "16"],
  },

  {
    id: 8,
    category: "Growth / Marketing",
    title: "Hack for Inclusion Sponsorship",
    amount: "$5,000 - $5,000",
    description:
      "Later, however, Einstein developed a new view of time first and then space.",
    users: ["17", "18"],
  },

  {
    id: 9,
    category: "Analytics",
    title: "Gitcoin Grants Round 13 sponsorship",
    amount: "$5,000 - $5,000",
    description:
      "So we have to learn about them in a sort of abstract or imaginative fashion.",
    users: ["19"],
  },
];

export default function FundedGrants() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [showCompleted, setShowCompleted] = useState(false);

  const handleApplyGrant = () => {
    navigate("/dydx/apply");
  }

  const handleCategoryClick = () => {
    navigate(`/dydx/category`);
  }

  const filteredGrants = useMemo(() => {
    let filtered = grantsData;

    if (activeCategory !== "All") {
      filtered = filtered.filter(
        (item) => item.category === activeCategory,
      );
    }

    if (showCompleted) {
      filtered = filtered.slice(0, 5);
    }

    return filtered;
  }, [activeCategory, showCompleted]);

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

      <div className="relative z-20 max-w-[1180px] mx-auto px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="
              text-white
              text-[36px]
              md:text-[58px]
              font-semibold
              tracking-[-0.04em]
              leading-[1.05]
            "
          >
            Funded grants
          </h2>
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
          {categories.map((item) => {
            const active = activeCategory === item;

            return (
              <button
                key={item}
                onClick={() => setActiveCategory(item)}
                className={`
                  h-[38px]
                  px-5
                  rounded-[10px]
                  text-[12px]
                  md:text-[13px]
                  transition-all
                  duration-300
                  whitespace-nowrap
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

        {/* Toggle */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() =>
              setShowCompleted(!showCompleted)
            }
            className="flex items-center gap-3"
          >
            <div
              className={`
                relative
                w-[42px]
                h-[22px]
                rounded-full
                transition-all
                duration-300
                ${
                  showCompleted
                    ? "bg-[#5E5BFF]"
                    : "bg-[#3A3958]"
                }
              `}
            >
              <div
                className={`
                  absolute
                  top-[3px]
                  w-4
                  h-4
                  rounded-full
                  bg-white
                  transition-all
                  duration-300
                  ${
                    showCompleted
                      ? "left-[22px]"
                      : "left-[3px]"
                  }
                `}
              />
            </div>

            <span
              className="
                text-[#C9C9DD]
                text-[13px]
              "
            >
              Show only completed
            </span>
          </button>
        </div>

        {/* Masonry Grid */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
          "
        >
          {filteredGrants.map((item) => (
            <div
              key={item.id}
              className="
                rounded-[22px]
                overflow-hidden
                bg-[#3B3A5B]
                flex
                flex-col
                min-h-[330px]
              "
              onClick={() => handleCategoryClick()}
            >
              {/* Top Image */}
              {item.image && (
                <div
                  className="
                    h-[90px]
                    bg-[#23233A]
                  "
                />
              )}

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Category */}
                <p
                  className="
                    text-[#8F8FB2]
                    text-[11px]
                    tracking-[0.08em]
                  "
                >
                  Category
                </p>

                {/* Title */}
                <h3
                  className="
                    text-white
                    text-[20px]
                    md:text-[22px]
                    leading-[1.25]
                    font-semibold
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
                    tracking-[0.05em]
                    mt-3
                  "
                >
                  Funding amount : {item.amount}
                </p>

                {/* Description */}
                <p
                  className="
                    text-[#D4D4E8]
                    text-[13px]
                    leading-[1.8]
                    mt-5
                  "
                >
                  {item.description}
                </p>

                {/* Spacer */}
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

                  {item.users.length >= 3 && (
                    <div
                      className="
                        w-9
                        h-9
                        rounded-full
                        bg-[#5E5BFF]
                        border-2
                        border-[#3B3A5B]
                        flex
                        items-center
                        justify-center
                        text-white
                        text-[11px]
                        font-medium
                        -ml-2
                      "
                    >
                      +3
                    </div>
                  )}
                </div>
              </div>
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