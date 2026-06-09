import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  {
    name: "Home",
    path: "/factorypro/home",
  },
  {
    name: "About Us",
    path: "/factorypro/about",
  },
  {
    name: "Services",
    path: "/factorypro/services",
  },
  {
    name: "Blog",
    path: "/factorypro/blog",
  },
  {
    name: "Projects",
    path: "/factorypro/projects",
  },
  {
    name: "Contact Us",
    path: "/factorypro/contact",
  },
];

export default function FactoryProNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
      absolute
      top-0
      left-0
      right-0
      z-50
      "
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="
          flex
          items-center
          justify-between
          px-6
          lg:px-12
          py-6
          border-b
          border-white/20
          "
        >
          <Link
            to="/factorypro"
            className="flex items-center gap-3"
          >
            <img
              src="/logo.png"
              alt=""
              className="w-10 h-10"
            />

            <h2
              className="
              text-white
              font-bold
              text-xl
              "
            >
              FactoryPro
            </h2>
          </Link>

          <nav className="hidden lg:flex gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `
                  text-[15px]
                  font-medium
                  transition
                  ${
                    isActive
                      ? "text-[#ff9f1c]"
                      : "text-white hover:text-[#ff9f1c]"
                  }
                  `
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Phone
              size={18}
              className="text-[#ff9f1c]"
            />

            <span className="text-white font-medium">
              +01123456789
            </span>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div
            className="
            lg:hidden
            bg-black/95
            backdrop-blur-md
            "
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="
                block
                px-6
                py-4
                text-white
                border-b
                border-white/10
                "
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}