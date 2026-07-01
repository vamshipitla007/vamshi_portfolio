import { useState } from "react";
import banner from "@/assets/belalea/Image15.png";
import riceFlour from "@/assets/belalea/Image7.png";

const product = {
  id: 1,

  name: "Мука Рисовая",

  category: "Мука",

  description:
    "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

  description2:
    "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

  images: [riceFlour, riceFlour, riceFlour, riceFlour],
};

const Belaleacatalogdetails = () => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <section className="relative">
      <img
        src={banner}
        alt="About Banner"
        className="w-full h-[220px] md:h-[300px] lg:h-[360px] object-cover"
      />
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}

          <div>
            {/* Main Image */}

            <div
              className="
              relative
              bg-[#F9F9F9]
              rounded-[28px]
              border
              border-[#EEEEEE]
              p-10
              "
            >
              <span
                className="
                absolute
                top-5
                left-5
                bg-[#274C5B]
                text-white
                text-xs
                px-3
                py-1
                rounded-md
                "
              >
                {product.category}
              </span>

              <img
                src={selectedImage}
                alt={product.name}
                className="
                mx-auto
                h-[420px]
                object-contain
                "
              />
            </div>

            {/* Thumbnails */}

            <div className="flex gap-4 mt-6 flex-wrap">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`
                  w-24
                  h-24
                  rounded-xl
                  border-2
                  overflow-hidden
                  transition
                  ${
                    selectedImage === image
                      ? "border-[#7EB693]"
                      : "border-[#EEEEEE]"
                  }
                  `}
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-contain bg-white"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <h1
              className="
              text-[#274C5B]
              text-[42px]
              font-bold
              "
            >
              {product.name}
            </h1>

            <p
              className="
              mt-6
              text-[#6B7280]
              leading-8
              text-[16px]
              "
            >
              {product.description}
            </p>

            <p
              className="
              mt-5
              text-[#6B7280]
              leading-8
              text-[16px]
              "
            >
              {product.description2}
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">
              <button
                className="
                h-14
                px-10
                rounded-xl
                bg-[#C52B94]
                hover:bg-[#A51F79]
                text-white
                font-medium
                transition
                "
              >
                Wildberries
              </button>

              <button
                className="
                h-14
                px-10
                rounded-xl
                bg-[#2E36F3]
                hover:bg-[#1E25C5]
                text-white
                font-medium
                transition
                "
              >
                OZON
              </button>
            </div>

            {/* Extra */}

            <div className="mt-12 space-y-4">
              <div className="flex justify-between border-b pb-4">
                <span className="text-[#274C5B] font-medium">Категория</span>

                <span className="text-[#6B7280]">{product.category}</span>
              </div>

              <div className="flex justify-between border-b pb-4">
                <span className="text-[#274C5B] font-medium">Вес</span>

                <span className="text-[#6B7280]">500 г</span>
              </div>

              <div className="flex justify-between border-b pb-4">
                <span className="text-[#274C5B] font-medium">
                  Производитель
                </span>

                <span className="text-[#6B7280]">Belalea</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Belaleacatalogdetails;
