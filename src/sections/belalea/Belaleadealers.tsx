import banner from "@/assets/belalea/Image18.png";
import { ArrowRight, Factory, Mail, MapPin, Phone, PinIcon } from "lucide-react";

import contactHero from "@/assets/belalea/Image19.png";
import contactMap from "@/assets/belalea/Image20.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Belaleadealers = () => {
  const navigate = useNavigate();

  return (
    <section className="relative">
      <img
        src={banner}
        alt="About Banner"
        className="w-full h-[220px] md:h-[300px] lg:h-[360px] object-cover"
      />
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}

          <div>
            <img
              src={contactHero}
              alt="Contact"
              className="
                w-full
                rounded-[30px]
                object-cover
                shadow-lg
              "
            />
          </div>

          {/* Right */}

          <div className="max-w-[560px]">
            <h2
              className="
                text-[#274C5B]
                font-bold
                text-[34px]
                md:text-[48px]
                lg:text-[56px]
                leading-tight
              "
            >
              Мы с удовольствием поговорим о том, как мы можем работать вместе.
            </h2>

            <p
              className="
                mt-6
                text-[#6B7280]
                text-[16px]
                leading-8
              "
            >
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley.
            </p>

            {/* Email */}

            <div
              className="
                mt-10
                bg-white
                border
                border-[#E8E8E8]
                rounded-2xl
                shadow-sm
                p-5
                flex
                items-center
                gap-5
                hover:shadow-lg
                transition
              "
            >
              <div
                className="
                  w-16
                  h-16
                  rounded-xl
                  bg-[#F7F8F7]
                  flex
                  items-center
                  justify-center
                "
              >
                <Mail size={28} className="text-[#7EB693]" />
              </div>

              <div>
                <h3 className="text-[#274C5B] text-[22px] font-semibold">
                  Сообщение
                </h3>

                <p className="text-[#6B7280]">support@belalea.by</p>
              </div>
            </div>

            {/* Phone */}

            <div
              className="
                mt-6
                bg-white
                border
                border-[#E8E8E8]
                rounded-2xl
                shadow-sm
                p-5
                flex
                items-center
                gap-5
                hover:shadow-lg
                transition
              "
            >
              <div
                className="
                  w-16
                  h-16
                  rounded-xl
                  bg-[#F7F8F7]
                  flex
                  items-center
                  justify-center
                "
              >
                <Phone size={28} className="text-[#7EB693]" />
              </div>

              <div>
                <h3 className="text-[#274C5B] text-[22px] font-semibold">
                  Звонок
                </h3>

                <p className="text-[#6B7280]">+375 (29) 789 789 5</p>
              </div>
            </div>

            {/* Social */}

            <div className="flex gap-4 mt-10">
              {[FaInstagram, FaFacebook, FaTwitter, PinIcon].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="
                    w-14
                    h-14
                    rounded-full
                    bg-[#EFF6F2]
                    flex
                    items-center
                    justify-center
                    text-[#274C5B]
                    hover:bg-[#7EB693]
                    hover:text-white
                    transition-all
                    duration-300
                  "
                  >
                    <Icon size={20} />
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] pt-10 mx-auto px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px]">
          {/* Background Image */}

          <img
            src={contactMap}
            alt="Location"
            className="
              w-full
              h-[350px]
              md:h-[500px]
              lg:h-[620px]
              object-cover
            "
          />

          {/* Floating Card */}

          <div
            className="
              bg-white
              rounded-[32px]
              shadow-2xl
              p-8
              md:p-10
              lg:p-12

              lg:absolute
              lg:right-12
              lg:top-1/2
              lg:-translate-y-1/2

              mt-6
              lg:mt-0

              w-full
              lg:w-[430px]
            "
          >
            <span
              className="text-[#7EB693] italic text-[30px]"
              style={{ fontFamily: "cursive" }}
            >
              Где мы?
            </span>

            <h2 className="mt-2 text-[#274C5B] text-[34px] md:text-[46px] font-bold leading-tight">
              Наш адрес
            </h2>

            <p className="mt-5 text-[#6B7280] leading-8">
              Мы находимся в самом экологически чистом районе Беларуси.
            </p>

            {/* Office */}

            <div className="flex items-start gap-4 mt-10">
              <div className="w-14 h-14 rounded-full bg-[#F4FBF6] flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-[#7EB693]" />
              </div>

              <div>
                <h4 className="text-[#274C5B] text-[20px] font-semibold">
                  Офис
                </h4>

                <p className="text-[#6B7280] mt-1 leading-7">
                  г. Клецк,
                  <br />
                  ул. Аветисова
                </p>
              </div>
            </div>

            {/* Factory */}

            <div className="flex items-start gap-4 mt-8">
              <div className="w-14 h-14 rounded-full bg-[#F4FBF6] flex items-center justify-center flex-shrink-0">
                <Factory size={24} className="text-[#7EB693]" />
              </div>

              <div>
                <h4 className="text-[#274C5B] text-[20px] font-semibold">
                  Производство
                </h4>

                <p className="text-[#6B7280] mt-1 leading-7">
                  г. Клецк,
                  <br />
                  ул. Нагдальная
                </p>
              </div>
            </div>

            {/* Button */}

            <button
              onClick={() => navigate("/location")}
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                bg-[#274C5B]
                hover:bg-[#1E4251]
                text-white
                px-8
                h-14
                rounded-xl
                transition-all
                duration-300
              "
            >
              Открыть карту
              <div className="w-7 h-7 rounded-full bg-[#335A68] flex items-center justify-center">
                <ArrowRight size={16} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Belaleadealers;
