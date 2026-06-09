import {
  Factory,
  Cog,
  Cpu,
  Workflow,
  ArrowUpRight,
} from "lucide-react";
import serviceBg from "@/assets/factorypro/Image8.png";

const services = [
  {
    title: "Automation Solutions",
    description:
      "Streamlining processes through cutting edge technology.",
    icon: <Cpu size={24} />,
  },
  {
    title: "Quality Control",
    description:
      "Ensuring product excellence through rigorous testing.",
    icon: <Factory size={24} />,
  },
  {
    title: "Process Engineering",
    description:
      "Optimizing workflows for operational efficiency.",
    icon: <Workflow size={24} />,
  },
  {
    title: "Product Development",
    description:
      "Creating innovative industrial solutions.",
    icon: <Cog size={24} />,
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="bg-[#1E1E1E] overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* LEFT */}

        <div className="px-6 md:px-10 lg:px-20 py-16 lg:py-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />

            <span className="uppercase tracking-[3px] text-[12px] text-white/80">
              What We Do
            </span>
          </div>

          <h2 className="text-white text-[36px] md:text-[52px] leading-tight font-light">
            Innovative factory and industry
            <br />
            <span className="font-bold">
              solutions today
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-5 mt-12 relative">
            {services.map((item, index) => (
              <div
                key={index}
                className="
                bg-white/5
                backdrop-blur-sm
                border
                border-white/10
                rounded-[28px]
                p-6
                hover:border-[#F59E0B]
                transition
              "
              >
                <div className="text-[#F59E0B] mb-5">
                  {item.icon}
                </div>

                <h3 className="text-white text-lg font-medium">
                  {item.title}
                </h3>

                <p className="text-white/60 text-sm mt-3 leading-7">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Orange Circle */}

            <div
              className="
              hidden
              lg:flex
              absolute
              right-[-60px]
              top-1/2
              -translate-y-1/2
              w-28
              h-28
              rounded-full
              bg-[#F59E0B]
              items-center
              justify-center
              text-white
            "
            >
              <ArrowUpRight size={26} />
            </div>
          </div>

          <p className="mt-10 text-white/60 text-sm">
            Let's make something great work together.
            <span className="text-[#F59E0B] ml-2 font-medium">
              Get Free Quote
            </span>
          </p>
        </div>

        {/* RIGHT */}

        <div className="relative min-h-[800px] lg:min-h-full">
          <img
            src={serviceBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}