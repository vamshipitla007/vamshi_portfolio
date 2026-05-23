import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { mockRestaurants } from '../data/mockFoodData';
import type { RestaurantState } from '@/data/foodDeliveryTypes';

const initialState: RestaurantState = {
  items: [],
  selectedRestaurant: null,
  isLoading: false,
  error: null,
  filters: {
    cuisine: [],
    rating: 0,
    deliveryTime: 'any',
  },
};

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setRestaurants: (state, action: PayloadAction<typeof mockRestaurants>) => {
      state.items = action.payload;
      state.error = null;
    },
    setSelectedRestaurant: (state, action: PayloadAction<typeof mockRestaurants[0] | null>) => {
      state.selectedRestaurant = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setCuisineFilter: (state, action: PayloadAction<string[]>) => {
      state.filters.cuisine = action.payload;
    },
    setRatingFilter: (state, action: PayloadAction<number>) => {
      state.filters.rating = action.payload;
    },
    setDeliveryTimeFilter: (state, action: PayloadAction<'any' | '30' | '60'>) => {
      state.filters.deliveryTime = action.payload;
    },
    clearFilters: (state) => {
      state.filters = {
        cuisine: [],
        rating: 0,
        deliveryTime: 'any',
      };
    },
  },
});

export const {
  setLoading,
  setRestaurants,
  setSelectedRestaurant,
  setError,
  setCuisineFilter,
  setRatingFilter,
  setDeliveryTimeFilter,
  clearFilters,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;
