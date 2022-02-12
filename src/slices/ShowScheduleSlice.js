import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const showScheduleById = createAsyncThunk(
  'ShowScheduleSlices/showScheduleById',
  async ({ id }, thunkAPI) => {
    try {
      let res;
      res = await api.showScheduleById(id);
      return {
        ...res.data,
        schedule: [...res.data],
      };
    } catch (error) {
      if (error.response.status === 404) {
        return thunkAPI.rejectWithValue('No schedule for this employee!');
      } else {
        return thunkAPI.rejectWithValue(error.response.data.errors);
      }
    }
  }
);

export const showSchedule = createAsyncThunk(
  'ShowScheduleSlices/showSchedule',
  async (thunkAPI) => {
    try {
      let res;
      res = await api.showSchedule();
      return {
        ...res.data,
        schedule: [...res.data],
      };
    } catch (error) {
      if (error.response.status === 404) {
        return thunkAPI.rejectWithValue('No schedule for this employee!');
      } else {
        return thunkAPI.rejectWithValue(error.response.data.errors);
      }
    }
  }
);

export const ShowScheduleSlice = createSlice({
  name: 'ShowScheduleSlices',
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    schedule: [],
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
    [showScheduleById.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
      state.errorMessage = '';
    },
    [showScheduleById.fulfilled]: (state, { payload }) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.schedule = payload.schedule;
    },
    [showScheduleById.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
    [showSchedule.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
      state.errorMessage = '';
    },
    [showSchedule.fulfilled]: (state, { payload }) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.schedule = payload.schedule;
    },
    [showSchedule.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { clearState } = ShowScheduleSlice.actions;

export default ShowScheduleSlice.reducer;
