/* eslint-disable @typescript-eslint/no-explicit-any */

import { useNavigate } from "react-router-dom";
import { ArrowRight, Leaf, ShieldCheck } from "lucide-react";

import heroBg from "@/assets/belalea/Image2.png";
import promo1 from "@/assets/belalea/Image3.png";
import promo2 from "@/assets/belalea/Image4.png";
import aboutBg from "@/assets/belalea/Image5.png";
import bottle from "@/assets/belalea/Image6.png";
import cover from "@/assets/belalea/Image7.png";
import sectionBg from "@/assets/belalea/Image8.png";
import farmImage from "@/assets/belalea/Image9.png";

const products = [
  {
    id: 1,
    name: "Масло тыквенное, 250мл",
    category: "Масло",
    image: bottle,
  },
  {
    id: 2,
    name: "Масло кунжутное, 250мл",
    category: "Масло",
    image: bottle,
  },
  {
    id: 3,
    name: "Масло грецкого ореха, 250мл",
    category: "Масло",
    image: bottle,
  },
  {
    id: 4,
    name: "Масло конопляное, 250мл",
    category: "Масло",
    image: bottle,
  },
  {
    id: 5,
    name: "Мука рисовая, 500г",
    category: "Мука",
    image: cover,
  },
  {
    id: 6,
    name: "Мука льняная, 500г",
    category: "Мука",
    image: cover,
  },
  {
    id: 7,
    name: "Мука кукурузная, 500г",
    category: "Мука",
    image: cover,
  },
  {
    id: 8,
    name: "Мука овсяная, 500г",
    category: "Мука",
    image: cover,
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

const features = [
  {
    title: "Современное сельское хозяйство",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    title: "Технологичный подход в производстве",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    title: "Популяризация натуральных продуктов",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
];

const categories = [
  {
    id: 1,
    title: "Натуральные масла",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=80",
    route: "/oils",
  },
  {
    id: 2,
    title: "НОВИНКИ",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
    route: "/new-products",
  },
  {
    id: 3,
    title: "Полезная мука",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    route: "/flour",
  },
];

const blogs = [
  {
    id: 1,
    title: "Витаминная заправка для летнего салата",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
    date: "25",
    month: "Авг.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80",
  },
  {
    id: 2,
    title: "Каких витаминов не хватает осенью?",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
    date: "25",
    month: "Окт.",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=1200&q=80",
  },
];

const ProductCard = ({ product }: { product: any }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-[#F1F1F1]"
    >
      <span className="inline-flex rounded-md bg-[#274C5B] px-3 py-1 text-xs text-white">
        {product.category}
      </span>

      <div className="h-80 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-40 object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h3 className="mt-4 text-[15px] font-medium text-[#274C5B]">
        {product.name}
      </h3>
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

const BlogCard = ({ blog } : { blog: any }) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative group cursor-pointer overflow-visible"
      onClick={() => navigate(`/news/${blog.id}`)}
    >
      {/* Background */}

      <div className="overflow-hidden rounded-[30px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="
          w-full
          h-[360px]
          object-cover
          transition
          duration-700
          group-hover:scale-110
          "
        />
      </div>

      {/* Date */}

      <div
        className="
        absolute
        top-5
        left-5
        w-16
        h-16
        rounded-full
        bg-white
        shadow-lg
        flex
        flex-col
        items-center
        justify-center
        "
      >
        <span className="font-bold text-[#274C5B] text-xl">{blog.date}</span>

        <span className="text-xs font-medium text-[#274C5B]">{blog.month}</span>
      </div>

      {/* Content */}

      <div
        className="
        absolute
        left-6
        right-6
        bottom-[-55px]
        bg-white
        rounded-[26px]
        shadow-2xl
        p-8
        transition-all
        duration-300
        group-hover:-translate-y-2
        "
      >
        <h3 className="text-[28px] font-bold text-[#274C5B]">{blog.title}</h3>

        <p className="mt-4 text-[#6B7280] leading-7">{blog.description}</p>

        <button
          className="
          mt-7
          h-14
          px-8
          rounded-xl
          bg-[#F4D35E]
          flex
          items-center
          gap-3
          font-semibold
          text-[#274C5B]
          hover:bg-[#EBC847]
          transition
          "
        >
          Подробнее
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

const Products = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-5">
        <p className="text-center text-[#7EB693] italic text-3xl">Категории</p>

        <h2 className="text-center text-[#274C5B] text-5xl font-bold mb-14">
          Наши продукты
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <button className="bg-[#274C5B] text-white px-8 py-4 rounded-xl hover:bg-[#1F3C47] transition">
            Смотреть всё →
          </button>
        </div>
      </div>
      <div>
        <img
          src={sectionBg}
          alt="Cover"
          className="w-full h-[400px] object-cover mt-20 rounded-tl-[30px] rounded-tr-[30px]"
        />
      </div>
    </section>
  );
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white">
      <div className="mx-auto lg:px-8">
        {/* ================= HERO ================= */}

        <div
          className="
          relative
          overflow-hidden
          rounded-[30px]
          bg-cover
          bg-center
          min-h-[620px]
          flex
          items-center
          "
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        >
          {/* Overlay */}

          <div className="absolute inset-0 bg-white/10" />

          <div className="relative z-10 w-full px-8 md:px-14 lg:px-20">
            <div className="max-w-[450px]">
              <span
                className="
                block
                text-[#79B56E]
                italic
                text-[26px]
                md:text-[34px]
                font-light
                "
              >
                100% натурально
              </span>

              <h1
                className="
                mt-2
                text-[#284B5A]
                text-[42px]
                md:text-[60px]
                leading-[1.05]
                font-bold
                "
              >
                Масла и мука
                <br />
                из фермерского
                <br />
                сырья
              </h1>

              <button
                onClick={() => navigate("/catalog")}
                className="
                mt-10
                h-[60px]
                px-9
                rounded-2xl
                bg-[#F3CF63]
                hover:bg-[#E9C44B]
                duration-300
                flex
                items-center
                gap-3
                text-[#284B5A]
                font-semibold
                text-[16px]
                "
              >
                В КАТАЛОГ
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= PROMOTION ================= */}

        <div
          className="
          grid
          lg:grid-cols-2
          gap-8
          mt-16
          "
        >
          {/* Card 1 */}

          <div
            className="
            h-[260px]
            rounded-[26px]
            overflow-hidden
            bg-cover
            bg-center
            flex
            items-center
            "
            style={{
              backgroundImage: `url(${promo1})`,
            }}
          >
            <div className="pl-10">
              <span
                className="
                text-white
                italic
                text-[30px]
                "
              >
                Новинки!
              </span>

              <h3
                className="
                mt-2
                text-white
                font-bold
                text-[42px]
                leading-tight
                "
              >
                Свежайшее
                <br />
                штирийское
                <br />
                масло
              </h3>
            </div>
          </div>

          {/* Card 2 */}

          <div
            className="
            h-[260px]
            rounded-[26px]
            overflow-hidden
            bg-cover
            bg-center
            flex
            items-center
            "
            style={{
              backgroundImage: `url(${promo2})`,
            }}
          >
            <div className="pl-10">
              <span
                className="
                text-[#7DBA76]
                italic
                text-[30px]
                "
              >
                Скидка!
              </span>

              <h3
                className="
                mt-2
                text-[#284B5A]
                font-bold
                text-[42px]
                leading-tight
                "
              >
                Скидка 20%
                <br />
                за подписку
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Hero2 = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-16 lg:py-24"
      style={{
        backgroundImage: `url(${aboutBg})`,
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Image */}

          <div className="flex justify-center lg:justify-start"></div>

          {/* Right Content */}

          <div className="max-w-[560px]">
            <p
              className="
                text-[#7EB693]
                italic
                text-[28px]
                md:text-[34px]
              "
            >
              О нас
            </p>

            <h2
              className="
                mt-2
                text-[#274C5B]
                font-bold
                leading-tight
                text-[34px]
                md:text-[46px]
                lg:text-[52px]
              "
            >
              Мы работаем только с качественным сырьём от местных фермеров
            </h2>

            <p
              className="
                mt-6
                text-[#6B7280]
                leading-8
                text-[16px]
              "
            >
              Работа с местными фермерами приносит производственным компаниям
              преимущества в виде высококачественного сырья, укрепляет местное
              сообщество, снижает экологический след и обеспечивает прозрачность
              производства.
            </p>

            {/* Feature 1 */}

            <div className="flex gap-5 mt-10">
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-white
                  shadow-lg
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <Leaf size={30} className="text-[#7EB693]" />
              </div>

              <div>
                <h3 className="text-[#274C5B] text-xl font-semibold">
                  Только натуральная продукция
                </h3>

                <p className="text-[#6B7280] mt-2 leading-7">
                  Полагаясь на природу, мы производим продукцию без
                  искусственных добавок и консервантов.
                </p>
              </div>
            </div>

            {/* Feature 2 */}

            <div className="flex gap-5 mt-8">
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-white
                  shadow-lg
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <ShieldCheck size={30} className="text-[#7EB693]" />
              </div>

              <div>
                <h3 className="text-[#274C5B] text-xl font-semibold">
                  Высокие стандарты качества
                </h3>

                <p className="text-[#6B7280] mt-2 leading-7">
                  Мы тщательно контролируем качество продукции на каждом этапе
                  производства.
                </p>
              </div>
            </div>

            {/* Button */}

            <button
              onClick={() => navigate("/about")}
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                bg-[#274C5B]
                hover:bg-[#1E3B47]
                text-white
                px-8
                h-14
                rounded-xl
                transition-all
                duration-300
                font-medium
              "
            >
              Подробнее
              <span
                className="
                  w-7
                  h-7
                  rounded-full
                  bg-[#335B6B]
                  flex
                  items-center
                  justify-center
                "
              >
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Hero3 = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#91BF97] py-20">
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
    </section>
  );
};

const Hero4 = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-16 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="relative">
          {/* Desktop */}

          <div className="hidden lg:block">
            <img
              src={farmImage}
              alt="Farm"
              className="
                w-[68%]
                h-[700px]
                object-cover
                rounded-[30px]
              "
            />

            <div
              className="
                absolute
                top-1/2
                right-0
                -translate-y-1/2
                w-[55%]
                bg-white
                rounded-[35px]
                shadow-xl
                p-16
              "
            >
              <span
                className="
                  text-[#7EB693]
                  text-[34px]
                  italic
                "
                style={{
                  fontFamily: "cursive",
                }}
              >
                Eco Friendly
              </span>

              <h2
                className="
                  mt-3
                  text-[52px]
                  leading-[1.1]
                  font-bold
                  text-[#274C5B]
                "
              >
                Создаём здоровое будущее
              </h2>

              <div className="mt-10 space-y-8">
                {features.map((item) => (
                  <div key={item.title}>
                    <h3
                      className="
                        text-[24px]
                        font-semibold
                        text-[#274C5B]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[16px]
                        leading-8
                        text-[#6B7280]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/about")}
                className="
                  mt-12
                  inline-flex
                  items-center
                  gap-3
                  bg-[#274C5B]
                  hover:bg-[#1F3D49]
                  text-white
                  px-8
                  h-14
                  rounded-xl
                  transition
                "
              >
                Подробнее
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Tablet & Mobile */}

          <div className="lg:hidden">
            <img
              src={farmImage}
              alt="Farm"
              className="
                w-full
                h-[300px]
                md:h-[450px]
                object-cover
                rounded-[24px]
              "
            />

            <div
              className="
                bg-white
                rounded-[24px]
                shadow-xl
                p-7
                md:p-10
                -mt-12
                relative
                mx-4
              "
            >
              <span
                className="
                  text-[#7EB693]
                  italic
                  text-[28px]
                "
              >
                Eco Friendly
              </span>

              <h2
                className="
                  mt-2
                  text-[34px]
                  md:text-[42px]
                  font-bold
                  leading-tight
                  text-[#274C5B]
                "
              >
                Создаём здоровое будущее
              </h2>

              <div className="mt-8 space-y-7">
                {features.map((item) => (
                  <div key={item.title}>
                    <h3
                      className="
                        text-[20px]
                        font-semibold
                        text-[#274C5B]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[15px]
                        leading-7
                        text-[#6B7280]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/about")}
                className="
                  mt-8
                  w-full
                  h-14
                  rounded-xl
                  bg-[#274C5B]
                  text-white
                  font-medium
                  hover:bg-[#1F3D49]
                  transition
                "
              >
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Hero5 = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F4FAF7] py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {categories.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(item.route)}
              className="
                relative
                overflow-hidden
                rounded-[26px]
                cursor-pointer
                group
                h-[260px]
                md:h-[340px]
                xl:h-[430px]
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition duration-300" />

              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div
                  className="
                    bg-white
                    rounded-[18px]
                    shadow-lg
                    w-[250px]
                    h-[72px]
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    group-hover:scale-105
                  "
                >
                  <h3
                    className="
                      text-[#274C5B]
                      text-[22px]
                      md:text-[24px]
                      font-semibold
                      text-center
                    "
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Hero6 = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Header */}

        <div
          className="
          flex
          flex-col
          lg:flex-row
          justify-between
          items-center
          gap-8
          mb-16
          "
        >
          <div>
            <p
              className="
              text-[#7EB693]
              italic
              text-[30px]
              "
            >
              Новости
            </p>

            <h2
              className="
              mt-2
              text-[#274C5B]
              font-bold
              text-[34px]
              md:text-[52px]
              leading-tight
              max-w-[650px]
              "
            >
              Новости об органических продуктах и многом другом
            </h2>
          </div>

          <button
            onClick={() => navigate("/news")}
            className="
            border
            border-[#274C5B]
            h-14
            px-8
            rounded-xl
            flex
            items-center
            gap-3
            font-semibold
            text-[#274C5B]
            hover:bg-[#274C5B]
            hover:text-white
            transition
            "
          >
            Больше новостей
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Cards */}

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          pb-24
          "
        >
          {blogs.map((item) => (
            <BlogCard key={item.id} blog={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BelaleaHome = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col overflow-hidden">
      <HeroSection />
      <Hero2 />
      <Products />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Hero6 />
    </div>
  );
};

export default BelaleaHome;
