// Імпорт бібліотек,компонентів і логіки Redux
import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshCurrentUser, register } from './authAsyncThunk';
// Стейт
const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoading: false,
  error: null,
  isRefreshingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload: { user, token } }) => {
        state.user = user;
        state.token = token;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload: { user, token } }) => {
        state.user = user;
        state.token = token;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.user = initialState.user;
        state.error = payload;
        state.isLoading = false;
      })

      .addCase(logout.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLoading = false;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      .addCase(refreshCurrentUser.pending, state => {
        state.isLoading = true;
        state.isRefreshingCurrentUser = true;
        state.error = null;
      })
      .addCase(refreshCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isRefreshingCurrentUser = false;
        state.isLoading = false;
      })
      .addCase(refreshCurrentUser.rejected, (state, { payload }) => {
        state.token = null;
        state.error = payload;
        state.isRefreshingCurrentUser = false;
        state.isLoading = false;
      });
  },
});
// Експорт
export default authSlice.reducer;
