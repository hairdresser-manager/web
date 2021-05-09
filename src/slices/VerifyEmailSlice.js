import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const verifyEmail = createAsyncThunk(
  'VerifyEmailSlice/verifyEmail',
  async ({ token, email }, thunkAPI) => {
    try {
      let res;
      res = await api.verifyEmail({
        token,
        email,
      });
      return {
        ...res.data,
        verifyToken: token,
        email: email,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const VerifyEmailSlice = createSlice({
  name: 'VerifyEmailSlices',
  initialState: {
    email: '',
    verifyToken: '',
    isLoading: false,
    isSuccess: false,
    isError: false,
    isConfirm: false,
    errorMessage: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.isConfirm = false;
    },
  },
  extraReducers: {
    [verifyEmail.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    [verifyEmail.fulfilled]: (state, { payload }) => {
      state.verifyToken = payload.verifyToken;
      state.email = payload.email;
      state.isSuccess = true;
      state.isConfirm = true;
    },
    [verifyEmail.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { clearState } = VerifyEmailSlice.actions;

export default VerifyEmailSlice.reducer;
