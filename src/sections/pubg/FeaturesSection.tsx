import PlatformTabs from "./PlatformTabs";
import PhonePreview from "./PhonePreview";

const features = [
  {
    title: "WallHack",
    description: "обнаруживает противников сквозь стены.",
  },
  {
    title: "AntiRecoil",
    description: "отключает отдачу на любом оружии.",
  },
  {
    title: "Aimbot",
    description: "автоматически наводит прицел на противника.",
  },
  {
    title: "Drop",
    description: "показывает топовые вещи сквозь стены.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#F2F4F8] pb-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Platform Tabs */}
        <div className="-mt-10 relative z-20">
          <PlatformTabs />
        </div>


        {/* Content */}
        <div
          className="
            mt-14
            grid
            lg:grid-cols-2
            gap-12
            items-start
          "
        >

          {/* Left Phone */}
          <div className="order-2 lg:order-1">
            <PhonePreview />
          </div>


          {/* Right Details */}
          <div className="order-1 lg:order-2">

            {/* Heading */}
            <div className="flex items-center gap-4">
              <span className="w-10 h-[4px] bg-[#FF9913]"></span>

              <h2
                className="
                  text-[32px]
                  lg:text-[48px]
                  font-extrabold
                  uppercase
                  text-[#1D2855]
                "
              >
                Функционал
              </h2>

              <span className="w-10 h-[4px] bg-[#FF9913] rotate-45"></span>
            </div>


            <p
              className="
                mt-4
                text-[16px]
                text-[#9AA1B3]
                max-w-[430px]
                leading-7
              "
            >
              Уникальный чит на iOS подойдет для всех устройств
              начиная от айфона 4S+.
            </p>


            {/* Feature List */}
            <div className="mt-10 space-y-6">

              {features.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4"
                >

                  <div
                    className="
                      mt-2
                      w-2.5
                      h-2.5
                      bg-[#FF9913]
                      rotate-45
                      shrink-0
                    "
                  />

                  <p
                    className="
                      text-[16px]
                      text-[#5A6277]
                      leading-7
                    "
                  >
                    <span className="font-bold">
                      {item.title}
                    </span>
                    {" "}
                    - {item.description}
                  </p>

                </div>
              ))}

            </div>


            {/* Warning Box */}
            <div
              className="
                mt-10
                bg-white
                rounded
                p-5
                max-w-[420px]
                shadow-sm
                text-[#A0A6B5]
                text-[14px]
                flex
                items-center
                gap-3
              "
            >
              <span className="text-[#FF9913] text-[20px]">
                ⚠
              </span>

              Рекомендуем оставить стандартные параметры в чите
            </div>


            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-5">

              <button
                className="
                  bg-[#FF9913]
                  hover:bg-[#F58A00]
                  transition
                  text-white
                  px-10
                  h-[55px]
                  rounded
                  font-semibold
                  text-[15px]
                "
              >
                Купить →
              </button>


              <button
                className="
                  bg-[#FF4747]
                  hover:bg-[#EA2E2E]
                  transition
                  text-white
                  px-10
                  h-[55px]
                  rounded
                  font-semibold
                  text-[15px]
                "
              >
                Посмотреть видео ▶
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}