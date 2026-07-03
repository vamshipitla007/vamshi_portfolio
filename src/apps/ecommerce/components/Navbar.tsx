import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Heart, LogOut, Moon, Sun, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { itemCount } = useCart();
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const links = [
    { label: 'Home', path: '/ecommerce' },
    { label: 'Products', path: '/ecommerce/products' },
    { label: 'About', path: '/ecommerce/about' },
    { label: 'Contact', path: '/ecommerce/contact' },
  ];

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/ecommerce" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
              ⚡
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:inline">
              ElectroHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors relative ${
                  isActive(link.path)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <Search size={20} />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <motion.div
                key={isDark ? 'dark' : 'light'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </button>

            {/* Wishlist */}
            <Link
              to="/ecommerce/wishlist"
              className="text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg hidden sm:block"
            >
              <Heart size={20} />
            </Link>

            {/* Cart */}
            <Link
              to="/ecommerce/cart"
              className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="hidden sm:flex items-center gap-2">
                <Link
                  to="/ecommerce/profile"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  {user.name}
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link
                to="/ecommerce/login"
                className="hidden sm:inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 dark:text-gray-300 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
            >
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 font-medium'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-4 border-gray-200 dark:border-gray-700" />
              {!user && (
                <Link
                  to="/ecommerce/login"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-center"
                >
                  Login
                </Link>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
