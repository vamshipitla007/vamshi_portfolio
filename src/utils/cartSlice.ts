import type { CartItem, CartState } from '@/data/foodDeliveryTypes';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: CartState = {
  items: [],
  restaurantId: null,
  totalPrice: 0,
  deliveryFee: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.dishId === action.payload.dishId);
      
      if (action.payload.restaurantId !== state.restaurantId && state.items.length > 0) {
        state.items = [];
        state.restaurantId = action.payload.restaurantId;
      }

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
        state.restaurantId = action.payload.restaurantId;
      }

      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.dishId !== action.payload);
      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      
      if (state.items.length === 0) {
        state.restaurantId = null;
        state.deliveryFee = 0;
      }

      localStorage.setItem('cart', JSON.stringify(state));
    },
    updateQuantity: (state, action: PayloadAction<{ dishId: string; quantity: number }>) => {
      const item = state.items.find(item => item.dishId === action.payload.dishId);
      if (item) {
        item.quantity = action.payload.quantity;
        if (item.quantity <= 0) {
          state.items = state.items.filter(i => i.dishId !== action.payload.dishId);
        }
      }

      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      localStorage.setItem('cart', JSON.stringify(state));
    },
    setDeliveryFee: (state, action: PayloadAction<number>) => {
      state.deliveryFee = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
      state.restaurantId = null;
      state.totalPrice = 0;
      state.deliveryFee = 0;
      localStorage.removeItem('cart');
    },
    restoreCart: (state) => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        state.items = parsed.items || [];
        state.restaurantId = parsed.restaurantId;
        state.totalPrice = parsed.totalPrice || 0;
        state.deliveryFee = parsed.deliveryFee || 0;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  setDeliveryFee,
  clearCart,
  restoreCart,
} = cartSlice.actions;

export default cartSlice.reducer;
