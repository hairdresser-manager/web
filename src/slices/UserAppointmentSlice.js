import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const addAppointment = createAsyncThunk(
  'UserAppointmentSlice/addAppointment',
  async ({ employeeId, serviceId, date }, thunkAPI) => {
    try {
      let res;
      res = await api.addAppointment({ employeeId, serviceId, date });
      return { ...res.data, date: date };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const UserAppointmentSlice = createSlice({
  name: 'UserAppointmentSlices',
  initialState: {
    isLoading: false,
    isSuccess: false,
    isLoggedIn: false,
    isError: false,
    errorMessage: '',
    date: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
  extraReducers: {
    [addAppointment.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
    },
    [addAppointment.fulfilled]: (state, { payload }) => {
      state.date = payload.date;
      state.isLoggedIn = true;
      state.isSuccess = true;
      state.isLoading = false;
    },
    [addAppointment.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { clearState } = UserAppointmentSlice.actions;

export default UserAppointmentSlice.reducer;
