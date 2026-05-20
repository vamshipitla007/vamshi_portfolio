import {
  Check,
  TrendingUp,
} from "lucide-react";

import DesignImage from "@/assets/greendy/design.png";

const stats = [
  {
    id: 1,
    value: "+534%",
    label: "People Reached",
  },
  {
    id: 2,
    value: "+215%",
    label: "Client Boost",
  },
  {
    id: 3,
    value: "+801%",
    label: "Company Expansion",
  },
  {
    id: 4,
    value: "+379",
    label: "Website Launch",
  },
];

const services = [
  {
    id: 1,
    title: "Strategy and Research",
    description:
      "Based on deep researching we create the best strategy due to your needs.",
  },
  {
    id: 2,
    title: "Development",
    description:
      "We create the best solution relying on own platforms, the experience of our partners and modern tendency.",
    active: true,
  },
  {
    id: 3,
    title: "Strategy & visual design",
    description:
      "It is possible to see the future result with the prognosticate ground plan.",
  },
  {
    id: 4,
    title: "Conversion optimization",
    description:
      "We teach your call-center team how to talk efficiently to your clients.",
  },
];

export default function ProofDesignSection() {
  return (
    <section
      className="
        w-full
        bg-white
        dark:bg-[#081120]
        transition-colors
        duration-300
        overflow-hidden
      "
    >
      <div
        className="
          max-w-[1280px]
          mx-auto
          px-5
          sm:px-8
          lg:px-10
          py-14
          lg:py-20
        "
      >
        
        {/* Stats Card */}
        <div
          className="
            bg-[#0B1325]
            rounded-[10px]
            px-6
            sm:px-10
            lg:px-16
            py-8
            lg:py-10
          "
        >
          
          {/* Heading */}
          <h2
            className="
              text-center
              text-[24px]
              sm:text-[30px]
              lg:text-[36px]
              font-semibold
              text-white
            "
          >
            The proofs is in the numbers
          </h2>

          {/* Stats */}
          <div
            className="
              mt-10
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-8
            "
          >
            {stats.map((item) => (
              <div
                key={item.id}
                className="text-center"
              >
                
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <h3
                    className="
                      text-[32px]
                      sm:text-[40px]
                      font-bold
                      text-white
                    "
                  >
                    {item.value}
                  </h3>

                  <TrendingUp
                    size={24}
                    className="text-[#10B981]"
                  />
                </div>

                <p
                  className="
                    mt-2
                    text-[13px]
                    text-[#CBD5E1]
                  "
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className="mt-16 lg:mt-24">
          
          {/* Header */}
          <div className="text-center">
            <h2
              className="
                text-[34px]
                sm:text-[46px]
                lg:text-[56px]
                font-bold
                tracking-[-1px]
                text-[#0F172A]
                dark:text-white
                transition-colors
              "
            >
              What We Do
            </h2>

            <p
              className="
                mt-4
                text-[13px]
                sm:text-[14px]
                leading-7
                text-[#6B7280]
                dark:text-[#94A3B8]
                max-w-[620px]
                mx-auto
                transition-colors
              "
            >
              We are flexible and cope with
              multiple tasks to make you a
              leader in the market.
            </p>
          </div>

          {/* Content */}
          <div
            className="
              mt-14
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-14
              lg:gap-16
              items-center
            "
          >
            
            {/* Left Images */}
            <div
              className="
                relative
                flex
                justify-center
                lg:justify-start
                order-2
                lg:order-1
              "
            >
              
              {/* Main Image */}
              <img
                src={DesignImage}
                alt="design"
                className="
                  w-full
                  max-w-[520px]
                  rounded-[20px]
                  object-cover
                "
              />

            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              
              {/* Title */}
              <h3
                className="
                  text-[30px]
                  sm:text-[40px]
                  lg:text-[48px]
                  leading-[115%]
                  font-bold
                  text-[#0F172A]
                  dark:text-white
                  transition-colors
                  max-w-[420px]
                "
              >
                Good Design Increases Sales
              </h3>

              {/* Services */}
              <div
                className="
                  mt-10
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-6
                "
              >
                {services.map((item) => (
                  <div
                    key={item.id}
                    className={`
                      rounded-[10px]
                      p-5
                      transition-all
                      duration-300
                      ${
                        item.active
                          ? `
                            bg-white
                            dark:bg-[#0E1A2D]
                            shadow-[0_0_0_1px_rgba(16,185,129,0.08),0_10px_30px_rgba(16,185,129,0.08)]
                          `
                          : ""
                      }
                    `}
                  >
                    
                    {/* Icon */}
                    <div
                      className="
                        w-10
                        h-10
                        rounded-[8px]
                        bg-[#10B981]/10
                        flex
                        items-center
                        justify-center
                        text-[#10B981]
                      "
                    >
                      <Check size={18} />
                    </div>

                    {/* Title */}
                    <h4
                      className="
                        mt-5
                        text-[18px]
                        font-semibold
                        leading-[140%]
                        text-[#0F172A]
                        dark:text-white
                        transition-colors
                      "
                    >
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p
                      className="
                        mt-3
                        text-[13px]
                        leading-7
                        text-[#6B7280]
                        dark:text-[#94A3B8]
                        transition-colors
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}