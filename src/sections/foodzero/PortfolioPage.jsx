import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import HeroImage from "@/assets/foodzero/portfolio1.png";

const categories = [
  "All",
  "Starter",
  "Lunch",
  "Dinner",
  "Drinks",
  "Sweets",
  "Fruits",
];

const portfolioItems = [
  {
    id: 1,
    title: "Premium Deep Sea Snow White Cod Fillet",
    category: ["Lunch", "Dinner"],
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=1200&q=80",
  },
  {
    id: 2,
    title: "Option of Natural Wine Available",
    category: ["Drinks", "Fruits"],
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80",
  },
  {
    id: 3,
    title: "Best Pumpkin For Pumpkin Soup",
    category: ["Lunch", "Starter"],
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1200&q=80",
  },
  {
    id: 4,
    title: "Strip Steak With Rosemary Butter",
    category: ["Dinner", "Lunch"],
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1200&q=80",
  },
  {
    id: 5,
    title: "Braised Sliced Abalone Fish Maw",
    category: ["Starter"],
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80",
  },
  {
    id: 6,
    title: "Pan Fried Live Prawn with Superior Soy Sauce",
    category: ["Starter", "Dinner"],
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80",
  },
  {
    id: 7,
    title: "Fresh Garden Salad",
    category: ["Starter"],
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80",
  },
  {
    id: 8,
    title: "Chocolate Dessert Special",
    category: ["Sweets"],
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1200&q=80",
  },
];

const PortfolioCard = ({ item, large = false }) => {
  return (
    <div
      className={`
        relative overflow-hidden group
        ${
            item.size === "large"
            ? "h-[520px]"
            : "h-[380px]"
        }
        `}
    >
      <img
        src={item.image}
        alt={item.title}
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full p-5">
        <h3
          className="
            max-w-sm
            font-serif
            text-white
            text-xl
            md:text-[34px]
            leading-tight
          "
        >
          {item.title}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-[10px] text-white/80">
            {item.category.join(" • ")}
          </span>

          <ArrowRight
            size={18}
            className="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeTab === "All") return portfolioItems;

    return portfolioItems.filter((item) =>
      item.category.some(
        (cat) =>
          cat.toLowerCase() === activeTab.toLowerCase(),
      ),
    );
  }, [activeTab]);

  return (
    <div className="bg-white mt-10">
      {/* HERO */}

      <section className="relative h-[400px] md:h-[300px]">
        <img
          src={HeroImage}
          alt=""
          style={{ height: "300px", width: "100%", objectFit: "cover" }}
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1
            className="
              font-serif
              text-white
              text-[38px]
              md:text-[72px]
            "
          >
            Portfolio - Grids
          </h1>

          <div className="mt-5 h-16 border-l border-dashed border-white" />
        </div>
      </section>

      {/* CONTENT */}

      <section className="mx-auto max-w-5xl px-5 py-12">
        {/* TABS */}

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                relative
                pb-2
                text-[16px]
                transition-all

                ${
                  activeTab === tab
                    ? "text-black"
                    : "text-[#666]"
                }
              `}
            >
              {tab}

              {activeTab === tab && (
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[1px]
                    w-full
                    bg-black
                  "
                />
              )}
            </button>
          ))}
        </div>

        {/* MASONRY LAYOUT */}

        <div className="mt-10 space-y-6">
          {/* Row 1 */}

          <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
            {filteredItems[0] && (
              <PortfolioCard
                item={filteredItems[0]}
                large
              />
            )}

            {filteredItems[1] && (
              <PortfolioCard item={filteredItems[1]} />
            )}
          </div>

          {/* Row 2 */}

          <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
            {filteredItems[2] && (
              <PortfolioCard item={filteredItems[2]} />
            )}

            {filteredItems[3] && (
              <PortfolioCard
                item={filteredItems[3]}
                large
              />
            )}
          </div>

          {/* Row 3 */}

          <div className="grid gap-6 md:grid-cols-2">
            {filteredItems[4] && (
              <PortfolioCard item={filteredItems[4]} />
            )}

            {filteredItems[5] && (
              <PortfolioCard item={filteredItems[5]} />
            )}
          </div>
        </div>

        {/* LOAD MORE */}

        <div className="mt-12 flex justify-center">
          <button
            className="
              border
              border-[#233000]
              px-5
              py-2
              text-[11px]
              text-[#233000]
              transition
              hover:bg-[#233000]
              hover:text-white
            "
          >
            Loading...
          </button>
        </div>
      </section>
    </div>
  );
}