import FoodBg from "@/assets/restaurant/homepage/cardimage.jpg";

const OpenHoursCard = () => {
  return (
    <section className="px-6 md:px-20 py-16">
      
      <div className="relative max-w-[1000px] mx-auto h-[320px] md:h-[420px] rounded-[55px] md:rounded-[60px] overflow-hidden">

        {/* Background Image */}
        <img
          src={FoodBg}
          alt="food"
          className="absolute inset-0 w-full h-full object-cover scale-110 origin-center"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(65.69% 65.69% at 50.03% 34.31%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.72) 82.52%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white px-6">
          
          <h2 className="text-2xl md:text-5xl font-bold">
            we are open from
          </h2>

          <h3 className="mt-4 text-xl md:text-2xl font-semibold">
            Monday-Sunday
          </h3>

          <p className="mt-3 text-sm md:text-base opacity-90">
            Lunch: Mon-Sun: 11:00am-02:00pm
          </p>

          <p className="text-sm md:text-base opacity-90">
            Dinner: sunday: 04:00pm-08:00pm
          </p>

          <p className="text-sm md:text-base opacity-90">
            04:00pm-09:00pm
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 flex-wrap justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-medium">
              Order now
            </button>

            <button className="bg-white text-black px-6 py-3 rounded-full font-medium">
              Reservation
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default OpenHoursCard;