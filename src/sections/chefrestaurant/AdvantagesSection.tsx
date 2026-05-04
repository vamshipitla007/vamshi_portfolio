
import Vegetables from "@/assets/chefrestaurant/vegetables.png";
import SaladBox from "@/assets/chefrestaurant/salad-box.png";
import deliveryIcon from "@/assets/icons/delivery.svg";
import caloriesIcon from "@/assets/icons/calories.svg";
import time from "@/assets/icons/time.svg";
import food from "@/assets/icons/food.svg";
import leaf from "@/assets/icons/leaf.svg";

const advantages = [
  {
    title: "We'll deliver it free of charge",
    desc: "In a convenient 2-hour interval",
    icon: deliveryIcon,
  },
  {
    title: "We’ll calculate calories",
    desc: "It will be easy for you to control your diet",
    icon: caloriesIcon,
  },
  {
    title: "We’ll help you save up to 20 hours",
    desc: "of free time a week for you",
    icon: time,
  },
  {
    title: "Everything is ready, just warm it up",
    desc: "We’ll bring you ready-made dishes",
    icon: food,
  },
  {
    title: "Healthy & fresh ingredients",
    desc: "Always high-quality products",
    icon: leaf,
  },
];

export default function AdvantagesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* TITLE */}
      <h2 className="text-3xl font-bold mb-12" style={{ color: '#000000' }}>
        OUR ADVANTAGES
      </h2>

      {/* ICON GRID */}
      <div className="grid grid-cols-5 gap-8 text-center mb-16">
        {advantages.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            
            {/* ICON CIRCLE */}
            <div className="w-20 h-20 rounded-full bg-lime-500 flex items-center justify-center mb-4">
              <img src={item.icon} className="w-10 h-10" />
            </div>

            <h3 className="font-semibold text-sm leading-tight" style={{ color: '#000000' }}>
              {item.title}
            </h3>

            <p className="text-gray-500 text-sm mt-2 leading-snug">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* BOTTOM BANNER */}
      <div className="relative bg-lime-500 rounded-[40px] px-18 py-12 overflow-visible">

        {/* LEFT CONTENT */}
        <div className="max-w-md text-white z-10 relative">
          <h3 className="text-4xl font-bold leading-tight">
            1 DAY AT THE <br /> PRICE OF 23$
          </h3>

          <p className="mt-6 text-white/90">
            Make orders, take part in promotions, recommend us to friends
            or connect
          </p>

          <button className="mt-8 bg-orange-400 hover:bg-orange-500 px-6 py-3 rounded-full font-semibold">
            Sign up
          </button>
        </div>

        {/* SALAD BOX IMAGE */}
        <img
          src={SaladBox}
          className="absolute bottom-[-40px] left-[40%] w-[476px] h-[393px] z-20 rotate-[-10deg]"
        />

        {/* RIGHT VEGETABLES */}
        <img
          src={Vegetables}
          className="absolute right-[0px] top-[80px] -translate-y-1/2 w-[300px] z-10"
        />

      </div>
    </section>
  );
}