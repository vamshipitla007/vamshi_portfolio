import { Menu, MapPin, Clock3, Phone, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/assets/eurotracks/logo2.png";

export default function EuroNavbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = ["Это мы", "Почему мы?", "А вот поэтому", "Контакты"];

  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Top Info Bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Left Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-[12px] text-gray-600">
            {/* Address */}
            <div className="flex items-start gap-2 border-r border-gray-200 pr-6">
              <MapPin size={14} className="text-gray-500 mt-[2px] shrink-0" />

              <div>
                <p className="text-gray-500">Наш адрес:</p>
                <p className="font-medium text-gray-700">
                  г. Бишкек, ул. Ляляля 69
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-2">
              <Clock3 size={14} className="text-gray-500 mt-[2px] shrink-0" />

              <div>
                <p className="text-gray-500">График работы:</p>
                <p className="font-medium text-gray-700">
                  С 8:00 до 22:00 без выходных
                </p>
              </div>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-start gap-2 text-[12px] text-gray-700">
            <Phone size={14} className="mt-[2px] text-gray-500" />

            <div className="leading-5">
              <p>+7 (708) 51 51 518</p>
              <p>+7 (700) 51 51 518</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-[78px] flex items-center justify-between">
        {/* Logo */}

        {/* Logo */}
        <div className="flex items-center shrink-0">
          <img
            src={Logo}
            alt="Euro Truck Service"
            className="
      w-[120px]
      sm:w-[140px]
      lg:w-[170px]
      object-contain
    "
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-14 text-[14px] font-medium text-gray-800">
          {navLinks.map((item) => (
            <a
              key={item}
              href="/"
              className="hover:text-[#4056F4] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <button className="hidden lg:flex items-center justify-center bg-[#4B63F6] hover:bg-[#3d54e8] transition-all duration-200 text-white text-[14px] font-medium px-8 h-[42px] rounded-md shadow-sm">
          Заказать звонок
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(true)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md border text-[#4056F4] border-gray-200"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
          <div className="w-[280px] h-full bg-white p-5 shadow-xl">
            {/* Top */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <h1 className="text-[28px] font-extrabold leading-none text-[#4056F4]">
                  EURO
                </h1>

                <div className="ml-2 text-[10px] leading-3 font-semibold">
                  <p>TRUCK</p>
                  <p>SERVICE</p>
                </div>
              </div>

              <button onClick={() => setMobileMenu(false)}>
                <X size={22} color="#000000" />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-5 text-[14px] font-medium text-gray-800">
              {navLinks.map((item) => (
                <a key={item} href="/" className="hover:text-[#4056F4]">
                  {item}
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-8 border-t border-gray-200 pt-6 text-[12px] text-gray-600 space-y-4">
              <div>
                <p className="font-medium text-gray-800 mb-1">Наш адрес:</p>

                <p>г. Бишкек, ул. Ляляля 69</p>
              </div>

              <div>
                <p className="font-medium text-gray-800 mb-1">График работы:</p>

                <p>С 8:00 до 22:00 без выходных</p>
              </div>

              <div>
                <p className="font-medium text-gray-800 mb-1">Телефон:</p>

                <p>+7 (708) 51 51 518</p>
                <p>+7 (700) 51 51 518</p>
              </div>
            </div>

            {/* Button */}
            <button className="mt-8 w-full bg-[#4B63F6] hover:bg-[#3d54e8] text-white text-[13px] font-medium h-[42px] rounded-md">
              Заказать звонок
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
