import Chef1 from "@/assets/restaurant/cheif/chef1.png";
import Chef2 from "@/assets/restaurant/cheif/chef2.png";
import Chef3 from "@/assets/restaurant/cheif/chef3.png";

const chefs = [
  {
    id: 1,
    name: "Betran Komar",
    role: "Head chef",
    image: Chef1,
    bg: "#D9D9D9",
  },
  {
    id: 2,
    name: "Ferry Sauwi",
    role: "Chef",
    image: Chef2,
    bg: "#F3D9B1",
  },
  {
    id: 3,
    name: "Iswan Dracho",
    role: "Chef",
    image: Chef3,
    bg: "#E8DCD0",
  },
];

const ChefSection = () => {
  return (
    <section className="py-16 px-16 md:px-20 text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-[#311F09]">
        Our greatest chef
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        {chefs.map((chef) => (
          <div key={chef.id} className="text-center">
            <div className="w-full max-w-[260px] md:max-w-[360px] h-[280px] md:h-[420px] rounded-[30px] md:rounded-[60px] flex items-end justify-center overflow-hidden mx-auto">
              <img
                src={chef.image}
                alt={chef.name}
                className="h-full w-full object-contain"
              />
            </div>

            <h3 className="mt-3 md:mt-5 text-sm md:text-xl font-semibold text-[#311F09]">
              {chef.name}
            </h3>

            <p className="mt-1 md:mt-2 text-xs md:text-base text-gray-500">
              {chef.role}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="mt-12 bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 rounded-full font-medium">
        View all
      </button>
    </section>
  );
};

export default ChefSection;
