import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const AvailableDates = createAsyncThunk(
  'AvailableDatesSlices/AvailableDates',
  async (thunkAPI) => {
    try {
      let res;
      res = await api.availableDates();
      return {
        ...res.data,
        appointments: [...res.data],
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
    isEmployeeSelected: false,
    isDaySelected: false,
    isHourSelected: false,
    errorMessage: '',
    appointments: [],
    selectedEmployee: [],
    selectedDay: '',
    selectedHour: '',
  },
  reducers: {
    selectEmployee: (state, data) => {
      state.selectedEmployee = data.payload;
      state.isEmployeeSelected = true;
    },
    selectDay: (state, data) => {
      state.selectedDay = data.payload;
      state.isDaySelected = true;
    },
    selectHour: (state, data) => {
      state.selectedHour = data.payload;
      state.isHourSelected = true;
    },
    clearStateSelectDay: (state) => {
      state.selectedDay = '';
      state.isDaySelected = false;
    },
    clearStateSelectHour: (state) => {
      state.selectedHour = '';
      state.isHourSelected = false;
    },
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.isEmployeeSelected = false;
      state.isDaySelected = false;
      state.isHourSelected = false;
      state.errorMessage = '';
      state.appointments = [];
      state.selectedEmployee = [];
      state.selectedDay = '';
      state.selectedHour = '';
    },
  },
  extraReducers: {
    [AvailableDates.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    [AvailableDates.fulfilled]: (state, { payload }) => {
      state.appointments = payload.appointments;
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

export const {
  clearState,
  selectEmployee,
  selectDay,
  selectHour,
  clearStateSelectHour,
  clearStateSelectDay,
} = AvailableDatesSlice.actions;

export default AvailableDatesSlice.reducer;
