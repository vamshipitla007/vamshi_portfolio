import { Check } from "lucide-react";

import TeamImage from "@/assets/greendy/ads.png";

const services = [
  {
    id: 1,
    title: "Campaign development",
    description:
      "Create your unique advertisement easily without extra time or money.",
  },
  {
    id: 2,
    title: "Campaign launch",
    description:
      "Start your commerce with the social media announcement. Get more client without much effort.",
    active: true,
  },
  {
    id: 3,
    title: "Optimization",
    description:
      "Save your money with the simple upgrades and enjoy your profit instantly.",
  },
  {
    id: 4,
    title: "Measurement",
    description:
      "Discover the website activity with the analytics tools simply and unmistakably.",
  },
];

export default function GoogleAdsSection() {
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
        
        {/* Main Grid */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-14
            lg:gap-16
            items-center
          "
        >
          
          {/* Left */}
          <div>
            
            {/* Heading */}
            <h2
              className="
                text-[34px]
                sm:text-[46px]
                lg:text-[58px]
                leading-[112%]
                font-bold
                tracking-[-1px]
                text-[#0F172A]
                dark:text-white
                transition-colors
                max-w-[500px]
              "
            >
              Get More Customers with Google Ads
            </h2>

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
                          shadow-[0_0_0_1px_rgba(16,185,129,0.08),0_12px_30px_rgba(16,185,129,0.08)]
                        `
                        : ""
                    }
                  `}
                >
                  
                  {/* Top */}
                  <div className="flex items-start gap-4">
                    
                    {/* Check Icon */}
                    <div
                      className="
                        w-10
                        h-10
                        rounded-[8px]
                        bg-[#10B981]/10
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >
                      <Check
                        size={18}
                        className="text-[#10B981]"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      
                      {/* Title */}
                      <h3
                        className="
                          text-[18px]
                          font-semibold
                          leading-[135%]
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div
            className="
              relative
              flex
              justify-center
              lg:justify-end
            "
          >
            
            {/* Main Image */}
            <img
              src={TeamImage}
              alt="team"
              className="
                w-full
                max-w-[460px]
                sm:max-w-[520px]
                lg:max-w-[580px]
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