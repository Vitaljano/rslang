import { createSlice } from '@reduxjs/toolkit';
import { registration } from '../../utils/api/thunks';
import { login } from '../../utils/api/thunks';

const initialState = {
  isLoading: false,
  userCreationError: null,
  isAuth: false,
  user: {
    message: '',
    token: '',
    refreshToken: '',
    userId: '',
    name: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserName: (state, { payload }) => {
      state.user ? (state.user.name = payload.name) : null;
    },
  },
  extraReducers: {
    [registration.pending.type]: (state) => {
      state.isLoading = true;
    },

    [registration.fulfilled.type]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.userCreationError = null;
      state.isAuth = true;
    },

    [registration.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.userCreationError = action.payload;
      console.error(action.payload);
    },
    [login.pending.type]: (state) => {
      state.isLoading = true;
    },

    [login.fulfilled.type]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.userCreationError = null;
      state.isAuth = true;
    },

    [login.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.userCreationError = action.payload;
      console.error(action.payload);
    },
  },
});

export const { setUserName } = authSlice.actions;

export default authSlice.reducer;
