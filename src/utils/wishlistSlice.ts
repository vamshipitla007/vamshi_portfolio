import type { WishlistItem, WishlistState } from '@/data/foodDeliveryTypes';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const exists = state.items.find(
        item => item.itemId === action.payload.itemId && item.type === action.payload.type
      );
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem('wishlist', JSON.stringify(state.items));
      }
    },
    removeFromWishlist: (state, action: PayloadAction<{ itemId: string; type: 'restaurant' | 'dish' }>) => {
      state.items = state.items.filter(
        item => !(item.itemId === action.payload.itemId && item.type === action.payload.type)
      );
      localStorage.setItem('wishlist', JSON.stringify(state.items));
    },
    restoreWishlist: (state) => {
      const saved = localStorage.getItem('wishlist');
      if (saved) {
        state.items = JSON.parse(saved);
      }
    },
    toggleWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const exists = state.items.find(
        item => item.itemId === action.payload.itemId && item.type === action.payload.type
      );
      if (exists) {
        state.items = state.items.filter(
          item => !(item.itemId === action.payload.itemId && item.type === action.payload.type)
        );
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem('wishlist', JSON.stringify(state.items));
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  restoreWishlist,
  toggleWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
