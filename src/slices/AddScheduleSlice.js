import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const addSchedule = createAsyncThunk(
  'AddScheduleSlices/addSchedule',
  async ({ date, startHour, endHour, id }, thunkAPI) => {
    try {
      let res;
      res = await api.addSchedule(
        {
          date,
          startHour,
          endHour,
        },
        id
      );
      return {
        ...res.data,
        date: date,
        startHour: startHour,
        endHour: endHour,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const AddScheduleSlice = createSlice({
  name: 'AddScheduleSlices',
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    date: '',
    startHour: '',
    endHour: '',
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
    [addSchedule.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    },
    [addSchedule.fulfilled]: (state, { payload }) => {
      state.date = payload.date;
      state.startHour = payload.startHour;
      state.endHour = payload.endHour;
      state.isSuccess = true;
      state.isLoading = false;
    },
    [addSchedule.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { clearState } = AddScheduleSlice.actions;

export default AddScheduleSlice.reducer;
