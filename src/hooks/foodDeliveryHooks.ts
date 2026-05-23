import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../utils/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
  const auth = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  return {
    user: auth.user,
    isAuthenticated: auth.isAuthenticated,
    isLoading: auth.isLoading,
    error: auth.error,
    token: auth.token,
    dispatch,
  };
};

export const useCart = () => {
  const cart = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  return {
    items: cart.items,
    restaurantId: cart.restaurantId,
    totalPrice: cart.totalPrice,
    deliveryFee: cart.deliveryFee,
    isLoading: cart.isLoading,
    itemCount: cart.items.length,
    totalAmount: cart.totalPrice + cart.deliveryFee,
    dispatch,
  };
};

export const useWishlist = () => {
  const wishlist = useAppSelector(state => state.wishlist);
  const dispatch = useAppDispatch();

  return {
    items: wishlist.items,
    count: wishlist.items.length,
    dispatch,
  };
};

export const useRestaurants = () => {
  const restaurants = useAppSelector(state => state.restaurants);
  const dispatch = useAppDispatch();

  return {
    items: restaurants.items,
    selectedRestaurant: restaurants.selectedRestaurant,
    isLoading: restaurants.isLoading,
    error: restaurants.error,
    filters: restaurants.filters,
    dispatch,
  };
};

export const useDishes = () => {
  const dishes = useAppSelector(state => state.dishes);
  const dispatch = useAppDispatch();

  return {
    items: dishes.items,
    selectedDish: dishes.selectedDish,
    isLoading: dishes.isLoading,
    error: dishes.error,
    categoryFilter: dishes.categoryFilter,
    dispatch,
  };
};
