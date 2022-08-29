import { createSlice } from '@reduxjs/toolkit';
import { getDifficultWords, getLearnedWords } from '../../utils/api/thunks';

const initialState = {
  isLoading: false,
  difficultWords: [],
  learnedWords: [],
};

export const agregatedWordsSlice = createSlice({
  name: 'agregatedWords',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getDifficultWords.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getDifficultWords.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      state.difficultWords = payload[0];
    },
    [getDifficultWords.rejected.type]: (state) => {
      state.isLoading = false;
    },
    [getLearnedWords.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getLearnedWords.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      state.learnedWords = payload[0];
    },
    [getLearnedWords.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export default agregatedWordsSlice.reducer;
