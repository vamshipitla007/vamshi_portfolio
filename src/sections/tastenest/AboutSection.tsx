import Founder from "@/assets/tastenest/fonder.png";
import RestaurantImg from "@/assets/tastenest/restaurant.png";
import CocktailImg from "@/assets/tastenest/bar.png";
import DiningImg from "@/assets/tastenest/dining.png";

const cards = [
  {
    title: "Restaurant",
    image: RestaurantImg,
    rotate: "-rotate-2",
  },
  {
    title: "Coctail Bar",
    image: CocktailImg,
    rotate: "translate-y-12",
  },
  {
    title: "Private Dining",
    image: DiningImg,
    rotate: "rotate-2",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-28">
        
        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
          
          {/* Left */}
          <div>
            <p className="text-[#ff3152] font-extrabold tracking-[2px] uppercase text-[13px] sm:text-[14px]">
              About The Food Restaurant
            </p>

            <h2 className="mt-5 max-w-[520px] text-black font-extrabold leading-[1.08] text-[42px] sm:text-[56px] lg:text-[68px] tracking-[-2px]">
              New Ground with Dishes to be Enjoyed
            </h2>
          </div>

          {/* Right */}
          <div className="lg:pt-2">
            <p className="text-[#5c5c5c] leading-9 text-[16px] sm:text-[17px] max-w-[620px]">
              Nisl quam nestibulum ac quam nec odio eleme aucan ligula.
              Orci varius nat oque pena tibus et urient monte nascete
              ridiculus mus nellen tesq um ac qu am nec odio rbine.
              Nisl quam nestibu aucan ligula.
            </p>

            {/* Founder */}
            <div className="mt-10 flex items-center gap-5">
              <img
                src={Founder}
                alt="founder"
                className="w-[74px] h-[74px] rounded-full object-cover"
              />

              <div>
                <h4 className="text-black font-extrabold text-[26px] leading-none">
                  Willimes James
                </h4>

                <p className="mt-3 text-[#444] text-[16px]">
                  Director and Chief Operations Officer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-10">
            
            {cards.map((card, index) => (
              <div
                key={index}
                className={`relative w-full max-w-[320px] h-[470px] rounded-[32px] overflow-hidden bg-[#1f1f1f] ${card.rotate}`}
              >
                
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                {/* Yellow Border */}
                <div className="absolute inset-4 rounded-[28px] border-[4px] border-[#ffd400]" />

                {/* Bottom Label */}
                <div className="absolute bottom-0 left-0 w-full px-4 pb-4">
                  <div className="bg-[#ffd400] rounded-[22px] h-[74px] flex items-center justify-center">
                    <h3 className="text-black font-extrabold text-[22px]">
                      {card.title}
                    </h3>
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