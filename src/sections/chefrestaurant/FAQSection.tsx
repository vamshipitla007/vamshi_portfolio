import { faqData } from "@/data/chefmenudata";
import { useState } from "react";

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("cashback");
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const category = faqData.find((c) => c.key === activeCategory);

  return (
    <section className="w-full px-6 py-16">
      {/* TITLE */}
      <h2 className="text-3xl font-bold mb-10">FAQ</h2>

      {/* CATEGORY GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {faqData.map((cat) => {
          const isActive = cat.key === activeCategory;

          return (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                setOpenIndex(0);
              }}
              className={`h-[100px] rounded-2xl flex flex-col items-center justify-center transition-all duration-200
              ${
                isActive
                  ? "bg-lime-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <img src={cat.icon} className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* FAQ LIST */}
      <div className="w-full bg-white rounded-2xl overflow-hidden border">
        {category?.faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border-b last:border-none cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {/* QUESTION */}
              <div
                className={`px-6 py-5 font-semibold transition-colors ${
                  isOpen ? "text-lime-500" : "text-gray-800"
                }`}
              >
                {faq.question}
              </div>

              {/* ANSWER (ENVELOPE EFFECT) */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out
                ${isOpen ? "max-h-40 opacity-100 py-4" : "max-h-0 opacity-0"}`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
