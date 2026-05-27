import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    name: "Theresa Webb",
    image: "https://i.pravatar.cc/100?img=11",
  },

  {
    id: 2,
    name: "Jerry Wilson",
    image: "https://i.pravatar.cc/100?img=12",
  },
];

const transactions = [
  {
    id: 1,
    title: "Round 9",
    amount: "$250,000.00",
  },

  {
    id: 2,
    title: "Funding title",
    amount: "$30,000.00",
  },
];

const relatedProjects = [
  {
    id: 1,
    title: "Trading Strategy and Risk Tool",
    amount: "$5,000 - $10,000",
    description:
      "They were used to erase the machines that launched two waves of individual revolution.",
    users: ["1", "2"],
  },

  {
    id: 2,
    title: "dydx.vote + Subgraph",
    amount: "$5,000 - $5,000",
    description:
      "We knew how large digits will act, but things on a small scale just do not act that way.",
    users: ["3"],
  },
];

export default function CategoryDetails() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/dydx/blogprofile");
  }
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

      <div className="relative z-20 max-w-[980px] mx-auto px-5 lg:px-8">
        {/* Back Button */}
        <button
          className="
            mb-8
            w-10
            h-10
            rounded-full
            bg-[#343352]
            flex
            items-center
            justify-center
            text-white
            hover:bg-[#45446A]
            transition-all
          "
        >
          <ArrowLeft size={18} />
        </button>

        {/* Hero Image */}
        <div
          className="
            relative
            h-[220px]
            md:h-[320px]
            rounded-[24px]
            overflow-hidden
            bg-[#111827]
          "
        >
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="banner"
            className="w-full h-full object-cover opacity-70"
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
              to-transparent
            "
          />

          <div className="absolute bottom-8 left-8">
            <h3
              className="
                text-white
                text-[28px]
                md:text-[42px]
                font-semibold
                leading-[1.1]
                max-w-[500px]
              "
            >
              Youtube dYdX Education Library
            </h3>
          </div>
        </div>

        {/* Status + Funding */}
        <div
          className="
            mt-8
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-5
          "
        >
          <div className="flex items-center flex-wrap gap-4">
            {/* Badge */}
            <div
              className="
                h-[30px]
                px-4
                rounded-full
                bg-[#17C964]
                text-white
                text-[12px]
                font-medium
                flex
                items-center
              "
            >
              Funded ✓
            </div>

            {/* Funding */}
            <p
              className="
                text-[#A8A8C7]
                text-[13px]
              "
            >
              Funding amount:{" "}
              <span className="text-white">$5,000</span>
            </p>
          </div>

          {/* Project Link */}
          <button
            className="
              h-[42px]
              px-5
              rounded-[10px]
              bg-[#5E5BFF]
              text-white
              text-[13px]
              font-medium
              inline-flex
              items-center
              gap-2
              hover:bg-[#716EFF]
              transition-all
            "
          >
            Project link

            <ExternalLink size={14} />
          </button>
        </div>

        {/* Team */}
        <div className="mt-10">
          <h4
            className="
              text-white
              text-[15px]
              font-medium
            "
          >
            Team
          </h4>

          <div className="flex flex-wrap gap-3 mt-5">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="
                  h-[42px]
                  px-3
                  rounded-full
                  bg-[#343352]
                  flex
                  items-center
                  gap-2
                "
                onClick={() => handleProfileClick()}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-7
                    h-7
                    rounded-full
                    object-cover
                  "
                />

                <span
                  className="
                    text-white
                    text-[12px]
                  "
                >
                  {member.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-[#2F2F4D] mt-10" />

        {/* Sections */}
        <div className="space-y-12 mt-12">
          {[
            "Description",
            "Purpose",
            "Execution",
            "Payment structure",
          ].map((section, index) => (
            <div key={index}>
              <h3
                className="
                  text-white
                  text-[18px]
                  md:text-[22px]
                  font-semibold
                "
              >
                {section}
              </h3>

              <p
                className="
                  text-[#CFCFE3]
                  text-[13px]
                  md:text-[14px]
                  leading-[2]
                  mt-4
                "
              >
                Grant intended work on Funding Rates page,
                Rewards & Trading Simulator, and CLI Trading
                tool. All will be combined into an extremely
                accessible webpage that will continue to host
                additional maintenance on behalf of Chaos Labs.
              </p>
            </div>
          ))}
        </div>

        {/* Useful Links */}
        <div className="mt-12">
          <h3
            className="
              text-white
              text-[18px]
              md:text-[22px]
              font-semibold
            "
          >
            Useful links
          </h3>

          <div className="flex flex-col gap-4 mt-5">
            {[
              "www.granttitleproject.com",
              "www.granttitleproject.com",
              "www.granttitleproject.com",
            ].map((link, index) => (
              <a
                key={index}
                href="/"
                className="
                  text-[#6C67FF]
                  text-[13px]
                  inline-flex
                  items-center
                  gap-2
                  hover:text-white
                  transition-all
                "
              >
                {link}

                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div className="mt-14">
          <h3
            className="
              text-white
              text-[18px]
              md:text-[22px]
              font-semibold
            "
          >
            Funding transactions
          </h3>

          <div className="space-y-4 mt-6">
            {transactions.map((item) => (
              <div
                key={item.id}
                className="
                  rounded-[18px]
                  bg-[#3B3A5B]
                  p-5
                  flex
                  items-start
                  justify-between
                  gap-5
                "
              >
                <div>
                  <h4
                    className="
                      text-white
                      text-[15px]
                      font-semibold
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      text-[#8F8FB2]
                      text-[12px]
                      mt-2
                    "
                  >
                    Date
                  </p>

                  <p
                    className="
                      text-[#8F8FB2]
                      text-[12px]
                      mt-2
                    "
                  >
                    Description
                  </p>
                </div>

                <button
                  className="
                    text-white
                    text-[13px]
                    inline-flex
                    items-center
                    gap-2
                  "
                >
                  {item.amount}

                  <ExternalLink size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Related Projects */}
        <div className="mt-24 text-center">
          <h2
            className="
              text-white
              text-[34px]
              md:text-[54px]
              font-semibold
              tracking-[-0.03em]
              leading-[1.1]
            "
          >
            More grants like this
          </h2>

          <button
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              text-[#6C67FF]
              text-[14px]
              hover:text-white
              transition-all
            "
          >
            View all similar projects

            <ArrowRight size={16} />
          </button>

          {/* Cards */}
          <div
            className="
              mt-14
              grid
              grid-cols-1
              md:grid-cols-2
              gap-5
              text-left
            "
          >
            {relatedProjects.map((item) => (
              <div
                key={item.id}
                className="
                  rounded-[22px]
                  bg-[#3B3A5B]
                  p-5
                  flex
                  flex-col
                  min-h-[300px]
                "
              >
                <p
                  className="
                    text-[#8F8FB2]
                    text-[11px]
                  "
                >
                  Category
                </p>

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

                <p
                  className="
                    text-[#8F8FB2]
                    text-[12px]
                    mt-3
                  "
                >
                  Funding amount : {item.amount}
                </p>

                <p
                  className="
                    text-[#D4D4E8]
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