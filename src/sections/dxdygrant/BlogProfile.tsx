import {
  ArrowLeft,
  Link2,
} from "lucide-react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const projects = [
  {
    id: 1,
    title: "Grant title",
    amount: "$5,000 - $5,000",
    description:
      "So what we learn about the properties of electrons will apply also to all particles.",
    users: ["1", "2", "3"],
  },

  {
    id: 2,
    title: "Grant title",
    amount: "$5,000 - $5,000",
    description:
      "Things on a very small scale behave like nothing that you have direct experience about.",
    users: ["4", "5"],
    image: true,
  },
];

export default function BlogProfile() {
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
            hover:bg-[#45446A]
            transition-all
          "
        >
          <ArrowLeft size={18} />
        </button>

        {/* Profile */}
        <div className="flex flex-col items-center text-center mt-10">
          {/* Avatar */}
          <div
            className="
              w-[130px]
              h-[130px]
              md:w-[160px]
              md:h-[160px]
              rounded-full
              overflow-hidden
              border-4
              border-[#4B4A70]
            "
          >
            <img
              src="https://i.pravatar.cc/400?img=12"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <h1
            className="
              text-white
              text-[40px]
              md:text-[64px]
              font-semibold
              tracking-[-0.04em]
              leading-[1.05]
              mt-8
            "
          >
            Jane Cooper
          </h1>
        </div>

        {/* About */}
        <div className="max-w-[720px] mx-auto mt-14">
          <h3
            className="
              text-white
              text-[18px]
              md:text-[22px]
              font-semibold
            "
          >
            About
          </h3>

          <p
            className="
              text-[#CFCFE3]
              text-[13px]
              md:text-[14px]
              leading-[2]
              mt-5
            "
          >
            For athletes, high altitude produces two contradictory
            effects on performance. For explosive events (sprints
            up to 400 metres, long jump, triple jump) the reduction
            in atmospheric pressure means there is less resistance
            from the atmosphere and the athlete’s performance will
            generally be better at high altitude.
          </p>
        </div>

        {/* Links */}
        <div className="max-w-[720px] mx-auto mt-12">
          <h3
            className="
              text-white
              text-[18px]
              md:text-[22px]
              font-semibold
            "
          >
            Links
          </h3>

          <div className="flex flex-wrap gap-4 mt-5">
            {[
              {
                icon: <BsTwitter size={15} />,
                label: "Twitter",
              },

              {
                icon: <BsLinkedin size={15} />,
                label: "LinkedIn",
              },

              {
                icon: <BsGithub size={15} />,
                label: "Github",
              },

              {
                icon: <Link2 size={15} />,
                label: "Website",
              },
            ].map((item, index) => (
              <button
                key={index}
                className="
                  h-[42px]
                  px-4
                  rounded-full
                  bg-[#343352]
                  text-white
                  text-[13px]
                  flex
                  items-center
                  gap-2
                  hover:bg-[#44436A]
                  transition-all
                "
              >
                {item.icon}

                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mt-28">
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
              Projects
            </h2>
          </div>

          {/* Cards */}
          <div
            className="
              mt-14
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
            "
          >
            {projects.map((item) => (
              <div
                key={item.id}
                className="
                  rounded-[22px]
                  overflow-hidden
                  bg-[#3B3A5B]
                  flex
                  flex-col
                  min-h-[340px]
                "
              >
                {/* Image */}
                {item.image && (
                  <div
                    className="
                      h-[110px]
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}