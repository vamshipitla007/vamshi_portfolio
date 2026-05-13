import { useState } from "react";

import CoffeeImg from "@/assets/tastenest/coffee.png";
import DessertImg from "@/assets/tastenest/dessert.png";

import Chef1 from "@/assets/tastenest/chief1.png";
import Chef2 from "@/assets/tastenest/Chief2.png";
import Chef3 from "@/assets/tastenest/chief3.png";

const testimonials = [
  {
    id: 1,
    name: "Bratlee Hamint",
    review:
      "A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food. All great deeds and all great thoughts.",
  },
  {
    id: 2,
    name: "Thomas Walim",
    review:
      "Amazing service and very fresh dishes. The environment feels premium and comfortable for family dinners.",
  },
  {
    id: 3,
    name: "James Jhonson",
    review:
      "One of the best food experiences. The chefs and staff were highly professional and welcoming.",
  },
];

const chefs = [
  {
    id: 1,
    name: "Thomas Walim",
    role: "Dessert specialist",
    image: Chef1,
  },
  {
    id: 2,
    name: "James Jhonson",
    role: "Chef Master",
    image: Chef2,
  },
  {
    id: 3,
    name: "Room Minal",
    role: "Dessert specialist",
    image: Chef3,
  },
];

export default function TestimonialExpertsSection() {
  const [activeReview, setActiveReview] = useState(0);

  return (
    <section className="w-full bg-[#f5f5f5] py-14 lg:py-20 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left */}
          <div>
            <p className="text-[#ff2150] uppercase tracking-[2px] font-extrabold text-[11px]">
              Testimonials & Reviews
            </p>

            <h2 className="mt-3 text-black font-extrabold leading-[1.12] text-[34px] sm:text-[42px] max-w-[320px]">
              Our Customar Feedbacks
            </h2>

            {/* Review Card */}
            <div className="mt-8 relative border-[3px] border-[#ffd400] rounded-[24px] bg-white px-7 py-7 max-w-[420px]">
              
              <p className="text-[#666] text-[15px] leading-8">
                {testimonials[activeReview].review}
              </p>

              <h4 className="mt-5 text-black font-extrabold text-[22px]">
                {testimonials[activeReview].name}
              </h4>

              {/* Yellow Circle */}
              <div className="absolute bottom-4 right-4 w-[44px] h-[44px] rounded-full bg-[#ffd400]" />
            </div>

            {/* Dots */}
            <div className="mt-8 flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveReview(index)}
                  className={`
                    rounded-full transition-all duration-300
                    ${
                      activeReview === index
                        ? "w-[10px] h-[10px] bg-[#ff2150]"
                        : "w-[10px] h-[10px] bg-[#bfbfbf]"
                    }
                  `}
                />
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className="relative h-[320px] hidden lg:block">
            
            {/* Pink Box */}
            <div className="absolute left-[40px] top-[120px] w-[170px] h-[170px] rounded-[26px] bg-[#ff2150] overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('/pattern.png')] bg-cover bg-center" />
            </div>

            {/* Coffee */}
            <img
              src={CoffeeImg}
              alt="coffee"
              className="absolute top-0 left-[170px] w-[170px] h-[170px] rounded-[26px] object-cover shadow-lg"
            />

            {/* Dessert */}
            <img
              src={DessertImg}
              alt="dessert"
              className="absolute bottom-0 right-0 w-[170px] h-[170px] rounded-[26px] object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Experts */}
        <div className="mt-20 rounded-sm bg-white py-10 px-5 sm:px-8">
          
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-black font-extrabold text-[34px] sm:text-[44px] leading-none">
              Meet Our Experts
            </h2>

            <div className="w-[110px] h-[6px] rounded-full bg-[#ffd400] mx-auto mt-4" />
          </div>

          {/* Experts Grid */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {chefs.map((chef) => (
              <div
                key={chef.id}
                className="flex flex-col items-center"
              >
                
                {/* Chef Image */}
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-[230px] h-[230px] object-contain"
                />

                {/* Circle Card */}
                <div className="relative -mt-10 w-[230px] h-[230px] rounded-full border-[4px] border-[#d9d9d9] bg-[#fafafa] flex flex-col items-center justify-center px-6 text-center">
                  
                  <p className="text-[#ff2150] font-bold text-[12px]">
                    {chef.role}
                  </p>

                  <h3 className="mt-2 text-black font-extrabold text-[22px] leading-8">
                    {chef.name}
                  </h3>

                  {/* Social Dots */}
                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-[16px] h-[16px] rounded-full bg-[#e9edf3]" />
                    <div className="w-[16px] h-[16px] rounded-full bg-[#e9edf3]" />
                    <div className="w-[16px] h-[16px] rounded-full bg-[#e9edf3]" />
                  </div>

                  {/* Signature */}
                  <div className="mt-5 text-[#222] italic text-[26px] leading-none">
                    ~~~
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}