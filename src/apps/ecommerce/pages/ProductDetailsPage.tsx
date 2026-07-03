import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { MainLayout } from '../layouts/MainLayout';
import { Heart, ShoppingCart, Star, Truck, RotateCw, Shield, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Carousel } from '../components/Carousel';
import { ProductCard } from '../components/ProductCard';

export const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const product = PRODUCTS.find((p) => p.id === id);
  const relatedProducts = PRODUCTS.filter((p) => p.category === product?.category && p.id !== id).slice(0, 4);

  if (!product) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Product not found</h1>
          <button
            onClick={() => navigate('/ecommerce/products')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold"
          >
            Back to Products
          </button>
        </div>
      </MainLayout>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`Added ${quantity} item(s) to cart!`);
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

  const imageSlides = (product.images || [product.image]).map((img) => (
    <div key={img} className="w-full h-96 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
      <img src={img} alt={product.name} className="w-full h-full object-contain p-4" />
    </div>
  ));

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-gray-600 dark:text-gray-400">
          <button onClick={() => navigate('/ecommerce')} className="hover:text-blue-600">
            Home
          </button>
          <span>/</span>
          <button onClick={() => navigate('/ecommerce/products')} className="hover:text-blue-600">
            Products
          </button>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-semibold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Carousel slides={imageSlides} autoplay={false} showNavigation />
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            {/* Category and Name */}
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{product.category.toUpperCase()}</p>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-400">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-end gap-4 mb-6">
              <p className="text-5xl font-bold text-gray-900 dark:text-white">₹{product.price.toLocaleString()}</p>
              {product.originalPrice && (
                <>
                  <p className="text-2xl text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</p>
                  <span className="text-red-600 font-bold text-xl">{discount}% OFF</span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">{product.description}</p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Check size={20} className="text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stock Status */}
            <div className={`p-4 rounded-lg mb-8 ${product.inStock ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
              <p className={`font-semibold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
              </p>
            </div>

            {/* Quantity and Actions */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border-2 border-gray-300 dark:border-gray-600 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>

              <button
                onClick={handleWishlist}
                className={`py-3 px-6 rounded-lg font-semibold transition-all ${
                  inWishlist
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-600'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                }`}
              >
                <Heart size={20} className={inWishlist ? 'fill-current' : ''} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <Truck size={24} className="mx-auto mb-2 text-blue-600" />
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield size={24} className="mx-auto mb-2 text-blue-600" />
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Secure Checkout</p>
              </div>
              <div className="text-center">
                <RotateCw size={24} className="mx-auto mb-2 text-blue-600" />
                <p className="text-sm font-semibold text-gray-900 dark:text-white">30-Day Returns</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </MainLayout>
  );
};
