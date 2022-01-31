import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const removeSchedule = createAsyncThunk(
  'RemoveScheduleSlices/removeSchedule',
  async ({ id, date }, thunkAPI) => {
    try {
      let res;
      res = await api.removeSchedule(
        {
          date,
        },
        id
      );
      return {
        ...res.data,
        date: date,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const RemoveScheduleSlice = createSlice({
  name: 'RemoveScheduleSlices',
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    date: '',
    dupa: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = '';
      state.dupa = 'dupa';
    },
  },
  extraReducers: {
    [removeSchedule.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    },
    [removeSchedule.fulfilled]: (state, { payload }) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.date = payload.date;
    },
    [removeSchedule.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { clearState } = RemoveScheduleSlice.actions;

export default RemoveScheduleSlice.reducer;
