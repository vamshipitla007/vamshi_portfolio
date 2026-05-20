import Brand from "@/assets/eurotracks/brands.png";
import MapImage from "@/assets/eurotracks/map.png";
import TruckImage from "@/assets/eurotracks/shipgo.png";

export default function EuroAboutSection() {
  return (
    <section className="w-full bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* About + Brands */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Content */}
          <div className="px-5 sm:px-8 lg:px-16 py-14 lg:py-20">
            <h2 className="text-[34px] sm:text-[46px] lg:text-[58px] leading-[110%] font-extrabold text-[#333333] max-w-[520px]">
              У вас вопрос кто мы а кто мы блин
            </h2>

            <div className="mt-7 space-y-5 max-w-[470px]">
              <p className="text-[13px] sm:text-[14px] leading-6 text-[#666666]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer.
              </p>

              <p className="text-[13px] sm:text-[14px] leading-6 text-[#666666]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer.
              </p>

              <p className="text-[13px] sm:text-[14px] leading-6 text-[#666666]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer.
              </p>
            </div>
          </div>

          {/* Brand Image */}
          <div className="flex items-center justify-center px-5 sm:px-8 lg:px-16 py-10 lg:py-20">
            <img
              src={Brand}
              alt="brands"
              className="w-full max-w-[420px] lg:max-w-[520px] object-contain"
            />
          </div>
        </div>

        {/* Location + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#EFEFEF]">
          {/* Left */}
          <div className="px-5 sm:px-8 lg:px-16 py-14 lg:py-20 flex items-center">
            <div>
              <h2 className="text-[34px] sm:text-[44px] lg:text-[54px] font-extrabold text-[#333333]">
                Где мы?
              </h2>

              <div className="mt-8 space-y-5 max-w-[470px]">
                <p className="text-[13px] sm:text-[14px] leading-6 text-[#666666]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  odio in et, lectus sit lorem id integer.
                </p>

                <p className="text-[13px] sm:text-[14px] leading-6 text-[#666666]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  odio in et, lectus sit lorem id integer.
                </p>

                <p className="text-[13px] sm:text-[14px] leading-6 text-[#666666]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  odio in et, lectus sit lorem id integer.
                </p>
              </div>
            </div>
          </div>

          {/* Right Map */}
          <div className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-[520px]">
            <img
              src={MapImage}
              alt="map"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Gallery */}
        <div className="px-5 sm:px-8 lg:px-16 py-16 lg:py-20">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-[34px] sm:text-[46px] lg:text-[58px] font-extrabold text-[#333333]">
              Фоточки
            </h2>
          </div>

          {/* Truck Image */}
          <div className="mt-10 lg:mt-14">
            <img
              src={TruckImage}
              alt="truck"
              className="w-full h-[240px] sm:h-[380px] lg:h-[560px] object-cover rounded-[6px]"
            />
          </div>

          {/* Static Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-5 h-[5px] rounded-full bg-[#4B63F6]" />

            <div className="w-[5px] h-[5px] rounded-full bg-[#7C8CFF]" />

            <div className="w-[5px] h-[5px] rounded-full bg-[#7C8CFF]" />
          </div>
        </div>
      </div>
    </section>
  );
}
