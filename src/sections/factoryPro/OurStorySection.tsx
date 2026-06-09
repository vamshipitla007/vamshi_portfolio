import React from "react";
import { Play } from "lucide-react";

import storyMain from "@/assets/factorypro/Image5.png";
import storyTop1 from "@/assets/factorypro/Image6.png";
import storyTop2 from "@/assets/factorypro/Image7.png";


const stats = [
  {
    value: "10K+",
    label: "Completed Project",
  },
  {
    value: "15+",
    label: "Satisfied Customer",
  },
  {
    value: "10K+",
    label: "Year Of Mastery",
  },
];

const avatars = [
  "https://ui-avatars.com/api/?name=John+Doe&background=random",
  "https://ui-avatars.com/api/?name=Mike+Smith&background=random",
  "https://ui-avatars.com/api/?name=Sarah+Wilson&background=random",
];

const OurStorySection: React.FC = () => {
  const handleWatchVideo = () => {
    console.log("Watch Intro");
  };

  return (
    <section className="bg-[#FAFAFA] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}

          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />

              <span
                className="
                uppercase
                tracking-[3px]
                text-[12px]
                font-medium
                text-[#666]
                "
              >
                Our Story
              </span>
            </div>

            <h2
              className="
              text-[#202020]
              font-light
              leading-tight
              text-[36px]
              md:text-[52px]
              "
            >
              Transforming industries
              <br />
              <span className="font-bold">
                with innovative efficient
              </span>
              <br />
              <span className="font-bold">
                solutions
              </span>
            </h2>

            <div className="mt-12">
              <img
                src={storyMain}
                alt=""
                className="
                w-full
                rounded-[34px]
                object-cover
                shadow-lg
                "
              />
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div>
            {/* TOP IMAGES */}

            <div className="grid grid-cols-2 gap-5">
              <img
                src={storyTop1}
                alt=""
                className="
                w-full
                h-[170px]
                lg:h-[190px]
                rounded-[28px]
                object-cover
                "
              />

              <img
                src={storyTop2}
                alt=""
                className="
                w-full
                h-[170px]
                lg:h-[190px]
                rounded-[28px]
                object-cover
                "
              />
            </div>

            {/* DESCRIPTION */}

            <p
              className="
              mt-10
              text-[#808080]
              text-[15px]
              leading-8
              "
            >
              We specialize in revolutionizing
              industries by delivering innovative,
              efficient solutions that enhance
              productivity and streamline processes.
              Through advanced technologies,
              precision engineering, and sustainable
              practices.
            </p>

            <div className="my-10 border-t border-gray-200" />

            {/* STATS */}

            <div className="grid grid-cols-3 gap-4">
              {stats.map((item) => (
                <div key={item.label}>
                  <h3
                    className="
                    text-[#F59E0B]
                    font-bold
                    text-[34px]
                    "
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                    text-[#333]
                    text-[15px]
                    mt-2
                    "
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* AVATAR + VIDEO */}

            <div
              className="
              mt-12
              flex
              flex-col
              sm:flex-row
              gap-8
              items-start
              sm:items-center
              "
            >
              {/* AVATARS */}

              <div className="flex -space-x-3">
                {avatars.map(
                  (img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt=""
                      className="
                      w-12
                      h-12
                      rounded-full
                      border-2
                      border-white
                      object-cover
                      "
                    />
                  ),
                )}
              </div>

              {/* PLAY */}

              <button
                onClick={handleWatchVideo}
                className="
                flex
                items-center
                gap-4
                group
                "
              >
                <div
                  className="
                  w-14
                  h-14
                  rounded-full
                  border-[3px]
                  border-[#F59E0B]
                  flex
                  items-center
                  justify-center
                  text-[#F59E0B]
                  group-hover:bg-[#F59E0B]
                  group-hover:text-white
                  transition-all
                  "
                >
                  <Play
                    size={20}
                    fill="currentColor"
                  />
                </div>

                <span
                  className="
                  uppercase
                  tracking-wide
                  text-[13px]
                  font-medium
                  text-[#222]
                  "
                >
                  Watch Intro
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;