// Імпорт бібліотек,компонентів і логіки Redux
import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/filterSelectors';
// Вибір контактів
export const selectContacts = state => state.contacts.contacts;
// Завантаження
export const selectIsLoading = state => state.contacts.isLoading;
// Помилка
export const selectError = state => state.contacts.error;
// Фільтр
export const selectFilterContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
