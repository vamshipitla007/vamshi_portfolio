import {
  ArrowLeft,
  Heart,
  Star,
  Bike,
  Bean,
  Milk,
} from "lucide-react";
import Coffee1 from "@/assets/coffeeapp/coffee1.png";
import { useNavigate } from "react-router-dom";

const CoffeeDetailsScreen = () => {

    const navigate = useNavigate();

    const handleOrder = () => {
        navigate("/coffeeapp/order-details");
    }

    const handleBack = () => {
        window.history.back();
    }

  return (
    <div className="w-full min-h-screen bg-[#F9F9F9] flex justify-center">
      
      {/* Phone Container */}
      <div className="w-full min-h-screen bg-[#F9F9F9] relative px-6 pt-14 pb-32">

        {/* Top Bar */}
        <div className="flex items-center justify-between">
          
          <button className="w-10 h-10 flex items-center justify-center" onClick={handleBack}>
            <ArrowLeft size={22} className="text-[#2F2D2C]" />
          </button>

          <h1 className="text-[20px] font-semibold text-[#2F2D2C]">
            Detail
          </h1>

          <button className="w-10 h-10 flex items-center justify-center">
            <Heart size={22} className="text-[#2F2D2C]" />
          </button>
        </div>

        {/* Coffee Image */}
        <div className="mt-8">
          
          <img
            src={Coffee1}
            alt="coffee"
            className="w-full h-[226px] object-cover rounded-[28px]"
          />
        </div>

        {/* Coffee Info */}
        <div className="mt-6 flex items-start justify-between">
          
          {/* Left */}
          <div>
            
            <h2 className="text-[28px] font-semibold text-[#2F2D2C]">
              Caffe Mocha
            </h2>

            <p className="text-[#9B9B9B] text-[16px] mt-1">
              Ice/Hot
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              
              <div className="flex items-center gap-1">
                <Star
                  size={18}
                  fill="#FBBE21"
                  stroke="#FBBE21"
                />

                <span className="text-[18px] font-semibold text-[#2F2D2C]">
                  4.8
                </span>
              </div>

              <span className="text-[#A2A2A2] text-[14px]">
                (230)
              </span>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex gap-3 mt-8">
            
            <div className="w-[44px] h-[44px] rounded-2xl bg-[#FFF5EE] flex items-center justify-center">
              <Bike size={18} className="text-[#C67C4E]" />
            </div>

            <div className="w-[44px] h-[44px] rounded-2xl bg-[#FFF5EE] flex items-center justify-center">
              <Bean size={18} className="text-[#C67C4E]" />
            </div>

            <div className="w-[44px] h-[44px] rounded-2xl bg-[#FFF5EE] flex items-center justify-center">
              <Milk size={18} className="text-[#C67C4E]" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#EAEAEA] mt-6" />

        {/* Description */}
        <div className="mt-6">
          
          <h3 className="text-[20px] font-semibold text-[#2F2D2C]">
            Description
          </h3>

          <p className="text-[#9B9B9B] text-[15px] leading-8 mt-3">
            A cappuccino is an approximately 150 ml (5 oz)
            beverage, with 25 ml of espresso coffee and
            85ml of fresh milk the fo...
            <span className="text-[#C67C4E] font-semibold cursor-pointer">
              {" "}Read More
            </span>
          </p>
        </div>

        {/* Size */}
        <div className="mt-8">
          
          <h3 className="text-[20px] font-semibold text-[#2F2D2C]">
            Size
          </h3>

          <div className="flex gap-4 mt-5">
            
            <button className="flex-1 h-[50px] rounded-2xl border border-[#E3E3E3] text-[#2F2D2C] text-[16px]">
              S
            </button>

            <button className="flex-1 h-[50px] rounded-2xl border border-[#C67C4E] bg-[#FFF5EE] text-[#C67C4E] text-[16px] font-medium">
              M
            </button>

            <button className="flex-1 h-[50px] rounded-2xl border border-[#E3E3E3] text-[#2F2D2C] text-[16px]">
              L
            </button>
          </div>
        </div>

        {/* Bottom Buy Section */}
        <div className="fixed bottom-0 w-full max-w-[375px] bg-white rounded-t-[32px] px-6 pt-6 pb-8 border-t border-[#F1F1F1]">
          
          <div className="flex items-center justify-between">
            
            {/* Price */}
            <div>
              
              <p className="text-[#9B9B9B] text-[14px]">
                Price
              </p>

              <h2 className="text-[#C67C4E] text-[24px] font-semibold mt-1">
                $ 4.53
              </h2>
            </div>

            {/* Button */}
            <button className="bg-[#C67C4E] w-[217px] h-[62px] rounded-2xl text-white text-[18px] font-semibold" onClick={handleOrder}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetailsScreen;