import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { MainLayout } from '../layouts/MainLayout';
import { Trash2, ArrowLeft, ShoppingBag, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/Button';
import toast from 'react-hot-toast';

export const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, clearCart, total } = useCart();

  const handleRemove = (id: string) => {
    removeFromCart(id);
    toast.success('Item removed from cart');
  };

  if (items.length === 0) {
    return (
      <MainLayout>
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
          >
            <motion.div animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
              <ShoppingBag size={40} className="text-gray-400" />
            </motion.div>
          </motion.div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Your cart is empty</h1>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">Add some products to your cart to get started</p>
          <Link
            to="/ecommerce/products"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-bold text-white transition-all duration-200 hover:scale-[1.01] hover:shadow-lg"
          >
            <ArrowLeft size={20} />
            Continue Shopping
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">Shopping Cart</h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl bg-white dark:bg-gray-800">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center gap-4 border-b border-gray-200 p-6 transition-colors last:border-b-0 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50"
                  >
                    <Link to={`/ecommerce/product/${item.id}`} className="flex h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-300 hover:scale-110" />
                    </Link>

                    <div className="flex-1">
                      <Link to={`/ecommerce/product/${item.id}`} className="font-bold text-gray-900 transition-colors hover:text-blue-600 dark:text-white">
                        {item.name}
                      </Link>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">₹{item.price.toLocaleString()} each</p>
                    </div>

                    <div className="flex items-center rounded-lg border-2 border-gray-300 dark:border-gray-600">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="px-3 py-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Minus size={16} />
                      </motion.button>
                      <span className="px-4 py-1 font-semibold">{item.quantity}</span>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Plus size={16} />
                      </motion.button>
                    </div>

                    <div className="w-24 text-right">
                      <p className="text-lg font-bold text-gray-900 dark:text-white">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.03 }}
                      onClick={() => handleRemove(item.id)}
                      className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                      <Trash2 size={20} />
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <button onClick={clearCart} className="mt-4 text-sm font-semibold text-red-600 transition-colors hover:text-red-700">
              Clear entire cart
            </button>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Order Summary</h2>

              <div className="mb-6 space-y-4 border-b border-gray-200 pb-6 dark:border-gray-700">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Tax (10%)</span>
                  <span>₹{Math.round(total * 0.1).toLocaleString()}</span>
                </div>
              </div>

              <div className="mb-6 flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">Total</span>
                <motion.span
                  key={total}
                  initial={{ opacity: 0.7, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-bold text-blue-600"
                >
                  ₹{Math.round(total * 1.1).toLocaleString()}
                </motion.span>
              </div>

              <Button variant="primary" size="lg" className="mb-4 w-full">
                Proceed to Checkout
              </Button>

              <Link to="/ecommerce/products" className="block rounded-lg border-2 border-gray-300 px-4 py-3 text-center font-semibold text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700">
                Continue Shopping
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};
