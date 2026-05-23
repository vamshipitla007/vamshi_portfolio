import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Trash2, ArrowLeft } from 'lucide-react';
import FDNavbar from '../../components/layout/FDNavbar';
import CartSidebar from '../../components/layout/CartSidebar';
import FDButton from '../../components/ui/FDButton';
import DishCard from '../../components/ui/DishCard';
import RestaurantCard from '../../components/ui/RestaurantCard';
import { useWishlist } from '../../hooks/foodDeliveryHooks';
import { removeFromWishlist } from '../../utils/wishlistSlice';
import { useAppDispatch } from '../../hooks/foodDeliveryHooks';
import { mockRestaurants, mockDishes } from '../../data/mockFoodData';
import { addToCart } from '../../utils/cartSlice';
import { useNavigate } from 'react-router-dom';

const WishlistPage: React.FC = () => {
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);
  const { items: wishlistItems } = useWishlist();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const restaurants = wishlistItems.filter(item => item.type === 'restaurant');
  const dishes = wishlistItems.filter(item => item.type === 'dish');

  const handleRemove = (itemId: string, type: 'restaurant' | 'dish') => {
    dispatch(removeFromWishlist({ itemId, type }));
  };

  const handleAddDishToCart = (dishId: string) => {
    const dish = mockDishes.find(d => d.id === dishId);
    if (dish) {
      dispatch(
        addToCart({
          id: `${dish.id}-${Date.now()}`,
          dishId: dish.id,
          restaurantId: dish.restaurantId,
          name: dish.name,
          price: dish.price,
          quantity: 1,
          image: dish.image,
        })
      );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <FDNavbar onCartClick={() => setCartSidebarOpen(true)} />
      <CartSidebar isOpen={cartSidebarOpen} onClose={() => setCartSidebarOpen(false)} />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/food-delivery')}
            className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold mb-8"
          >
            <ArrowLeft size={20} />
            Back
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
              <Heart className="text-red-500" size={32} fill="currentColor" />
              My Wishlist
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {wishlistItems.length} items saved
            </p>
          </motion.div>

          {wishlistItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <Heart className="text-gray-400" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Your wishlist is empty
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Add your favorite restaurants and dishes to save them for later
              </p>
              <FDButton onClick={() => navigate('/food-delivery')}>
                Explore Restaurants
              </FDButton>
            </motion.div>
          ) : (
            <div className="space-y-12">
              {/* Favorite Restaurants */}
              {restaurants.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Favorite Restaurants ({restaurants.length})
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {restaurants.map(item => {
                      const restaurant = mockRestaurants.find(r => r.id === item.itemId);
                      return restaurant ? (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="relative"
                        >
                          <RestaurantCard
                            restaurant={restaurant}
                            onClick={() => navigate(`/food-delivery/restaurant/${restaurant.id}`)}
                            showLike={false}
                          />
                          <button
                            onClick={() => handleRemove(item.itemId, 'restaurant')}
                            className="absolute top-2 right-2 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </motion.div>
                      ) : null;
                    })}
                  </div>
                </motion.section>
              )}

              {/* Favorite Dishes */}
              {dishes.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Favorite Dishes ({dishes.length})
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {dishes.map(item => {
                      const dish = mockDishes.find(d => d.id === item.itemId);
                      return dish ? (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="relative"
                        >
                          <DishCard
                            dish={dish}
                            showLike={false}
                            onAddToCart={() => handleAddDishToCart(dish.id)}
                          />
                          <button
                            onClick={() => handleRemove(item.itemId, 'dish')}
                            className="absolute top-2 right-2 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </motion.div>
                      ) : null;
                    })}
                  </div>
                </motion.section>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
