import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    updateFilter(state, action) {
      return (state =  action.payload);
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
