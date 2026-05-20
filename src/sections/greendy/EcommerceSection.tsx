import {
  BadgeDollarSign,
  MonitorSmartphone,
  ShoppingBag,
  CircleDollarSign,
  ArrowRight,
} from "lucide-react";

import EcommerceImage from "@/assets/greendy/working.png";

const features = [
  {
    id: 1,
    title: "We are commerce first",
    description:
      "We are improving businesses based on our vast experience.",
    icon: BadgeDollarSign,
    active: true,
  },
  {
    id: 2,
    title: "Our focus is on growth",
    description:
      "Our main goal is to make your online store better every day.",
    icon: MonitorSmartphone,
  },
  {
    id: 3,
    title: "Transparency",
    description:
      "You can follow all our steps due to strategy and be a part of changes.",
    icon: ShoppingBag,
  },
  {
    id: 4,
    title: "We're experts",
    description:
      "The team of experts includes business owners and advisers.",
    icon: CircleDollarSign,
  },
];

export default function EcommerceSection() {
  return (
    <section
      className="
        w-full
        bg-[#F5FAF7]
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
        
        {/* Main Grid */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-14
            lg:gap-16
            items-start
          "
        >
          
          {/* Left */}
          <div>
            
            {/* Heading */}
            <h2
              className="
                text-[24px]
                sm:text-[34px]
                lg:text-[46px]
                leading-[112%]
                font-bold
                tracking-[-1px]
                text-[#0F172A]
                dark:text-white
                max-w-[520px]
                transition-colors
              "
            >
              Why top Ecommerce and startup companies choose us :
            </h2>

            {/* Features */}
            <div
              className="
                mt-10
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-7
              "
            >
              {features.map((item) => {
                const Icon = item.icon;

                return (
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
                            shadow-[0_0_0_1px_rgba(16,185,129,0.08),0_12px_30px_rgba(16,185,129,0.08)]
                          `
                          : ""
                      }
                    `}
                  >
                    
                    {/* Icon */}
                    <div
                      className="
                        w-11
                        h-11
                        rounded-full
                        flex
                        items-center
                        justify-center
                        bg-[#10B981]/10
                        text-[#10B981]
                      "
                    >
                      <Icon size={20} />
                    </div>

                    {/* Title */}
                    <h3
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
                    </h3>

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
                );
              })}
            </div>

            {/* Button */}
            <button
              className="
                mt-10
                h-[50px]
                px-7
                rounded-[6px]
                bg-[#10B981]
                hover:bg-[#059669]
                transition-all
                duration-300
                text-white
                text-[13px]
                font-semibold
                inline-flex
                items-center
                gap-2
              "
            >
              Let's Chat

              <ArrowRight size={15} />
            </button>
          </div>

          {/* Right Image */}
          <div
            className="
              flex
              justify-center
              lg:justify-end
            "
          >
            <img
              src={EcommerceImage}
              alt="ecommerce"
              className="
                w-full
                max-w-[420px]
                sm:max-w-[500px]
                lg:max-w-[560px]
                rounded-[20px]
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}