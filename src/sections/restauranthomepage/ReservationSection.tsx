import MainImg from "../../assets/restaurant/homepage/table2.png";
import Small1 from "../../assets/restaurant/homepage/table1.png";
import Small2 from "../../assets/restaurant/homepage/table3.png";

const ReservationSection = () => {
  return (
    <section className="bg-[#FFF4E7] py-12 md:py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 min-h-[auto] md:min-h-[600px]">
        {/* LEFT VISUAL */}
        <div className="order-2 md:order-1 relative flex justify-center items-center mt-16 md:mt-[70px]">
          {/* Outer faint circle */}
          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-[#e5d8c7] rounded-full"></div>

          {/* Main background circle */}
          <div className="absolute w-[240px] h-[240px] md:w-[400px] md:h-[400px] bg-[#E1C39F] rounded-full"></div>

          {/* Main Image */}
          <img
            src={MainImg}
            alt="table"
            className="w-[180px] h-[180px] md:w-[320px] md:h-[320px] rounded-full object-cover z-10"
          />

          {/* Top small image */}
          <div className="absolute top-[-20px] right-[20px] md:top-[-40px] md:right-[50px] w-[60px] h-[60px] md:w-[90px] md:h-[90px] bg-[#E1C39F] rounded-full flex items-center justify-center">
            {" "}
            <img
              src={Small1}
              alt="small"
              className="w-[70px] h-[70px] rounded-full object-cover"
            />
          </div>

          {/* Bottom-left small image */}
          <div className="absolute bottom-[-20px] left-[10px] md:bottom-[-40px] md:left-[40px] w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-[#E1C39F] rounded-full flex items-center justify-center">
            <img
              src={Small2}
              alt="small"
              className="w-[75px] h-[75px] rounded-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
       <div className="order-1 md:order-2 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold text-[#311F09] leading-tight">
            Let's reserve <br />
            <span className="text-orange-500">a table</span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam.
          </p>

          <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium">
            Reservation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
