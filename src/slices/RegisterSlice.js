import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const register = createAsyncThunk(
  'RegisterSlice/register',
  async ({ email, password, ReTypedPassword, firstName, lastName, MobilePhone }, thunkAPI) => {
    try {
      let res;
      res = await api.signup({
        email,
        password,
        ReTypedPassword,
        firstName,
        lastName,
        MobilePhone,
      });
      let { accessToken, refreshToken } = res.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      return {
        ...res.data,
        email: email,
        password: password,
        ReTypedPassword: ReTypedPassword,
        firstName: firstName,
        lastName: lastName,
        MobilePhone: MobilePhone,
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
      state.errorMessage = '';
    },
    [register.fulfilled]: (state, { payload }) => {
      state.email = payload.email;
      state.password = payload.password;
      state.reTypedPassword = payload.reTypedPassword;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.mobilePhone = payload.mobilePhone;
      state.isSuccess = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.isError = true;
      state.errorMessage = payload;
    },
  },
});

export const { clearState } = RegisterSlice.actions;

export default RegisterSlice.reducer;
