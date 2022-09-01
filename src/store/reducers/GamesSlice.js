import { createSlice } from '@reduxjs/toolkit';
import {
  getWordsForRegUserGame,
  getAllDifficultWords,
} from '../../utils/api/thunks';

const initialState = {
  isLoading: false,
  isGameFromTextbook: false,
  AllWordsOfGroupforRegisterUser: [],
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGamesSrartFlag: (state, action) => {
      state.isGameFromTextbook = action.payload;
    },
  },
  extraReducers: {
    [getWordsForRegUserGame.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getWordsForRegUserGame.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      state.AllWordsOfGroupforRegisterUser = payload[0];
    },
    [getWordsForRegUserGame.rejected.type]: (state) => {
      state.isLoading = false;
    },

    [getAllDifficultWords.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getAllDifficultWords.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      state.AllWordsOfGroupforRegisterUser = payload[0];
    },
    [getAllDifficultWords.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setGamesSrartFlag } = gamesSlice.actions;
export default gamesSlice.reducer;
