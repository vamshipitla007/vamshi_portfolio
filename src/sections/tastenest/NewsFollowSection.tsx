import { FaInstagram } from "react-icons/fa";

import News1 from "@/assets/tastenest/news1.png";
import News2 from "@/assets/tastenest/new2.png";

import FollowBg from "@/assets/tastenest/followbg.jpg";

import Author from "@/assets/tastenest/fonder.png";

const newsData = [
  {
    id: 1,
    image: News1,
    date: "April 6, 2023",
    title: "Creamy Chicken Alfredo",
  },
  {
    id: 2,
    image: News2,
    date: "April 6, 2023",
    title: "Air Fryer Salmon",
  },
];

export default function NewsFollowSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-14 lg:py-20 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-black font-extrabold text-[30px] sm:text-[42px] leading-none">
            Recent News
          </h2>

          <div className="w-[110px] h-[6px] rounded-full bg-[#ffd400] mx-auto mt-4" />
        </div>

        {/* News Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-start gap-6"
            >
              {/* Image */}
              <div className="w-full sm:w-[190px] h-[190px] rounded-[28px] overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="pt-3">
                {/* Date */}
                <div className="inline-flex items-center justify-center px-4 h-[34px] rounded-lg bg-[#ffd400]">
                  <span className="text-black font-extrabold text-[13px]">
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-black font-extrabold text-[28px] leading-[1.2] max-w-[280px]">
                  {item.title}
                </h3>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={Author}
                    alt="author"
                    className="w-[44px] h-[44px] rounded-full object-cover"
                  />

                  <span className="text-black font-bold text-[15px]">
                    Willimes Thomas
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Section */}
        <div className="mt-20">
          <div className="relative rounded-[34px] overflow-hidden min-h-[420px]">
            {/* Background Image */}
            <img
              src={FollowBg}
              alt="follow"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* White Transparent Overlay */}
            <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]" />

            {/* Center Content */}
            <div className="relative z-10 min-h-[420px] flex flex-col items-center justify-center text-center px-6">
              {/* Instagram Icon */}
              <div className="w-[72px] h-[72px] rounded-full bg-[#ff2150] flex items-center justify-center shadow-xl">
                <FaInstagram className="text-white text-[34px]" />
              </div>

              {/* Heading */}
              <h2 className="mt-8 text-black font-extrabold text-[32px] sm:text-[48px] leading-none">
                Follow @shawonetc3
              </h2>

              {/* Subtitle */}
              <p className="mt-4 text-[#666] text-[15px] sm:text-[17px]">
                Join our community to inspire your desires
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
