import AboutBanner from "@/assets/foodzero/about1.png";
import StoryImage from "@/assets/foodzero/about2.png";
import ManagerImage from "@/assets/foodzero/about3.png";
import ChefImage from "@/assets/foodzero/about4.png";
import TomatoOutline from "@/assets/foodzero/floweroutline.png";
import BannerImage from "@/assets/foodzero/about5.png";
import Process1 from "@/assets/foodzero/about6.png";
import Process2 from "@/assets/foodzero/about7.png";
import Process3 from "@/assets/foodzero/about8.png";
import LeafOutline from "@/assets/foodzero/floweroutline.png";
import ReservationSection from "./ReservationSection";
import { Play } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}

      <section className="relative h-[450px] md:h-[620px] overflow-hidden">
        <img
          src={AboutBanner}
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1
              className="
                font-serif
                text-white
                text-[52px]
                md:text-[96px]
                leading-[0.9]
              "
            >
              Who We Are
            </h1>

            <p
              className="
                mt-4
                max-w-[420px]
                mx-auto
                text-[11px]
                md:text-[13px]
                text-white
                leading-6
              "
            >
              The most important thing for us is
              to give you the comfortable dining
              experience
            </p>
          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <img
            src={TomatoOutline}
            alt=""
            className="
              absolute
              left-1/2
              top-20
              w-[140px]
              -translate-x-1/2
              opacity-40
            "
          />

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2
                className="
                  font-serif
                  text-[#233000]
                  text-[42px]
                  md:text-[72px]
                  leading-none
                "
              >
                Our Story
              </h2>

              <p
                className="
                  mt-6
                  max-w-[420px]
                  text-[18px]
                  leading-6
                  text-[#4D4D4D]
                "
              >
                Founded with a passion for exceptional dining, our restaurant brings
  together fresh ingredients, creative recipes, and warm hospitality.
  Every dish is carefully crafted to celebrate seasonal flavors while
  creating memorable experiences for our guests. Over the years, we have
  remained committed to quality, sustainability, and the art of sharing
  great food with the community.
              </p>
            </div>

            <img
              src={StoryImage}
              alt=""
              className="
                w-full
                max-w-[650px]
                justify-self-end
                object-cover
              "
            />
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}

      <section className="pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          {/* MANAGER */}

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3
                className="
                  font-serif
                  text-[28px]
                  md:text-[48px]
                  text-[#233000]
                "
              >
                Restaurant Manager
              </h3>

              <p
                className="
                  mt-2
                  text-[18px]
                  text-[#233000]
                "
              >
                Carson Hug
              </p>

              <img
                src={ManagerImage}
                alt=""
                className="
                  mt-8
                  w-full
                  max-w-[420px]
                  object-cover
                "
              />
            </div>

            <div className="flex items-center lg:pt-28">
              <p
                className="
                  max-w-[280px]
                  text-[16px]
                  leading-6
                  text-[#4D4D4D]
                "
              >
               With years of experience in hospitality, our restaurant manager ensures
every guest enjoys exceptional service and a welcoming atmosphere.
Dedicated to excellence, they oversee daily operations with passion,
precision, and attention to detail.
              </p>
            </div>
          </div>

          {/* CHEF */}

          <div
            className="
              mt-20
              grid
              gap-12
              lg:grid-cols-2
            "
          >
            <div className="flex items-center justify-center">
              <p
                className="
                  max-w-[260px]
                  text-center
                  text-[18px]
                  leading-6
                  text-[#4D4D4D]
                "
              >
      Our Executive Chef brings years of culinary expertise and a passion for
creating unforgettable dining experiences. Combining innovative techniques
with the finest ingredients, they craft dishes that celebrate flavor,
creativity, and the art of modern cuisine.
              </p>
            </div>

            <div className="justify-self-end">
              <h3
                className="
                  text-center
                  font-serif
                  text-[28px]
                  md:text-[48px]
                  text-[#233000]
                "
              >
                Executive Chef
              </h3>

              <p
                className="
                  mt-2
                  text-center
                  text-[20px]
                  text-[#233000]
                "
              >
                Jane Cooper
              </p>

              <img
                src={ChefImage}
                alt=""
                className="
                  mt-6
                  w-full
                  max-w-[420px]
                  object-cover
                "
              />
            </div>
          </div>
        </div>
      </section>

       {/* ================= VIDEO HERO ================= */}

      <section className="relative h-[300px] md:h-[550px]">
        <img
          src={BannerImage}
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2
            className="
              font-serif
              text-white
              text-[40px]
              md:text-[72px]
              leading-none
            "
          >
            It looks delicious
          </h2>

          <p
            className="
              mt-3
              text-[11px]
              text-white/90
            "
          >
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>

          <button
            className="
              mt-8
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-white
              text-white
              transition
              hover:bg-white
              hover:text-black
            "
          >
            <Play size={22} fill="currentColor" />
          </button>
        </div>
      </section>

      {/* ================= PROCESS ================= */}

      <section className="relative py-20 md:py-32">
        {/* Decorative Leaves */}

        <img
          src={LeafOutline}
          alt=""
          className="
            absolute
            right-0
            top-20
            w-[180px]
            opacity-40
            pointer-events-none
          "
        />

        <img
          src={LeafOutline}
          alt=""
          className="
            absolute
            left-0
            bottom-0
            w-[180px]
            rotate-180
            opacity-40
            pointer-events-none
          "
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Title */}

          <div className="mb-20 text-center">
            <h2
              className="
                font-serif
                text-[#233000]
                text-[42px]
                md:text-[72px]
                leading-none
              "
            >
              Sophisticated Process
            </h2>
          </div>

          {/* ROW 1 */}

          <div
            className="
              grid
              gap-10
              lg:grid-cols-2
              lg:items-center
            "
          >
            <img
              src={Process1}
              alt=""
              className="
                w-full
                max-w-[500px]
                object-cover
              "
            />

            <div>
              <h3
                className="
                  font-serif
                  text-[34px]
                  md:text-[56px]
                  text-[#233000]
                "
              >
                01.Slice
              </h3>

              <p
                className="
                  mt-5
                  max-w-[320px]
                  text-[12px]
                  leading-6
                  text-[#4D4D4D]
                "
              >
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Purus lorem id penatibus imperdiet.
                Turpis egestas ultricies purus auctor
                tincidunt lacus nunc.
              </p>
            </div>
          </div>

          {/* ROW 2 */}

          <div
            className="
              mt-20
              grid
              gap-10
              lg:grid-cols-2
              lg:items-center
            "
          >
            <div className="order-2 lg:order-1">
              <h3
                className="
                  font-serif
                  text-[34px]
                  md:text-[56px]
                  text-[#233000]
                "
              >
                03.Bake
              </h3>

              <p
                className="
                  mt-5
                  max-w-[320px]
                  text-[12px]
                  leading-6
                  text-[#4D4D4D]
                "
              >
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Purus lorem id penatibus imperdiet.
              </p>

              <img
                src={Process3}
                alt=""
                className="
                  mt-8
                  w-full
                  max-w-[420px]
                  object-cover
                "
              />
            </div>

            <div className="order-1 lg:order-2 lg:justify-self-end">
              <img
                src={Process2}
                alt=""
                className="
                  w-full
                  max-w-[420px]
                  object-cover
                "
              />

              <h3
                className="
                  mt-8
                  font-serif
                  text-[34px]
                  md:text-[56px]
                  text-[#233000]
                "
              >
                02.Pickled
              </h3>

              <p
                className="
                  mt-4
                  max-w-[320px]
                  text-[12px]
                  leading-6
                  text-[#4D4D4D]
                "
              >
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Purus lorem id penatibus imperdiet.
              </p>
            </div>
          </div>
        </div>
      </section>
       <ReservationSection />
    </div>
  );
};

export default AboutPage;