import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const navItems = [
  {
    title: "Discover initiatives",
    path: "/",
  },
  {
    title: "Funded grants",
    path: "/grants",
  },
  {
    title: "Program expenses",
    path: "/expenses",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "FAQ",
    path: "/faq",
  },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="w-full border-b border-[#2B2B4B] bg-[#17172B] relative overflow-hidden">
        {/* Grid Background */}
        <div
          className="
            absolute
            inset-0
            opacity-30
            [background-image:linear-gradient(#2d2d52_1px,transparent_1px),linear-gradient(to_right,#2d2d52_1px,transparent_1px)]
            [background-size:32px_32px]
          "
        />

        <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="h-[92px] flex items-center justify-between">
            {/* Logo */}
            <div className="flex flex-col leading-none">
              <h1 className="text-white text-[32px] font-bold tracking-[-3px]">
                dYdX
              </h1>

              <span className="text-[#6C63FF] text-[10px] font-semibold -mt-2">
                grants
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    text-[12px]
                    tracking-wide
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "text-white"
                        : "text-[#D1D1E0] hover:text-white"
                    }
                  `
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <button
                className="
                  bg-[#6C63FF]
                  hover:bg-[#7A72FF]
                  transition-all
                  duration-300
                  text-white
                  px-6
                  h-[38px]
                  rounded-xl
                  font-semibold
                "
              >
                Apply for grant
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="lg:hidden text-white"
              >
                {mobileMenu ? (
                  <IoClose size={34} />
                ) : (
                  <HiMenuAlt3 size={34} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-[85%]
          max-w-[360px]
          bg-[#2B2B4B]
          z-50
          transition-all
          duration-500
          ease-in-out
          ${
            mobileMenu
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }
        `}
      >
        {/* Grid Background */}
        <div
          className="
            absolute
            inset-0
            opacity-20
            [background-image:linear-gradient(#4A4A73_1px,transparent_1px),linear-gradient(to_right,#4A4A73_1px,transparent_1px)]
            [background-size:32px_32px]
          "
        />

        <div className="relative z-20 flex flex-col h-full px-8 py-8">
          {/* Top */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col leading-none">
              <h1 className="text-white text-[28px] font-bold tracking-[-3px]">
                dYdX
              </h1>

              <span className="text-[#6C63FF] text-[10px] font-semibold -mt-2">
                grants
              </span>
            </div>

            <button
              onClick={() => setMobileMenu(false)}
              className="
                w-11
                h-11
                rounded-full
                flex
                items-center
                justify-center
                border
                border-[#4F4F73]
                text-white
              "
            >
              <IoClose size={28} />
            </button>
          </div>

          {/* Menu */}
          <div className="flex flex-col items-center justify-center flex-1 gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  `
                    text-[20px]
                    text-center
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "text-white"
                        : "text-[#E5E5F0] hover:text-white"
                    }
                  `
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-center gap-8 pb-6">
            <div className="text-white text-3xl cursor-pointer">𝕏</div>

            <div className="text-white text-3xl cursor-pointer">◎</div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}
    </>
  );
}