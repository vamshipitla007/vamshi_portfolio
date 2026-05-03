import User from "@/assets/restaurant/homepage/user.png";

const circles = [
  { size: 80, color: "#B6D7A8", top: "60px", left: "120px" },
  { size: 40, color: "#D9D9D9", top: "100px", right: "120px" },
  { size: 30, color: "#CFE2F3", top: "220px", left: "300px" },
  { size: 60, color: "#F4CCCC", top: "260px", right: "300px" },
  { size: 50, color: "#EAD1DC", top: "350px", right: "80px" },
  { size: 60, color: "#F6B26B", bottom: "260px", left: "80px" },
  { size: 40, color: "#EAD1DC", bottom: "60px", left: "260px" },
];

const TestimonialSection = () => {
  return (
    <section className="relative bg-[#FAFAFA] py-20 px-6 md:px-20 overflow-hidden mt-40">
      {/* Floating circles */}
      {circles.map((c, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-80"
          style={{
            width: c.size,
            height: c.size,
            backgroundColor: c.color,
            top: c.top,
            left: c.left,
            right: c.right,
            bottom: c.bottom,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#311F09]">
          Our customers say
        </h2>

        {/* Avatar */}
        <div className="mt-12 flex justify-center">
          <div className="w-[140px] h-[140px] bg-gray-300 rounded-full"></div>
        </div>

        {/* Name */}
        <h3 className="mt-6 text-xl font-semibold text-[#311F09]">
          Starla Virgoun
        </h3>

        <p className="text-gray-500 mt-1">Financial advisor</p>

        {/* Quote */}
        <div className="mt-8 relative mx-6">
          <span className="text-6xl absolute left-0 top-[-10px] text-[#311F09]">
            “
          </span>

          <p className="text-gray-600 leading-relaxed px-4 md:px-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam
          </p>

          <span className="text-6xl absolute right-0 bottom-[-10px] text-[#311F09]">
            ”
          </span>
        </div>

        <div className="mt-12 flex justify-center relative">
          <div
            className="absolute w-[30px] h-[30px] bg-gray-400 rounded-full"
            style={{ marginTop: "-10px", marginLeft: "-500px" }}
          ></div>
          <div
            className="absolute w-[50px] h-[50px] bg-gray-400 rounded-full"
            style={{ marginTop: "10px", marginLeft: "-400px" }}
          ></div>
          <div
            className="absolute w-[60px] h-[60px] bg-gray-400 rounded-full"
            style={{ marginTop: "30px", marginLeft: "-250px" }}
          ></div>
          <div
            className="w-[120px] h-[120px] rounded-full border-[10px] border-[#F6B26B] flex items-center justify-center"
            style={{ marginTop: "40px", backgroundColor: "#e8ddd1" }}
          >
            <div className="w-[100px] h-[100px] bg-gray-400 rounded-full"></div>
          </div>

          {/* Side small avatar */}
          <img
            src={User}
            alt="user"
            className="w-[70px] h-[70px] rounded-full object-cover absolute right-[210px] top-[30px]"
          />
          <div
            className="absolute w-[50px] h-[50px] bg-gray-400 rounded-full"
            style={{ marginTop: "10px", marginLeft: "420px" }}
          ></div>
          <div
            className="absolute w-[30px] h-[30px] bg-gray-400 rounded-full"
            style={{ marginTop: "-10px", marginLeft: "520px" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
