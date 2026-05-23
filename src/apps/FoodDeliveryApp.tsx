import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../utils/store';
import FoodDeliveryHome from '../components/ui/FoodDeliveryHome';
import RestaurantDetail from '../components/ui/RestaurantDetail';
import AuthPage from '../components/ui/AuthPage';
import CheckoutPage from '../components/ui/CheckoutPage';
import WishlistPage from '../components/ui/WishlistPage';
import ProfilePage from '../components/ui/ProfilePage';

const FoodDeliveryApp: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<FoodDeliveryHome />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Provider>
  );
};

export default FoodDeliveryApp;
