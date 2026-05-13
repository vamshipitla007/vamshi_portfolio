import { useEffect, useRef, useState } from "react";
import { ShoppingBag } from "lucide-react";

import ChickenImg from "@/assets/tastenest/bbq.png";
import PizzaImg from "@/assets/tastenest/specialpizza.png";
import CoffeeImg from "@/assets/tastenest/coffee.png";

const dishes = [
  {
    id: 1,
    title: "Crispy Fried Chicken",
    oldPrice: "$14.85",
    newPrice: "$10.85",
    image: ChickenImg,
  },
  {
    id: 2,
    title: "Shroom Bacon Burger",
    oldPrice: "$21.76",
    newPrice: "$11.76",
    image: PizzaImg,
  },
  {
    id: 3,
    title: "Delicious Black Coffee",
    oldPrice: "$21.76",
    newPrice: "$11.76",
    image: CoffeeImg,
  },
  {
    id: 4,
    title: "Italian Pizza",
    oldPrice: "$18.90",
    newPrice: "$13.20",
    image: PizzaImg,
  },
  {
    id: 5,
    title: "Spicy Chicken Wings",
    oldPrice: "$17.50",
    newPrice: "$12.50",
    image: ChickenImg,
  },
  {
    id: 6,
    title: "Premium Coffee",
    oldPrice: "$15.00",
    newPrice: "$9.50",
    image: CoffeeImg,
  },
  {
    id: 7,
    title: "Cheese Burger",
    oldPrice: "$24.99",
    newPrice: "$18.50",
    image: PizzaImg,
  },
  {
    id: 8,
    title: "BBQ Chicken",
    oldPrice: "$19.00",
    newPrice: "$14.00",
    image: ChickenImg,
  },
  {
    id: 9,
    title: "Latte Coffee",
    oldPrice: "$10.00",
    newPrice: "$7.50",
    image: CoffeeImg,
  },
  {
    id: 10,
    title: "Chicken Pizza",
    oldPrice: "$25.99",
    newPrice: "$20.99",
    image: PizzaImg,
  },
  {
    id: 11,
    title: "Hot Crispy Wings",
    oldPrice: "$16.20",
    newPrice: "$11.20",
    image: ChickenImg,
  },
  {
    id: 12,
    title: "Cold Coffee",
    oldPrice: "$12.80",
    newPrice: "$8.80",
    image: CoffeeImg,
  },
];

const ITEMS_PER_PAGE = 3;

export default function FeaturedDishes() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const totalPages = Math.ceil(dishes.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.clientWidth;

      const currentPage = Math.round(scrollLeft / cardWidth);

      setActiveIndex(currentPage);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDotClick = (index: number) => {
    const container = scrollRef.current;

    if (!container) return;

    container.scrollTo({
      left: container.clientWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[#f5f5f5] py-14 lg:py-20 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-black font-extrabold text-[32px] sm:text-[44px] leading-none">
            Featured Dishes
          </h2>

          <div className="w-[130px] h-[6px] rounded-full bg-[#ffd400] mx-auto mt-4" />
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="
            mt-14
            flex
            gap-6
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]
          "
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="
                min-w-full
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-6
                snap-start
              "
            >
              {dishes
                .slice(
                  pageIndex * ITEMS_PER_PAGE,
                  pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE
                )
                .map((dish) => (
                  <div
                    key={dish.id}
                    className="
                      relative
                      bg-[#f7f8fc]
                      border-[4px]
                      border-[#ffd400]
                      rounded-[28px]
                      overflow-hidden
                      px-6
                      pt-6
                      pb-5
                      group
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >
                    
                    {/* Sale Badge */}
                    <div className="absolute top-4 left-4 w-[58px] h-[58px] rounded-full bg-[#ffd400] flex items-center justify-center z-20">
                      <span className="text-black font-extrabold text-[14px]">
                        SALE
                      </span>
                    </div>

                    {/* Pink Background Shape */}
                    <div className="absolute top-[78px] left-1/2 -translate-x-1/2 w-[230px] h-[120px] bg-[#ff2150] rounded-full" />

                    {/* Product Image */}
                    <div className="relative z-10 flex justify-center">
                      <img
                        src={dish.image}
                        alt={dish.title}
                        className="
                          w-[220px]
                          h-[220px]
                          object-contain
                          drop-shadow-[0_18px_24px_rgba(0,0,0,0.25)]
                          group-hover:scale-105
                          transition-all
                          duration-300
                        "
                      />
                    </div>

                    {/* Content */}
                    <div className="mt-4 flex items-end justify-between gap-4">
                      
                      <div>
                        <h3 className="text-black font-extrabold text-[20px] leading-7">
                          {dish.title}
                        </h3>

                        <div className="mt-3 flex items-center gap-2">
                          
                          <span className="text-[#666] line-through font-bold text-[15px]">
                            {dish.oldPrice}
                          </span>

                          <span className="text-[#ff2150] font-extrabold text-[20px]">
                            {dish.newPrice}
                          </span>
                        </div>
                      </div>

                      {/* Cart Button */}
                      <button
                        className="
                          w-[44px]
                          h-[44px]
                          rounded-lg
                          bg-[#ffd400]
                          flex
                          items-center
                          justify-center
                          hover:scale-105
                          transition-all
                          duration-300
                          flex-shrink-0
                        "
                      >
                        <ShoppingBag size={18} className="text-black" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`
                rounded-full
                transition-all
                duration-300
                ${
                  activeIndex === index
                    ? "w-[12px] h-[12px] bg-[#ff2150]"
                    : "w-[12px] h-[12px] bg-[#bdbdbd]"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}