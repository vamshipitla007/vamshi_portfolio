import { FaGooglePlay, FaApple } from "react-icons/fa";
import MobileImg from "@/assets/tastenest/handMobile.png";
import ScooterImg from "@/assets/tastenest/scooter.png";
import PizzaImg from "@/assets/tastenest/specialpizza.png";
import CurryImg from "@/assets/tastenest/currybox.png";
import LeafImg from "@/assets/tastenest//leaf.png";

const features = [
  "Higher Reach - Minimal Effort",
  "Showcase your Brand",
  "Exclusive offers & discounts",
];

export default function FoodDeliveryAppSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-10 lg:py-20 overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-[34px] bg-[#eef0f5] min-h-[430px]">
          {/* Right Pink Shape */}
          <div className="absolute right-0 top-0 w-[62%] h-full bg-[#ff2150] rounded-l-[180px]" />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[430px]">
            {/* Left Content */}
            <div className="px-6 sm:px-10 lg:px-14 py-12 lg:py-0">
              {/* Tag */}
              <p className="uppercase tracking-[2px] text-[#ff2150] font-extrabold text-[11px]">
                Best App For Foods Ordering
              </p>

              {/* Heading */}
              <h2 className="mt-4 text-black font-extrabold leading-[1.15] text-[34px] sm:text-[46px] lg:text-[52px] max-w-[520px]">
                Manage Your Restaurant Anytime! Anywhere!
              </h2>

              {/* Features */}
              <div className="mt-7 space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#ffd400]" />

                    <p className="text-[#555] text-[15px] sm:text-[16px]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                {/* Google Play */}
                <button className="h-[54px] px-5 rounded-xl bg-[#ff2150] hover:bg-[#ea1746] transition-all duration-300 flex items-center gap-3 shadow-md">
                  <FaGooglePlay className="text-white text-[18px]" />

                  <span className="text-white font-bold text-[14px]">
                    Google Play
                  </span>
                </button>

                {/* App Store */}
                <button className="h-[54px] px-5 rounded-xl bg-black hover:bg-[#111] transition-all duration-300 flex items-center gap-3 shadow-md">
                  <FaApple className="text-white text-[20px]" />

                  <span className="text-white font-bold text-[14px]">
                    App Store
                  </span>
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-[420px] hidden lg:block">
              {/* Leaf Top */}
              <img
                src={LeafImg}
                alt="leaf"
                className="absolute top-[30px] left-[20px] w-[36px] rotate-[-20deg]"
              />

              {/* Leaf Right */}
              <img
                src={LeafImg}
                alt="leaf"
                className="absolute top-[130px] right-[70px] w-[26px] rotate-[30deg]"
              />

              {/* Pizza */}
              <img
                src={PizzaImg}
                alt="pizza"
                className="
                  absolute
                  top-[20px]
                  right-[90px]
                  w-[150px]
                  object-contain
                  drop-shadow-xl
                "
              />

              {/* Curry Box */}
              <div className="absolute right-[70px] bottom-[60px]">
                {/* Dashed Circle */}
                <div className="absolute inset-0 border border-dashed border-white/60 rounded-full scale-[1.4]" />

                <img
                  src={CurryImg}
                  alt="curry"
                  className="
                    relative
                    w-[150px]
                    object-contain
                    drop-shadow-xl
                  "
                />
              </div>

              {/* Scooter */}
              <img
                src={ScooterImg}
                alt="scooter"
                className="
                  absolute
                  left-[10px]
                  bottom-[50px]
                  w-[170px]
                  object-contain
                  drop-shadow-xl
                "
              />

              {/* Mobile */}
              <img
                src={MobileImg}
                alt="mobile"
                className="
                  absolute
                  bottom-0
                  left-1/2
                  -translate-x-1/2
                  w-[320px]
                  object-contain
                  z-20
                  drop-shadow-2xl
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
