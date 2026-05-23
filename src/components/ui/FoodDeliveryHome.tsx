import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import FDNavbar from '../../components/layout/FDNavbar';
import CartSidebar from '../../components/layout/CartSidebar';
import RestaurantCard from '../../components/ui/RestaurantCard';
import FDButton from '../../components/ui/FDButton';
import { mockRestaurants } from '../../data/mockFoodData';
import { useRestaurants } from '../../hooks/foodDeliveryHooks';
import { setRestaurants, setSelectedRestaurant } from '../../utils/restaurantSlice';
import { useAppDispatch } from '../../hooks/foodDeliveryHooks';
import { useNavigate } from 'react-router-dom';

const FoodDeliveryHome: React.FC = () => {
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const { items: restaurants, filters } = useRestaurants();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setRestaurants(mockRestaurants));
  }, [dispatch]);

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.cuisine.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCuisine = filters.cuisine.length === 0 ||
      filters.cuisine.some(c => restaurant.cuisine.includes(c));

    const matchesRating = filters.rating === 0 || restaurant.rating >= filters.rating;

    const matchesDeliveryTime = filters.deliveryTime === 'any' ||
      (filters.deliveryTime === '30' && restaurant.deliveryTime <= 30) ||
      (filters.deliveryTime === '60' && restaurant.deliveryTime <= 60);

    return matchesSearch && matchesCuisine && matchesRating && matchesDeliveryTime;
  });

  const handleRestaurantClick = (restaurant: typeof mockRestaurants[0]) => {
    dispatch(setSelectedRestaurant(restaurant));
    navigate(`/food-delivery/restaurant/${restaurant.id}`);
  };

  const handleDiscoverClick = () => {
    document.getElementById('restaurants-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <FDNavbar onCartClick={() => setCartSidebarOpen(true)} />
      <CartSidebar isOpen={cartSidebarOpen} onClose={() => setCartSidebarOpen(false)} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Order Food <span className="text-orange-500">Anywhere</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Discover the best restaurants and food delivery service in your city. Fast, fresh, and delicious!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <FDButton
                  onClick={handleDiscoverClick}
                  variant="primary"
                  size="lg"
                >
                  Discover Now
                </FDButton>
                <FDButton
                  variant="outline"
                  size="lg"
                >
                  Learn More
                </FDButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🍔</div>
                    <p className="text-2xl font-bold">Food Delivery</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Search & Filter Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search restaurants or cuisines..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-semibold"
            >
              <Filter size={20} />
              Filters
            </button>
          </div>

          {/* Filter Chips */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg mb-8"
            >
              {['Indian', 'Pizza', 'Chinese', 'Burgers', 'Sushi', 'Biryani'].map(cuisine => (
                <button
                  key={cuisine}
                  className="px-4 py-2 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-orange-500 hover:text-orange-500 transition-colors font-semibold"
                >
                  {cuisine}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Restaurants Grid */}
      <section id="restaurants-section" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Restaurants Near You
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Showing {filteredRestaurants.length} restaurants
            </p>
          </motion.div>

          {filteredRestaurants.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                No restaurants found matching your criteria
              </p>
              <FDButton
                onClick={() => setSearchQuery('')}
                variant="outline"
              >
                Clear Search
              </FDButton>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredRestaurants.map((restaurant, index) => (
                <motion.div
                  key={restaurant.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <RestaurantCard
                    restaurant={restaurant}
                    onClick={() => handleRestaurantClick(restaurant)}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Restaurants' },
              { number: '10k+', label: 'Happy Customers' },
              { number: '25 min', label: 'Avg Delivery' },
              { number: '24/7', label: 'Service Available' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default FoodDeliveryHome;
