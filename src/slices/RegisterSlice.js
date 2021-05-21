import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const register = createAsyncThunk(
  'RegisterSlice/register',
  async ({ email, password, reTypedPassword, firstName, lastName, mobilePhone }, thunkAPI) => {
    try {
      let res;
      res = await api.signup({
        email,
        password,
        reTypedPassword,
        firstName,
        lastName,
        mobilePhone,
      });
      return {
        ...res.data,
        email: email,
        password: password,
        reTypedPassword: reTypedPassword,
        firstName: firstName,
        lastName: lastName,
        mobilePhone: mobilePhone,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const RegisterSlice = createSlice({
  name: 'RegisterSlices',
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    email: '',
    password: '',
    reTypedPassword: '',
    firstName: '',
    lastName: '',
    mobilePhone: '',
    verifyToken: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
    },
    [register.fulfilled]: (state, { payload }) => {
      state.email = payload.email;
      state.password = payload.password;
      state.reTypedPassword = payload.reTypedPassword;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.mobilePhone = payload.mobilePhone;
      state.verifyToken = payload.verifyToken;
      state.isSuccess = true;
      state.isLoading = false;
    },
    [register.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { clearState } = RegisterSlice.actions;

export default RegisterSlice.reducer;
