import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from '../components/Carousel';
import { ProductCard } from '../components/ProductCard';
import { MainLayout } from '../layouts/MainLayout';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { motion } from 'framer-motion';
import { Zap, Truck, Shield, RotateCw } from 'lucide-react';

export const HomePage: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 6);

  const heroSlides = [
    <div key="slide1" className="relative w-full h-[500px] bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Premium Tech Gear
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 opacity-90"
        >
          Discover the latest gadgets and accessories at unbeatable prices
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/ecommerce/products"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>
    </div>,
    <div key="slide2" className="relative w-full h-[500px] bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Summer Deals
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 opacity-90"
        >
          Up to 50% off on selected items
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/ecommerce/products"
            className="inline-block px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Explore Deals
          </Link>
        </motion.div>
      </div>
    </div>,
  ];

  const features = [
    { icon: Truck, title: 'Fast Delivery', description: 'Free shipping on orders above ₹500' },
    { icon: Shield, title: 'Secure Payment', description: '100% secure transactions' },
    { icon: RotateCw, title: 'Easy Returns', description: '30-day return policy' },
    { icon: Zap, title: 'Best Price', description: 'Price match guarantee' },
  ];

  return (
    <MainLayout>
      {/* Hero Carousel */}
      <Carousel slides={heroSlides} autoplay effect="fade" />

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Category Showcase */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.slice(1).map((category) => (
              <Link
                key={category.value}
                to={`/ecommerce/products?category=${category.value}`}
                className="flex items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-lg hover:shadow-lg hover:scale-105 transition-all"
              >
                <span className="font-semibold text-gray-900 dark:text-white text-center">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Featured Products</h2>
          <Link to="/ecommerce/products" className="text-blue-600 hover:text-blue-700 font-semibold">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe to get exclusive deals and latest product launches
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};
