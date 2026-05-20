import { ArrowRight } from "lucide-react";

import StrategyImage from "@/assets/greendy/sales.png";

import CardImage1 from "@/assets/greendy/laptop.png";
import CardImage2 from "@/assets/greendy/market.png";
import CardImage3 from "@/assets/greendy/online.png";

const marketingCards = [
  {
    id: 1,
    image: CardImage1,
    title: "Online marketing step by step",
  },
  {
    id: 2,
    image: CardImage2,
    title: "Online marketing step by step",
  },
  {
    id: 3,
    image: CardImage3,
    title: "Online marketing step by step",
  },
];

export default function GrowingSalesSection() {
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
        
        {/* TOP SECTION */}
        <div
          className="
            bg-[#0B1325]
            rounded-[10px]
            px-5
            sm:px-8
            lg:px-12
            py-8
            lg:py-12
          "
        >
          
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1.1fr_0.9fr]
              gap-10
              lg:gap-14
              items-center
            "
          >
            
            {/* Image */}
            <div>
              <img
                src={StrategyImage}
                alt="strategy"
                className="
                  w-full
                  rounded-[10px]
                  object-cover
                  h-[240px]
                  sm:h-[320px]
                  lg:h-[360px]
                "
              />
            </div>

            {/* Content */}
            <div
              className="
                text-center
                lg:text-left
              "
            >
              
              <h2
                className="
                  text-[32px]
                  sm:text-[44px]
                  lg:text-[54px]
                  leading-[115%]
                  font-bold
                  tracking-[-1px]
                  text-white
                  max-w-[420px]
                  mx-auto
                  lg:mx-0
                "
              >
                Our Proven Strategy for Growing Your Sales
              </h2>

              <p
                className="
                  mt-5
                  text-[13px]
                  sm:text-[14px]
                  leading-7
                  text-[#CBD5E1]
                  max-w-[420px]
                  mx-auto
                  lg:mx-0
                "
              >
                We are carrying your business based
                on the adapted business plan with
                the main market trends. Be always
                relevant and competitive.
              </p>
            </div>
          </div>
        </div>

        {/* MARKETING STRATEGIES */}
        <div className="mt-16 lg:mt-24">
          
          {/* Heading */}
          <div className="text-center">
            
            <h2
              className="
                text-[34px]
                sm:text-[46px]
                lg:text-[56px]
                font-bold
                tracking-[-1px]
                leading-[115%]
                text-[#0F172A]
                dark:text-white
                transition-colors
              "
            >
              Why you need multiple marketing strategies
            </h2>

            <p
              className="
                mt-4
                text-[13px]
                sm:text-[14px]
                text-[#6B7280]
                dark:text-[#94A3B8]
                transition-colors
              "
            >
              Choose your best ecommerce store
            </p>
          </div>

          {/* Cards */}
          <div
            className="
              mt-12
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-7
            "
          >
            {marketingCards.map((item) => (
              <div
                key={item.id}
                className="
                  rounded-[12px]
                  overflow-hidden
                  bg-white
                  dark:bg-[#0E1A2D]
                  shadow-[0_0_0_1px_rgba(16,185,129,0.08),0_10px_30px_rgba(16,185,129,0.08)]
                  transition-all
                  duration-300
                "
              >
                
                {/* Image */}
                <img
                  src={item.image}
                  alt="marketing"
                  className="
                    w-full
                    h-[220px]
                    sm:h-[240px]
                    object-cover
                  "
                />

                {/* Content */}
                <div className="p-6">
                  
                  {/* Label */}
                  <p
                    className="
                      text-[11px]
                      font-semibold
                      text-[#10B981]
                    "
                  >
                    Marketing
                  </p>

                  {/* Title */}
                  <h3
                    className="
                      mt-4
                      text-[24px]
                      sm:text-[28px]
                      font-bold
                      leading-[125%]
                      text-[#0F172A]
                      dark:text-white
                      transition-colors
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-4
                      text-[13px]
                      leading-7
                      text-[#6B7280]
                      dark:text-[#94A3B8]
                      transition-colors
                    "
                  >
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Adipiscing pellentesque proin
                    vitae, massa pulvinar.
                  </p>

                  {/* Button */}
                  <button
                    className="
                      mt-7
                      h-[44px]
                      px-5
                      rounded-[6px]
                      bg-[#10B981]
                      hover:bg-[#059669]
                      transition-all
                      duration-300
                      text-white
                      text-[12px]
                      font-semibold
                      inline-flex
                      items-center
                      gap-2
                    "
                  >
                    Read More

                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}