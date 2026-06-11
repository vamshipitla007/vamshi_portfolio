import { useState } from "react";
import profile from "@/assets/pubg/Image4.png";

const reviews = [
  {
    id: 1,
    name: "Егор Чернев",
    flag: "🇷🇺",
    text:
      "Рекомендую данный софт! Аналогов не нашел нигде, решил не заморачиваться и сразу приобрел PRO версию.",
  },
  {
    id: 2,
    name: "Алексей Иванов",
    flag: "🇷🇺",
    text:
      "Лучший чит на рынке. Отличная оптимизация и стабильная работа на всех устройствах.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % reviews.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );

  const item = reviews[index];

  return (
    <section
      className="
      relative
      overflow-hidden
      bg-gradient-to-r
      from-[#295BFF]
      to-[#76D5FF]
      pt-24
      pb-28
      "
    >
      {/* Top Curve */}
      <div
        className="
        absolute
        top-0
        left-0
        w-full
        h-20
        bg-[#F2F4F8]
        rounded-b-[100%]
        "
      />

      <div className="max-w-[1200px] mx-auto px-6 relative">

        <h2
          className="
          text-center
          text-white
          text-[42px]
          font-extrabold
          uppercase
          "
        >
          Что говорят о нас
        </h2>


        <div className="mt-12 flex items-center justify-center gap-5">

          <button
            onClick={prev}
            className="
            w-16 h-16
            rounded-xl
            bg-[#00CFFF]
            text-white
            text-3xl
            shadow-xl
            "
          >
            ‹
          </button>


          <div
            className="
            relative
            bg-white
            rounded-md
            max-w-[700px]
            p-10
            text-center
            "
          >
            <img
              src={profile}
              className="
              w-20 h-20
              rounded-full
              border-4
              border-white
              absolute
              -top-10
              left-1/2
              -translate-x-1/2
              "
            />

            <h3 className="mt-8 text-[22px] font-bold text-[#2A355E]">
              {item.name}
              <span className="ml-2">
                {item.flag}
              </span>
            </h3>


            <p
              className="
              mt-4
              text-[#71788F]
              text-[15px]
              leading-7
              "
            >
              {item.text}
            </p>

          </div>


          <button
            onClick={next}
            className="
            w-16 h-16
            rounded-xl
            bg-[#00CFFF]
            text-white
            text-3xl
            shadow-xl
            "
          >
            ›
          </button>

        </div>


      </div>
    </section>
  );
}