import {
  ArrowLeft,
  MapPinned,
  FileText,
  Minus,
  Plus,
  ChevronRight,
  Wallet,
  ChevronDown,
  BadgePercent,
} from "lucide-react";
import Coffee1 from "@/assets/coffeeapp/coffee1.png";
import { useNavigate } from "react-router-dom";

const OrderDetailsScreen = () => {
  const navigate = useNavigate();

  const hanldeDelivery = () => {
    navigate("/coffeeapp/delivery");
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="w-full min-h-screen bg-[#F9F9F9] flex justify-center">
      {/* Phone Container */}
      <div className="w-full min-h-screen bg-[#F9F9F9] relative overflow-hidden">
        {/* Content */}
        <div className="px-6 pt-14 pb-44">
          {/* Header */}
          <div className="flex items-center justify-between">
            <button
              className="w-10 h-10 flex items-center justify-center"
              onClick={handleBack}
            >
              <ArrowLeft size={22} className="text-[#2F2D2C]" />
            </button>

            <h1 className="text-[22px] font-semibold text-[#2F2D2C]">Order</h1>

            <div className="w-10" />
          </div>

          {/* Tabs */}
          <div className="mt-8 bg-[#EEEEEE] rounded-2xl p-1 flex">
            <button className="flex-1 h-[44px] bg-[#C67C4E] rounded-xl text-white text-[16px] font-semibold">
              Deliver
            </button>

            <button className="flex-1 h-[44px] text-[#2F2D2C] text-[16px] font-medium">
              Pick Up
            </button>
          </div>

          {/* Address */}
          <div className="mt-8">
            <h2 className="text-[20px] font-semibold text-[#2F2D2C]">
              Delivery Address
            </h2>

            <h3 className="mt-5 text-[18px] font-semibold text-[#2F2D2C]">
              Jl. Kpg Sutoyo
            </h3>

            <p className="mt-1 text-[#A2A2A2] text-[14px] leading-6">
              Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
            </p>

            {/* Address Actions */}
            <div className="flex gap-3 mt-5">
              <button className="h-[34px] px-4 rounded-full border border-[#DEDEDE] flex items-center gap-2 bg-white">
                <MapPinned size={16} className="text-[#2F2D2C]" />

                <span className="text-[14px] text-[#2F2D2C] font-medium">
                  Edit Address
                </span>
              </button>

              <button className="h-[34px] px-4 rounded-full border border-[#DEDEDE] flex items-center gap-2 bg-white">
                <FileText size={16} className="text-[#2F2D2C]" />

                <span className="text-[14px] text-[#2F2D2C] font-medium">
                  Add Note
                </span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-[#EAEAEA] mt-8" />

          {/* Product */}
          <div className="flex items-center justify-between mt-6">
            {/* Left */}
            <div className="flex items-center gap-4">
              <img
                src={Coffee1}
                alt="coffee"
                className="w-[64px] h-[64px] rounded-2xl object-cover"
              />

              <div>
                <h3 className="text-[18px] font-semibold text-[#2F2D2C]">
                  Caffe Mocha
                </h3>

                <p className="text-[#9B9B9B] text-[14px] mt-1">Deep Foam</p>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <button className="w-8 h-8 rounded-full border border-[#E3E3E3] flex items-center justify-center bg-white">
                <Minus size={16} className="text-[#A2A2A2]" />
              </button>

              <span className="text-[16px] font-semibold text-[#2F2D2C]">
                1
              </span>

              <button className="w-8 h-8 rounded-full border border-[#E3E3E3] flex items-center justify-center bg-white">
                <Plus size={16} className="text-[#2F2D2C]" />
              </button>
            </div>
          </div>

          {/* Light Divider */}
          <div className="h-[4px] bg-[#F4F4F4] mt-8 -mx-6" />

          {/* Discount Card */}
          <div className="mt-8">
            <button className="w-full h-[64px] rounded-2xl border border-[#EEEEEE] bg-white px-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#FFF5EE] flex items-center justify-center">
                  <BadgePercent size={16} className="text-[#C67C4E]" />
                </div>

                <span className="text-[18px] font-semibold text-[#2F2D2C]">
                  1 Discount is Applies
                </span>
              </div>

              <ChevronRight size={20} className="text-[#2F2D2C]" />
            </button>
          </div>

          {/* Payment Summary */}
          <div className="mt-8">
            <h2 className="text-[22px] font-semibold text-[#2F2D2C]">
              Payment Summary
            </h2>

            {/* Price */}
            <div className="flex items-center justify-between mt-6">
              <span className="text-[18px] text-[#2F2D2C]">Price</span>

              <span className="text-[20px] font-semibold text-[#2F2D2C]">
                $ 4.53
              </span>
            </div>

            {/* Delivery */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-[18px] text-[#2F2D2C]">Delivery Fee</span>

              <div className="flex items-center gap-2">
                <span className="text-[#A2A2A2] line-through text-[18px]">
                  $ 2.0
                </span>

                <span className="text-[20px] font-semibold text-[#2F2D2C]">
                  $ 1.0
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="fixed bottom-0 w-full bg-white rounded-t-[32px] px-6 pt-6 pb-8 border-t border-[#F3F3F3]">
          {/* Wallet */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FFF5EE] flex items-center justify-center">
                <Wallet size={18} className="text-[#C67C4E]" />
              </div>

              <div>
                <h3 className="text-[18px] font-semibold text-[#2F2D2C]">
                  Cash/Wallet
                </h3>

                <p className="text-[#C67C4E] text-[16px] font-medium mt-1">
                  $ 5.53
                </p>
              </div>
            </div>

            <ChevronDown size={22} className="text-[#2F2D2C]" />
          </div>

          {/* Order Button */}
          <button
            className="w-full h-[62px] rounded-2xl bg-[#C67C4E] text-white text-[22px] font-semibold mt-6"
            onClick={hanldeDelivery}
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsScreen;
