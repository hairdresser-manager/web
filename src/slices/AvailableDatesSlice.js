import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const AvailableDates = createAsyncThunk(
  'AvailableDatesSlices/AvailableDates',
  async ({ Employees, ServiceDuration, StartDate, EndDate }, thunkAPI) => {
    try {
      let res;
      res = await api.availableDates(Employees, ServiceDuration, StartDate, EndDate);
      return {
        ...res.data,
        appointments: [...res.data],
        selectedEmployee: Employees,
        selectedDate: EndDate,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const AvailableDatesSlice = createSlice({
  name: 'AvailableDatesSlices',
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    appointments: [],
    selectedEmployee: null,
    selectedDate: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = '';
      state.appointments = [];
      state.selectedEmployee = [];
      state.selectedDate = '';
    },
  },
  extraReducers: {
    [AvailableDates.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    [AvailableDates.fulfilled]: (state, { payload }) => {
      state.appointments = payload.appointments;
      state.selectedDate = payload.selectedDate;
      state.selectedEmployee = payload.selectedEmployee;
      state.isSuccess = true;
      state.isLoading = false;
    },
    [AvailableDates.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { clearState } = AvailableDatesSlice.actions;

export default AvailableDatesSlice.reducer;
