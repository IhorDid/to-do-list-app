import { createSlice } from '@reduxjs/toolkit';

const savedFilter = localStorage.getItem('statusFilter') || 'all';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    status: savedFilter,
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
      localStorage.setItem('statusFilter', action.payload);
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
