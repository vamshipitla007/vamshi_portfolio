import { useState } from "react";
import {
  Donut,
  Drumstick,
  Coffee,
  Hamburger,
} from "lucide-react";

import ChickenImg from "@/assets/tastenest/bbq.png";

const categories = [
  {
    id: "dessert",
    title: "Dessert",
    icon: <Donut size={42} />,
    image: ChickenImg,
    menuTitle: "Desserts",
    items: [
      {
        name: "Chocolate Cake",
        desc: "dark chocolate, cream, vanilla",
        price: "$9.00",
      },
      {
        name: "Cheese Pastry",
        desc: "fresh cheese, caramel sauce",
        price: "$16.00",
      },
      {
        name: "Ice Cream Bowl",
        desc: "mixed berries, vanilla cream",
        price: "$34.00",
      },
      {
        name: "Sweet Donuts",
        desc: "hot chocolate sauce, cream",
        price: "$40.00",
      },
    ],
  },

  {
    id: "steak",
    title: "Steak",
    icon: <Drumstick size={42} />,
    image: ChickenImg,
    menuTitle: "BBQ",
    items: [
      {
        name: "Sake BBQ sauce",
        desc: "radish, black sesame seeds, coriander",
        price: "$9.00",
      },
      {
        name: "BBQ baby back ribs",
        desc: "sticky Asian glaze, charred lime, chilli cashews",
        price: "$16.00",
      },
      {
        name: "Half smoked chicken",
        desc: "miso butter glaze, charred lime wedge, sake bbq",
        price: "$34.00",
      },
      {
        name: "Dusted chicken wings",
        desc: "tossed in Korean hot sauce, pickled radish",
        price: "$40.00",
      },
    ],
  },

  {
    id: "coffee",
    title: "Coffee",
    icon: <Coffee size={42} />,
    image: ChickenImg,
    menuTitle: "Coffee",
    items: [
      {
        name: "Cappuccino",
        desc: "fresh cream, coffee beans",
        price: "$12.00",
      },
      {
        name: "Black Coffee",
        desc: "premium roasted coffee",
        price: "$8.00",
      },
      {
        name: "Cold Coffee",
        desc: "vanilla cream, cold brew",
        price: "$18.00",
      },
      {
        name: "Espresso",
        desc: "strong Italian coffee shot",
        price: "$10.00",
      },
    ],
  },

  {
    id: "burger",
    title: "Burger",
    icon: <Hamburger size={42} />,
    image: ChickenImg,
    menuTitle: "Burger",
    items: [
      {
        name: "Classic Burger",
        desc: "beef patty, cheese, lettuce",
        price: "$14.00",
      },
      {
        name: "Chicken Burger",
        desc: "crispy chicken, mayo sauce",
        price: "$18.00",
      },
      {
        name: "Double Cheese",
        desc: "double beef, extra cheese",
        price: "$22.00",
      },
      {
        name: "Spicy Burger",
        desc: "jalapeno sauce, onion rings",
        price: "$19.00",
      },
    ],
  },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(categories[1]);

  return (
    <section className="w-full bg-[#f5f5f5] overflow-hidden py-20 lg:py-28">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-5 lg:gap-7">
          {categories.map((category) => {
            const active = activeCategory.id === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category)}
                className={`
                  relative w-[145px] h-[155px] rounded-[22px]
                  flex flex-col items-center justify-center
                  border-[4px] transition-all duration-300
                  ${
                    active
                      ? "bg-[#ff214f] border-[#ff214f] text-white"
                      : "bg-transparent border-[#d9d9d9] text-[#ff214f]"
                  }
                `}
              >
                
                {/* Bottom Shape */}
                {active && (
                  <div className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[22px] border-r-[22px] border-t-[20px] border-l-transparent border-r-transparent border-t-[#ff214f]" />
                )}

                <div>{category.icon}</div>

                <h3
                  className={`mt-4 font-extrabold text-[18px] ${
                    active ? "text-white" : "text-black"
                  }`}
                >
                  {category.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="mt-20 relative">
          
          {/* Main Card */}
          <div className="relative bg-[#eef0f4] rounded-[34px] min-h-[520px] flex flex-col lg:flex-row items-center overflow-hidden">
            
            {/* Left Image */}
            <div className="relative lg:w-[48%] flex justify-center lg:justify-start">
              
              <img
                src={activeCategory.image}
                alt={activeCategory.title}
                className="
                  relative
                  w-[320px]
                  sm:w-[420px]
                  lg:w-[560px]
                  object-contain
                  lg:-ml-16
                  lg:-my-10
                  drop-shadow-[0_25px_35px_rgba(0,0,0,0.25)]
                "
              />
            </div>

            {/* Right Menu */}
            <div className="flex-1 w-full px-6 sm:px-10 lg:px-14 py-10 lg:py-14">
              
              {/* Title */}
              <h2 className="text-[40px] sm:text-[48px] font-extrabold text-black">
                {activeCategory.menuTitle}
              </h2>

              {/* Menu Items */}
              <div className="mt-8">
                {activeCategory.items.map((item, index) => (
                  <div key={index}>
                    
                    <div className="flex items-start justify-between gap-5">
                      
                      <div>
                        <h3 className="text-[20px] sm:text-[24px] font-extrabold text-black">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-[#6a6a6a] text-[15px] sm:text-[16px]">
                          {item.desc}
                        </p>
                      </div>

                      <span className="text-[#ff214f] font-extrabold text-[24px] whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>

                    {index !== activeCategory.items.length - 1 && (
                      <div className="border-b-2 border-dashed border-black/70 my-6" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}