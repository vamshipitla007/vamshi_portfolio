/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ArrowRight, Plus, Minus } from "lucide-react";

const newsCards = [
  {
    id: 1,
    title: "Round 9 of approvals",
    category: "Funding round",
    date: "January 1, 2022",
  },

  {
    id: 2,
    title: "Round 8 of approvals",
    category: "Funding round",
    date: "January 1, 2022",
  },
];

const faqData = [
  {
    question: "How do I apply?",
    answer:
      "Submit your proposal through the grants portal with complete project details and funding requirements.",
  },

  {
    question:
      "Can I apply as a U.S. based person/company?",
    answer:
      "Yes. Applications are accepted globally depending on compliance requirements.",
  },

  {
    question: "How will I be compensated?",
    answer:
      "Funding is distributed in milestone-based payments depending on project delivery.",
  },

  {
    question:
      "What type of project will qualify for a Grant?",
    answer:
      "Projects that contribute meaningful ecosystem value, tooling, education, or infrastructure.",
  },

  {
    question:
      "What is the application timeline? When can I expect to hear back?",
    answer:
      "Review timelines generally take between 2-4 weeks depending on proposal complexity.",
  },

  {
    question:
      "How can I increase my chances of getting funded?",
    answer:
      "Provide clear milestones, technical feasibility, market value, and strong execution plans.",
  },

  {
    question:
      "How often do you approve new Rounds of funding?",
    answer:
      "Funding rounds are reviewed regularly throughout the year.",
  },
];

export default function WhatsNewFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#17172B] py-24 md:py-32">
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
          w-[600px]
          h-[600px]
          bg-[#5E5BFF]
          opacity-[0.08]
          blur-[180px]
          rounded-full
        "
      />

      <div className="relative z-20 max-w-[1200px] mx-auto px-5 lg:px-8">
        {/* WHAT'S NEW */}
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <div className="relative">
            <h2
              className="
                text-white
                text-[34px]
                md:text-[52px]
                font-semibold
                tracking-[-0.03em]
                leading-[1.1]
              "
            >
              What’s new?
            </h2>

            {/* Scribble */}
            <div
              className="
                absolute
                -top-6
                right-0
                w-[60px]
                h-[20px]
                border-t-2
                border-[#5E5BFF]
                rounded-full
                rotate-12
              "
            />
          </div>

          {/* Description */}
          <p
            className="
              max-w-[620px]
              text-[#A7A7C6]
              text-[14px]
              md:text-[15px]
              leading-[1.8]
              mt-5
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque nulla risus, consectetur ut bibendum non,
            gravida non libero.
          </p>

          {/* Read More */}
          <button
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              text-[#6B67FF]
              text-[14px]
              hover:text-white
              transition-all
            "
          >
            Read more on our blog

            <ArrowRight size={16} />
          </button>

          {/* Cards */}
          <div
            className="
              w-full
              mt-16
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
            "
          >
            {newsCards.map((card) => (
              <div
                key={card.id}
                className="
                  rounded-[24px]
                  overflow-hidden
                  bg-[#3B3A5B]
                  text-left
                "
              >
                {/* Top Banner */}
                <div
                  className="
                    relative
                    h-[190px]
                    border
                    border-[#5E5BFF]
                    bg-[#17172B]
                    overflow-hidden
                  "
                >
                  {/* Grid */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-20
                      [background-image:linear-gradient(#2D2D52_1px,transparent_1px),linear-gradient(to_right,#2D2D52_1px,transparent_1px)]
                      [background-size:24px_24px]
                    "
                  />

                  {/* Oval */}
                  <div
                    className="
                      absolute
                      top-1/2
                      left-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      w-[240px]
                      h-[100px]
                      border
                      border-[#5E5BFF]
                      rounded-full
                    "
                  />

                  {/* Corner */}
                  <div
                    className="
                      absolute
                      right-0
                      bottom-0
                      w-8
                      h-8
                      bg-[#5E5BFF]
                      rounded-tl-2xl
                    "
                  />

                  {/* Text */}
                  <div className="relative z-20 p-8">
                    <p
                      className="
                        text-[#8686A8]
                        text-[11px]
                        tracking-[0.08em]
                      "
                    >
                      Funding round
                    </p>

                    <h3
                      className="
                        text-white
                        text-[22px]
                        md:text-[32px]
                        font-semibold
                        leading-[1.1]
                        mt-3
                        max-w-[240px]
                      "
                    >
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom */}
                <div className="p-6 md:p-8">
                  <p
                    className="
                      text-[#A7A7C6]
                      text-[12px]
                      tracking-[0.08em]
                    "
                  >
                    {card.category}
                  </p>

                  <h4
                    className="
                      text-white
                      text-[22px]
                      font-semibold
                      leading-[1.3]
                      mt-3
                    "
                  >
                    {card.title}
                  </h4>

                  <p
                    className="
                      text-[#8D8DAE]
                      text-[13px]
                      mt-12
                    "
                  >
                    {card.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="mt-32">
          {/* Heading */}
          <div className="text-center">
            <div className="relative inline-block">
              <h2
                className="
                  text-white
                  text-[34px]
                  md:text-[52px]
                  font-semibold
                  tracking-[-0.03em]
                  leading-[1.1]
                "
              >
                Frequently asked questions
              </h2>

              {/* Circle */}
              <div
                className="
                  absolute
                  right-0
                  top-1/2
                  -translate-y-1/2
                  w-[160px]
                  h-[60px]
                  border
                  border-[#5E5BFF]
                  rounded-full
                "
              />
            </div>

            <p
              className="
                max-w-[620px]
                mx-auto
                text-[#A7A7C6]
                text-[14px]
                md:text-[15px]
                leading-[1.8]
                mt-5
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque nulla risus, consectetur ut bibendum non,
              gravida non libero.
            </p>
          </div>

          {/* FAQ List */}
          <div className="max-w-[980px] mx-auto mt-20">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border-b border-[#30304F]"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      gap-6
                      py-7
                      text-left
                    "
                  >
                    <span
                      className="
                        text-white
                        text-[15px]
                        md:text-[17px]
                        leading-[1.6]
                      "
                    >
                      {faq.question}
                    </span>

                    <div className="text-white shrink-0">
                      {isOpen ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "max-h-[200px] pb-7 opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <p
                      className="
                        text-[#A7A7C6]
                        text-[14px]
                        leading-[1.9]
                        max-w-[760px]
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}