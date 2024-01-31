// Імпорт бібліотек і компонентів
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
  updateContact,
} from './contactsAsyncThunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null },
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      .addCase(addContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
        state.isLoading = false;
      })
      .addCase(addContacts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      .addCase(deleteContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(({ id }) => id !== payload);
        state.isLoading = false;
      })
      .addCase(deleteContacts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      .addCase(updateContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        const index = state.contacts.findIndex(
          contact => contact.id === payload.id
        );
        state.contacts[index] = payload;
        state.isLoading = false;
      })
      .addCase(updateContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});
// Експорт
export default contactsSlice.reducer;
