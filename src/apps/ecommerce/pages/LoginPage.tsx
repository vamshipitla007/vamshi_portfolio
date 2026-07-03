import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { MainLayout } from '../layouts/MainLayout';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Mail, Eye, EyeOff } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

//   if (isAuthenticated) {
//     navigate('/ecommerce');
//   }

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!password || password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log('isAuthenticated', isAuthenticated)
    setIsLoading(true);
    try {
      await login(email, password);
      toast.success('Login successful!');
      navigate('/ecommerce');
    } catch (error) {
      toast.error('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-3xl">⚡</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h1>
            <p className="text-gray-600 dark:text-gray-400">Login to your ElectroHub account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div className="relative">
              <Input
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />
              <Mail className="absolute right-4 top-10 text-gray-400" size={20} />
            </div>

            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-10 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                <span className="text-gray-600 dark:text-gray-400">Remember me</span>
              </label>
              <Link to="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button className="py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-semibold text-gray-900 dark:text-white">
              Google
            </button>
            <button className="py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-semibold text-gray-900 dark:text-white">
              Apple
            </button>
          </div>

          {/* Signup Link */}
          <p className="text-center text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <Link to="/ecommerce/signup" className="text-blue-600 hover:text-blue-700 font-bold">
              Sign up
            </Link>
          </p>
        </motion.div>
      </div>
    </MainLayout>
  );
};
