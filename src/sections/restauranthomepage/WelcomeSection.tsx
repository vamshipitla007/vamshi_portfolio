import Salad from "@/assets/restaurant/salad.png";

const WelcomeSection = () => {
  return (
    <section className="bg-[#e9f0ec] rounded-[40px] px-6 md:px-12 py-10 md:py-16 mt-10">
      
      <div className="grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={Salad}
            alt="salad"
            className="w-[260px] sm:w-[340px] md:w-[480px] object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-[#3b2a1a] leading-tight">
            Welcome to <br />
            <span className="text-orange-500">delizioso</span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-md text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam.
          </p>

          <button className="mt-8 bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-full font-medium">
            See our menu
          </button>
        </div>

      </div>
    </section>
  );
};

export default WelcomeSection;