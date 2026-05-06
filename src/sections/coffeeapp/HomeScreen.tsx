import { coffees } from "@/data/menudata";
import Banner from "@/assets/coffeeapp/banner.png";
import {
  Home,
  Heart,
  ShoppingBag,
  Bell,
  Search,
  SlidersHorizontal,
  ChevronDown,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleOnClickImage = () => {
    // Handle image click, e.g., navigate to details page
    navigate("/coffeeapp/coffee-details");
  }
  return (
    <div className="w-full min-h-screen bg-[#F9F9F9] flex justify-center">
      
      {/* Phone Container */}
      <div className="w-full min-h-screen bg-[#F9F9F9] relative overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-br from-[#313131] via-[#1F1F1F] to-black px-6 pt-14 pb-24">
          
          {/* Location */}
          <p className="text-[#A2A2A2] text-xs">
            Location
          </p>

          <div className="flex items-center gap-1 mt-1">
            <h2 className="text-white text-[15px] font-semibold">
              Bilzen, Tanjungbalai
            </h2>

            <ChevronDown size={16} className="text-white mt-[1px]" />
          </div>

          {/* Search */}
          <div className="flex items-center gap-4 mt-6">
            
            <div className="flex items-center flex-1 bg-[#2A2A2A] rounded-2xl px-4 h-[52px]">
              <Search size={18} className="text-[#989898]" />

              <input
                type="text"
                placeholder="Search coffee"
                className="bg-transparent outline-none text-sm text-white placeholder:text-[#989898] ml-3 flex-1"
              />
            </div>

            <button className="w-[52px] h-[52px] bg-[#C67C4E] rounded-2xl flex items-center justify-center">
              <SlidersHorizontal size={18} className="text-white" />
            </button>
          </div>
        </div>

        {/* Promo Card */}
        <div className="px-6 -mt-16 relative z-10">
          
          <div className="relative bg-[#A06C43] rounded-3xl overflow-hidden h-[140px] px-6 py-4">

            {/* Promo Image */}
            <img
              src={Banner}
              alt="promo"
              className="absolute right-0 top-0 h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/5" />

            {/* Content */}
            <div className="relative z-10 w-[60%]">
              
              <span className="bg-[#ED5151] text-white text-xs font-semibold px-3 py-1 rounded-lg">
                Promo
              </span>

              <h2 className="text-white text-[22px] font-bold leading-[38px] mt-3">
                Buy one get
                <br />
                one FREE
              </h2>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-3 mt-6 px-6 overflow-x-auto scrollbar-hide">
          
          <button className="bg-[#C67C4E] text-white px-5 h-[38px] rounded-xl text-sm font-medium whitespace-nowrap">
            All Coffee
          </button>

          <button className="bg-white text-[#2F2D2C] px-5 h-[38px] rounded-xl text-sm whitespace-nowrap">
            Machiato
          </button>

          <button className="bg-white text-[#2F2D2C] px-5 h-[38px] rounded-xl text-sm whitespace-nowrap">
            Latte
          </button>

          <button className="bg-white text-[#2F2D2C] px-5 h-[38px] rounded-xl text-sm whitespace-nowrap">
            Americano
          </button>
        </div>

        {/* Coffee Grid */}
        <div className="grid grid-cols-2 gap-4 px-6 mt-6 pb-28">
          
          {coffees.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
              onClick={handleOnClickImage}
            >
              
              {/* Image */}
              <div className="relative">
                
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[128px] object-cover rounded-2xl"
                />

                {/* Rating */}
                <div className="absolute top-2 right-2 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star
                    size={12}
                    fill="#FBBE21"
                    stroke="#FBBE21"
                  />

                  <span className="text-white text-[10px] font-medium">
                    {item.rating}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="mt-3">
                
                <h3 className="text-[16px] font-semibold text-[#2F2D2C]">
                  {item.name}
                </h3>

                <p className="text-[#9B9B9B] text-xs mt-1">
                  {item.type}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mt-3">
                  
                  <span className="text-[18px] font-bold text-[#2F2D2C]">
                    ${item.price}
                  </span>

                  <button className="w-8 h-8 bg-[#C67C4E] rounded-xl flex items-center justify-center text-white text-xl">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 w-full max-w-[375px] bg-white rounded-t-[24px] px-8 py-5 flex items-center justify-between border-t border-[#F1F1F1]">
          
          <div className="flex flex-col items-center gap-1">
            <Home size={22} className="text-[#C67C4E]" />

            <div className="w-[10px] h-[5px] bg-[#C67C4E] rounded-full" />
          </div>

          <Heart size={22} className="text-[#B3B3B3]" />

          <ShoppingBag size={22} className="text-[#B3B3B3]" />

          <Bell size={22} className="text-[#B3B3B3]" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
