import { menuItems } from "@/data/menudata";
import { useState, useMemo } from "react";

const categories = ["All", "Dinner", "Lunch", "Dessert", "Drink"];
const ITEMS_PER_PAGE = 6;

interface MenuSectionProps {
  title?: string;
}

const MenuSection = ({title}: MenuSectionProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Filter first
  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // 2. Pagination logic
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  // Reset page when category changes
  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <section className="text-center mx-auto px-4 md:px-[164px] py-10">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-[#311F09]">
        {title || "Our popular menu"}
      </h2>

      {/* Categories (Horizontal Scroll) */}
     <div className="flex md:grid md:grid-cols-5 gap-3 mt-8 overflow-x-auto md:overflow-visible no-scrollbar px-2 md:px-0">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-5 py-3 rounded-full text-sm whitespace-nowrap flex-shrink-0 transition ${
              activeCategory === cat
                ? "bg-[#311F09] text-white"
                : "bg-[#D0CCC7] text-[#311F09]"
            }`}
          >
            {cat === "All" ? "All category" : cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mt-12">
        {paginatedItems.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-[170px] sm:max-w-[344px] h-auto md:h-[637px] bg-[#efece8] rounded-[30px] md:rounded-[70px] p-4 md:p-6 text-center shadow-sm hover:shadow-md transition flex flex-col justify-between mx-auto"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-[120px] h-[120px] sm:w-[270px] sm:h-[270px] mx-auto object-contain"
            />

            {/* Content */}
            <div>
              <h3 className="mt-3 md:mt-4 font-semibold text-sm md:text-lg text-[#311F09]">
                {item.name}
              </h3>

              {/* Stars */}
              <div className="flex justify-center gap-1 mt-1 md:mt-2 text-orange-500">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-sm md:text-2xl leading-none">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-xs md:text-sm text-[#6b6b6b] mt-2 md:mt-3 leading-relaxed px-1 md:px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Bottom */}
            <div className="flex justify-between items-center mt-4 md:mt-6 px-1 md:px-4">
              <span className="font-semibold text-sm md:text-base text-[#311F09]">
                ${item.price}
              </span>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 md:px-5 py-2 md:py-3 rounded-full text-xs md:text-sm">
                Order
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 md:gap-3 mt-12">
        {/* Prev */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="w-8 h-8 md:w-10 md:h-10 rounded-[10px] md:rounded-[12px] bg-[#311F09] text-white text-sm md:text-lg font-semibold flex items-center justify-center disabled:opacity-30"
        >
          ‹
        </button>

        {/* Pages */}
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 md:w-10 md:h-10 rounded-[10px] md:rounded-[12px] text-xs md:text-sm ${
                currentPage === page
                  ? "bg-[#f5e8d8] text-[#311F09]"
                  : "bg-[#f3f3f3] text-[#311F09]"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="w-8 h-8 md:w-10 md:h-10 rounded-[10px] md:rounded-[12px] bg-[#311F09] text-white text-sm md:text-lg font-semibold flex items-center justify-center disabled:opacity-30"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default MenuSection;
