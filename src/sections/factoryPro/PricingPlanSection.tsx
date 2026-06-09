import {
  CheckCircle2,
  ShieldCheck,
  BadgeDollarSign,
} from "lucide-react";

const plans = [
  {
    id: 1,
    featured: false,
  },
  {
    id: 2,
    featured: true,
  },
  {
    id: 3,
    featured: false,
  },
];

export default function PricingPlanSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />

              <span className="uppercase tracking-[3px] text-[12px] text-[#666]">
                Pricing Plan
              </span>
            </div>

            <h2 className="text-[36px] md:text-[52px] font-light leading-tight text-[#222]">
              Transparent pricing for
              <br />
              <span className="font-bold">
                every solution
              </span>
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-[#777] text-[15px] leading-8 max-w-[500px]">
              We believe in providing clear and upfront pricing to ensure
              that you understand the value of our services.
            </p>
          </div>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`
                rounded-[32px]
                p-8
                transition-all
                duration-300

                ${
                  plan.featured
                    ? "bg-[#F59E0B] text-white scale-105"
                    : "bg-[#F7F7F7] text-[#000000]"
                }
              `}
            >
              <div className="mb-8">
                <span className="text-[52px] font-bold">
                  $39
                </span>

                <span className="text-sm ml-2">
                  /month
                </span>
              </div>

              <h3 className="text-xl font-medium mb-8">
                Advanced Plan
              </h3>

              <ul className="space-y-5">
                {[
                  "Standard Manufacturing Services",
                  "Quality Control Checks",
                  "Technical Support",
                  "Monthly Progress Reports",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 size={18} />
                    <span className="text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`
                  mt-10
                  px-6
                  py-3
                  rounded-lg
                  border
                  text-sm
                  font-medium

                  ${
                    plan.featured
                      ? "border-white"
                      : "border-[#F59E0B] text-[#F59E0B]"
                  }
                `}
              >
                Purchase Now
              </button>
            </div>
          ))}
        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-wrap justify-center gap-10">
          <div className="flex items-center gap-2 text-sm text-[#666]">
            <BadgeDollarSign
              size={16}
              className="text-[#F59E0B]"
            />
            Get 30 day free trial
          </div>

          <div className="flex items-center gap-2 text-sm text-[#666]">
            <ShieldCheck
              size={16}
              className="text-[#F59E0B]"
            />
            No hidden fees
          </div>

          <div className="flex items-center gap-2 text-sm text-[#666]">
            <CheckCircle2
              size={16}
              className="text-[#F59E0B]"
            />
            Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}