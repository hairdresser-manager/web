import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const UserReservations = createAsyncThunk(
  'UserReservationsSlice/UserReservations',
  async (thunkAPI) => {
    try {
      let res;
      res = await api.userAppointments();
      return {
        ...res.data,
        appointments: [...res.data],
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const UserReservationsSlice = createSlice({
  name: 'UserReservationsSlices',
  initialState: {
    isLoading: true,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    appointments: [],
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
  extraReducers: {
    [UserReservations.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    [UserReservations.fulfilled]: (state, { payload }) => {
      state.appointments = payload.appointments;
      state.isSuccess = true;
      state.isConfirm = true;
      state.isLoading = false;
    },
    [UserReservations.rejected]: (state, { payload }) => {
      state.isError = true;
      state.errorMessage = payload;
    },
  },
});

export const { clearState } = UserReservationsSlice.actions;

export default UserReservationsSlice.reducer;
