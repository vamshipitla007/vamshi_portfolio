import ContactBanner from "@/assets/foodzero/banner1.png";
import TableImage from "@/assets/foodzero/banner2.png";
import RestaurantImage from "@/assets/foodzero/banner3.png";
import FlowerOutline from "@/assets/foodzero/floweroutline.png";

const ContactPage = () => {
  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}

      <section className="relative md:h-[520px]">
        <img
          src={ContactBanner}
          alt=""
                    style={{ height: "520px", width: "100%", objectFit: "cover" }}
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 md:px-10">
            <h1
              className="
                font-serif
                text-white
                text-5xl
                md:text-8xl
                leading-none
              "
            >
              Get in Touch
            </h1>

            <p className="mt-3 text-[11px] text-white/90">
              The freshest ingredients for you every day
            </p>

            {/* Opening Hours */}
            <div
              className="
                mt-14
                flex
                flex-wrap
                gap-10
                md:justify-end
              "
            >
              <div>
                <p className="text-[18px] text-white">
                  Open Time
                </p>

                <div className="mt-3 h-px w-28 bg-white" />

                <div className="mt-3 space-y-2 text-[16px] text-white">
                  <p>Sunday - Friday</p>
                  <p>8:00 am - 11:00 pm</p>
                </div>
              </div>

              <div className="text-[16px] text-white">
                <p>Brunch</p>
                <p className="mt-2">8:00 am - 12:00 pm</p>
              </div>

              <div className="text-[16px] text-white">
                <p>Lunch</p>
                <p className="mt-2">1:00 pm - 5:00 pm</p>
              </div>

              <div className="text-[16px] text-white">
                <p>Dinner</p>
                <p className="mt-2">6:00 pm - 11:00 pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}

      <section className="relative py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {/* Top Row */}

          <div className="relative grid gap-12 lg:grid-cols-2">
            {/* Flower Outline */}

            <img
              src={FlowerOutline}
              alt=""
              className="
                absolute
                left-1/2
                w-[160px]
                -translate-x-1/2
                opacity-50
                pointer-events-none
              "
            />

            <img
              src={TableImage}
              alt=""
              className="
                w-full
                max-w-[520px]
                object-cover
              "
            />

            <div className="flex items-center">
              <div>
                <p
                  className="
                    max-w-[260px]
                    text-[13px]
                    leading-7
                    text-[#233000]
                  "
                >
                  We can be contacted via
                  email{" "}
                  <span className="text-[#9CAA00]">
                    info@foodzero.com
                  </span>
                  <br />
                  or telephone on{" "}
                  <span className="text-[#9CAA00]">
                    +86 852 346 000
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row */}

          <div className="mt-24 grid gap-12 lg:grid-cols-2">
            <div className="flex items-center">
              <div>
                <p
                  className="
                    max-w-[260px]
                    text-[13px]
                    leading-7
                    text-[#233000]
                  "
                >
                  We are located in
                  1959 Sepulveda Blvd,
                  Culver City, CA, 90230
                </p>

                <button
                  className="
                    mt-8
                    border
                    border-[#233000]
                    px-8
                    py-3
                    text-[11px]
                    text-[#233000]
                    transition
                    hover:bg-[#233000]
                    hover:text-white
                  "
                >
                  View in maps
                </button>
              </div>
            </div>

            <img
              src={RestaurantImage}
              alt=""
              className="
                w-full
                max-w-[520px]
                justify-self-end
                object-cover
              "
            />
          </div>
        </div>
      </section>

      {/* ================= RESERVATION ================= */}

      <section className="relative bg-[#EBF0E4] py-20 md:py-28">
        {/* Flower Outline Above Heading */}

        <img
          src={FlowerOutline}
          alt=""
          className="
            absolute
            left-20
            top-10
            w-36
            opacity-40
          "
        />

        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2
              className="
                font-serif
                text-[#233000]
                text-5xl
                md:text-7xl
              "
            >
              Make a Reservation
            </h2>

            <p className="mt-2 text-[11px] text-[#233000]/70">
              Get in touch with restaurant
            </p>
          </div>

          <form className="mt-14">
            <div className="grid gap-5 md:grid-cols-2">
              <input
                placeholder="First Name"
                className="h-14 border border-[#233000] text-[#233000] bg-transparent px-4 text-xs outline-none"
              />

              <input
                placeholder="Last Name"
                className="h-14 border border-[#233000] text-[#233000] bg-transparent px-4 text-xs outline-none"
              />
            </div>

            <input
              placeholder="Email"
              className="mt-5 h-14 w-full border border-[#233000] text-[#233000] bg-transparent px-4 text-xs outline-none"
            />

            <input
              placeholder="Phone"
              className="mt-5 h-14 w-full border border-[#233000] text-[#233000] bg-transparent px-4 text-xs outline-none"
            />

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <input
                type="date"
                className="h-14 border border-[#233000] text-[#233000] bg-transparent px-4 text-xs outline-none"
              />

              <select className="h-14 border border-[#233000] text-[#233000] bg-transparent px-4 text-xs">
                <option>6:00 pm</option>
                <option>7:00 pm</option>
                <option>8:00 pm</option>
              </select>
            </div>

            <select className="mt-5 h-14 w-full border border-[#233000] text-[#233000] bg-transparent px-4 text-xs">
              <option>2 Person</option>
              <option>4 Person</option>
              <option>6 Person</option>
            </select>

            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                className="
                  bg-[#5E6600]
                  px-10
                  py-3
                  text-[11px]
                  text-white
                  transition
                  hover:bg-[#4b5200]
                "
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;