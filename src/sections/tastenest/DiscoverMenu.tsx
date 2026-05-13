/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import SteakImg from "@/assets/tastenest/sneaks.png";
import CocktailImg from "@/assets/tastenest/cocktails.png";

const menuCards = [
  {
    title: "Steaks & BBQ",
    subtitle: "canonical classics to obscure tiki drinks",
    image: SteakImg,
    price: "$120",
  },
  {
    title: "Cocktails",
    subtitle: "canonical classics to obscure tiki drinks",
    image: CocktailImg,
    price: "$120",
  },
];

const DiscoverMenu = () => {
  const [formData, setFormData] = useState({
    guests: "",
    date: "",
    time: "",
    fullName: "",
    phone: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev: any) => ({
      ...prev,
      [field]: "",
    }));
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.guests.trim()) {
      newErrors.guests = "Required";
    }

    if (!formData.date.trim()) {
      newErrors.date = "Required";
    }

    if (!formData.time.trim()) {
      newErrors.time = "Required";
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Reservation Submitted:", formData);

    setSubmitted(true);

    setFormData({
      guests: "",
      date: "",
      time: "",
      fullName: "",
      phone: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="w-full bg-[#f5f5f5] py-14 lg:py-20 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-black font-extrabold text-[30px] sm:text-[42px] leading-none">
            Discover Menu
          </h2>

          <div className="w-[110px] h-[6px] rounded-full bg-[#ffd400] mx-auto mt-4" />
        </div>

        {/* Menu Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {menuCards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-[26px] overflow-hidden min-h-[240px] group"
            >
              {/* Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/45" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-7">
                {/* Top */}
                <div>
                  <h3 className="text-white font-extrabold text-[30px] sm:text-[38px] leading-none">
                    {card.title}
                  </h3>

                  <p className="mt-3 max-w-[240px] text-white/90 text-[14px] leading-6">
                    {card.subtitle}
                  </p>
                </div>

                {/* Price Circle */}
                <div className="w-[88px] h-[88px] rounded-full bg-[#ffd400] flex flex-col items-center justify-center shadow-lg">
                  <span className="text-[#ff2150] font-extrabold text-[28px] leading-none">
                    {card.price}
                  </span>

                  <span className="text-black font-bold text-[14px]">
                    person
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reservation Section */}
        <div className="mt-16">
          <div className="relative rounded-[28px] overflow-hidden bg-[#ff2150]">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('/pattern.png')] bg-cover bg-center" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8 px-5 sm:px-8 lg:px-10 py-8 lg:py-10">
              {/* Left */}
              <div>
                <h2 className="text-white font-extrabold leading-[1.05] text-[36px] sm:text-[46px]">
                  RESERVE
                  <br />A TABLE
                </h2>

                <div className="w-[70px] h-[5px] rounded-full bg-[#ffd400] mt-4" />

                <p className="mt-4 text-white text-[15px]">
                  Discover our New Menu !
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_140px_140px] gap-4">
                  {/* Guests */}
                  <div>
                    <input
                      type="text"
                      placeholder="No of Guest"
                      value={formData.guests}
                      onChange={(e) => handleChange("guests", e.target.value)}
                      className="w-full h-[52px] rounded-lg bg-white px-4 text-[14px] outline-none"
                    />

                    {errors.guests && (
                      <p className="mt-1 text-white text-[12px]">
                        {errors.guests}
                      </p>
                    )}
                  </div>

                  {/* Date */}
                  <div>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className="w-full h-[52px] rounded-lg bg-white px-4 text-[14px] outline-none"
                    />

                    {errors.date && (
                      <p className="mt-1 text-white text-[12px]">
                        {errors.date}
                      </p>
                    )}
                  </div>

                  {/* Time */}
                  <div>
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                      className="w-full h-[52px] rounded-lg bg-white px-4 text-[14px] outline-none"
                    />

                    {errors.time && (
                      <p className="mt-1 text-white text-[12px]">
                        {errors.time}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_130px] gap-4">
                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      className="w-full h-[52px] rounded-lg bg-white px-4 text-[14px] outline-none"
                    />

                    {errors.fullName && (
                      <p className="mt-1 text-white text-[12px]">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      type="text"
                      placeholder="Phone No"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="w-full h-[52px] rounded-lg bg-white px-4 text-[14px] outline-none"
                    />

                    {errors.phone && (
                      <p className="mt-1 text-white text-[12px]">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="h-[52px] rounded-xl bg-[#ffd400] text-black font-extrabold text-[16px] border-[2px] border-[#ff2150] shadow-[0_0_0_2px_#ffd400] hover:scale-[1.02] transition-all duration-300"
                  >
                    Submit
                  </button>
                </div>

                {/* Success Message */}
                {submitted && (
                  <div className="bg-white/15 border border-white/20 rounded-lg px-4 py-3 text-white font-semibold text-[14px]">
                    Reservation submitted successfully.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverMenu;
