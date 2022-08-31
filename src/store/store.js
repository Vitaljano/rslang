import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/AuthSlice';
import wordsSlice from './reducers/WordSlice';
import userWordsSlice from './reducers/UserWordsSlice';
import agregatedWordsSlice from './reducers/AgregatedWordsSlice';
import gamesSlice from './reducers/GamesSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    words: wordsSlice,
    userWords: userWordsSlice,
    agregatingWords: agregatedWordsSlice,
    games: gamesSlice,
  },
});
