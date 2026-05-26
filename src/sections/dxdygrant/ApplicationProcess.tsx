import { ArrowRight } from "lucide-react";

const processSteps = [
  {
    id: "1",
    title: "Apply",
    description:
      "Submit a complete application to the dYdX Grants Team including as many details as possible about the proposed idea and their background.",
    rotate: "-rotate-1",
  },

  {
    id: "2",
    title: "Interview",
    description:
      "If your application is selected, the dYdX Grants will conduct 1-2 interviews to collect more information on the Applicant's background and the proposal.",
    rotate: "rotate-2",
  },

  {
    id: "3",
    title: "Grant offer",
    description:
      "The dYdX Grants team will determine if the proposal fits into the grant program. A vesting schedule and timeline for product development reports will also be determined in the offer.",
    rotate: "-rotate-1",
  },
];

export default function ApplicationProcess() {
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
          w-[700px]
          h-[700px]
          bg-[#5E5BFF]
          opacity-[0.08]
          blur-[180px]
          rounded-full
        "
      />

      <div className="relative z-20 max-w-[1200px] mx-auto px-5 lg:px-8">
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
              Application process
            </h2>

            {/* Scribble */}
            <div
              className="
                absolute
                right-0
                -bottom-2
                w-[120px]
                h-[16px]
                border-b-2
                border-[#5E5BFF]
                rounded-full
              "
            />
          </div>

          <p
            className="
              max-w-[620px]
              mx-auto
              text-[#A8A8C7]
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

        {/* Process Cards */}
        <div
          className="
            relative
            mt-20
            flex
            flex-col
            lg:flex-row
            items-center
            justify-center
            gap-8
          "
        >
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`
                relative
                w-full
                max-w-[340px]
                min-h-[260px]
                bg-[#3B3A5B]
                rounded-[22px]
                p-8
                ${step.rotate}
              `}
            >
              {/* Step Number */}
              <span
                className="
                  text-white
                  text-[38px]
                  font-medium
                  leading-none
                "
              >
                {step.id}
              </span>

              {/* Title */}
              <h3
                className="
                  text-white
                  text-[28px]
                  font-semibold
                  mt-10
                  leading-[1.2]
                "
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-[#D4D4E8]
                  text-[13px]
                  md:text-[14px]
                  leading-[1.9]
                  mt-5
                "
              >
                {step.description}
              </p>

              {/* Arrow Connector Desktop */}
              {index !== processSteps.length - 1 && (
                <div
                  className="
                    hidden
                    lg:flex
                    absolute
                    -right-16
                    top-1/2
                    -translate-y-1/2
                    z-30
                  "
                >
                  <svg
                    width="90"
                    height="50"
                    viewBox="0 0 90 50"
                    fill="none"
                  >
                    <path
                      d="M4 8C28 -4 58 -2 82 24"
                      stroke="#5E5BFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    <path
                      d="M74 12L84 24L68 24"
                      stroke="#5E5BFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

              {/* Arrow Connector Mobile */}
              {index !== processSteps.length - 1 && (
                <div
                  className="
                    lg:hidden
                    absolute
                    left-1/2
                    -bottom-14
                    -translate-x-1/2
                    z-30
                  "
                >
                  <svg
                    width="40"
                    height="70"
                    viewBox="0 0 40 70"
                    fill="none"
                  >
                    <path
                      d="M20 4C20 24 20 36 20 56"
                      stroke="#5E5BFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    <path
                      d="M10 46L20 60L30 46"
                      stroke="#5E5BFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Box */}
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
                text-[32px]
                md:text-[52px]
                font-semibold
                leading-[1.1]
                mt-4
                tracking-[-0.03em]
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