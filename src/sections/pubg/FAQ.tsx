import { useState } from "react";
import FAQItem from "./FAQItem";

const data = [
  {
    question: "Какие у нас есть гарантии?",
    answer:
      "Мы официальные дилеры данного чита. Нам доверяет огромное количество людей. Также вы можете посмотреть представленные скриншоты выше.",
  },

  {
    question: "Как устанавливаются читы?",
    answer:
      "После покупки вы получите подробную инструкцию по установке и настройке.",
  },

  {
    question: "Что я получу после оплаты тарифа?",
    answer:
      "Вы получите доступ к выбранному тарифу и все его возможности.",
  },

  {
    question: "Что такое DPI+, ASN, SKK?",
    answer:
      "Это дополнительные настройки оптимизации для улучшения игрового процесса.",
  },

  {
    question: "Влияют-ли читы на FPS в игре?",
    answer:
      "Нет, программное обеспечение оптимизировано и не снижает производительность.",
  },
];


export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="
        bg-[#F2F4F8]
        px-6
        py-24
      "
    >
      <div className="max-w-[850px] mx-auto">


        {/* Title */}
        <div className="flex justify-center items-center gap-4">

          <span
            className="
              w-5
              h-[4px]
              bg-[#FF9913]
              -rotate-45
            "
          />

          <h2
            className="
              text-[30px]
              md:text-[48px]
              font-extrabold
              uppercase
              text-[#2A355E]
            "
          >
            Частые вопросы
          </h2>


          <span
            className="
              w-5
              h-[4px]
              bg-[#00BFFF]
              rotate-45
            "
          />

        </div>


        <div className="mt-14 space-y-5">

          {data.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              open={active === index}
              onClick={() => setActive(index)}
            />
          ))}

        </div>


        <div className="text-center mt-10">

          <button
            className="
              text-[#00BFFF]
              underline
              text-[15px]
              font-medium
            "
          >
            У меня есть вопрос
          </button>

        </div>

      </div>
    </section>
  );
}