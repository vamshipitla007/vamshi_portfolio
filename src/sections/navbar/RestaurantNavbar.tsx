import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/restaurant/homepage" },
  { name: "Menu", path: "/restaurant/homepage/menu" },
  { name: "About us", path: "/restaurant/homepage/about" },
  { name: "Order online", path: "/restaurant/homepage/order" },
  { name: "Reservation", path: "/restaurant/homepage/reservation" },
  { name: "Contact us", path: "/restaurant/homepage/contact" },
];

const RestaurantNavbar = () => {
  return (
    <nav className="flex items-center justify-between py-4">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
          D
        </div>
        <span className="font-semibold text-lg text-[#311F09]">
          Deli<span className="text-orange-500">zioso</span>
        </span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 text-[15px]">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-medium"
                  : "text-gray-700 hover:text-orange-500 transition"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <div className="relative text-lg">
          🛒
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
            3
          </span>
        </div>

        <button className="hidden md:block bg-green-600 text-white px-5 py-2 rounded-full text-sm">
          Log in
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-xl cursor-pointer">☰</div>
      </div>
    </nav>
  );
};

export default RestaurantNavbar;
