import { ProductCard } from "@/components/ui/ProductCard";

export type ProductCardProps = {
  id: number;
  title: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  isFavorite?: boolean;
};

const favoriteProducts: ProductCardProps[] = [
  {
    id: 1,
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviews: 131,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop",
    isFavorite: true,
  },
  {
    id: 2,
    title: "Air-Max-270",
    price: "$60.00",
    rating: 4,
    reviews: 64,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop",
    isFavorite: false,
  },
  {
    id: 3,
    title: "Minimal Chair Tool",
    price: "$24.59",
    rating: 5,
    reviews: 63,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop",
    isFavorite: false,
  },
  {
    id: 4,
    title: "Amazfit Vip",
    price: "$79.35",
    rating: 4,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop",
    isFavorite: false,
  },
  {
    id: 5,
    title: "Gumbo Mouse",
    price: "$33.49",
    rating: 4,
    reviews: 44,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop",
    isFavorite: false,
  },
  {
    id: 6,
    title: "Camera Tripod",
    price: "$50.00",
    rating: 5,
    reviews: 70,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop",
    isFavorite: false,
  },
];

function DashStackFavorite() {
  return (
    <div className="w-full">
      {/* Heading */}
      <div className="mb-5">
        <h1 className="text-[32px] font-bold text-[#202224] relative inline-block">
          Favorites
        </h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {favoriteProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            reviews={product.reviews}
            image={product.image}
            isFavorite={product.isFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default DashStackFavorite;
