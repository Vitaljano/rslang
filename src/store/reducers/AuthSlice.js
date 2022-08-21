import { createSlice } from '@reduxjs/toolkit';
import { registration, getNewUserTokens } from '../../utils/api/thunks';
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
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setAuthUserName(state, action) {
      state.user.name = action.payload;
    },
    setAuthUserId(state, action) {
      state.user.userId = action.payload;
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

    [getNewUserTokens.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getNewUserTokens.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      if (state.user) {
        state.user.token = action.payload.token;
        state.user.refreshToken = action.payload.refreshToken;
      }
    },
    [getNewUserTokens.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setIsAuth, setAuthUserName, setAuthUserId } = authSlice.actions;

export default authSlice.reducer;
