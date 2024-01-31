// Імпорт бібліотек,компонентів і логіки Redux
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// Токен
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
// Реєстрація
export const register = createAsyncThunk(
  'auth/register',
  async (dataUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', dataUser);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// Логін
export const login = createAsyncThunk(
  'auth/login',
  async (dataUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', dataUser);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// Вихід з облікового запису
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);
// Оновлення інформації про користувача
export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const tokenPersist = getState().auth.token;
    if (!tokenPersist) {
      return rejectWithValue();
    }
    token.set(tokenPersist);

    try {
      const { data } = await axios('/users/current');
      return data;
    } catch (error) {
      token.unset();
      return rejectWithValue(error.message);
    }
  }
);
