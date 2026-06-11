import { useState } from "react";

const tabs = [
  "Windows",
  "Android",
  "iOS",
];

export default function PlatformTabs() {
  const [active, setActive] = useState("iOS");

  return (
    <div
      className="
        flex
        justify-center
        gap-4
        flex-wrap
      "
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`
            w-[140px]
            h-[55px]
            rounded
            text-[15px]
            font-semibold
            transition
            shadow

            ${
              active === tab
                ? "bg-[#1AA8FF] text-white"
                : "bg-white text-[#7A7A7A]"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}