import React, { useState } from "react";
import {
  ArrowUpRight,
  Phone,
  Mail,
  Factory,
  Cog,
  BadgeCheck,
  Cpu,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const planningPoints = [
  "Needs Assessment",
  "Timeline and Milestones",
  "Feasibility and ROI",
  "Technology Selection",
  "Process Optimization",
  "Scalability Planning",
];

const faqs: FAQ[] = [
  {
    question: "What industries do you serve?",
    answer:
      "We serve manufacturing, robotics, logistics, engineering, and industrial automation sectors globally.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.",
  },
  {
    question: "What sustainability practices do you follow?",
    answer:
      "We prioritize sustainable manufacturing processes, energy efficiency, and responsible resource utilization.",
  },
  {
    question: "Do you offer customized solutions?",
    answer:
      "Yes, every automation solution is tailored according to business objectives and operational requirements.",
  },
  {
    question: "How do you handle safety in the workplace?",
    answer:
      "Safety standards, employee training, compliance checks, and automated monitoring systems are integrated into every project.",
  },
];

const serviceCategories = [
  "Custom Manufacturing Solution",
  "Industrial Automation And Robotics",
  "Product Design And Prototyping",
  "Equipment Maintenance Support",
  "Research And Development",
];

const features = [
  {
    icon: <Cog size={28} />,
    title: "Enhanced Efficiency",
    description:
      "Robotics streamline complex tasks, reducing production time and minimizing downtime.",
  },
  {
    icon: <Factory size={28} />,
    title: "Improved Productivity",
    description:
      "Automated systems improve output quality while maintaining operational consistency.",
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "Quality Assurance",
    description:
      "Advanced monitoring systems ensure quality standards are maintained.",
  },
  {
    icon: <Cpu size={28} />,
    title: "Smart Manufacturing",
    description:
      "AI-powered robotics enable predictive maintenance and intelligent automation.",
  },
];

const ServicesCategoryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(
    "Industrial Automation And Robotics",
  );

  const [openIndex, setOpenIndex] = useState<number>(1);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-[320px_1fr] gap-10">
          {/* SIDEBAR */}

          <aside className="space-y-8">
            {/* Category Card */}

            <div className="bg-white rounded-[24px] shadow-md overflow-hidden border border-[#ECECEC]">
              <div className="bg-[#F59E0B] px-6 py-5">
                <h3 className="text-white font-medium text-[16px]">
                  Services Category
                </h3>
              </div>

              <div>
                {serviceCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`
                      w-full
                      flex
                      items-center
                      justify-between
                      px-6
                      py-5
                      text-left
                      border-b
                      border-[#F3F3F3]
                      transition-all

                      ${
                        activeCategory === category
                          ? "bg-[#FFF7E8] text-[#F59E0B]"
                          : "text-[#666]"
                      }
                    `}
                  >
                    <span className="text-[14px]">{category}</span>

                    <ArrowUpRight size={14} />
                  </button>
                ))}
              </div>
            </div>

            {/* Help Card */}

            <div className="relative overflow-hidden rounded-[24px]">
              <img
                src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/70" />

              <div className="relative p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">FactoryPro</h3>

                <h4 className="text-[32px] font-light leading-tight">
                  Need help!
                </h4>

                <p className="mt-4 text-white/80 text-[14px] leading-7">
                  Got questions or need assistance with your industry needs?
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[#F59E0B]" />
                    <span>+1 840 841 256</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-[#F59E0B]" />
                    <span>info@domain.com</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* CONTENT */}

          <div>
            {/* Hero Image */}

            <div className="overflow-hidden rounded-[30px]">
              <img
                src="https://images.pexels.com/photos/8566527/pexels-photo-8566527.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt=""
                className="
                  w-full
                  h-[260px]
                  md:h-[420px]
                  object-cover
                "
              />
            </div>

            {/* Description */}

            <div className="mt-8">
              <p className="text-[#777] leading-8 text-[15px]">
                Our business coaching services are designed to help
                entrepreneurs and professionals unlock their full potential,
                overcome challenges, and achieve sustainable growth.
              </p>

              <p className="text-[#777] leading-8 text-[15px] mt-5">
                Through expert guidance, we focus on refining your vision,
                enhancing operations, and unlocking new opportunities for
                growth.
              </p>
            </div>

            {/* Heading */}

            <div className="mt-10">
              <h2
                className="
                text-[36px]
                md:text-[52px]
                leading-tight
                font-light
                text-[#222]
                "
              >
                Why choose
                <span className="font-bold"> robotics services</span>
              </h2>

              <p
                className="
                mt-5
                text-[#777]
                text-[15px]
                leading-8
                "
              >
                Through expert guidance, we focus on refining your vision,
                enhancing operations, and unlocking new opportunities for
                growth.
              </p>
            </div>

            {/* Features */}

            <div className="grid md:grid-cols-2 gap-10 mt-12">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="
                  pb-8
                  border-b
                  border-[#ECECEC]
                  "
                >
                  <div className="text-[#F59E0B] mb-5">{feature.icon}</div>

                  <h3
                    className="
                    text-[22px]
                    font-medium
                    text-[#222]
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                    mt-4
                    text-[#777]
                    text-[15px]
                    leading-7
                    "
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="">
              {/* Planning Header */}

              <div className="max-w-4xl">
                <h2
                  className="
            text-[42px]
            md:text-[56px]
            leading-tight
            font-light
            text-[#222]
            "
                >
                  Planning &<span className="font-bold"> strategy</span>
                </h2>

                <p
                  className="
            mt-5
            text-[15px]
            text-[#777]
            leading-8
            "
                >
                  Our Industrial Automation and Robotics planning and strategy
                  services focus on designing tailored automation solutions that
                  align with your business goals.
                </p>
              </div>

              {/* Bullet Grid */}

              <div
                className="
          mt-10
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-y-6
          gap-x-10
          "
              >
                {planningPoints.map((item) => (
                  <div
                    key={item}
                    className="
              flex
              items-center
              gap-3
              "
                  >
                    <CheckCircle2 size={18} className="text-[#F59E0B]" />

                    <span
                      className="
                text-[15px]
                text-[#333]
                font-medium
                "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Images */}

              <div
                className="
          mt-12
          grid
          md:grid-cols-2
          gap-6
          "
              >
                <div className="overflow-hidden rounded-[28px]">
                  <img
                    src="https://images.pexels.com/photos/8566527/pexels-photo-8566527.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Robotics"
                    className="
                w-full
                h-[260px]
                md:h-[420px]
                object-cover
                transition
                duration-500
                hover:scale-105
              "
                  />
                </div>

                <div className="overflow-hidden rounded-[28px]">
                  <img
                    src="https://images.pexels.com/photos/8566486/pexels-photo-8566486.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Automation"
                    className="
                w-full
                h-[260px]
                md:h-[420px]
                object-cover
                transition
                duration-500
                hover:scale-105
              "
                  />
                </div>
              </div>

              {/* FAQ Heading */}

              <div className="mt-20">
                <h2
                  className="
            text-[42px]
            md:text-[56px]
            leading-tight
            font-light
            text-[#222]
            "
                >
                  Frequently asked
                  <span className="font-bold"> questions</span>
                </h2>
              </div>

              {/* Accordion */}

              <div className="mt-10 space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = index === openIndex;

                  return (
                    <div
                      key={faq.question}
                      className={`
                  overflow-hidden
                  rounded-2xl
                  border
                  transition-all

                  ${
                    isOpen
                      ? "bg-[#F59E0B] border-[#F59E0B]"
                      : "bg-white border-[#E8E8E8]"
                  }
                `}
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="
                  w-full
                  flex
                  items-center
                  justify-between
                  px-6
                  py-5
                  text-left
                  "
                      >
                        <span
                          className={`
                      text-[18px]
                      font-medium

                      ${isOpen ? "text-white" : "text-[#222]"}
                    `}
                        >
                          {faq.question}
                        </span>

                        {isOpen ? (
                          <ChevronUp size={20} className="text-white" />
                        ) : (
                          <ChevronDown size={20} className="text-[#666]" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p
                            className="
                      text-white/95
                      text-[15px]
                      leading-8
                      "
                          >
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCategoryPage;
