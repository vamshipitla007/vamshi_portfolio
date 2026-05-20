import TruckHero from "@/assets/eurotracks/tracks.png";
import Service1 from "@/assets/eurotracks/tyers.png";
import Service2 from "@/assets/eurotracks/carwash.png";
import Service3 from "@/assets/eurotracks/stove.png";
import Service4 from "@/assets/eurotracks/oil.png";

const services = [
  {
    id: 1,
    title: "Б/у запчасти для грузовых авто из Европы",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    image: Service1,
  },
  {
    id: 2,
    title: "Автомойка грузовых и легковых авто",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    image: Service2,
  },
  {
    id: 3,
    title: "Магазин аксессуаров",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    image: Service3,
  },
  {
    id: 4,
    title: "Пункт замены масла легковых авто",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    image: Service4,
  },
];

export default function TruckServiceSection() {
  return (
    <section className="w-full bg-[#FFFFFF] overflow-hidden">
      
      {/* Hero Section */}
      <div className="max-w-[1280px] mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[420px] lg:min-h-[520px]">
          
          {/* Left Content */}
          <div className="px-6 sm:px-10 lg:px-16 py-14 lg:py-0">
            <h1 className="text-[40px] sm:text-[52px] lg:text-[64px] leading-[110%] font-extrabold text-[#333333] max-w-[430px]">
              Affordable truck service
            </h1>

            <p className="mt-5 text-[13px] sm:text-[14px] leading-6 text-[#666666] max-w-[420px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc odio in et, lectus sit lorem id integer.
            </p>

            <button className="mt-8 h-[46px] px-8 rounded-md bg-[#4B63F6] hover:bg-[#3E54E8] transition-all duration-300 text-white text-[14px] font-semibold shadow-sm">
              Чета сделать
            </button>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end items-end h-full">
            <img
              src={TruckHero}
              alt="truck"
              className="w-full max-w-[760px] object-contain lg:absolute lg:right-0 lg:bottom-0"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-[1120px] mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-extrabold text-[#333333] leading-tight">
            Любые услуги за ваши денишки
          </h2>

          <p className="mt-5 text-[13px] sm:text-[14px] leading-6 text-[#666666] max-w-[540px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc odio in et, lectus sit lorem id integer.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-14">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-[#FFFFFF] rounded-[10px] overflow-hidden min-h-[250px] sm:min-h-[270px] p-6"
            >
              
              {/* Content */}
              <div className="relative z-10 max-w-[250px]">
                <h3 className="text-[24px] leading-[120%] font-extrabold text-[#333333]">
                  {service.title}
                </h3>

                <p className="mt-5 text-[13px] leading-5 text-[#666666]">
                  {service.description}
                </p>
              </div>

              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className={`
                  absolute bottom-0 right-0 object-contain
                  ${
                    service.id === 1
                      ? "w-[180px] sm:w-[220px]"
                      : ""
                  }
                  ${
                    service.id === 2
                      ? "w-[200px] sm:w-[240px]"
                      : ""
                  }
                  ${
                    service.id === 3
                      ? "w-[190px] sm:w-[230px]"
                      : ""
                  }
                  ${
                    service.id === 4
                      ? "w-[160px] sm:w-[200px]"
                      : ""
                  }
                `}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}