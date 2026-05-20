import HeroImage from "@/assets/greendy/marketing.png";

export default function DigitalMarketingHero() {
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
          pt-10
          sm:pt-14
          lg:pt-16
          pb-14
          lg:pb-20
        "
      >
        
        {/* Main Grid */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-8
            items-center
          "
        >
          
          {/* Left Content */}
          <div
            className="
              order-1
              lg:order-none
              max-w-[560px]
            "
          >
            
            {/* Label */}
            <p
              className="
                text-[11px]
                sm:text-[12px]
                font-semibold
                text-[#10B981]
                tracking-[0.2px]
              "
            >
              Award winning company
            </p>

            {/* Heading */}
            <h1
              className="
                mt-4
                text-[36px]
                sm:text-[44px]
                lg:text-[54px]
                leading-[108%]
                font-bold
                tracking-[-1.5px]
                text-[#0F172A]
                dark:text-white
                transition-colors
              "
            >
              Digital marketing agency and design. We grow your business online
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                text-[14px]
                sm:text-[15px]
                leading-7
                text-[#6B7280]
                dark:text-[#94A3B8]
                max-w-[520px]
                transition-colors
              "
            >
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Mauris imperdiet felis egestas aug
            </p>

            {/* CTA */}
            <button
              className="
                mt-8
                h-[52px]
                px-7
                rounded-[6px]
                bg-[#10B981]
                hover:bg-[#059669]
                transition-all
                duration-300
                text-white
                text-[14px]
                font-semibold
                shadow-sm
              "
            >
              Start a project
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
              lg:order-none
            "
          >
            <img
              src={HeroImage}
              alt="hero"
              className="
                w-full
                max-w-[620px]
                lg:max-w-[720px]
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}