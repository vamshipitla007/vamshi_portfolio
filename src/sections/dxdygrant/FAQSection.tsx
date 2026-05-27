/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const faqSections = [
  {
    title: "Grant application process",

    questions: [
      {
        question: "How do I apply?",
        answer:
          "Fill out this application form. The application will only be shared with the Grants lead and members of the committee. The Lead will contact you directly if the application is successfully considered for a Grant.",
      },

      {
        question: "Can I apply as a U.S. based person/company?",
        answer:
          "Yes. Applications are accepted globally depending on compliance requirements.",
      },

      {
        question: "How will I be compensated?",
        answer:
          "Funding is distributed through milestone-based payouts after approval.",
      },

      {
        question: "What type of project will qualify for a Grant?",
        answer:
          "Projects focused on ecosystem tooling, education, governance, analytics and growth.",
      },

      {
        question:
          "What is the application timeline? When can I expect to hear back?",
        answer:
          "Most applications receive updates within 2-4 weeks after submission.",
      },

      {
        question: "How can I increase my chances of getting funded?",
        answer:
          "Provide strong technical details, milestones and ecosystem value.",
      },

      {
        question: "How often do you approve new Rounds of funding?",
        answer: "Funding rounds are reviewed continuously throughout the year.",
      },
    ],
  },

  {
    title: "Selection criteria",

    questions: [
      {
        question: "What is the dYdX Grants Trust?",
        answer:
          "The Grants Trust oversees grant approvals and ecosystem funding.",
      },

      {
        question: "Where are funds held?",
        answer: "Funds are securely managed through treasury infrastructure.",
      },

      {
        question: "When was the program launched?",
        answer:
          "The grants initiative launched to support long-term ecosystem development.",
      },

      {
        question: "Who are the Trustees?",
        answer:
          "Trustees are responsible for governance and strategic approvals.",
      },

      {
        question: "What and who is the Enforcer?",
        answer:
          "The Enforcer ensures operational compliance and execution standards.",
      },
    ],
  },

  {
    title: "The Grants Trust",

    questions: [
      {
        question: "What is the dYdX Grants Trust?",
        answer: "The Grants Trust manages and distributes approved funding.",
      },

      {
        question: "Where are funds held?",
        answer: "Funds are held through decentralized treasury structures.",
      },

      {
        question: "When was the program launched?",
        answer:
          "The program was launched to encourage ecosystem contributions.",
      },

      {
        question: "Who are the Trustees?",
        answer: "The Trustees oversee governance, compliance and approvals.",
      },

      {
        question: "What and who is the Enforcer?",
        answer:
          "The Enforcer validates execution and accountability processes.",
      },
    ],
  },
];

export default function FAQSection() {
  const navigate = useNavigate();

  const handleApplyGrant = () => {
    navigate("/dydx/apply");
  };
  const [openItems, setOpenItems]: any = useState({
    "0-0": true,
  });

  const toggleAccordion = (key: any) => {
    setOpenItems((prev: any) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="relative overflow-hidden bg-[#17172B] py-20 md:py-28">
      {/* Grid Background */}
      <div
        className="
          absolute
          inset-0
          opacity-30
          [background-image:linear-gradient(#2D2D52_1px,transparent_1px),linear-gradient(to_right,#2D2D52_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-[#5E5BFF]
          opacity-[0.08]
          blur-[180px]
          rounded-full
        "
      />

      <div className="relative z-20 max-w-[900px] mx-auto px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h1
            className="
              text-white
              text-[38px]
              md:text-[64px]
              font-semibold
              tracking-[-0.04em]
              leading-[1.05]
            "
          >
            Frequently asked questions
          </h1>
        </div>

        {/* FAQ Sections */}
        <div className="mt-20 space-y-16">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {/* Section Title */}
              <h2
                className="
                  text-white
                  text-[18px]
                  md:text-[24px]
                  font-semibold
                  mb-8
                "
              >
                {section.title}
              </h2>

              {/* Questions */}
              <div className="border-t border-[#2F2F4D]">
                {section.questions.map((item, questionIndex) => {
                  const key = `${sectionIndex}-${questionIndex}`;

                  const isOpen = openItems[key];

                  return (
                    <div
                      key={questionIndex}
                      className="border-b border-[#2F2F4D]"
                    >
                      {/* Button */}
                      <button
                        onClick={() => toggleAccordion(key)}
                        className="
                            w-full
                            flex
                            items-start
                            justify-between
                            gap-6
                            py-6
                            text-left
                          "
                      >
                        <span
                          className="
                              text-white
                              text-[14px]
                              md:text-[15px]
                              leading-[1.7]
                            "
                        >
                          {item.question}
                        </span>

                        <span
                          className="
                              text-white
                              shrink-0
                              mt-[2px]
                            "
                        >
                          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </span>
                      </button>

                      {/* Content */}
                      <div
                        className={`
                            overflow-hidden
                            transition-all
                            duration-300
                            ${
                              isOpen
                                ? "max-h-[300px] pb-6 opacity-100"
                                : "max-h-0 opacity-0"
                            }
                          `}
                      >
                        <p
                          className="
                              text-[#B7B7D4]
                              text-[13px]
                              md:text-[14px]
                              leading-[2]
                              pr-8
                            "
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="
            relative
            mt-28
            rounded-[28px]
            overflow-hidden
            bg-gradient-to-r
            from-[#4B46D1]
            to-[#6A67FF]
            px-6
            md:px-12
            py-14
            text-center
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              w-[260px]
              h-[260px]
              bg-white
              opacity-10
              blur-[120px]
              rounded-full
            "
          />

          <div className="relative z-20">
            <p
              className="
                text-white/80
                text-[13px]
                md:text-[14px]
              "
            >
              Have a project in mind?
            </p>

            <h3
              className="
                text-white
                text-[30px]
                md:text-[52px]
                font-semibold
                leading-[1.1]
                tracking-[-0.03em]
                mt-4
              "
            >
              Let’s create something awesome.
            </h3>

            <button
              className="
                mt-8
                h-[50px]
                px-7
                rounded-[12px]
                bg-white
                text-[#5E5BFF]
                text-[14px]
                font-medium
                inline-flex
                items-center
                gap-2
                hover:scale-[1.02]
                transition-all
              "
              onClick={handleApplyGrant}
            >
              Apply for grant
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
