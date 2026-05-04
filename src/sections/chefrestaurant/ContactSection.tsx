import TamatoSlice from "@/assets/chefrestaurant/tamatoslice.png";
import leaf from "@/assets/chefrestaurant/leaf.png";

export default function ContactSection() {
  return (
    <section className="w-full bg-gray-50 py-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-10">

        {/* LEFT IMAGE */}
        <div className="relative w-[35%] hidden lg:block">
          <img
            src={TamatoSlice}
            className="w-full object-contain"
          />

          {/* Circle rings (background decoration) */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[280px] h-[280px] rounded-full border border-gray-300 opacity-30" />
          </div>
        </div>

        {/* CENTER TEXT */}
        <div className="w-full lg:w-[30%]">
          <h2 className="text-5xl font-bold text-lime-500 leading-tight">
            LET'S GET <br /> IN TOUCH
          </h2>

          <p className="mt-6 text-gray-600">
            Make orders, take part in promotions, recommend us to friends or connect
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-[35%]">
          
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-gray-200 rounded-full px-5 py-3 outline-none"
            />
            <input
              type="text"
              placeholder="Your phone number"
              className="w-full bg-gray-200 rounded-full px-5 py-3 outline-none"
            />
          </div>

          <input
            type="email"
            placeholder="Your E-mail"
            className="w-full bg-gray-200 rounded-full px-5 py-3 outline-none mb-6"
          />

          {/* BUTTONS */}
          <div className="flex items-center gap-4">
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-semibold">
              Make your choice
            </button>

            {/* SEND ICON BUTTON */}
            <button className="w-12 h-12 rounded-full bg-lime-500 flex items-center justify-center text-white">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* TOP RIGHT LEAF */}
      <img
        src={leaf}
        className="absolute right-10 top-5 w-40 h-40 z-10 rotate-[15deg]"
        style={{marginTop:'-30px'}}
      />

    </section>
  );
}