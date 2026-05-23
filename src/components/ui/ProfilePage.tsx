import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, LogOut, MapPin, User, Phone, Edit2, Plus } from 'lucide-react';
import FDNavbar from '../../components/layout/FDNavbar';
import FDButton from '../../components/ui/FDButton';
import { useAuth } from '../../hooks/foodDeliveryHooks';
import { logout, updateProfile } from '../../utils/authSlice';
import { useAppDispatch } from '../../hooks/foodDeliveryHooks';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const dispatch = useAppDispatch();
  const [editing, setEditing] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
  });

  if (!isAuthenticated || !user) {
    navigate('/food-delivery/auth');
    return null;
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate('/food-delivery');
  };

  const handleSaveProfile = () => {
    dispatch(updateProfile(formData));
    setEditing(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <FDNavbar />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/food-delivery')}
            className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold mb-8"
          >
            <ArrowLeft size={20} />
            Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-8 text-white text-center sticky top-24">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white text-orange-500 flex items-center justify-center text-5xl font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
                <p className="text-white/80 mb-6">{user.email}</p>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors font-semibold"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            </motion.div>

            {/* Profile Details & Addresses */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Personal Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <User size={24} />
                    Personal Information
                  </h3>
                  <button
                    onClick={() => setEditing(!editing)}
                    className="flex items-center gap-2 px-3 py-1 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded transition-colors"
                  >
                    <Edit2 size={18} />
                    {editing ? 'Cancel' : 'Edit'}
                  </button>
                </div>

                {editing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <FDButton
                      onClick={handleSaveProfile}
                      variant="primary"
                      fullWidth
                    >
                      Save Changes
                    </FDButton>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg">
                      {/* <Email size={20} className="text-orange-500" /> */}
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg">
                      <Phone size={20} className="text-orange-500" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{user.phone}</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Saved Addresses */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <MapPin size={24} />
                    Saved Addresses
                  </h3>
                  <button
                    onClick={() => setShowAddressForm(!showAddressForm)}
                    className="flex items-center gap-2 px-3 py-1 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded transition-colors"
                  >
                    <Plus size={18} />
                    Add Address
                  </button>
                </div>

                {user.addresses.length === 0 ? (
                  <p className="text-gray-600 dark:text-gray-400 text-center py-6">
                    No saved addresses yet
                  </p>
                ) : (
                  <div className="space-y-3">
                    {user.addresses.map(address => (
                      <div
                        key={address.id}
                        className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white capitalize">
                              {address.type}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                              {address.street}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                              {address.city}, {address.postalCode}
                            </p>
                          </div>
                          {address.isDefault && (
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full">
                              Default
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { label: 'Total Orders', value: '12' },
                  { label: 'Loyalty Points', value: '2,450' },
                  { label: 'Reward Vouchers', value: '3' },
                  { label: 'Member Since', value: '2024' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-4 text-center"
                  >
                    <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
