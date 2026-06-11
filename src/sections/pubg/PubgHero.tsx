import gun from "@/assets/pubg/Image2.png";
import car from "@/assets/pubg/Image1.png";

export default function PubgHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-r
        from-[#295BFF]
        to-[#76D5FF]
        min-h-[800px]
        pt-32
      "
    >
      {/* Background dots */}
      {/* <div className="absolute left-10 top-24 text-white/20 text-[80px]">
        • • •
      </div> */}

      <div
        className="
          max-w-[1300px]
          mx-auto
          px-6
          grid
          lg:grid-cols-2
          items-center
        "
      >
        {/* Left content */}
        <div className="relative z-10 ml-6">
          <div className="w-12 h-[4px] bg-[#FF9913] mb-8"></div>

          <h1
            className="
              text-white
              font-extrabold
              uppercase
              leading-[1.05]
              text-[32px]
              lg:text-[60px]
              max-w-[550px]
            "
          >
            Читы на PUBG <br />
            Лучшие на рынке <br />
            Без бана!
          </h1>

          <p
            className="
              mt-4
              text-white/90
              text-[12px]
              leading-7
              max-w-[480px]
            "
          >
            Лучшие сборки на рынке, проверенные опытом и временем,
            а также оптимальное соотношение цены, надежности и
            производительности.
          </p>

          <p className="mt-4 text-white text-[12px]">
            Самая низкая цена за месяц
          </p>


          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-2">
            <button
              className="
                bg-[#FF9913]
                text-white
                h-[45px]
                px-10
                rounded
                text-[12px]
                font-semibold
                hover:scale-105
                transition
              "
            >
              Купить →
            </button>

            <button
              className="
                border
                border-white/40
                text-white
                h-[45px]
                px-10
                rounded
                text-[12px]
                font-semibold
                hover:bg-white/10
                transition
              "
            >
              Посмотреть видео
            </button>
          </div>
        </div>


        {/* Car Image */}
        <div
          className="
            relative
            mt-16
            lg:mt-0
          "
        >
          <img
            src={car}
            alt="car"
            className="
              w-full
              max-w-[800px]
              mx-auto
              drop-shadow-[0_40px_40px_rgba(0,0,0,0.35)]
            "
          />
        </div>
      </div>


      {/* Weapon Image */}
      <img
        src={gun}
        alt="weapon"
        className="
          absolute
          left-10
          bottom-8
          w-[600px]
          hidden
          lg:block
          z-10
          ml-4
        "
      />


      {/* Curved Bottom */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[160px]
          bg-[#F2F4F8]
          rounded-t-[100%]
        "
      />
    </section>
  );
}