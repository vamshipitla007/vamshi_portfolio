/* eslint-disable @typescript-eslint/no-explicit-any */
import banner from "@/assets/belalea/Image14.png";
import bottle from "@/assets/belalea/Image6.png";
import cover from "@/assets/belalea/Image7.png";
import { useNavigate } from "react-router-dom";

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
  {
    id: 9,
    name: "Масло тыквенное, 250мл",
    category: "Масло",
    image: bottle,
  },
  {
    id: 10,
    name: "Масло кунжутное, 250мл",
    category: "Масло",
    image: bottle,
  },
  {
    id: 11,
    name: "Масло грецкого ореха, 250мл",
    category: "Масло",
    image: bottle,
  },
  {
    id: 12,
    name: "Масло конопляное, 250мл",
    category: "Масло",
    image: bottle,
  },
];

const ProductCard = ({ product }: { product: any }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/belalea/catalog/${product.id}`)}
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

const Belaleacatalog = () => {
  return (
    <section className="relative">
      <img
        src={banner}
        alt="About Banner"
        className="w-full h-[220px] md:h-[300px] lg:h-[360px] object-cover"
      />

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
    </section>
  );
};

export default Belaleacatalog;
