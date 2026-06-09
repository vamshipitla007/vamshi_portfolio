import { useState } from "react";

const processSteps = [
  {
    id: "01",
    title: "Understanding Your Needs",
    description:
      "We begin by thoroughly assessing your requirements and objectives to develop a tailored approach.",
  },
  {
    id: "02",
    title: "Design and Planning",
    description:
      "Our team collaborates to create detailed project plans, ensuring all aspects of the process.",
  },
  {
    id: "03",
    title: "Implementation",
    description:
      "Utilizing advanced technologies and skilled personnel, we execute the project.",
  },
];

export default function OurProcessSection() {
  const [activeStep, setActiveStep] = useState("02");

  return (
    <section className="bg-[#FAFAFA] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />

              <span className="uppercase tracking-[3px] text-[12px] text-[#666]">
                Our Process
              </span>
            </div>

            <h2 className="text-[36px] md:text-[52px] font-light leading-tight text-[#222]">
              Streamlined processes for
              <br />
              <span className="font-bold">
                optimal efficiency
              </span>
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-[#777] text-[15px] leading-8 max-w-[500px]">
              Our process is designed to maximize efficiency and quality at every
              stage of production. By integrating advanced technologies and best
              practices, we ensure seamless workflows.
            </p>
          </div>
        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <img
            src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt=""
            className="w-full rounded-[32px] object-cover"
          />

          <div className="space-y-6">
            {processSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`
                  w-full
                  text-left
                  rounded-[28px]
                  transition-all
                  duration-300
                  px-8
                  py-8

                  ${
                    activeStep === step.id
                      ? "bg-[#F59E0B] text-white"
                      : "bg-transparent text-[#222]"
                  }
                `}
              >
                <div className="flex gap-6 items-start">
                  <span
                    className={`
                      text-[46px]
                      font-bold
                      leading-none

                      ${
                        activeStep === step.id
                          ? "text-white"
                          : "text-[#F59E0B]"
                      }
                    `}
                  >
                    {step.id}
                  </span>

                  <div>
                    <h3 className="text-xl font-medium">
                      {step.title}
                    </h3>

                    <p
                      className={`
                        mt-3
                        text-sm
                        leading-7

                        ${
                          activeStep === step.id
                            ? "text-white/90"
                            : "text-[#777]"
                        }
                      `}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}