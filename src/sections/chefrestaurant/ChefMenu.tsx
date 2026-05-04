import { menuData } from "@/data/chefmenudata";
import { useRef, useState } from "react";
import Icon1 from "@/assets/chefrestaurant/icon1.png";
import Meal from "@/assets/chefrestaurant/meal.png";
import Drinks from "@/assets/chefrestaurant/drinks.png";
import tamato from "@/assets/chefrestaurant/tamato.png";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ChefMenu = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("power");
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [selectedWeek, setSelectedWeek] = useState(1);

  const scroll = (offset: number) => {
    scrollRef.current?.scrollBy({
      left: offset,
      behavior: "smooth",
    });
  };

  const selectedPlan = menuData.find(
    (m) => m.category === selectedCategory && m.week === selectedWeek,
  );

  const selectedDayData = selectedPlan?.days.find((d) => d.day === selectedDay);
  return (
    <section className="max-w-7xl mx-auto mt-20 px-6 py-10">
      {/* TITLE */}
      <h2 className="text-3xl font-bold mb-6" style={{ color: "#000000" }}>
        OUR MENU
      </h2>

      {/* CATEGORY FILTER */}
      <div className="flex gap-4 mb-6">
        {[...menuData].map((cat) => (
          <button
            key={cat.category}
            onClick={() => setSelectedCategory(cat.category)}
            className={`px-6 py-2 rounded-xl font-semibold ${
              selectedCategory === cat.category
                ? "bg-lime-500 text-white"
                : "bg-gray-200"
            }`}
          >
            <div className="flex-row justify-center align-center">
              <p className="text-1xl">{cat.category.toUpperCase()}</p>
              <p className="text-1x1">{`${cat.kcal} kcal`}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="bg-[#8EC038] rounded-3xl p-8">
        {/* <img
          src={leaf}
          className="absolute left-[-110px] bottom-[-90px] w-[293px] h-[195px] z-10"
        /> */}

        <div className="display flex justify-between">
          {/* DAYS */}
          <div className="flex gap-3 mb-8 overflow-x-auto">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                style={{ color: "#000000" }}
                className={`px-5 py-2 rounded-xl  ${
                  selectedDay === day ? "bg-white shadow" : "bg-lime-200"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* WEEK SWITCH */}
          <div className="flex items-center justify-end gap-6 mb-8">
            {/* LEFT ARROW */}
            <button
              onClick={() => setSelectedWeek((prev) => Math.max(1, prev - 1))}
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white text-2xl"
            >
              ←
            </button>

            {/* CENTER TEXT */}
            <div className="text-center">
              <h3 className="text-white text-2xl font-bold">
                WEEK {selectedWeek}
              </h3>
              <div className="bg-orange-400 text-white text-xs px-3 py-1 rounded-full mt-1">
                This week
              </div>
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={() => setSelectedWeek((prev) => Math.min(2, prev + 1))}
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white text-2xl"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative">
          {/* LEFT FADE */}
          <div
            className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none 
        bg-gradient-to-r from-lime-500 to-transparent"
          />

          {/* RIGHT FADE */}
          <div
            className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none 
        bg-gradient-to-l from-lime-500 to-transparent"
          />

          {/* LEFT ARROW */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border-2 border-lime-300 flex items-center justify-center bg-white/60 backdrop-blur"
            onClick={() => scroll(-300)}
          >
            ←
          </button>

          {/* RIGHT ARROW */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border-2 border-lime-300 flex items-center justify-center bg-white/60 backdrop-blur"
            onClick={() => scroll(300)}
          >
            →
          </button>

          {/* SCROLL CONTAINER */}
          <div className="overflow-visible">
            <div
              ref={scrollRef}
                  className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-16"
            >
              {selectedDayData?.meals.map((meal, index) => (
                <div
                  key={meal.id}
                  className="min-w-[260px] bg-white rounded-3xl p-4 relative overflow-visible"
                >
                  {/* NUMBER BADGE */}
                  <div className="absolute -top-3 right-3 z-10 bg-orange-400 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <img
                    src={meal.image}
                    className="w-full h-40 object-contain"
                  />

                  <h3 className="text-lime-600 mt-4 font-semibold">
                    {meal.title}
                  </h3>

                  <p className="text-sm mt-2 text-black">{meal.description}</p>

                  <div className="text-xs mt-3 text-gray-600 space-y-1">
                    <p>Protein - {meal.protein} g</p>
                    <p>Fat - {meal.fat} g</p>
                    <p>Carbs - {meal.carbs} g</p>
                    <p>Energy - {meal.calories} kcal</p>
                    <p>Total weight: {meal.weight} g</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-4">
          <p className="text-white">
            A balanced menu helps to maintain health and a slim figure, allows
            you to be cheerful and active throughout the week. While preparing
            our dishes, we use products from the best suppliers and always
            choose products that correspond to the concept of healthy nutrition.
            For example, lean beef, turkey and chicken, low-calorie sauces,
            pasta of hard varieties. Delivery is carried out every 2 days.
          </p>

          <div className="max-w-7xl mx-auto bg-white rounded-[30px] px-4 py-4 flex items-center justify-between shadow-sm mt-2">
            {/* LEFT: PRICE CARD */}
            <div className="flex items-center gap-4 bg-orange-400 text-white px-4 py-1 rounded-2xl min-w-[260px]">
              {/* ICON (PNG) */}
              <img src={Icon1} className="w-10 h-10" />

              <div className="leading-tight">
                <p className="text-sm opacity-90">FROM 56</p>
                <p className="text-lg font-bold">GEL/DAY</p>
              </div>

              {/* ARROW */}
              <span className="ml-2 text-xl">→</span>
            </div>

            {/* MIDDLE: SUMMARY */}
            <div className="flex items-center gap-10">
              {/* TOTAL TEXT */}
              <div className="text-gray-700">
                <p className="text-lg font-medium">Total on Tuesday:</p>
                <p className="text-sm text-gray-500">1435 kcal</p>
              </div>

              {/* PROTEIN */}
              <div className="flex items-center gap-3">
                <img src={Meal} className="w-8 h-8" />
                <div className="flex flex-col items-start">
                  <p className="text-xl font-bold">71</p>
                  <p className="text-sm text-gray-500">Protein</p>
                </div>
              </div>

              {/* FAT */}
              <div className="flex items-center gap-2">
                <img src={Drinks} className="w-8 h-8" />
                <div className="flex flex-col items-start">
                  <p className="text-xl font-bold">70</p>
                  <p className="text-sm text-gray-500">Fat</p>
                </div>
              </div>

              {/* CARBS */}
              <div className="flex items-center gap-2">
                <img src={tamato} className="w-8 h-8" />
                <div className="flex flex-col items-start">
                  <p className="text-xl font-bold">129</p>
                  <p className="text-sm text-gray-500">Carbohydrates</p>
                </div>
              </div>
            </div>

            {/* RIGHT: ORDER BUTTON */}
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-10 py-4 rounded-full text-lg font-semibold min-w-[200px]">
              Order now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefMenu;
