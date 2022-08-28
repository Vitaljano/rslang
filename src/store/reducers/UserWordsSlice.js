import { createSlice } from '@reduxjs/toolkit';
import {
  // getAllUserWords,
  saveUserWord,
  getAllUserAgregatedWords,
} from '../../utils/api/thunks';

const initialState = {
  isLoading: false,
  userWords: [],
  savedUserWord: null,
};

export const userWordsSlice = createSlice({
  name: 'userWords',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUserAgregatedWords.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getAllUserAgregatedWords.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      state.userWords = payload;
    },
    [getAllUserAgregatedWords.rejected.type]: (state) => {
      state.isLoading = false;
    },
    [saveUserWord.pending.type]: (state) => {
      state.isLoading = true;
    },
    [saveUserWord.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.userWords = [state.userWords, ...action.payload];
    },
    [saveUserWord.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

// export const { setLangGroupNumber, setPage } = wordsSlice.actions;
export default userWordsSlice.reducer;
