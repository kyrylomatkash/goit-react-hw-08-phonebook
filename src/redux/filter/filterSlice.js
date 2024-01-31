// Імпорт бібліотеки
import { createSlice } from '@reduxjs/toolkit';
// Стейт
const initialState = {
  value: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter: (state, { payload }) => {
      state.value = payload;
    },
  },
});
// Експорт
export default filterSlice.reducer;
export const { updateFilter } = filterSlice.actions;
