// Користувач
export const selectAuthUser = state => state.auth.user;
// Токен
export const selectAuthToken = state => state.auth.token;
// Завантаження
export const selectAuthIsLoading = state => state.auth.isLoading;
// Помилка
export const selectAuthError = state => state.auth.error;
// Оновлення
export const selectAuthIsRefreshingCurrentUser = state =>
  state.auth.isRefreshingCurrentUser;
