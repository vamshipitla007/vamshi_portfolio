import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import toast from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, 1);
    toast.success('Added to cart!');
  };

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist!');
    }
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.01, boxShadow: '0 24px 60px -22px rgba(15, 23, 42, 0.28)' }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group overflow-hidden rounded-2xl border border-gray-100/70 bg-white shadow-md transition-shadow duration-300 dark:border-gray-700/70 dark:bg-gray-800"
    >
      <Link to={`/ecommerce/product/${product.id}`}>
        <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-700">
          <motion.img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.35 }}
          />

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 via-black/10 to-transparent pb-4"
              >
                <div className="rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg backdrop-blur">
                  Quick View
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {discount > 0 && (
            <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white">
              <Zap size={14} />
              {discount}% OFF
            </div>
          )}

          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <p className="text-lg font-bold text-white">Out of Stock</p>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/ecommerce/product/${product.id}`}>
          <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900 transition-colors duration-200 hover:text-blue-600 dark:text-white">
            {product.name}
          </h3>
        </Link>

        <div className="mb-3 flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">({product.reviews})</span>
        </div>

        <div className="mb-4 flex items-end gap-2">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">₹{product.price.toLocaleString()}</p>
          {product.originalPrice && (
            <p className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</p>
          )}
        </div>

        <div className="flex gap-2">
          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.01 }}
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-2 font-semibold text-white transition-all duration-200 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ShoppingCart size={18} />
            Add
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            onClick={handleWishlist}
            className={`rounded-lg px-4 py-2 transition-all duration-200 ${
              inWishlist
                ? 'bg-red-100 text-red-600 dark:bg-red-900/30'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400'
            }`}
          >
            <Heart size={20} className={inWishlist ? 'fill-current' : ''} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
