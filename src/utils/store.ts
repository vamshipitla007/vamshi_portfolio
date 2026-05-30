import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../utils/authSlice';
import cartReducer from '../utils/cartSlice';
import restaurantReducer from '../utils/restaurantSlice';
import dishReducer from '../utils/dishSlice';
import wishlistReducer from '../utils/wishlistSlice';
import chatReducer from '../utils/chatSlice';
import callReducer from '../utils/callSlice';
import groupReducer from '../utils/groupSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    restaurants: restaurantReducer,
    dishes: dishReducer,
    wishlist: wishlistReducer,
    chat: chatReducer,
    call: callReducer,
    group: groupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
