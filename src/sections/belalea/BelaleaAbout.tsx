/* eslint-disable @typescript-eslint/no-explicit-any */
import banner from "@/assets/belalea/Image11.png";
import {
  ArrowRight,
  Sprout,
  Tractor,
  CheckCircle,
  ShoppingCart,
  Leaf,
  Headset,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import foodImage from "@/assets/belalea/Image12.png";
import aboutImage from "@/assets/belalea/Image13.png";
import bottle from "@/assets/belalea/Image6.png";

const features = [
  {
    icon: ShoppingCart,
    title: "Доступность",
    description: "Наша продукция во всех гипермаркетах",
  },
  {
    icon: Leaf,
    title: "100% Свежесть",
    description: "Мы — местный производитель",
  },
  {
    icon: Headset,
    title: "Поддержка",
    description: "Мы всегда готовы ответить на все вопросы",
  },
];

const featuredProducts = [
  {
    id: 1,
    category: "Масла",
    name: "Масло тыквенное, 250мл",
    image: bottle,
  },
  {
    id: 2,
    category: "Масла",
    name: "Масло тыквенное, 250мл",
    image: bottle,
  },
  {
    id: 3,
    category: "Масла",
    name: "Масло тыквенное, 250мл",
    image: bottle,
  },
  {
    id: 4,
    category: "Масла",
    name: "Масло тыквенное, 250мл",
    image: bottle,
  },
];

const FeatureBox = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => {
  return (
    <div
      className="
      bg-white
      rounded-[24px]
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
      p-8
      text-center
      group
      hover:-translate-y-2
      "
    >
      <div
        className="
        w-16
        h-16
        rounded-2xl
        bg-[#F5F8F6]
        mx-auto
        flex
        items-center
        justify-center
        "
      >
        <Icon size={30} className="text-[#274C5B] group-hover:text-[#7EB693]" />
      </div>

      <h3 className="mt-6 text-[24px] font-semibold text-[#274C5B]">{title}</h3>

      <p className="mt-3 text-[15px] leading-7 text-[#6B7280]">{description}</p>
    </div>
  );
};

const ProductList = ({ product }: { product: any }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="
      bg-white
      rounded-[22px]
      p-5
      cursor-pointer
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      border
      border-[#F2F2F2]
      "
    >
      <span
        className="
        inline-flex
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

      <div className="mt-5 flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="
          h-[220px]
          object-contain
          transition-transform
          duration-300
          group-hover:scale-105
          "
        />
      </div>

      <h3
        className="
        mt-5
        text-[#274C5B]
        text-[16px]
        font-medium
        "
      >
        {product.name}
      </h3>
    </div>
  );
};

const BelaleaAbout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="relative">
        <img
          src={banner}
          alt="About Banner"
          className="w-full h-[220px] md:h-[300px] lg:h-[360px] object-cover"
        />

        {/* <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <h1 className="text-[#274C5B] text-[42px] md:text-[58px] lg:text-[72px] font-bold">
            О нас
          </h1>
        </div> */}
        <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left Image */}

            <div className="flex justify-center">
              <img
                src={foodImage}
                alt="Healthy Food"
                className="w-full max-w-[620px] object-contain"
              />
            </div>

            {/* Right */}

            <div>
              <span
                className="text-[#7EB693] text-[30px] italic"
                style={{ fontFamily: "cursive" }}
              >
                О нас
              </span>

              <h2 className="mt-2 text-[#274C5B] text-[34px] md:text-[48px] lg:text-[56px] font-bold leading-tight">
                Натуральные продукты —
                <br />
                здоровое население
              </h2>

              <p className="mt-6 text-[#6B7280] text-[16px] leading-8">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s when an unknown printer took a galley.
              </p>

              <p className="mt-5 text-[#6B7280] text-[16px] leading-8">
                We carefully select raw materials, work with trusted farmers,
                and maintain strict quality control throughout production.
              </p>

              {/* Features */}

              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#F5FBF7] flex items-center justify-center">
                    <Tractor className="text-[#7EB693]" />
                  </div>

                  <div>
                    <h4 className="text-[#274C5B] font-semibold text-[18px]">
                      Современная сельхоз. техника
                    </h4>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#F5FBF7] flex items-center justify-center">
                    <Sprout className="text-[#7EB693]" />
                  </div>

                  <div>
                    <h4 className="text-[#274C5B] font-semibold text-[18px]">
                      Выращивание без гормонов
                    </h4>
                  </div>
                </div>
              </div>

              {/* Button */}

              <button
                onClick={() => navigate("/contact")}
                className="
                mt-10
                inline-flex
                items-center
                gap-3
                bg-[#274C5B]
                hover:bg-[#1F3F4B]
                text-white
                px-8
                h-14
                rounded-xl
                transition
              "
              >
                Контакты
                <div className="w-7 h-7 rounded-full bg-[#335B6B] flex items-center justify-center">
                  <ArrowRight size={16} />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
          {/* Top */}

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}

            <div>
              <p
                className="
              text-[#7EB693]
              italic
              text-[32px]
              "
                style={{
                  fontFamily: "cursive",
                }}
              >
                Почему мы?
              </p>

              <h2
                className="
              mt-2
              text-[#274C5B]
              font-bold
              leading-tight
              text-[36px]
              md:text-[52px]
              "
              >
                Мы закупаем семена и
                <br />
                орехи у лучших фермеров.
              </h2>

              <p
                className="
              mt-6
              text-[#6B7280]
              text-[16px]
              leading-8
              "
              >
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>

              {/* Point 1 */}

              <div
                className="
              mt-10
              rounded-full
              bg-[#F6F6F6]
              px-6
              py-4
              inline-flex
              items-center
              gap-3
              "
              >
                <CheckCircle size={22} className="text-[#7EB693]" />

                <span className="font-semibold text-[#274C5B]">
                  100% Натуральные продукты
                </span>
              </div>

              <p className="ml-14 mt-4 text-[#6B7280] leading-7">
                Simply dummy text of the printing and typesetting industry Lorem
                Ipsum
              </p>

              {/* Point 2 */}

              <div
                className="
              mt-10
              rounded-full
              bg-[#F6F6F6]
              px-6
              py-4
              inline-flex
              items-center
              gap-3
              "
              >
                <CheckCircle size={22} className="text-[#7EB693]" />

                <span className="font-semibold text-[#274C5B]">
                  Сертификаты качества и соответствия
                </span>
              </div>

              <p className="ml-14 mt-4 text-[#6B7280] leading-7">
                Filling and temptingly healthy, our products meet high quality
                standards.
              </p>
            </div>

            {/* Right */}

            <div>
              <img
                src={aboutImage}
                alt=""
                className="
              w-full
              rounded-[30px]
              object-cover
              shadow-lg
              "
              />
            </div>
          </div>

          {/* Bottom */}

          <div
            className="
          mt-20
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
          >
            {features.map((item) => (
              <FeatureBox key={item.title} {...item} />
            ))}
          </div>
        </div>
        <div className="bg-[#91BF97] py-20">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
            {/* Header */}

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-14">
              <h2
                className="
                    text-white
                    text-center
                    lg:text-left
                    text-[34px]
                    md:text-[42px]
                    font-bold
                    "
              >
                Лучшие предложения месяца
              </h2>

              <button
                onClick={() => navigate("/products")}
                className="
                    h-14
                    px-8
                    rounded-xl
                    bg-[#F4D35E]
                    hover:bg-[#ECC94B]
                    transition
                    duration-300
                    flex
                    items-center
                    gap-3
                    text-[#274C5B]
                    font-semibold
                    "
              >
                Смотреть все
                <span
                  className="
                      w-7
                      h-7
                      rounded-full
                      bg-[#274C5B]
                      text-white
                      flex
                      items-center
                      justify-center
                      "
                >
                  <ArrowRight size={16} />
                </span>
              </button>
            </div>

            {/* Products */}

            <div
              className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-4
                  gap-8
                  "
            >
              {featuredProducts.map((product) => (
                <ProductList key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BelaleaAbout;
