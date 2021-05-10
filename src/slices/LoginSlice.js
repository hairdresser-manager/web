import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const login = createAsyncThunk('LoginSlice/login', async ({ email, password }, thunkAPI) => {
  try {
    let res;
    res = await api.login({ email, password });
    let { accessToken, refreshToken, firstName, roles } = res.data;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('roles', JSON.stringify(roles));
    return { ...res.data, email: email, password: password };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.errors);
  }
});

export const LoginSlice = createSlice({
  name: 'LoginSlices',
  initialState: {
    email: '',
    firstName: '',
    roles: '',
    isLoading: false,
    isSuccess: false,
    isLoggedIn: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    [login.fulfilled]: (state, { payload }) => {
      state.email = payload.email;
      state.firstName = payload.firstName;
      state.roles = payload.roles;
      state.isLoggedIn = true;
      state.isSuccess = true;
      state.isLoading = false;
    },
    [login.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { clearState } = LoginSlice.actions;

export default LoginSlice.reducer;
