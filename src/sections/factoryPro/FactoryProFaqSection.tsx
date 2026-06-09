import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Phone,
  Mail,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What industries do you serve?",
    answer:
      "We serve manufacturing, automation, logistics, construction, engineering, and industrial production sectors worldwide.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.",
  },
  {
    question: "What sustainability practices do you follow?",
    answer:
      "Our operations focus on energy efficiency, waste reduction, eco-friendly materials, and sustainable manufacturing processes.",
  },
  {
    question: "Do you offer customized solutions?",
    answer:
      "Yes. We provide tailored industrial solutions designed around your specific business requirements and objectives.",
  },
  {
    question: "How do you handle safety in the workplace?",
    answer:
      "Safety is integrated into every operation through training, audits, compliance standards, and continuous monitoring.",
  },
];

const FactoryProFaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />

              <span
                className="
                uppercase
                tracking-[3px]
                text-[12px]
                font-medium
                text-[#555]
                "
              >
                FAQs
              </span>
            </div>

            <h2
              className="
              text-[38px]
              md:text-[52px]
              leading-tight
              font-light
              text-[#222]
              "
            >
              Frequently asked
              <br />
              <span className="font-bold">
                questions
              </span>
            </h2>
          </div>

          {/* Button */}

          <button
            className="
            flex
            items-center
            overflow-hidden
            rounded-xl
            border
            border-[#F59E0B]
            self-start
            "
          >
            <span
              className="
              px-6
              py-3
              text-[15px]
              font-medium
              "
            >
              All FAQs
            </span>

            <span
              className="
              bg-[#F59E0B]
              text-white
              px-4
              py-3
              "
            >
              <ArrowUpRight size={18} />
            </span>
          </button>
        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Image Card */}

          <div
            className="
            relative
            overflow-hidden
            rounded-[30px]
            "
          >
            <img
              src="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Factory"
              className="
              h-[500px]
              w-full
              object-cover
              "
            />

            {/* Overlay */}

            <div
              className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/80
              via-black/20
              to-transparent
              "
            />

            {/* Contact */}

            <div
              className="
              absolute
              bottom-8
              left-8
              right-8
              flex
              flex-col
              sm:flex-row
              gap-6
              text-white
              "
            >
              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-[#F59E0B]"
                />

                <span className="text-[18px]">
                  +911236547890
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-[#F59E0B]"
                />

                <span className="text-[18px]">
                  info@domainname.com
                </span>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`
                    rounded-2xl
                    overflow-hidden
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
                    onClick={() =>
                      toggleAccordion(index)
                    }
                    className="
                    w-full
                    px-6
                    py-5
                    flex
                    items-center
                    justify-between
                    text-left
                    "
                  >
                    <span
                      className={`
                      text-[20px]
                      font-medium

                      ${
                        isOpen
                          ? "text-white"
                          : "text-[#222]"
                      }
                    `}
                    >
                      {faq.question}
                    </span>

                    {isOpen ? (
                      <ChevronUp
                        className="text-white"
                        size={20}
                      />
                    ) : (
                      <ChevronDown
                        className="text-[#555]"
                        size={20}
                      />
                    )}
                  </button>

                  {isOpen && (
                    <div
                      className="
                      px-6
                      pb-6
                      "
                    >
                      <p
                        className="
                        text-white/90
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
    </section>
  );
};

export default FactoryProFaqSection;