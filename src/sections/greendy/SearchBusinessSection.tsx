import { Check } from "lucide-react";

import SearchImage from "@/assets/greendy/search.png";
import SocialImage from "@/assets/greendy/business.png";

const seoServices = [
  {
    id: 1,
    title: "SEO audit",
    description:
      "Analyze your next steps and in which way it will have impact on the selling results.",
  },
  {
    id: 2,
    title: "On-page SEO",
    description:
      "Optimize every word on your page for increasing the sales and reach the top of Google searching.",
  },
  {
    id: 3,
    title: "Targeted content",
    description:
      "The targeting content helps you to push ahead less popular categories of goods.",
    active: true,
  },
  {
    id: 4,
    title: "Off-page SEO",
    description:
      "This strategy helps you to increase the trust level to your online store.",
  },
];

const socialServices = [
  {
    id: 1,
    title: "Authentic storytelling",
    description:
      "Tell your clients which were your first steps and failures in this business.",
  },
  {
    id: 2,
    title: "Optimized ads",
    description:
      "Optimize every word on your page for increasing the sales and reach the top of Google searching.",
  },
  {
    id: 3,
    title: "Community Engagement",
    description:
      "Develop business with similar companies or partners.",
  },
  {
    id: 4,
    title: "Fostering Growth",
    description:
      "The accent on social media activities increases the number of your clients.",
    active: true,
  },
];

export default function SearchBusinessSection() {
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
        
        {/* SEO SECTION */}
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
              src={SearchImage}
              alt="search"
              className="
                w-full
                max-w-[430px]
                sm:max-w-[500px]
                lg:max-w-[540px]
                rounded-[20px]
                object-cover
              "
            />

          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            
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
                max-w-[520px]
              "
            >
              Show Up when People Search for What You Sell
            </h2>

            {/* Cards */}
            <div
              className="
                mt-10
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-6
              "
            >
              {seoServices.map((item) => (
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
                      
                      <h3
                        className="
                          text-[17px]
                          font-semibold
                          leading-[135%]
                          text-[#0F172A]
                          dark:text-white
                          transition-colors
                        "
                      >
                        {item.title}
                      </h3>

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
        </div>

        {/* SOCIAL MEDIA SECTION */}
        <div
          className="
            mt-20
            lg:mt-28
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-14
            lg:gap-16
            items-center
          "
        >
          
          {/* Left Content */}
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
                max-w-[520px]
              "
            >
              Grow Your Business with Social Media
            </h2>

            {/* Cards */}
            <div
              className="
                mt-10
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-6
              "
            >
              {socialServices.map((item) => (
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
                      
                      <h3
                        className="
                          text-[17px]
                          font-semibold
                          leading-[135%]
                          text-[#0F172A]
                          dark:text-white
                          transition-colors
                        "
                      >
                        {item.title}
                      </h3>

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
              src={SocialImage}
              alt="social"
              className="
                w-full
                max-w-[430px]
                sm:max-w-[500px]
                lg:max-w-[540px]
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