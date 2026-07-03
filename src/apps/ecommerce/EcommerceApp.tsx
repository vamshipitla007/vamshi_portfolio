import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

export const EcommerceApp: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-200">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductDetailsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
              </Routes>
              <Toaster position="top-right" />
            </div>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
