import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";

const products = [
  {
    id: 1,
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviews: 131,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviews: 131,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviews: 131,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviews: 131,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop",
  },
  
];

const bannerData = [
  {
    id: 1,
    title: "Enjoy free home delivery in this summer",
    subtitle: "Designer Dresses - Pick from trendy Designer Dress.",
    date: "September 12-22",
  },
];

function DashStackProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 420;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">
      {/* Heading */}
      <div className="mb-4">
        <h1 className="text-[32px] font-bold text-[#202224] relative inline-block">
          Products
        </h1>
      </div>

      {/* Banner */}
      <div className="relative w-full min-h-[300px] rounded-[30px] overflow-hidden bg-[#4880FF] px-6 lg:px-14 py-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="pattern"
                x="0"
                y="0"
                width="200"
                height="200"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M20 100C20 50 180 50 180 100C180 150 20 150 20 100Z"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
              </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>

        {/* Left Arrow */}
        <button className="absolute left-6 top-1/2 -translate-y-1/2 w-[58px] h-[58px] rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center z-20 hover:scale-105 transition-all">
          <ChevronLeft className="w-7 h-7 text-[#202224]" />
        </button>

        {/* Right Arrow */}
        <button className="absolute right-6 top-1/2 -translate-y-1/2 w-[58px] h-[58px] rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center z-20 hover:scale-105 transition-all">
          <ChevronRight className="w-7 h-7 text-[#202224]" />
        </button>

        {/* Banner Content */}
        <div className="relative z-10 max-w-[390px] ml-0 lg:ml-24 mt-2">
          <p className="text-white text-[22px] font-medium">
            {bannerData[0].date}
          </p>

          <h2 className="text-white text-[24px] lg:text-[32px] font-bold leading-[1.15] mt-2">
            {bannerData[0].title}
          </h2>

          <p className="text-white/90 text-[14px] mt-2">
            {bannerData[0].subtitle}
          </p>

          <button className="mt-10 w-[190px] h-[44px] rounded-2xl bg-[#FF8743] text-white text-[18px] font-semibold hover:opacity-90 transition-all">
            Get Started
          </button>
        </div>
      </div>

      {/* Product Slider */}
      <div className="relative mt-10">
        {/* Left Scroll Button */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-[-12px] top-[38%] z-20 w-[56px] h-[56px] rounded-full bg-white shadow-md border border-[#ECECEC] flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6 text-[#6B7280]" />
        </button>

        {/* Right Scroll Button */}
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-[-12px] top-[38%] z-20 w-[56px] h-[56px] rounded-full bg-white shadow-md border border-[#ECECEC] flex items-center justify-center"
        >
          <ChevronRight className="w-6 h-6 text-[#6B7280]" />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              reviews={product.reviews}
              image={product.image}
              isFavorite={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashStackProducts;
