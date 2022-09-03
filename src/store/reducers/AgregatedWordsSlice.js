import { createSlice } from '@reduxjs/toolkit';
import { getDifficultWords, getLearnedWords } from '../../utils/api/thunks';

const initialState = {
  isLoading: false,
  difficultWords: [],
  learnedWords: [],
  pageNumber: 0,
  pageCount: 0,
};

export const agregatedWordsSlice = createSlice({
  name: 'agregatedWords',
  initialState: initialState,
  reducers: {
    setAgregatedPage: (state, action) => {
      state.pageNumber = action.payload;
    },
    setAgregatedPageCount: (state, action) => {
      state.pageCount = action.payload;
    },
  },
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
export const { setAgregatedPage, setAgregatedPageCount } =
  agregatedWordsSlice.actions;
export default agregatedWordsSlice.reducer;
