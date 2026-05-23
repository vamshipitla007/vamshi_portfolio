import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Phone, ArrowRight } from 'lucide-react';
import FDButton from '../../components/ui/FDButton';
import FDNavbar from '../../components/layout/FDNavbar';
import { useAuth } from '../../hooks/foodDeliveryHooks';
import { loginSuccess, signup } from '../../utils/authSlice';
import { useAppDispatch } from '../../hooks/foodDeliveryHooks';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    confirmPassword: '',
  });

  if (isAuthenticated) {
    navigate('/food-delivery');
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise(resolve => setTimeout(resolve, 800));

    if (isLogin) {
      dispatch(
        loginSuccess({
          user: {
            id: '1',
            name: formData.email.split('@')[0],
            email: formData.email,
            phone: formData.phone || '+91-9876543210',
            addresses: [],
            preferences: {
              vegetarian: false,
              spicy: false,
              dietary: [],
            },
          },
          token: 'mock-token-' + Date.now(),
        })
      );
    } else {
      dispatch(
        signup({
          id: Date.now().toString(),
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          addresses: [],
          preferences: {
            vegetarian: false,
            spicy: false,
            dietary: [],
          },
        })
      );
    }

    setLoading(false);
    navigate('/food-delivery');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <FDNavbar />

      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] py-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 font-bold text-lg transition-all ${
                isLogin
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-500 dark:text-gray-400 border-b-2 border-transparent'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 font-bold text-lg transition-all ${
                !isLogin
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-500 dark:text-gray-400 border-b-2 border-transparent'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLogin}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            {!isLogin && (
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
            )}

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            {!isLogin && (
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required={!isLogin}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
            )}

            <FDButton
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={loading}
              className="flex justify-center items-center"
            >
              {loading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                </motion.div>
              ) : (
                <>
                  {isLogin ? 'Login' : 'Sign Up'}
                  <ArrowRight size={20} />
                </>
              )}
            </FDButton>
          </form>

          {/* Terms */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
            By continuing, you agree to our Terms & Conditions and Privacy Policy
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;
