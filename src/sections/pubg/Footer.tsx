import box from "@/assets/pubg/Image5.png";
import smoke from "@/assets/pubg/Image6.png";

const links = ["Главная", "Тарифы", "Отзывы", "FAQ", "Контакты", "Функционал"];

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-gradient-to-r
        from-[#295BFF]
        to-[#74D9FF]
        pt-24
        pb-10
      "
    >
      {/* Curve */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-28
          bg-[#F2F4F8]
          rounded-b-[100%]
        "
      />

      <div
        className="
          max-w-[1280px]
          mx-auto
          px-6
          relative
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
      >
        {/* Left PUBG Supply Box */}
        <div className="relative flex justify-center items-end">
          {/* Smoke */}
          <img
            src={smoke}
            alt="smoke"
            className="
            absolute
            -top-25
            left-1/2
            -translate-x-1/2
            w-[220px]
            md:w-[320px]
            lg:w-[380px]
            z-20
            pointer-events-none
            "
          />

          {/* Box */}
          <img
            src={box}
            alt="PUBG Box"
            className="
            relative
            w-[600px]
            md:w-[600px]
            lg:w-[600px]
            z-10
            drop-shadow-[0_25px_40px_rgba(0,0,0,0.45)]
            mt-12
            "
          />
        </div>

        {/* Right Form */}
        <div>
          <h3
            className="
              text-white
              text-[18px]
              font-semibold
              mb-6
            "
          >
            Обратная связь
          </h3>

          <div
            className="
              bg-white
              rounded-sm
              p-8
              shadow-xl
            "
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                placeholder="Ваше имя"
                className="
                border-b
                text-[#2A355E]
                placeholder:text-[#2A355E]
                outline-none
                pb-3
                text-[15px]
            "
              />
             <input
                placeholder="E-mail"
                className="
                    border-b
                    text-[#2A355E]
                    placeholder:text-[#2A355E]
                    outline-none
                    pb-3
                    text-[15px]
                "
                />
            </div>

           <textarea
            rows={4}
            placeholder="Комментарий"
            className="
                w-full
                border-b
                mt-8
                resize-none
                outline-none
                text-[15px]
                text-[#2A355E]
                placeholder:text-[#2A355E]
            "
            />

            <button
              className="
                mt-8
                w-[170px]
                h-[52px]
                bg-[#FF9913]
                text-white
                font-semibold
                rounded
                hover:bg-[#ff8800]
                transition
              "
            >
              Отправить
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div
        className="
          mt-16
          px-6
          relative
        "
      >
        <div
          className="
            max-w-[1200px]
            mx-auto
            flex
            flex-wrap
            justify-center
            gap-8
          "
        >
          {links.map((item) => (
            <button
              key={item}
              className="
                text-white
                uppercase
                text-[14px]
                font-semibold
              "
            >
              {item}
            </button>
          ))}

          <button
            className="
              bg-white
              text-[#2A355E]
              px-4
              rounded
              h-10
              text-[14px]
              font-semibold
            "
          >
            🇷🇺 RU
          </button>
        </div>

        <p
          className="
            text-center
            text-white/80
            text-[14px]
            mt-10
          "
        >
          Защищено 2022 (C)
        </p>
      </div>
    </footer>
  );
}
