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
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your cart is empty
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Add some products to your cart to get started
          </p>
          <Link
            to="/ecommerce/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
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
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center gap-4 p-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    {/* Product Image */}
                    <Link
                      to={`/ecommerce/product/${item.id}`}
                      className="flex-shrink-0 w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform"
                      />
                    </Link>

                    {/* Product Details */}
                    <div className="flex-1">
                      <Link
                        to={`/ecommerce/product/${item.id}`}
                        className="font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        ₹{item.price.toLocaleString()} each
                      </p>
                    </div>

                    {/* Quantity Control */}
                    <div className="flex items-center border-2 border-gray-300 dark:border-gray-600 rounded-lg">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                        className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-1 font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Total */}
                    <div className="w-24 text-right">
                      <p className="font-bold text-lg text-gray-900 dark:text-white">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-lg transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="mt-4 text-red-600 hover:text-red-700 font-semibold text-sm"
            >
              Clear entire cart
            </button>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Shipping</span>
                  <span className="text-green-600 font-semibold">Free</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Tax (10%)</span>
                  <span>₹{Math.round(total * 0.1).toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  Total
                </span>
                <span className="text-2xl font-bold text-blue-600">
                  ₹{Math.round(total * 1.1).toLocaleString()}
                </span>
              </div>

              <Button variant="primary" size="lg" className="w-full mb-4">
                Proceed to Checkout
              </Button>

              <Link
                to="/ecommerce/products"
                className="block text-center py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-semibold"
              >
                Continue Shopping
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};
