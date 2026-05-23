import React from "react";
import { motion } from "framer-motion";
import { Star, Heart, Flame } from "lucide-react";
import { useWishlist } from "../../hooks/foodDeliveryHooks";
import { toggleWishlist } from "../../utils/wishlistSlice";
import { useAppDispatch } from "../../hooks/foodDeliveryHooks";
import type { Dish } from "@/data/foodDeliveryTypes";

interface DishCardProps {
  dish: Dish;
  onAddToCart?: () => void;
  showLike?: boolean; // New prop to control the display of the like button
  onClick?: () => void;
}

const DishCard: React.FC<DishCardProps> = ({
  dish,
  onAddToCart,
  onClick,
  showLike = true,
}) => {
  const { items: wishlistItems } = useWishlist();
  const dispatch = useAppDispatch();

  const isInWishlist = wishlistItems.some(
    (item) => item.itemId === dish.id && item.type === "dish",
  );

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(
      toggleWishlist({
        id: `${dish.id}-${Date.now()}`,
        type: "dish",
        itemId: dish.id,
        name: dish.name,
        image: dish.image,
        addedAt: Date.now(),
      }),
    );
  };

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCart) onAddToCart();
  };

  const discount = dish.originalPrice
    ? Math.round(((dish.originalPrice - dish.price) / dish.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      whileHover={{ y: -4 }} // Uses a clean vertical lift instead of scaling the whole layout
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="block w-full bg-white dark:bg-gray-800 rounded-xl shadow-md cursor-pointer hover:shadow-lg overflow-hidden transition-shadow duration-200 select-none border border-gray-100 dark:border-gray-700"
    >
      {/* Image Container - Strictly locked to 160px high */}
      <div className="relative h-40 w-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Wishlist Button */}
        {showLike && (
          <button
            type="button"
            onClick={handleWishlistToggle}
            className="absolute top-2 right-2 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-1.5 shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors"
          >
            <Heart
              size={18}
              className={
                isInWishlist
                  ? "fill-red-500 text-red-500"
                  : "text-gray-600 dark:text-gray-400"
              }
            />
          </button>
        )}

        {dish.isPopular && (
          <div className="absolute top-2 left-2 flex items-center gap-1 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
            <Flame size={12} />
            Popular
          </div>
        )}

        {discount > 0 && (
          <div className="absolute bottom-2 right-2 bg-green-500 text-white px-2 py-1 rounded font-bold text-sm shadow-sm">
            {discount}% OFF
          </div>
        )}
      </div>

      {/* Content Details Container - Enforced structural heights */}
      <div className="p-3 bg-white dark:bg-gray-800 relative z-10 flex flex-col justify-between h-auto min-h-[140px]">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white truncate flex-1">
              {dish.name}
            </h4>
            <div className="flex items-center gap-0.5 flex-shrink-0 bg-gray-50 dark:bg-gray-700/50 px-1.5 py-0.5 rounded">
              <Star size={13} className="text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-bold text-gray-900 dark:text-white">
                {dish.rating}
              </span>
            </div>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 min-h-[32px] mb-2">
            {dish.description}
          </p>

          <div className="flex items-center gap-2 mb-3">
            {dish.isVegetarian && (
              <div className="flex items-center justify-center w-4 h-4 border-2 border-green-600 rounded bg-white dark:bg-gray-800 flex-shrink-0">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
              </div>
            )}
            {dish.isSpicy && (
              <div className="flex items-center gap-0.5 text-red-500 text-[10px] font-semibold bg-red-50 dark:bg-red-950/30 px-1.5 py-0.5 rounded">
                <Flame size={10} className="fill-red-500" />
                <span>SPICY</span>
              </div>
            )}
          </div>
        </div>

        {/* Pricing and Add Action Zone */}
        <div className="flex items-center justify-between pt-1 border-t border-gray-50 dark:border-gray-700/50 mt-auto">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-extrabold text-gray-900 dark:text-white">
              ₹{dish.price}
            </span>
            {dish.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ₹{dish.originalPrice}
              </span>
            )}
          </div>

          {onAddToCart && (
            <div className="relative z-20">
              <button
                type="button"
                onClick={handleAddToCartClick}
                className="block min-w-[72px] px-3 py-1.5 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-xs font-bold rounded-lg shadow-md hover:shadow-orange-500/20 transition-all text-center border border-transparent"
                style={{
                  backgroundColor: "#f97316",
                  color: "#ffffff",
                }}
              >
                Add
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DishCard;
