import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { MainLayout } from '../layouts/MainLayout';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { User, Mail, Eye, EyeOff, CheckCircle } from 'lucide-react';

export const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signup, isAuthenticated } = useAuth();

  if (isAuthenticated) {
    navigate('/ecommerce');
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await signup(formData.name, formData.email, formData.password);
      toast.success('Account created successfully!');
      navigate('/ecommerce');
    } catch (error) {
      toast.error('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const passwordStrength = formData.password
    ? formData.password.length >= 8
      ? 'Strong'
      : formData.password.length >= 6
      ? 'Medium'
      : 'Weak'
    : '';

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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Join ElectroHub</h1>
            <p className="text-gray-600 dark:text-gray-400">Create your account to get started</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div className="relative">
              <Input
                label="Full Name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                error={errors.name}
              />
              <User className="absolute right-4 top-10 text-gray-400" size={20} />
            </div>

            <div className="relative">
              <Input
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={errors.email}
              />
              <Mail className="absolute right-4 top-10 text-gray-400" size={20} />
            </div>

            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                error={errors.password}
                helperText={
                  passwordStrength && `Password strength: ${passwordStrength}`
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-10 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="relative">
              <Input
                label="Confirm Password"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                error={errors.confirmPassword}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-10 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Terms Agreement */}
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-blue-600 mt-1 flex-shrink-0" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                I agree to the{' '}
                <Link to="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Privacy Policy
                </Link>
              </span>
            </label>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </Button>
          </form>

          {/* Features */}
          <div className="space-y-2 mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Fast checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Order tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Exclusive deals</span>
            </div>
          </div>

          {/* Login Link */}
          <p className="text-center text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link to="/ecommerce/login" className="text-blue-600 hover:text-blue-700 font-bold">
              Login
            </Link>
          </p>
        </motion.div>
      </div>
    </MainLayout>
  );
};
