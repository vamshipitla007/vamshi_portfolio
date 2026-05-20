import {
  SiBitbucket,
  SiAtlassian,
  SiAudi,
} from "react-icons/si";

import ActivityImage from "@/assets/greendy/activity.png";

export default function ActivitySection() {
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
      
      {/* Top Brands */}
      <div
        className="
          border-y
          border-[#EEF2F7]
          dark:border-[#172033]
          bg-[#F7FBF8]
          dark:bg-[#0C1527]
          transition-colors
        "
      >
        <div
          className="
            max-w-[1280px]
            mx-auto
            px-5
            sm:px-8
            lg:px-10
            py-6
          "
        >
          
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-10
              gap-y-6
              opacity-80
            "
          >
            
            {/* Brand */}
            <div
              className="
                flex
                items-center
                gap-2
                text-[#C5CBD5]
                dark:text-[#AAB3C2]
              "
            >
              <SiBitbucket size={20} />

              <span className="text-[20px] font-bold">
                Bitbucket
              </span>
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                text-[#C5CBD5]
                dark:text-[#AAB3C2]
              "
            >
              <span className="text-[20px] font-bold">
                WATCH
              </span>
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                text-[#C5CBD5]
                dark:text-[#AAB3C2]
              "
            >
              <span className="text-[20px] font-bold">
                facebook
              </span>
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                text-[#10B981]
              "
            >
              <SiAtlassian size={20} />

              <span className="text-[20px] font-bold">
                Atlassian
              </span>
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                text-[#C5CBD5]
                dark:text-[#AAB3C2]
              "
            >
              <SiAudi size={22} />

              <span className="text-[20px] font-bold">
                Audi
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
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
        
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-14
            lg:gap-8
            items-center
          "
        >
          
          {/* Left Content */}
          <div
            className="
              max-w-[460px]
              order-1
            "
          >
            
            {/* Label */}
            <p
              className="
                text-[11px]
                sm:text-[12px]
                font-semibold
                text-[#10B981]
              "
            >
              Who we are
            </p>

            {/* Heading */}
            <h2
              className="
                mt-4
                text-[26px]
                sm:text-[36px]
                lg:text-[44px]
                leading-[112%]
                font-bold
                tracking-[-1px]
                text-[#0F172A]
                dark:text-white
                transition-colors
              "
            >
              Top #1 marketing agency in the world
            </h2>

            {/* Description */}
            <p
              className="
                mt-6
                text-[13px]
                sm:text-[14px]
                leading-7
                text-[#6B7280]
                dark:text-[#94A3B8]
                transition-colors
              "
            >
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Mauris imperdiet felis egestas
              augue.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Mauris imperdiet felis egestas
              augue.
            </p>

            {/* Button */}
            <button
              className="
                mt-8
                h-[48px]
                px-7
                rounded-[6px]
                bg-[#0F172A]
                dark:bg-white
                hover:opacity-90
                transition-all
                duration-300
                text-white
                dark:text-[#081120]
                text-[13px]
                font-semibold
              "
            >
              Get In Touch
            </button>
          </div>

          {/* Right Image */}
          <div
            className="
              relative
              flex
              justify-center
              lg:justify-end
              order-2
            "
          >
            <img
              src={ActivityImage}
              alt="activity"
              className="
                w-full
                max-w-[620px]
                lg:max-w-[700px]
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}