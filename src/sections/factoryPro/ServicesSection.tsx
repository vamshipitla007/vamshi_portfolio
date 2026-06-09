import React from "react";
import {
  ArrowRight,
  Factory,
  Cog,
  DraftingCompass,
  Wrench,
} from "lucide-react";

import serviceBg from "@/assets/factorypro/Image4.png";

interface Service {
  id: number;
  title: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Custom Manufacturing Solution",
    icon: <Factory size={34} />,
  },
  {
    id: 2,
    title: "Industrial Automation And Robotics",
    icon: <Cog size={34} />,
  },
  {
    id: 3,
    title: "Product Design And Prototyping",
    icon: <DraftingCompass size={34} />,
  },
  {
    id: 4,
    title: "Equipment Maintenance Support",
    icon: <Wrench size={34} />,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="relative pb-20 lg:pb-32">
      {/* Banner */}

      <div className="relative h-[420px] lg:h-[500px] overflow-hidden">
        <img
          src={serviceBg}
          alt="services"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 h-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
              {/* Left */}

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />

                  <span
                    className="
                    uppercase
                    tracking-[3px]
                    text-white
                    text-[12px]
                    font-medium
                    "
                  >
                    Services
                  </span>
                </div>

                <h2
                  className="
                  text-white
                  text-[34px]
                  md:text-[48px]
                  font-light
                  leading-tight
                  "
                >
                  Comprehensive solutions
                  <br />
                  <span className="font-bold">
                    for industrial excellence
                  </span>
                </h2>
              </div>

              {/* Right */}

              <div>
                <p
                  className="
                  text-white/80
                  text-[15px]
                  leading-8
                  max-w-[500px]
                  "
                >
                  We provide a wide range of services
                  tailored to meet the unique needs of
                  modern industries. From precision
                  manufacturing and advanced automation
                  to custom product design and efficient
                  logistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Cards */}

      <div
        className="
        max-w-7xl
        mx-auto
        px-5
        lg:px-8
        -mt-24
        relative
        z-20
        "
      >
        <div
          className="
          bg-white
          rounded-[32px]
          shadow-xl
          overflow-hidden
          "
        >
          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            "
          >
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`
                p-8
                lg:p-10
                transition-all
                duration-300
                hover:bg-[#fafafa]
                group

                ${
                  index !== services.length - 1
                    ? "border-b lg:border-b-0 lg:border-r border-gray-200"
                    : ""
                }
              `}
              >
                <div className="text-[#F59E0B] mb-8">
                  {service.icon}
                </div>

                <h3
                  className="
                  text-[22px]
                  font-medium
                  text-[#222]
                  leading-snug
                  min-h-[80px]
                  "
                >
                  {service.title}
                </h3>

                <button
                  className="
                  mt-10
                  h-10
                  w-10
                  rounded-lg
                  bg-[#F5F5F5]
                  flex
                  items-center
                  justify-center
                  transition-all
                  group-hover:bg-[#F59E0B]
                  group-hover:text-white
                  "
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;