import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { MainLayout } from '../layouts/MainLayout';
import { Heart, ShoppingBag } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'framer-motion';

export const WishlistPage: React.FC = () => {
  const { items } = useWishlist();

  if (items.length === 0) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <Heart size={64} className="mx-auto text-gray-300 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your wishlist is empty
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Add products to your wishlist to save them for later
          </p>
          <Link
            to="/ecommerce/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
          >
            <ShoppingBag size={20} />
            Continue Shopping
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Wishlist</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            You have {items.length} item{items.length !== 1 ? 's' : ''} in your wishlist
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </MainLayout>
  );
};
