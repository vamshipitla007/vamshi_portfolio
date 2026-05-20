import { MapPin, Phone } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

import Logo from "@/assets/eurotracks/logo.png";

export default function Footer() {

  const navLinks = [
    "Это мы",
    "Кто мы",
    "Почему мы?",
    "Остальные вопросы",
    "Контакты",
  ];

  return (
    <footer className="w-full bg-[#0D0D0E] text-white overflow-hidden">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Logo */}
          <div>
            <img
              src={Logo}
              alt="logo"
              className="w-[150px] lg:w-[170px] object-contain"
            />
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[20px] lg:text-[22px] font-semibold mb-5">
              Главная
            </h3>

            <div className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href="/"
                  className="text-[13px] lg:text-[14px] text-gray-300 hover:text-white transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[20px] lg:text-[22px] font-semibold mb-5">
              Контакты
            </h3>

            <div className="space-y-3 text-[13px] lg:text-[14px] text-gray-300">
              <p>+7 (708) 802 88 88</p>
              <p>+7 (708) 803 88 88</p>
              <p>+7 (708) 51 51 518</p>
              <p>+7 (700) 51 51 518</p>

              <div className="pt-3 flex items-center gap-2">
                <Phone size={15} />
                <p>+7 (708) 802 88 88</p>
              </div>

              <div className="flex items-start gap-2">
                <MapPin size={15} className="mt-[2px] shrink-0" />

                <p>г. Бишкек, ул. Ляляля 69</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-[20px] lg:text-[22px] font-semibold mb-5">
              Следите за нами
            </h3>

            <div className="flex flex-col gap-5">
              <a
                href="/"
                className="flex items-center gap-3 text-[13px] lg:text-[14px] text-gray-300 hover:text-white transition"
              >
                <FaFacebook size={19} />
                <span>truck_service_officaL</span>
              </a>

              <a
                href="/"
                className="flex items-center gap-3 text-[13px] lg:text-[14px] text-gray-300 hover:text-white transition"
              >
                <BsInstagram size={19} />
                <span>truck_service_officaL</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 lg:mt-14 pt-5">
          <p className="text-[11px] sm:text-[12px] text-gray-500 text-center md:text-left">
            Copyright © Truck Services 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
