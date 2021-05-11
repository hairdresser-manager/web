import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const getEmployees = createAsyncThunk('EmployeesSlices/getEmployees', async (thunkAPI) => {
  try {
    let res;
    res = await api.showEmployees();
    return {
      ...res.data,
      employees: [...res.data],
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.errors);
  }
});

export const EmployeesSlice = createSlice({
  name: 'EmployeeSlices',
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    employees: [],
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = '';
      state.employees = [];
    },
  },
  extraReducers: {
    [getEmployees.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    [getEmployees.fulfilled]: (state, { payload }) => {
      state.employees = payload.employees;
      state.isSuccess = true;
      state.isLoading = false;
    },
    [getEmployees.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { clearState } = EmployeesSlice.actions;

export default EmployeesSlice.reducer;
