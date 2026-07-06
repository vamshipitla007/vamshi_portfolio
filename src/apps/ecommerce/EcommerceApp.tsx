import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { CartPage } from './pages/CartPage';
import { WishlistPage } from './pages/WishlistPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';

const AnimatedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -18 }}
    transition={{ duration: 0.24, ease: 'easeOut' }}
    className="w-full"
  >
    {children}
  </motion.div>
);

export const EcommerceApp: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-200">
              <AnimatePresence mode="wait" initial={false}>
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<AnimatedRoute><HomePage /></AnimatedRoute>} />
                  <Route path="/products" element={<AnimatedRoute><ProductsPage /></AnimatedRoute>} />
                  <Route path="/product/:id" element={<AnimatedRoute><ProductDetailsPage /></AnimatedRoute>} />
                  <Route path="/cart" element={<AnimatedRoute><CartPage /></AnimatedRoute>} />
                  <Route path="/wishlist" element={<AnimatedRoute><WishlistPage /></AnimatedRoute>} />
                  <Route path="/about" element={<AnimatedRoute><AboutPage /></AnimatedRoute>} />
                  <Route path="/contact" element={<AnimatedRoute><ContactPage /></AnimatedRoute>} />
                  <Route path="/login" element={<AnimatedRoute><LoginPage /></AnimatedRoute>} />
                  <Route path="/signup" element={<AnimatedRoute><SignupPage /></AnimatedRoute>} />
                </Routes>
              </AnimatePresence>
              <Toaster position="top-right" />
            </div>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
