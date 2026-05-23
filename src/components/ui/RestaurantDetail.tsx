/* eslint-disable react-hooks/purity */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, DollarSign, Star } from 'lucide-react';
import FDNavbar from '../../components/layout/FDNavbar';
import CartSidebar from '../../components/layout/CartSidebar';
import DishCard from '../../components/ui/DishCard';
import FDButton from '../../components/ui/FDButton';
import { mockRestaurants, mockDishes } from '../../data/mockFoodData';
import { useRestaurants } from '../../hooks/foodDeliveryHooks';
import { addToCart } from '../../utils/cartSlice';
import { useAppDispatch } from '../../hooks/foodDeliveryHooks';
import { setDishes } from '../../utils/dishSlice';

const RestaurantDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const dispatch = useAppDispatch();
  const { selectedRestaurant } = useRestaurants();

  const restaurant = selectedRestaurant || mockRestaurants.find(r => r.id === id);
  const allDishes = mockDishes.filter(d => d.restaurantId === id);
  const categories = ['All', ...new Set(allDishes.map(d => d.category))];

  useEffect(() => {
    dispatch(setDishes(allDishes));
  }, [dispatch, allDishes]);

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Restaurant not found</p>
          <FDButton onClick={() => navigate('/food-delivery')}>
            Back to Home
          </FDButton>
        </div>
      </div>
    );
  }

  const filteredDishes = selectedCategory === 'All'
    ? allDishes
    : allDishes.filter(d => d.category === selectedCategory);

  const handleAddToCart = (dish: typeof mockDishes[0]) => {
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
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <FDNavbar onCartClick={() => setCartSidebarOpen(true)} />
      <CartSidebar isOpen={cartSidebarOpen} onClose={() => setCartSidebarOpen(false)} />

      {/* Restaurant Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-64 md:h-96"
      >
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Back Button */}
        <button
          onClick={() => navigate('/food-delivery')}
          className="absolute top-4 left-4 z-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>

        {/* Restaurant Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {restaurant.name}
          </h1>
          <div className="flex flex-wrap gap-4 text-white">
            <div className="flex items-center gap-2">
              <Star size={20} className="fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{restaurant.rating} ({restaurant.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span className="font-semibold">{restaurant.deliveryTime} min</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign size={20} />
              <span className="font-semibold">₹{restaurant.deliveryFee} delivery</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Restaurant Details */}
      {/* <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cuisines</h3>
              <div className="flex flex-wrap gap-2">
                {restaurant.cuisine.map(c => (
                  <span key={c} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-semibold">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Address</h3>
              <div className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <p>{restaurant.address}</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Contact</h3>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Phone size={20} />
                <p>{restaurant.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section> */}

      {/* Category Filter */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="sticky top-16 py-4 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto gap-2 pb-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Dishes Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {selectedCategory === 'All' ? 'All Dishes' : selectedCategory}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {filteredDishes.length} items available
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <DishCard
                  dish={dish}
                  onAddToCart={() => handleAddToCart(dish)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Similar Restaurants Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Similar Restaurants
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explore more restaurants offering similar cuisines and dishes.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default RestaurantDetail;
