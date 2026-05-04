import React from "react";
import PlateImage from "@/assets/chefrestaurant/breadfry.png";
import leaf from "@/assets/chefrestaurant/leaf.png";
import seeds from "@/assets/chefrestaurant/seeds.png";
import leaf2 from "@/assets/chefrestaurant/leaf2.png";

const ChefHero: React.FC = () => {
  return (
    <section className="w-full px-6 mt-6">
      <div className="relative max-w-7xl mx-auto bg-[#B0CC0D] rounded-[40px] px-12 py-20 overflow-visible">
        {/* LEFT CONTENT */}
        <div className="relative z-20 max-w-md">
          <h1 className="text-white text-6xl font-bold leading-tight">
            YOUR <br />
            PERSONAL <br />
            COOK
          </h1>

          <p className="mt-6 text-black/80 text-lg">
            The balanced diet for every day
          </p>

          <button className="mt-8 bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-semibold">
            Make your choice
          </button>
        </div>

        {/* BIG PLATE */}
        <img
          src={PlateImage}
          className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-[866px] h-[577px] z-20 mt-20"
        />

        {/* LEFT BOTTOM LEAF */}
        <img
          src={leaf}
          className="absolute left-[-110px] bottom-[-90px] w-[293px] h-[195px] z-10"
        />

        {/* TOP CENTER LEAF */}
        <img
          src={leaf}
          className="absolute top-[-90px] left-1/2 -translate-x-1/2 w-[293px] h-[195px] z-30"
        />

        {/* SMALL LEAF (UNDER PLATE) */}
        <img
          src={leaf2}
          className="absolute bottom-[-30px] left-[42%] w-[131px] h-[102px] z-10"
        />

        {/* SEEDS */}
        <img
          src={seeds}
          className="absolute right-[-80px] bottom-[-70px] w-[244px] h-[180px] z-10 rotate-8"
        />

        {/* CIRCLE */}
        {/* <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-white/40 rounded-full z-0" /> */}
      </div>
    </section>
  );
};

export default ChefHero;
