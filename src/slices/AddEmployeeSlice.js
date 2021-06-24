import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const addEmployee = createAsyncThunk(
  'AddEmployeeSlices/addEmployee',
  async ({ email }, thunkAPI) => {
    try {
      let res;
      res = await api.addEmployee({
        email,
      });
      return {
        ...res.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const AddEmployeeSlice = createSlice({
  name: 'AddEmployeeSlices',
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    employeeId: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = '';
    },
  },
  extraReducers: {
    [addEmployee.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    [addEmployee.fulfilled]: (state, { payload }) => {
      state.employeeId = payload.employeeId;
      state.isSuccess = true;
      state.isLoading = false;
    },
    [addEmployee.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { clearState } = AddEmployeeSlice.actions;

export default AddEmployeeSlice.reducer;
