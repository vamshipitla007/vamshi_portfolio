import { Play, Star } from "lucide-react";
import Home from "@/assets/tastenest/home.jpg";
import SpecialPizza from "@/assets/tastenest/specialpizza.png";
import AboutSection from "@/sections/tastenest/AboutSection";
import MenuSection from "@/sections/tastenest/MenuSection";
import DiscoverMenu from "@/sections/tastenest/DiscoverMenu";
import FeaturedDishes from "@/sections/tastenest/FeaturedDishes";
import TestimonialExpertsSection from "@/sections/tastenest/TestimonialExpertsSection";
import FoodDeliveryAppSection from "@/sections/tastenest/FoodDeliveryAppSection";
import NewsFollowSection from "@/sections/tastenest/NewsFollowSection";

const Homepage = () => {
  return (
    <div>
      <section className="relative w-full overflow-hidden bg-black">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={Home} alt="food" className="w-full h-full object-cover" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 min-h-[620px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full gap-8 lg:gap-12">
            {/* Left Side */}
            <div className="pt-20 lg:pt-0">
              {/* Heading */}
              <h1 className="max-w-[540px] text-white font-extrabold leading-[1.08] text-[34px] sm:text-[48px] lg:text-[58px] tracking-[-1px]">
                The Perfect Space to Enjoy Fantastic Food
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-[470px] text-white/85 text-[14px] sm:text-[15px] lg:text-[16px] leading-7 font-medium">
                Festive dining at Farthings where we are strong believers in
                using the very best produce
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-5">
                {/* Menu Button */}
                <button className="h-[54px] px-7 rounded-2xl bg-[#ff1e4d] text-white font-bold text-[15px] border-[3px] border-white shadow-[0_0_0_2px_#ff1e4d] hover:bg-[#e31745] transition-all duration-300">
                  See Our Menus
                </button>

                {/* Video */}
                <div className="flex items-center gap-4 cursor-pointer group">
                  <div className="w-[58px] h-[58px] rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                    <Play size={20} fill="white" className="text-white ml-1" />
                  </div>

                  <span className="text-white font-bold tracking-wide text-[15px]">
                    VIDEO
                  </span>
                </div>
              </div>

              {/* Slider Dots */}
              <div className="mt-12 flex items-center gap-3">
                <div className="w-[12px] h-[12px] rounded-full border-[3px] border-[#ffd000]" />

                <div className="w-[10px] h-[10px] rounded-full bg-white/90" />

                <div className="w-[10px] h-[10px] rounded-full bg-white/90" />
              </div>
            </div>

            {/* Desktop Card */}
            <div className="hidden lg:flex justify-end items-end h-full">
              <div className="relative">
                {/* Offer Card */}
                <div className="relative w-[300px] rounded-[24px] border-[3px] border-[#ffd000] overflow-hidden bg-black/70 backdrop-blur-sm">
                  {/* Badge */}
                  <div className="absolute top-0 right-6 bg-[#ff1e4d] text-white text-[11px] font-bold px-4 py-[6px] rounded-b-xl z-20">
                    Weekly Special
                  </div>

                  <div className="flex items-center">
                    {/* Left */}
                    <div className="flex-1 px-6 py-6">
                      <h3 className="text-[34px] font-extrabold text-white leading-none">
                        <span className="text-[#ff1e4d]">$</span>90.85
                      </h3>

                      <p className="mt-3 text-white text-[22px] font-extrabold leading-tight">
                        Sicilian Pizza
                      </p>

                      {/* Stars */}
                      <div className="mt-4 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill="#ffd000"
                            className="text-[#ffd000]"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Pizza Image */}
                    <div className="w-[130px] h-[130px] flex-shrink-0 border-l border-white/10">
                      <img
                        src={SpecialPizza}
                        alt="pizza"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Card */}
        <div className="relative z-10 lg:hidden px-5 pb-10">
          <div className="max-w-[360px] mx-auto rounded-[22px] border-[3px] border-[#ffd000] overflow-hidden bg-black/70 backdrop-blur-sm">
            {/* Badge */}
            <div className="bg-[#ff1e4d] text-white text-center text-[12px] font-bold py-2">
              Weekly Special
            </div>

            <div className="flex flex-col sm:flex-row">
              {/* Left */}
              <div className="flex-1 px-5 py-5">
                <h3 className="text-[30px] font-extrabold text-white leading-none">
                  <span className="text-[#ff1e4d]">$</span>90.85
                </h3>

                <p className="mt-2 text-white text-[20px] font-extrabold">
                  Sicilian Pizza
                </p>

                {/* Stars */}
                <div className="mt-3 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      fill="#ffd000"
                      className="text-[#ffd000]"
                    />
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="h-[180px] sm:h-auto sm:w-[160px]">
                <img
                  src={SpecialPizza}
                  alt="pizza"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <MenuSection />
      <DiscoverMenu />
      <FeaturedDishes />
      <TestimonialExpertsSection />
      <FoodDeliveryAppSection />
      <NewsFollowSection />
    </div>
  );
};

export default Homepage;
