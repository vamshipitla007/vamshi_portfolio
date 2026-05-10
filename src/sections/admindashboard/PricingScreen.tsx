import React, { useState } from "react";

type PricingPlan = {
  id: number;
  title: string;
  price: string;
  active: boolean;
  buttonFilled?: boolean;

  features: {
    title: string;
    enabled: boolean;
  }[];
};

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    title: "Basic",
    price: "$14.99",
    active: true,

    features: [
      {
        title: "Free Setup",
        enabled: true,
      },

      {
        title: "Bandwidth Limit 10 GB",
        enabled: true,
      },

      {
        title: "20 User Connection",
        enabled: true,
      },

      {
        title: "Analytics Report",
        enabled: false,
      },

      {
        title: "Public API Access",
        enabled: false,
      },

      {
        title: "Plugins Intregation",
        enabled: false,
      },

      {
        title: "Custom Content Management",
        enabled: false,
      },
    ],
  },

  {
    id: 2,
    title: "Standard",
    price: "$49.99",
    active: false,

    features: [
      {
        title: "Free Setup",
        enabled: true,
      },

      {
        title: "Bandwidth Limit 10 GB",
        enabled: true,
      },

      {
        title: "20 User Connection",
        enabled: true,
      },

      {
        title: "Analytics Report",
        enabled: true,
      },

      {
        title: "Public API Access",
        enabled: true,
      },

      {
        title: "Plugins Intregation",
        enabled: false,
      },

      {
        title: "Custom Content Management",
        enabled: false,
      },
    ],
  },

  {
    id: 3,
    title: "Premium",
    price: "$89.99",
    active: false,
    buttonFilled: true,

    features: [
      {
        title: "Free Setup",
        enabled: true,
      },

      {
        title: "Bandwidth Limit 10 GB",
        enabled: true,
      },

      {
        title: "20 User Connection",
        enabled: true,
      },

      {
        title: "Analytics Report",
        enabled: true,
      },

      {
        title: "Public API Access",
        enabled: true,
      },

      {
        title: "Plugins Intregation",
        enabled: true,
      },

      {
        title: "Custom Content Management",
        enabled: true,
      },
    ],
  },
];

export default function PricingScreen() {
  const [selectedPlan, setSelectedPlan] =
    useState(1);

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      {/* TITLE */}

      <h1 className="mb-6 text-[24px] font-bold text-[#202224] md:text-[32px]">
        Pricing
      </h1>

      {/* CARDS */}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {pricingPlans.map((plan) => {
          const isSelected =
            selectedPlan === plan.id;

          return (
            <div
              key={plan.id}
              onClick={() =>
                setSelectedPlan(plan.id)
              }
              className={`relative cursor-pointer overflow-hidden rounded-[28px] bg-white p-6 transition-all duration-300 ${
                isSelected
                  ? "border-[3px] border-[#4F7CF7]"
                  : "border border-transparent"
              }`}
            >
              {/* BACKGROUND PATTERN */}

              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "radial-gradient(#000 1px, transparent 1px)",
                  backgroundSize:
                    "24px 24px",
                }}
              />

              {/* CONTENT */}

              <div className="relative z-10">
                {/* HEADER */}

                <div className="text-center">
                  <h2 className="text-[22px] font-bold text-[#202224]">
                    {plan.title}
                  </h2>

                  <p className="mt-2 text-[15px] text-[#71717A]">
                    Monthly Charge
                  </p>

                  <h1 className="mt-4 text-[48px] font-bold leading-none text-[#4F7CF7]">
                    {plan.price}
                  </h1>
                </div>

                {/* DIVIDER */}

                <div className="my-8 h-[1px] bg-[#E5E7EB]" />

                {/* FEATURES */}

                <div className="space-y-6 text-center">
                  {plan.features.map(
                    (
                      feature,
                      index,
                    ) => (
                      <p
                        key={index}
                        className={`text-[15px] font-medium ${
                          feature.enabled
                            ? "text-[#202224]"
                            : "text-[#A0A0A0]"
                        }`}
                      >
                        {feature.title}
                      </p>
                    ),
                  )}
                </div>

                {/* DIVIDER */}

                <div className="my-8 h-[1px] bg-[#E5E7EB]" />

                {/* BUTTON */}

                <div className="flex flex-col items-center">
                  <button
                    className={`flex h-[52px] w-full max-w-[220px] items-center justify-center rounded-full border text-[15px] font-semibold transition ${
                      plan.buttonFilled
                        ? "border-[#4F7CF7] bg-[#4F7CF7] text-white hover:bg-[#3E6EF0]"
                        : "border-[#4F7CF7] bg-transparent text-[#4F7CF7] hover:bg-[#EEF3FF]"
                    }`}
                  >
                    Get Started
                  </button>

                  <button className="mt-6 text-[15px] font-semibold text-[#202224] underline underline-offset-4">
                    Start Your 30 Day Free Trial
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}