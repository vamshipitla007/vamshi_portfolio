import {
  ArrowDown,
} from "lucide-react";

const Hero1 = ({
  mainDish,
  spice1,
  spice2,
  spice3,
  soupImage,
  pepperImage,
}) => {
  return (
    <section className="bg-[#233000] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 lg:px-16">
        {/* HERO TOP */}
        <div className="relative">
          {/* Heading */}
          <div className="relative z-20 max-w-3xl">
            <h1
              className="
                font-serif
                text-white
                leading-[0.9]
                tracking-tight
                text-[52px]
                md:text-[90px]
                lg:text-[110px]
              "
            >
              Healthy Eating
              <br />
              is important
              <br />
              part of lifestyle
            </h1>

            <p className="mt-6 max-w-sm text-[12px] leading-5 text-white/80">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Neque congue arcu
            </p>
          </div>

          {/* Main Image */}
          <div
            className="
              mt-10
              md:absolute
              md:right-0
              md:top-10
              md:w-[420px]
              lg:w-[560px]
            "
          >
            <img
              src={mainDish}
              alt=""
              className="
                h-[420px]
                w-full
                object-cover
                md:h-[600px]
              "
            />
          </div>

          {/* Scroll Indicator */}
          <div
            className="
              hidden
              lg:flex
              absolute
              left-0
              top-[380px]
              flex-col
              items-center
            "
          >
            <p
              className="
                rotate-180
                font-serif
                text-4xl
                text-white
                [writing-mode:vertical-lr]
              "
            >
              Scroll
            </p>

            <div className="mt-4 h-44 border-l border-dashed border-white/60" />
          </div>

          {/* Spices */}
          <div
            className="
              relative
              z-30
              mt-10
              flex
              gap-3
              mr-10
              justify-end
              md:mt-[520px]
              md:ml-[180px]
              md:justify-start
            "
          >
            <img
              src={spice1}
              alt=""
              className="h-24 w-24 rounded-full object-cover shadow-xl md:h-32 md:w-32"
            />

            <img
              src={spice2}
              alt=""
              className="h-24 w-24 rounded-full object-cover shadow-xl md:h-32 md:w-32"
            />

            <img
              src={spice3}
              alt=""
              className="h-24 w-24 rounded-full object-cover shadow-xl md:h-32 md:w-32"
            />
          </div>
        </div>

        {/* SECOND SECTION */}
        <div
          className="
            mt-20
            grid
            gap-12
            lg:grid-cols-2
            lg:items-start
          "
        >
          {/* Left */}
          <div>
            <img
              src={soupImage}
              alt=""
              className="
                h-[260px]
                w-full
                object-cover
                md:h-[350px]
              "
            />

            <h2
              className="
                mt-8
                font-serif
                text-white
                leading-tight
                text-4xl
                md:text-6xl
              "
            >
              Start to plan
              <br />
              your diet today
            </h2>

            <p className="mt-6 max-w-sm text-[12px] leading-5 text-white/80">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Neque congue arcu
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start lg:items-end">
            <p
              className="
                mb-8
                max-w-xs
                text-[12px]
                leading-5
                text-white/80
              "
            >
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Neque congue arcu 
            </p>

            <img
              src={pepperImage}
              alt=""
              className="
                h-[300px]
                w-full
                max-w-[350px]
                object-cover
                md:h-[450px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;