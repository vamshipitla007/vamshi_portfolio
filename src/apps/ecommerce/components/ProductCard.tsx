import React from 'react';
import { Heart, ShoppingCart, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      {/* Image Container */}
      <Link to={`/ecommerce/product/${product.id}`}>
        <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-700">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
              <Zap size={14} />
              {discount}% OFF
            </div>
          )}

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <p className="text-white font-bold text-lg">Out of Stock</p>
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link to={`/ecommerce/product/${product.id}`}>
          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 hover:text-blue-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
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

        {/* Price */}
        <div className="flex items-end gap-2 mb-4">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">₹{product.price.toLocaleString()}</p>
          {product.originalPrice && (
            <p className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            Add
          </button>
          <button
            onClick={handleWishlist}
            className={`px-4 py-2 rounded-lg transition-all ${
              inWishlist
                ? 'bg-red-100 dark:bg-red-900/30 text-red-600'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
            }`}
          >
            <Heart size={20} className={inWishlist ? 'fill-current' : ''} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
