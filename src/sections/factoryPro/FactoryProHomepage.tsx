import homeHero from "@/assets/factorypro/Image1.png";
import HeroBanner from "./HeroBanner";
import { ArrowUpRight, Star, BadgeCheck } from "lucide-react";
import topImage from "@/assets/factorypro/Image2.png";
import mainImage from "@/assets/factorypro/Image3.png";
import ServicesSection from "./ServicesSection";
import OurStorySection from "./OurStorySection";
import WhatWeDoSection from "./WhatWeDoSection";
import OurWorkSection from "./OurWorkSection";
import PricingPlanSection from "./PricingPlanSection";
import OurProcessSection from "./OurProcessSection";
import ClientTestimonialsSection from "./ClientTestimonialsSection";
import LatestBlogsSection from "./LatestBlogsSection";

const features = [
  "Sustainable Manufacturing",
  "Advanced Automation",
  "Efficient Production Processes",
  "Reliable Delivery Services",
];

export default function FactoryProHomepage() {
  return (
    <>
      <HeroBanner
        image={homeHero}
        showButton
        title={
          <>
            Excellence innovating
            <br />
            <span className="font-bold">industry for today</span>
          </>
        }
        description="
        At the heart of our operations is a commitment
        to delivering superior products through cutting
        edge technology and innovative processes.
        "
      />
      <section
        className="
      relative
      bg-white
      overflow-hidden
      py-16
      md:py-24
      "
      >
        {/* Background Factory Sketch */}
        <div
          className="
        absolute
        bottom-0
        left-0
        opacity-5
        pointer-events-none
        "
        >
          <img src="/factory-outline.png" alt="" className="w-[350px]" />
        </div>

        <div
          className="
        max-w-7xl
        mx-auto
        px-5
        lg:px-8
        "
        >
          <div
            className="
          grid
          lg:grid-cols-2
          gap-14
          items-center
          "
          >
            {/* LEFT */}

            <div
              className="
            flex
            justify-center
            lg:justify-start
            "
            >
              <div className="relative">
                {/* Top Image */}

                <div
                  className="
                flex
                items-start
                gap-4
                mb-5
                "
                >
                  <img
                    src={topImage}
                    alt=""
                    className="
                  w-[130px]
                  h-[90px]
                  md:w-[165px]
                  md:h-[115px]
                  rounded-[24px]
                  object-cover
                  "
                  />

                  <div>
                    <h3
                      className="
                    text-[#F59E0B]
                    font-bold
                    text-[38px]
                    leading-none
                    "
                    >
                      25+
                    </h3>

                    <p
                      className="
                    text-[13px]
                    text-[#666]
                    leading-5
                    "
                    >
                      Year Of
                      <br />
                      Experience
                    </p>
                  </div>
                </div>

                {/* Main Image */}

                <img
                  src={mainImage}
                  alt=""
                  className="
                w-full
                max-w-[280px]
                md:max-w-[360px]
                rounded-[30px]
                object-cover
                shadow-xl
                "
                />
              </div>
            </div>

            {/* RIGHT */}

            <div>
              <div
                className="
              flex
              items-center
              gap-2
              mb-4
              "
              >
                <div
                  className="
                w-2
                h-2
                rounded-full
                bg-[#F59E0B]
                "
                />

                <span
                  className="
                uppercase
                tracking-[3px]
                text-[12px]
                font-medium
                text-[#666]
                "
                >
                  About Us
                </span>
              </div>

              <h2
                className="
              text-[34px]
              md:text-[50px]
              leading-tight
              font-light
              text-[#232323]
              "
              >
                Building quality through
                <br />
                <span className="font-bold">industrial innovation</span>
              </h2>

              <p
                className="
              mt-5
              text-[#7A7A7A]
              leading-7
              text-[15px]
              "
              >
                At the heart of our operations is a commitment to delivering
                superior products through cutting-edge technology and innovative
                processes.
              </p>

              <div className="mt-8">
                {features.map((item) => (
                  <div
                    key={item}
                    className="
                  flex
                  items-center
                  gap-3
                  mb-4
                  "
                  >
                    <BadgeCheck size={18} className="text-[#F59E0B]" />

                    <span
                      className="
                    text-[#444]
                    text-[15px]
                    "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="
              mt-10
              flex
              flex-col
              sm:flex-row
              gap-6
              items-start
              "
              >
                {/* Button */}

                <button
                  className="
                flex
                items-center
                gap-3
                bg-white
                border
                border-[#F59E0B]
                rounded-xl
                px-6
                py-3
                font-medium
                text-[15px]
                hover:bg-[#F59E0B]
                hover:text-white
                transition-all
                "
                >
                  Learn More
                  <span
                    className="
                  w-7
                  h-7
                  rounded-md
                  bg-[#F59E0B]
                  text-white
                  flex
                  items-center
                  justify-center
                  "
                  >
                    <ArrowUpRight size={14} />
                  </span>
                </button>

                {/* Rating Card */}

                <div
                  className="
                bg-[#F8F8F8]
                rounded-[24px]
                px-8
                py-8
                min-w-[190px]
                text-center
                "
                >
                  <div
                    className="
                  flex
                  justify-center
                  gap-1
                  mb-3
                  "
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>

                  <p
                    className="
                  text-[13px]
                  text-[#666]
                  "
                  >
                    15.5K Genuine Rating
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
      <OurStorySection />
      <WhatWeDoSection />
      <OurWorkSection />
      <OurProcessSection />
      <PricingPlanSection />
      <ClientTestimonialsSection />
      <LatestBlogsSection />
    </>
  );
}
