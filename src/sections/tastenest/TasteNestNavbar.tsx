import { Menu, ChevronDown, ShoppingBasket } from "lucide-react";
import TasteNestLogo from "@/assets/tastenest/logo.png";

const navItems = [
  { label: "Home", hasDropdown: true },
  { label: "About Us" },
  { label: "Shop", hasDropdown: true },
  { label: "Blog", hasDropdown: true },
  { label: "Pages", hasDropdown: true },
  { label: "Contact" },
];

export default function TasteNestNavbar() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
        <div className="h-[90px] flex items-center justify-between">
          {/* Left Logo */}
          <div className="flex items-center">
            <img
              src={TasteNestLogo}   
              alt="TasteNest"
              className="w-[130px] object-contain"
            />
          </div>

          {/* Center Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-1 cursor-pointer group"
              >
                <span className="text-[15px] font-semibold text-[#1f1f1f] group-hover:text-orange-500 transition-colors duration-200">
                  {item.label}
                </span>

                {item.hasDropdown && (
                  <ChevronDown
                    size={14}
                    className="text-[#1f1f1f] mt-[1px]"
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-5">
            {/* Cart */}
            <div className="relative hidden sm:flex items-center justify-center">
              <ShoppingBasket
                size={20}
                className="text-green-600 cursor-pointer"
              />

              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-[16px] h-[16px] rounded-full flex items-center justify-center">
                0
              </span>
            </div>

            {/* Button */}
            <button className="hidden sm:flex bg-[#f7b733] hover:bg-[#e6a61f] transition-all duration-300 text-white font-semibold text-[15px] px-8 h-[42px] rounded-md items-center justify-center shadow-sm">
              Contact Us
            </button>

            {/* Menu */}
            <button className="w-[42px] h-[42px] flex items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 transition-all duration-200">
              <Menu size={24} className="text-[#1f1f1f]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}