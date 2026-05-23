import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, CreditCard, AlertCircle, CheckCircle } from 'lucide-react';
import FDButton from '../../components/ui/FDButton';
import FDNavbar from '../../components/layout/FDNavbar';
import { useCart, useAuth } from '../../hooks/foodDeliveryHooks';
import { clearCart } from '../../utils/cartSlice';
import { useAppDispatch } from '../../hooks/foodDeliveryHooks';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { items, totalPrice, deliveryFee, totalAmount } = useCart();
  const { user, isAuthenticated } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isAuthenticated) {
    navigate('/food-delivery/auth');
    return null;
  }

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <FDNavbar />
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
          <div className="text-center">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Your cart is empty</p>
            <FDButton onClick={() => navigate('/food-delivery')}>
              Continue Shopping
            </FDButton>
          </div>
        </div>
      </div>
    );
  }

  const handlePlaceOrder = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setOrderPlaced(true);
    dispatch(clearCart());
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <FDNavbar />
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
            >
              <CheckCircle className="text-green-500" size={48} />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Order Confirmed!
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-sm">
              Your order has been placed successfully. You'll receive updates via email and SMS.
            </p>
            <div className="space-y-3">
              <FDButton
                onClick={() => navigate('/food-delivery')}
                variant="primary"
                size="lg"
              >
                Continue Shopping
              </FDButton>
              <FDButton
                onClick={() => navigate('/food-delivery/profile')}
                variant="outline"
                size="lg"
              >
                View Orders
              </FDButton>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <FDNavbar />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate('/food-delivery')}
            className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold mb-8"
          >
            <ArrowLeft size={20} />
            Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Delivery Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-orange-500" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Delivery Address
                  </h2>
                </div>

                <div className="space-y-4">
                  {user?.addresses && user.addresses.length > 0 ? (
                    <div className="space-y-3">
                      {user.addresses.map(address => (
                        <label key={address.id} className="flex items-start gap-3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                          <input
                            type="radio"
                            name="address"
                            defaultChecked={address.isDefault}
                            className="mt-1"
                          />
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white capitalize">
                              {address.type}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {address.street}, {address.city} {address.postalCode}
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex gap-3">
                      <AlertCircle className="text-blue-500 flex-shrink-0" size={20} />
                      <p className="text-blue-700 dark:text-blue-400">
                        Please add a delivery address in your profile
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Payment Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="text-orange-500" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Payment Method
                  </h2>
                </div>

                <div className="space-y-3">
                  {[
                    { id: 'card', label: 'Credit/Debit Card', icon: '💳' },
                    { id: 'wallet', label: 'Digital Wallet', icon: '📱' },
                    { id: 'cod', label: 'Cash on Delivery', icon: '💵' },
                  ].map(method => (
                    <label key={method.id} className="flex items-center gap-3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={e => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-xl">{method.icon}</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {method.label}
                      </span>
                    </label>
                  ))}
                </div>
              </motion.div>

              {/* Special Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Special Instructions
                </h2>
                <textarea
                  placeholder="Any special requests? (e.g., no onions, extra spicy)"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  rows={4}
                />
              </motion.div>
            </motion.div>

            {/* Right Side - Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="sticky top-24 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Order Summary
                </h3>

                <div className="space-y-2 max-h-96 overflow-y-auto pb-4 border-b border-gray-200 dark:border-gray-700">
                  {items.map(item => (
                    <div key={item.dishId} className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>{item.name} x {item.quantity}</span>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Subtotal</span>
                    <span>₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Delivery Fee</span>
                    <span>₹{deliveryFee}</span>
                  </div>
                  <div className="flex justify-between text-orange-500 font-semibold">
                    <span>Platform Fee</span>
                    <span>₹50</span>
                  </div>
                  <div className="flex justify-between text-green-500 font-semibold">
                    <span>Discount</span>
                    <span>-₹0</span>
                  </div>
                  <div className="pt-2 border-t border-gray-300 dark:border-gray-600 flex justify-between font-bold text-gray-900 dark:text-white text-base">
                    <span>Total</span>
                    <span>₹{totalAmount + 50}</span>
                  </div>
                </div>

                <FDButton
                  onClick={handlePlaceOrder}
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Place Order'}
                </FDButton>

                <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                  You'll earn 500 reward points on this order
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
