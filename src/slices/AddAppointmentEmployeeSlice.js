import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const AddAppointmentByEmployee = createAsyncThunk(
  'AddAppointmentEmployeeSlice/AddAppointmentByEmployee',
  async (
    { clientFirstName, clientEmail, clientPhoneNumber, employeeId, serviceId, date },
    thunkAPI
  ) => {
    try {
      let res;
      res = await api.AddAppointmentByEmployee({
        clientFirstName,
        clientEmail,
        clientPhoneNumber,
        employeeId,
        serviceId,
        date,
      });
      return { ...res.data, date: date };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const AddAppointmentEmployeeSlice = createSlice({
  name: 'AddAppointmentEmployeeSlices',
  initialState: {
    date: '',
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
  extraReducers: {
    [AddAppointmentByEmployee.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
    },
    [AddAppointmentByEmployee.fulfilled]: (state, { payload }) => {
      state.date = payload.date;
      state.isSuccess = true;
      state.isLoading = false;
    },
    [AddAppointmentByEmployee.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { clearState } = AddAppointmentEmployeeSlice.actions;

export default AddAppointmentEmployeeSlice.reducer;
