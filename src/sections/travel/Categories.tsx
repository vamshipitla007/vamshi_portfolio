import { categories } from "@/data/travel";
import { useState } from "react";

export default function Categories() {
  const [active, setActive] =
    useState("Mountains");

  return (
    <div className="mt-10">
      <h2 className="mb-6 text-4xl font-bold text-white">
        Top categories
      </h2>

      <div
        className="
        flex
        gap-8
        overflow-x-auto
        text-white
      "
      >
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className="flex flex-col items-center"
          >
            <span>{item}</span>

            {active === item && (
              <div className="mt-3 h-[2px] w-full bg-white" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}