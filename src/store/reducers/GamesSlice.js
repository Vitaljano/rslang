import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isGameFromTextbook: false,
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGamesSrartFlag: (state, action) => {
      state.isGameFromTextbook = action.payload;
    },
  },
  extraReducers: {},
});

export const { setGamesSrartFlag } = gamesSlice.actions;
export default gamesSlice.reducer;
