import React, { useEffect, useState } from 'react';
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
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const product = PRODUCTS.find((p) => p.id === id);
  const relatedProducts = PRODUCTS.filter((p) => p.category === product?.category && p.id !== id).slice(0, 4);

  useEffect(() => {
    if (!isAdded) return;
    const timer = window.setTimeout(() => setIsAdded(false), 800);
    return () => window.clearTimeout(timer);
  }, [isAdded]);

  if (!product) {
    return (
      <MainLayout>
        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Product not found</h1>
          <button
            onClick={() => navigate('/ecommerce/products')}
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white"
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
    setIsAdded(true);
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
    <div key={img} className="flex h-96 w-full items-center justify-center bg-gray-100 dark:bg-gray-700">
      <img src={img} alt={product.name} className="h-full w-full object-contain p-4" />
    </div>
  ));

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <button onClick={() => navigate('/ecommerce')} className="hover:text-blue-600">
            Home
          </button>
          <span>/</span>
          <button onClick={() => navigate('/ecommerce/products')} className="hover:text-blue-600">
            Products
          </button>
          <span>/</span>
          <span className="font-semibold text-gray-900 dark:text-white">{product.name}</span>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
            <Carousel slides={imageSlides} autoplay={false} showNavigation />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
            <p className="mb-2 font-semibold text-blue-600 dark:text-blue-400">{product.category.toUpperCase()}</p>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">{product.name}</h1>

            <div className="mb-6 flex items-center gap-4">
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

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mb-6 flex items-end gap-4"
            >
              <p className="text-5xl font-bold text-gray-900 dark:text-white">₹{product.price.toLocaleString()}</p>
              {product.originalPrice && (
                <>
                  <p className="text-2xl text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</p>
                  <span className="text-xl font-bold text-red-600">{discount}% OFF</span>
                </>
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mb-8 text-lg text-gray-700 dark:text-gray-300"
            >
              {product.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mb-8"
            >
              <h3 className="mb-4 font-bold text-gray-900 dark:text-white">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Check size={20} className="flex-shrink-0 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className={`mb-8 rounded-lg p-4 ${product.inStock ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
              <p className={`font-semibold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
              </p>
            </div>

            <div className="mb-8 flex items-center gap-4">
              <div className="flex items-center rounded-lg border-2 border-gray-300 dark:border-gray-600">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  −
                </button>
                <span className="px-6 py-2 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  +
                </button>
              </div>

              <motion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.01 }}
                animate={isAdded ? { scale: [1, 1.03, 1] } : { scale: 1 }}
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-bold text-white transition-all duration-200 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ShoppingCart size={20} />
                {isAdded ? 'Added ✓' : 'Add to Cart'}
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                onClick={handleWishlist}
                className={`rounded-lg px-6 py-3 font-semibold transition-all duration-200 ${
                  inWishlist
                    ? 'bg-red-100 text-red-600 dark:bg-red-900/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400'
                }`}
              >
                <Heart size={20} className={inWishlist ? 'fill-current' : ''} />
              </motion.button>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-8 dark:border-gray-700">
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

        {relatedProducts.length > 0 && (
          <section>
            <h2 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">Related Products</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
