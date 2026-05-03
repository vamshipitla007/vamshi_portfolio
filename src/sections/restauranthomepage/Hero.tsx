import Noodles from "@/assets/restaurant/noodles.png";

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center py-10 md:py-16">
      {/* Left */}
      <div className="text-left">
        <span className="inline-block bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm">
          Restaurant
        </span>

        <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight text-[#3b2a1a]">
          Italian <br /> Cuisine
        </h1>

        <p className="mt-5 text-gray-500 max-w-md text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
          senectus dictum arcu sit tristique donec eget.
        </p>

        <div className="flex flex-row gap-4 mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-full font-medium whitespace-nowrap">
            Order now
          </button>

          <button className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-full font-medium whitespace-nowrap">
            Reservation
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="flex justify-center md:justify-end">
        <img
          src={Noodles}
          alt="noodles"
          className="w-[260px] sm:w-[320px] md:w-[520px] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
