import React from "react";
import { motion } from "framer-motion";
import { Star, Heart, MapPin, Clock, DollarSign } from "lucide-react";
import { useWishlist } from "../../hooks/foodDeliveryHooks";
import { toggleWishlist } from "../../utils/wishlistSlice";
import { useAppDispatch } from "../../hooks/foodDeliveryHooks";
import type { Restaurant } from "@/data/foodDeliveryTypes";

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick?: () => void;
  showLike?: boolean; // New prop to control the display of the like button
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  onClick,
  showLike = true,
}) => {
  const { items: wishlistItems } = useWishlist();
  const dispatch = useAppDispatch();

  const isInWishlist = wishlistItems.some(
    (item) => item.itemId === restaurant.id && item.type === "restaurant",
  );

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(
      toggleWishlist({
        id: `${restaurant.id}-${Date.now()}`,
        type: "restaurant",
        itemId: restaurant.id,
        name: restaurant.name,
        image: restaurant.image,
        addedAt: Date.now(),
      }),
    );
  };

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)" }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg cursor-pointer transition-all"
    >
      <div className="relative h-40 overflow-hidden bg-gray-200 dark:bg-gray-700">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        {showLike && (
          <button
            onClick={handleWishlistToggle}
            className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          >
            <Heart
              size={20}
              className={
                isInWishlist
                  ? "fill-red-500 text-red-500"
                  : "text-gray-600 dark:text-gray-400"
              }
            />
          </button>
        )}

        {restaurant.tags.length > 0 && (
          <div className="absolute bottom-2 left-2 flex gap-1 flex-wrap">
            {restaurant.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-orange-500 text-white rounded-full font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 truncate">
          {restaurant.name}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {restaurant.cuisine.join(", ")}
        </p>

        <div className="flex items-center gap-4 mb-3 text-sm">
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="font-semibold text-gray-900 dark:text-white">
              {restaurant.rating}
            </span>
            <span className="text-gray-600 dark:text-gray-400">
              ({restaurant.reviewCount})
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
            <Clock size={16} />
            <span>{restaurant.deliveryTime} min</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
            <DollarSign size={16} />
            <span>Min: ₹{restaurant.minOrder}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
            <MapPin size={14} />
            <span className="text-xs">₹{restaurant.deliveryFee} fee</span>
          </div>
        </div>

        {!restaurant.isOpen && (
          <div className="mt-3 py-2 px-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded text-center text-sm font-semibold">
            Currently Closed
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default RestaurantCard;
