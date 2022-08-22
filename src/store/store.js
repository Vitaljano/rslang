import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/AuthSlice';
import wordsSlice from './reducers/WordSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    words: wordsSlice,
  },
});
