import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';
import { $authHost, $host } from './http';
import AuthService from '../../services/authService';

//Auth
export const registration = createAsyncThunk(
  'auth/createUser',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await AuthService.registration(name, email, password);
      toastr.success('Регистрация', 'Успешно выполнена');
      return response.data;
    } catch (e) {
      toastr.error('Регистрация', 'не выполнена');
      if (e instanceof Error) console.error(e.message);
      return thunkAPI.rejectWithValue(
        'Не удалось создать нового пользователя!'
      );
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.login(email, password);
      return response.data;
    } catch (e) {
      toastr.error('Неверный логин или пароль');
      return thunkAPI.rejectWithValue('Неверный логин или пароль');
    }
  }
);
//User
export const getUserById = createAsyncThunk(
  'user/getUserById',
  async (userId, thunkAPI) => {
    try {
      const response = await $authHost.get(`/users/${userId}`, {});
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const updateUserById = createAsyncThunk(
  'user/updateUserById',
  async (userId, thunkAPI) => {
    try {
      const response = await $authHost.put(`/users/${userId}`, {});
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const deleteUserById = createAsyncThunk(
  'user/deleteUserById',
  async (userId, thunkAPI) => {
    try {
      const response = await $authHost.delete(`/users/${userId}`, {});
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getNewUserTokens = createAsyncThunk(
  'user/getUserTokens',
  async (userId, thunkAPI) => {
    try {
      const response = await AuthService.check(userId, {});
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

//Users/Words
export const getAllUserWords = createAsyncThunk(
  'user/getAllUserWords',
  async (userId, thunkAPI) => {
    try {
      const response = await $authHost.get(`/users/${userId}/words`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось получить слова пользователя');
    }
  }
);
export const getUserWordsBId = createAsyncThunk(
  'user/getUserWordById',
  async (userId, wordId, thunkAPI) => {
    try {
      const response = await $authHost.get(`/users/${userId}/words${wordId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const createUserWord = createAsyncThunk(
  'user/createUserWord',
  async (userId, wordId, thunkAPI) => {
    try {
      const response = await $authHost.post(`/users/${userId}/words/${wordId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const updateUserWordsById = createAsyncThunk(
  'user/updateUserWordById',
  async (userId, wordId, thunkAPI) => {
    try {
      const response = await $authHost.put(`/users/${userId}/words${wordId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const deleteUserWordsBIyd = createAsyncThunk(
  'user/deleteUserWordById',
  async (userId, wordId, thunkAPI) => {
    try {
      const response = await $authHost.delete(
        `/users/${userId}/words${wordId}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

//Users/AggregatedWords
export const getAllUserAgregatedWords = createAsyncThunk(
  'user/getAllUserAgregatedWords',
  async (userId, thunkAPI) => {
    try {
      const response = await $authHost.get(`/users/${userId}/aggregatedWords`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const getUserAgregatedWordById = createAsyncThunk(
  'user/getUserAgregatedWordById',
  async (userId, wordId, thunkAPI) => {
    try {
      const response = await $authHost.get(
        `/users/${userId}/aggregatedWords/${wordId}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

//Users/Statistic
export const getStatistics = createAsyncThunk(
  'user/getUserStatistics',
  async (userId, thunkAPI) => {
    try {
      const response = await $authHost.get(`/users/${userId}/statistics`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const upsertStatistics = createAsyncThunk(
  'user/upsertUserStatistics',
  async (userId, thunkAPI) => {
    try {
      const response = await $authHost.put(`/users/${userId}/statistics`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

//Usersettings
export const getSettings = createAsyncThunk(
  'user/getUserSettingss',
  async (userId, thunkAPI) => {
    try {
      const response = await $authHost.get(`/users/${userId}/settings`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const upsertSettings = createAsyncThunk(
  'user/upsertUserSettings',
  async (userId, thunkAPI) => {
    try {
      const response = await $authHost.put(`/users/${userId}/settings`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

//Words
export const getAllWords = createAsyncThunk('getAllWords', async (thunkAPI) => {
  try {
    const response = await $host.get(`/words`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const getGroupWords = createAsyncThunk(
  'getWords',
  async (group, page, thunkAPI) => {
    try {
      const response = await $authHost.get(
        `/words?group=${group}$page=${page}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getWordByID = createAsyncThunk(
  'getWordByID ',
  async (wordId, thunkAPI) => {
    try {
      const response = await $host.get(`/words/${wordId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
