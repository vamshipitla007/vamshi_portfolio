import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { mockDishes } from '../data/mockFoodData';
import type { DishState } from '@/data/foodDeliveryTypes';

const initialState: DishState = {
  items: [],
  selectedDish: null,
  isLoading: false,
  error: null,
  categoryFilter: 'All',
};

const dishSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setDishes: (state, action: PayloadAction<typeof mockDishes>) => {
      state.items = action.payload;
      state.error = null;
    },
    setSelectedDish: (state, action: PayloadAction<typeof mockDishes[0] | null>) => {
      state.selectedDish = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setCategoryFilter: (state, action: PayloadAction<string>) => {
      state.categoryFilter = action.payload;
    },
  },
});

export const {
  setLoading,
  setDishes,
  setSelectedDish,
  setError,
  setCategoryFilter,
} = dishSlice.actions;

export default dishSlice.reducer;
