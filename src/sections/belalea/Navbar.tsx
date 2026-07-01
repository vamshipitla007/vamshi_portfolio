import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";

import logo from "@/assets/belalea/Image1.png";

const links = [
  {
    title: "О нас",
    path: "/belalea/about",
  },
  {
    title: "КАТАЛОГ",
    path: "/belalea/catalog",
    dropdown: true,
  },
  {
    title: "Диллерам",
    path: "/belalea/dealers",
  },
  {
    title: "Новости",
    path: "/belalea/news",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto">
        <div className="h-[90px] px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}

          <NavLink to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={logo} alt="logo" className="w-30 h-20 object-contain" />
          </NavLink>

          {/* Desktop */}

          <nav className="hidden lg:flex items-center gap-10 text-[#2D2D2D]">
            {links.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-1
                    text-[14px]
                    font-medium
                    transition-colors duration-300
                    ${isActive ? "text-[#5A4224]" : "text-[#2D2D2D] hover:text-[#7AB95B]"}`
                }
              >
                {item.title}

                {item.dropdown && <ChevronDown size={14} strokeWidth={2} />}
              </NavLink>
            ))}
          </nav>

          {/* Right Side */}

          <div className="hidden lg:flex items-center text-[#2D2D2D]">
            <div
              className="
              w-[180px]
              h-[42px]
              rounded-full
              bg-[#F7F7F7]
              flex
              items-center
              justify-end
              pr-1
              "
            >
              <button
                className="
                w-10
                h-10
                rounded-full
                bg-[#73B78A]
                flex
                items-center
                justify-center
                text-white
                transition
                hover:scale-105
                "
              >
                <Search size={18} />
              </button>
            </div>

            <button
              className="
              ml-4
              w-12
              h-12
              rounded-full
              bg-[#24485A]
              "
            />

            <NavLink
              to="/contact"
              className="
                        ml-3
                        h-[42px]
                        px-6
                        rounded-full
                        border
                        border-[#E5E7EB]
                        flex
                        items-center
                        justify-center
                        text-[14px]
                        font-medium
                        text-[#2D2D2D]
                        hover:bg-[#24485A]
                        hover:text-white
                        transition-all
                        duration-300
                        "
            >
              Контакты
            </NavLink>
          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? (
              <X size={30} color="#24485A" />
            ) : (
              <Menu size={30} color="#24485A" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="px-6 pb-6">
            <div className="flex flex-col gap-6">
              {links.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#24485A] text-[16px] font-medium flex items-center gap-1"
                >
                  {item.title}

                  {item.dropdown && <ChevronDown size={16} />}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="
                mt-2
                rounded-full
                bg-[#24485A]
                text-white
                h-12
                flex
                items-center
                justify-center
                font-medium
                "
              >
                Контакты
              </NavLink>

              <button
                className="
                w-full
                h-12
                rounded-full
                bg-[#73B78A]
                text-white
                flex
                items-center
                justify-center
                gap-2
                "
              >
                <Search size={18} />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
