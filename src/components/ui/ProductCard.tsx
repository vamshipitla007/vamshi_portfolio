import type { ProductCardProps } from "@/sections/admindashboard/DashStackFavorite";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";

export const ProductCard = ({
  title,
  price,
  rating,
  reviews,
  image,
  isFavorite,
}: ProductCardProps) => {
  return (
    <div className="min-w-[320px] md:min-w-[360px] max-w-[320px] md:max-w-[360px] bg-white rounded-[26px] p-4 md:p-5 shadow-sm hover:shadow-md transition-all flex-shrink-0">
      {/* Product Image */}
      <div className="relative h-[240px] sm:h-[280px] lg:h-[320px] rounded-[24px] bg-[#F8F8F8] overflow-hidden flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-contain" />

        {/* Left Arrow */}
        <button className="absolute left-3 top-1/2 -translate-y-1/2 w-[42px] h-[42px] rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm">
          <ChevronLeft className="w-5 h-5 text-[#555]" />
        </button>

        {/* Right Arrow */}
        <button className="absolute right-3 top-1/2 -translate-y-1/2 w-[42px] h-[42px] rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm">
          <ChevronRight className="w-5 h-5 text-[#555]" />
        </button>
      </div>

      {/* Content */}
      <div className="mt-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[18px] font-bold text-[#202224] leading-tight">
              {title}
            </h3>

            <p className="text-[#4880FF] text-[16px] font-semibold mt-2">
              {price}
            </p>
          </div>

          <button className="w-[44px] h-[44px] rounded-full border border-[#ECECEC] flex items-center justify-center hover:bg-[#F8F8F8] transition-all">
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "fill-[#FF4D6D] text-[#FF4D6D]" : "text-[#FF4D6D]"
              }`}
            />
          </button>
        </div>

        {/* Ratings */}
        <div className="flex items-center gap-1 mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-4 h-4 ${
                star <= rating
                  ? "fill-[#FF9500] text-[#FF9500]"
                  : "fill-[#D9D9D9] text-[#D9D9D9]"
              }`}
            />
          ))}

          <span className="text-[#8B8B8B] text-[14px] ml-2">({reviews})</span>
        </div>

        {/* Button */}
        <button className="mt-2 w-[126px] h-[38px] rounded-2xl bg-[#F1F4FB] text-[#202224] text-[14px] font-semibold hover:bg-[#E5EAF5] transition-all">
          Edit Product
        </button>
      </div>
    </div>
  );
};
