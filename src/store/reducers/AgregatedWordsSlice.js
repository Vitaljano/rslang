import { createSlice } from '@reduxjs/toolkit';
import { getAllUserAgregatedWords } from '../../utils/api/thunks';

const initialState = {
  isLoading: false,
  dificultWords: null,
  leaningWords: null,
};

export const agregatedWordsSlice = createSlice({
  name: 'agregatedWords',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getAllUserAgregatedWords.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getAllUserAgregatedWords.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.leaningWords = action.payload;
    },
    [getAllUserAgregatedWords.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export default agregatedWordsSlice.reducer;
