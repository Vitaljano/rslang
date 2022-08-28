import { createSlice } from '@reduxjs/toolkit';
import { getGroupWords, getWordByID } from '../../utils/api/thunks';

const initialState = {
  isLoading: false,
  currentWords: [],
  langGroupNumber: 0,
  bookPage: 0,
  paginationCount: 30,
  itemsPerPage: 20,
  activeWord: null,
};

export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    setLangGroupNumber: (state, action) => {
      state.langGroupNumber = action.payload;
    },
    setPage: (state, action) => {
      state.bookPage = action.payload;
    },
  },
  extraReducers: {
    [getGroupWords.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getGroupWords.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.currentWords = action.payload;
    },
    [getGroupWords.rejected.type]: (state) => {
      state.isLoading = false;
    },
    [getWordByID.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getWordByID.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.activeWord = action.payload;
    },
    [getWordByID.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setLangGroupNumber, setPage } = wordsSlice.actions;
export default wordsSlice.reducer;
