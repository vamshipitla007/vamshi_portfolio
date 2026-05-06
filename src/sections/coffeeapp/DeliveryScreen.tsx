import {
  ArrowLeft,
  LocateFixed,
  Bike,
  Phone,
} from "lucide-react";

const DeliveryScreen = () => {

    const handleBack = () => {
        window.history.back();
    }

  return (
    <div className="w-full min-h-screen bg-[#F9F9F9] flex justify-center">
      
      {/* Phone Container */}
      <div className="w-full h-screen relative overflow-hidden bg-[#EDEDED]">

        {/* Temporary Map Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop')",
          }}
        >
          {/* Light Overlay */}
          <div className="absolute inset-0 bg-white/70" />
        </div>


        {/* Top Buttons */}
        <div className="absolute top-14 left-6 right-6 flex items-center justify-between z-30">
          
          <button className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center" onClick={handleBack}>
            <ArrowLeft size={22} className="text-[#2F2D2C]" />
          </button>

          <button className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
            <LocateFixed size={22} className="text-[#2F2D2C]" />
          </button>
        </div>

        {/* Bottom Delivery Card */}
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[36px] px-6 pt-8 pb-10 z-30">
          
          {/* Time */}
          <div className="text-center">
            
            <h2 className="text-[32px] font-semibold text-[#2F2D2C]">
              10 minutes left
            </h2>

            <p className="text-[#A2A2A2] text-[16px] mt-2">
              Delivery to{" "}
              <span className="text-[#2F2D2C] font-semibold">
                Jl. Kpg Sutoyo
              </span>
            </p>
          </div>

          {/* Progress */}
          <div className="flex gap-3 mt-8">
            
            <div className="flex-1 h-[5px] rounded-full bg-[#36C07E]" />

            <div className="flex-1 h-[5px] rounded-full bg-[#36C07E]" />

            <div className="flex-1 h-[5px] rounded-full bg-[#36C07E]" />

            <div className="flex-1 h-[5px] rounded-full bg-[#E4E4E4]" />
          </div>

          {/* Delivery Status Card */}
          <div className="mt-8 border border-[#EAEAEA] rounded-3xl p-4 flex gap-4">
            
            {/* Icon */}
            <div className="w-[62px] h-[62px] rounded-2xl border border-[#EAEAEA] flex items-center justify-center">
              <Bike size={28} className="text-[#C67C4E]" />
            </div>

            {/* Text */}
            <div className="flex-1">
              
              <h3 className="text-[20px] font-semibold text-[#2F2D2C]">
                Delivered your order
              </h3>

              <p className="text-[#A2A2A2] text-[15px] leading-7 mt-2">
                We will deliver your goods to you in
                the shortest possible time.
              </p>
            </div>
          </div>

          {/* Courier */}
          <div className="flex items-center justify-between mt-8">
            
            {/* Left */}
            <div className="flex items-center gap-4">
              
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="courier"
                className="w-[62px] h-[62px] rounded-2xl object-cover"
              />

              <div>
                
                <h3 className="text-[22px] font-semibold text-[#2F2D2C]">
                  Brooklyn Simmons
                </h3>

                <p className="text-[#A2A2A2] text-[16px] mt-1">
                  Personal Courier
                </p>
              </div>
            </div>

            {/* Call */}
            <button className="w-[54px] h-[54px] rounded-2xl border border-[#EAEAEA] flex items-center justify-center bg-white">
              <Phone size={22} className="text-[#2F2D2C]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryScreen;