import { createSlice } from '@reduxjs/toolkit';
import { getDifficultWords, getLearnedWords } from '../../utils/api/thunks';

const initialState = {
  isLoading: false,
  dificultWords: null,
  learnedWords: null,
};

export const agregatedWordsSlice = createSlice({
  name: 'agregatedWords',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getDifficultWords.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getDifficultWords.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.dificultWords = action.payload;
    },
    [getDifficultWords.rejected.type]: (state) => {
      state.isLoading = false;
    },
    [getLearnedWords.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getLearnedWords.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.learnedWords = action.payload;
    },
    [getLearnedWords.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export default agregatedWordsSlice.reducer;
