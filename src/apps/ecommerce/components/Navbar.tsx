import React, { useEffect, useState } from 'react';
import { Menu, X, ShoppingCart, Heart, LogOut, Moon, Sun, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 shadow-lg backdrop-blur-xl'
          : 'bg-white dark:bg-gray-900 shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/ecommerce" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg transition-transform duration-200 group-hover:scale-110">
              ⚡
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:inline">
              ElectroHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {links.map((link) => (
              <motion.div key={link.path} whileHover={{ y: -2, scale: 1.02 }}>
                <Link
                  to={link.path}
                  className={`relative px-3 py-2 rounded-full font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 active:scale-95">
              <Search size={20} />
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <motion.div
                key={isDark ? 'dark' : 'light'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </button>

            <Link
              to="/ecommerce/wishlist"
              className="hidden sm:flex p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Heart size={20} />
            </Link>

            <Link
              to="/ecommerce/cart"
              className="relative p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white"
                >
                  {itemCount}
                </motion.span>
              )}
            </Link>

            {user ? (
              <div className="hidden sm:flex items-center gap-2">
                <Link
                  to="/ecommerce/profile"
                  className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600 dark:text-gray-300"
                >
                  {user.name}
                </Link>
                <button
                  onClick={logout}
                  className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link
                to="/ecommerce/login"
                className="hidden sm:inline-block rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 font-medium text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                Login
              </Link>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-gray-700 transition-all duration-200 hover:scale-105 active:scale-95 dark:text-gray-300 lg:hidden"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-700 lg:hidden"
            >
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-4 py-2 transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-blue-50 font-medium text-blue-600 dark:bg-blue-900/20'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
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
                  className="block rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-center font-medium text-white"
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
