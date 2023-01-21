import { combineReducers } from 'redux';
import { cartSlice } from './cart';
import { restaurantSlice } from './restaurant';
import { dishSlice } from './dish';
import { userSlice } from './user';
import { reviewSlice } from './review';
import { loggerMiddleware } from './middlewares/logger';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  restaurant: restaurantSlice.reducer,
  dish: dishSlice.reducer,
  user: userSlice.reducer,
  review: reviewSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([loggerMiddleware]),
});
