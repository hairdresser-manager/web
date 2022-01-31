import { createSlice } from '@reduxjs/toolkit';

export const SearchEmployeeSlice = createSlice({
  name: 'SearchEmployeeSlices',
  initialState: {
    searchValue: '',
    isSelectedEmployee: false,
    selectedEmployeeId: null,
  },
  reducers: {
    setSearchValue: (state, data) => {
      state.searchValue = data.payload;
    },
    setSelectedEmployee: (state, data) => {
      state.isSelectedEmployee = true;
      state.selectedEmployeeId = data.payload;
    },
    clearSearchValue: (state) => {
      state.searchValue = '';
    },
  },
});

export const {
  setSearchValue,
  setSelectedEmployee,
  clearSearchValue,
} = SearchEmployeeSlice.actions;

export default SearchEmployeeSlice.reducer;
