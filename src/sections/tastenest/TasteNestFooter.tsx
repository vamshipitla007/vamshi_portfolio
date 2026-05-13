import {
  ChevronRight,
} from "lucide-react";
import Footerleft from "@/assets/tastenest/footerleft.png";
import Footerright from "@/assets/tastenest/footerright.png";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const aboutLinks = [
  "Fredoka One",
  "Special Dish",
  "Reservation",
  "Contact",
];

const menuLinks = [
  "Steaks",
  "Burgers",
  "Coctails",
  "Bar B Q",
  "Desserts",
];

export default function TasteNestFooter() {
  return (
    <footer className="relative w-full bg-[#f2f3f7] overflow-hidden">
      {/* Background Decorations */}
      <img
        src={Footerleft}    
        alt=""
        className="absolute left-0 bottom-0 w-[200px] md:w-[280px]  pointer-events-none select-none"
      />

      <img
        src={Footerright}
        alt=""
        className="absolute right-0 bottom-0 w-[200px] md:w-[320px] pointer-events-none select-none"
      />

     <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-20 lg:pt-24 p-20 pb-8 relative z-10">
  {/* Top Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
    
    {/* Left Card */}
    <div className="bg-[#ff1e4d] rounded-[24px] p-6 md:p-8 flex flex-col justify-between min-h-[240px]">
      <div>
        <p className="text-white text-[14px] md:text-[15px] font-semibold leading-7">
          Tuesday - Saturday:
          <br />
          12:00pm - 23:00pm
        </p>

        <p className="text-white text-[14px] md:text-[15px] font-semibold underline mt-4">
          Closed on Sunday
        </p>
      </div>

      <p className="text-white text-[14px] md:text-[15px] font-semibold mt-10">
        5 star rated on TripAdvisor
      </p>
    </div>

    {/* About */}
    <div>
      <div className="mb-6">
        <h3 className="text-[24px] md:text-[28px] font-extrabold text-black inline-block relative leading-none">
          About
          <span className="absolute left-0 -bottom-2 w-full h-[4px] bg-[#f4cc00]"></span>
        </h3>
      </div>

      <ul className="space-y-4">
        {aboutLinks.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-[15px] md:text-[16px] font-medium text-[#2a2a2a] hover:text-[#ff1e4d] transition-colors duration-200 cursor-pointer"
          >
            <ChevronRight size={15} />
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Menu */}
    <div>
      <div className="mb-6">
        <h3 className="text-[24px] md:text-[28px] font-extrabold text-black inline-block relative leading-none">
          Menu
          <span className="absolute left-0 -bottom-2 w-full h-[4px] bg-[#f4cc00]"></span>
        </h3>
      </div>

      <ul className="space-y-4">
        {menuLinks.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-[15px] md:text-[16px] font-medium text-[#2a2a2a] hover:text-[#ff1e4d] transition-colors duration-200 cursor-pointer"
          >
            <ChevronRight size={15} />
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Newsletter */}
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-[24px] md:text-[28px] font-extrabold text-black inline-block relative leading-none">
          Newsletter
          <span className="absolute left-0 -bottom-2 w-full h-[4px] bg-[#f4cc00]"></span>
        </h3>
      </div>

      <p className="text-[14px] md:text-[15px] text-[#444] mb-6 leading-7">
        Get recent news and updates.
      </p>

      <input
        type="email"
        placeholder="Email Address"
        className="w-full h-[52px] rounded-xl border border-[#e3e3e3] bg-white px-4 text-[14px] outline-none"
      />

      <button className="mt-5 bg-[#ff1e4d] hover:bg-[#e11541] transition-all duration-300 text-white font-bold text-[15px] rounded-xl h-[52px] px-8 border-[3px] border-white shadow-[0_0_0_2px_#ff1e4d]">
        Subscribe
      </button>
    </div>
  </div>

  {/* Divider */}
  <div className="w-full h-[4px] bg-[#f4cc00] mt-14 md:mt-16 mb-6"></div>

  {/* Bottom */}
  <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
    
    <p className="text-[13px] md:text-[14px] font-semibold text-black text-center lg:text-left">
      <span className="text-[#ff1e4d] font-extrabold">
        © 2025 TasteNest
      </span>{" "}
      | All shawonetc3 Themes
    </p>

    <div className="flex items-center gap-6 md:gap-10 flex-wrap justify-center">
      <a
        href="/"
        className="flex items-center gap-2 text-[14px] md:text-[15px] text-black font-semibold hover:text-[#ff1e4d] transition-colors"
      >
        <FaFacebook size={16} />
        Facebook
      </a>

      <a
        href="/"
        className="flex items-center gap-2 text-[14px] md:text-[15px] text-black font-semibold hover:text-[#ff1e4d] transition-colors"
      >
        <BsInstagram size={16} />
        Instagram
      </a>
    </div>
  </div>
</div>
    </footer>
  );
}