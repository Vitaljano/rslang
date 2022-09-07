import { createSlice } from '@reduxjs/toolkit';
import {
  // getAllUserWords,
  saveUserWord,
  getAllUserAgregatedWords,
} from '../../utils/api/thunks';

const initialState = {
  isLoading: false,
  allUserWords: [],
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
      state.allUserWords = payload[0];
    },
    [getAllUserAgregatedWords.rejected.type]: (state) => {
      state.isLoading = false;
    },
    [saveUserWord.pending.type]: (state) => {
      state.isLoading = true;
    },
    [saveUserWord.fulfilled.type]: (state) => {
      state.isLoading = false;
    },
    [saveUserWord.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});
export default userWordsSlice.reducer;
