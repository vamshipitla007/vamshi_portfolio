import { useState } from "react";

import MechanicBg from "@/assets/eurotracks/mechanic.png";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {
      name: "",
      phone: "",
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Введите имя";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Введите номер телефона";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    console.log(formData);

    setFormData({
      name: "",
      phone: "",
    });
  };

  return (
    <section className="w-full bg-[#F5F5F5] px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
      {/* Main Container */}
      <div className="relative overflow-hidden rounded-[6px] min-h-[620px] lg:min-h-[720px]">
        {/* Background */}
        <img
          src={MechanicBg}
          alt="mechanic"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center lg:justify-end h-full px-4 sm:px-6 lg:px-14 py-8">
          {/* Card */}
          <div
            className="
          w-full
          max-w-[620px]
          bg-[#F3F3F3]
          rounded-[18px]
          px-5
          sm:px-8
          lg:px-12
          py-7
          sm:py-9
          lg:py-12
          shadow-sm
        "
          >
            {/* Heading */}
            <h2
              className="
            text-[36px]
            sm:text-[52px]
            lg:text-[72px]
            leading-[100%]
            font-extrabold
            text-[#333333]
            max-w-[380px]
          "
            >
              Остались вопросы?
            </h2>

            {/* Description */}
            <p
              className="
            mt-5
            text-[13px]
            sm:text-[14px]
            lg:text-[15px]
            leading-6
            text-[#666666]
            max-w-[500px]
          "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
              in et, lectus sit lorem id integer.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                  className={`
                w-full
                h-[54px]
                sm:h-[60px]
                rounded-[8px]
                bg-[#E9EAF2]
                px-4
                text-[13px]
                sm:text-[14px]
                text-[#333333]
                placeholder:text-[#9A9A9A]
                outline-none
                border
                transition-all
                ${errors.name ? "border-red-500" : "border-transparent"}
              `}
                />

                {errors.name && (
                  <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Номер телефона"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`
                w-full
                h-[54px]
                sm:h-[60px]
                rounded-[8px]
                bg-[#E9EAF2]
                px-4
                text-[13px]
                sm:text-[14px]
                text-[#333333]
                placeholder:text-[#9A9A9A]
                outline-none
                border
                transition-all
                ${errors.phone ? "border-red-500" : "border-transparent"}
              `}
                />

                {errors.phone && (
                  <p className="mt-1 text-[11px] text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                className="
              w-full
              h-[56px]
              sm:h-[62px]
              rounded-[8px]
              bg-[#4B63F6]
              hover:bg-[#3F56EA]
              transition-all
              duration-300
              text-white
              text-[14px]
              sm:text-[15px]
              font-semibold
              mt-1
            "
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
