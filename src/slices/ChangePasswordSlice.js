import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const changePassword = createAsyncThunk(
  'ChangePasswordSlices/changePassword',
  async ({ currentPassword, newPassword, reTypedNewPassword }, thunkAPI) => {
    try {
      let res;
      res = await api.changePassword({ currentPassword, newPassword, reTypedNewPassword });
      return {
        ...res.data,
        currentPassword: currentPassword,
        newPassword: newPassword,
        reTypedNewPassword: reTypedNewPassword,
      };
    } catch (error) {
      console.log(error.response);
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const ChangePasswordSlice = createSlice({
  name: 'ChangePasswordSlices',
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    currentPassword: '',
    newPassword: '',
    reTypedNewPassword: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
  extraReducers: {
    [changePassword.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    [changePassword.fulfilled]: (state, { payload }) => {
      state.currentPassword = payload.currentPassword;
      state.newPassword = payload.newPassword;
      state.reTypedNewPassword = payload.reTypedNewPassword;
      state.isSuccess = true;
    },
    [changePassword.rejected]: (state, { payload }) => {
      state.isError = true;
      state.errorMessage = payload;
    },
  },
});

export const { clearState } = ChangePasswordSlice.actions;

export default ChangePasswordSlice.reducer;
