import {
  CalendarDays,
} from "lucide-react";

// Hero Banner
import HeroBanner from "@/assets/foodzero/food1.png";

// Food Images
import StarterImage from "@/assets/foodzero/vegitables.png";
import MainImage from "@/assets/foodzero/cake.png";
import DrinkImage from "@/assets/foodzero/drinks.png";

// Decorative Image
import Decoration from "@/assets/foodzero/drinks.png";

const MenuPage = () => {
  const starters = [
    {
      title: "Grilled Okra and Tomatoes",
      price: "$20",
    },
    {
      title: "Cucumber Salad",
      price: "$18",
    },
    {
      title: "Basil Pancakes",
      price: "$12",
    },
  ];

  const mains = [
    {
      title: "Deep Sea Snow White Cod Fillet",
      price: "$20",
    },
    {
      title: "Steak With Rosemary Butter",
      price: "$22",
    },
    {
      title: "Steaks with Grilled Kimchi",
      price: "$20",
    },
  ];

  const drinks = [
    {
      title: "Wine Pairing",
      price: "$158",
    },
    {
      title: "Natural Wine Pairing",
      price: "$168",
    },
    {
      title: "Whisky Flyer",
      price: "$90",
    },
  ];

  return (
    <div className="bg-white pt-10">
      {/* HERO SECTION */}
      <section className="relative h-[400px] md:h-[320px] overflow-hidden">
        <img
          src={HeroBanner}
          alt=""
          style={{ height: "320px", width: "100%", objectFit: "cover" }}
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <h1 className="max-w-md font-serif text-4xl leading-none text-white md:text-7xl">
              View Our
              <br />
              New Menu
            </h1>

            <p className="mt-4 text-xs text-white/80">
              The freshest ingredients for you every day
            </p>
          </div>
        </div>
      </section>

      {/* STARTERS */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl md:text-6xl text-[#233000]">
              Starters
            </h2>

            <p className="mt-2 text-[11px] text-gray-500">
              This is a section of your menu.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <img
              src={StarterImage}
              alt=""
              className="w-full object-cover"
            />

            <div>
              {starters.map((item) => (
                <div
                  key={item.title}
                  className="mb-8"
                >
                  <div className="mb-2 text-right font-serif text-lg text-[#233000]">
                    {item.price}
                  </div>

                  <div className="border-t border-black pt-3 text-[#233000]">
                    <h3 className="font-serif text-2xl md:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[11px] text-gray-500">
                      Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAINS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl md:text-6xl  text-[#233000]">
              Mains
            </h2>

            <p className="mt-2 text-[11px] text-gray-500">
              This is a section of your menu.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              {mains.map((item) => (
                <div
                  key={item.title}
                  className="mb-8"
                >
                  <div className="mb-2 text-right font-serif text-lg text-[#233000]">
                    {item.price}
                  </div>

                  <div className="border-t border-black pt-3 text-[#233000]">
                    <h3 className="font-serif text-2xl md:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[11px] text-gray-500">
                      Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <img
              src={MainImage}
              alt=""
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* PASTRIES & DRINKS */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="relative mb-12 text-center">
            <img
              src={Decoration}
              alt=""
              className="absolute left-1/2 top-0 w-20 -translate-x-1/2 opacity-40"
            />

            <h2 className="font-serif text-4xl md:text-6xl  text-[#233000]">
              Pastries & Drinks
            </h2>

            <p className="mt-2 text-[11px] text-gray-500">
              This is a section of your menu.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <img
              src={DrinkImage}
              alt=""
              className="w-full object-cover"
            />

            <div>
              {drinks.map((item) => (
                <div
                  key={item.title}
                  className="mb-8"
                >
                  <div className="mb-2 text-right font-serif text-lg text-[#233000]">
                    {item.price}
                  </div>

                  <div className="border-t border-black pt-3 text-[#233000]">
                    <h3 className="font-serif text-2xl md:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[11px] text-gray-500">
                      Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESERVATION */}
      <section className="bg-[#EBF0E4] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="font-serif text-4xl md:text-7xl text-[#233000]">
            Make a Reservation
          </h2>

          <p className="mt-3 text-[11px] text-gray-500">
            Get in touch with restaurant
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <input
              type="date"
              className="
                h-14
                border
                border-[#233000]
                bg-transparent
                px-4
                text-sm
                outline-none
              "
            />

            <select
              className="
                h-14
                border
                border-[#233000]
                bg-transparent
                px-4
                text-sm
              "
            >
              <option>4:00 pm</option>
              <option>5:00 pm</option>
              <option>6:00 pm</option>
            </select>

            <select
              className="
                h-14
                border
                border-[#233000]
                bg-transparent
                px-4
                text-sm
              "
            >
              <option>2 Person</option>
              <option>4 Person</option>
              <option>6 Person</option>
            </select>
          </div>

          <button
            className="
              mt-10
              bg-[#233000]
              px-10
              py-3
              text-xs
              text-white
              transition
              hover:bg-[#324500]
            "
          >
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;