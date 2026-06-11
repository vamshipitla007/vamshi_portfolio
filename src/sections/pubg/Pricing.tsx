import { useState } from "react";
import PricingCard from "./PricingCard";

const platforms = [
  "Windows",
  "Android",
  "iOS",
];

const pricingData = [
  {
    title: "ОБЫЧНАЯ",
    period: "1 месяц",
    price: "649",
    color: "linear-gradient(90deg, #00D4FF 0%, #009CFF 100%)",
    features: [
      {
        text: "Весь функционал чита",
        enabled: true,
      },
      {
        text: "Обновления 1 раз в месяц",
        enabled: true,
      },
      {
        text: "Техническая поддержка",
        enabled: true,
      },
      {
        text: "Анти-Бан",
        enabled: true,
      },
      {
        text: "Улучшенная оптимизация",
        enabled: false,
      },
      {
        text: "Запуск на других телефонах",
        enabled: false,
      },
      {
        text: "DPI+, ASN, SKK",
        enabled: false,
      },
    ],
  },

  {
    title: "СТАНДАРТНАЯ",
    period: "3 месяца",
    price: "1 499",
    color: "linear-gradient(90deg, #D18CFF 0%, #C500FF 100%)",
    features: [
      {
        text: "Весь функционал чита",
        enabled: true,
      },
      {
        text: "Постоянные обновления",
        enabled: true,
      },
      {
        text: "Поддержка 24/7",
        enabled: true,
      },
      {
        text: "Улучшенный Анти-Бан",
        enabled: true,
      },
      {
        text: "Улучшенная оптимизация",
        enabled: true,
      },
      {
        text: "Запуск на других телефонах",
        enabled: true,
      },
      {
        text: "DPI+, ASN, SKK",
        enabled: false,
      },
    ],
  },

  {
    title: "PRO ВЕРСИЯ",
    period: "Навсегда",
    price: "2 899",
    color: "linear-gradient(90deg, #FF8B8B 0%, #FF2D20 100%)",
    features: [
      {
        text: "Весь функционал чита + NEW",
        enabled: true,
      },
      {
        text: "Все обновления + BETA тест",
        enabled: true,
      },
      {
        text: "Поддержка 24/7",
        enabled: true,
      },
      {
        text: "Самый мощный Анти-Бан",
        enabled: true,
      },
      {
        text: "Максимальная оптимизация",
        enabled: true,
      },
      {
        text: "Запуск на других телефонах",
        enabled: true,
      },
      {
        text: "DPI+, ASN, SKK",
        enabled: true,
      },
    ],
  },
];

export default function Pricing() {
  const [activePlatform, setActivePlatform] =
    useState("iOS");

  return (
    <section
      className="
        bg-[#F2F4F8]
        py-24
        px-6
      "
    >
      <div
        className="
          max-w-[1280px]
          mx-auto
        "
      >
        {/* Title */}
        <div className="text-center">

          <div
            className="
              flex
              justify-center
              items-center
              gap-5
            "
          >
            <span
              className="
                w-5
                h-[4px]
                bg-[#FF9913]
                rotate-[-45deg]
              "
            />

            <h2
              className="
                text-[52px]
                font-extrabold
                uppercase
                text-[#26345C]
              "
            >
              Тарифы
            </h2>

            <span
              className="
                w-5
                h-[4px]
                bg-[#FF9913]
                rotate-45
              "
            />
          </div>

        </div>


        {/* Platform Tabs */}
        <div
          className="
            mt-12
            flex
            justify-center
            gap-4
            flex-wrap
          "
        >
          {platforms.map((platform) => (
            <button
              key={platform}
              onClick={() =>
                setActivePlatform(platform)
              }
              className={`
                w-[140px]
                h-[55px]
                rounded-md
                text-[15px]
                font-semibold
                transition
                shadow-sm
                ${
                  activePlatform === platform
                    ? "bg-[#15B9FF] text-white"
                    : "bg-white text-[#8A8A8A]"
                }
              `}
            >
              {platform}
            </button>
          ))}
        </div>


        {/* Pricing Cards */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-10
            justify-items-center
          "
        >
          {pricingData.map((item) => (
            <PricingCard
              key={item.title}
              title={item.title}
              period={item.period}
              price={item.price}
              color={item.color}
              features={item.features}
            />
          ))}
        </div>

      </div>
    </section>
  );
}