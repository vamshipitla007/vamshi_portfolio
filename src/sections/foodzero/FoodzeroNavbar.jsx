import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function FoodzeroNavbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const navItems = [
    {
      title: "HOME",
      path: "/foodzero/homepage",
    },
    {
      title: "MENU",
      path: "/foodzero/menu",
    },
    {
      title: "BLOGS",
      path: "/foodzero/blogs",
    },
    {
      title: "ABOUT",
      path: "/foodzero/about",
    },
    {
      title: "CONTACT",
      path: "/foodzero/contact",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 z-50 w-full bg-[#203300]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <div className="relative">
            <h1 className="font-serif text-3xl text-white">FoodZero</h1>

            <div className="absolute -left-2 -top-2 h-8 w-14 border border-white/70" />
            <div className="absolute -bottom-2 right-0 h-8 w-14 border border-white/70" />
          </div>

          {/* Center */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setOpen(true)}
              className="text-white transition hover:opacity-70"
            >
              <Menu size={26} />
            </button>
          </div>

          {/* Right */}
          <div className="hidden items-center gap-6 md:flex">
            <span className="text-xs text-white">+86 852 346 000</span>

            <button className="border border-white px-6 py-3 text-xs text-white transition hover:bg-white hover:text-black">
              Reservations
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Background */}
        <div
          className={`absolute inset-0 transition-transform duration-500 ${
            open ? "scale-100" : "scale-110"
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2000"
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#223400]/75 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="relative h-full w-full">
          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute left-6 top-6 text-white"
          >
            <X size={28} />
          </button>

          <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-8 md:flex-row md:items-center md:justify-between">
            {/* Left Navigation */}
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.title}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block font-serif transition md:text-6xl text-3xl
      ${isActive ? "text-[#d6df39]" : "text-white hover:text-[#d6df39]"}
      ${open ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`
                  }
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  • {item.title}
                </NavLink>
              ))}

              {/* Blog Submenu */}
              <div className="ml-6 mt-2 space-y-1 text-xs text-white/80">
                <p>1 Column</p>
                <p>2 Columns</p>
                <p>Sidebar Post</p>
              </div>
            </div>

            {/* Right Contact */}
            <div
              className={`mt-12 max-w-[250px] text-white md:mt-0 ${
                open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              } transition-all duration-700`}
            >
              <div className="mb-4 flex items-center gap-4">
                <h3 className="font-serif text-xl">Contact</h3>

                <div className="h-px flex-1 bg-white" />
              </div>

              <div className="space-y-4 text-xs leading-6">
                <p>+86 852 346 000</p>

                <p>info@foodzero.com</p>

                <p>
                  1959 Sepulveda Blvd
                  <br />
                  Culver City, CA 90230
                </p>

                <div className="flex gap-4 text-sm">
                  <span>◎</span>
                  <span>𝕏</span>
                  <span>f</span>
                  <span>▶</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Bottom CTA */}
          <div className="absolute bottom-8 left-1/2 w-[90%] -translate-x-1/2 md:hidden">
            <button className="w-full border border-white py-3 text-xs text-white">
              Reservations
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
