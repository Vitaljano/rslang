import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/AuthSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
