import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const login = createAsyncThunk('LoginSlice/login', async ({ email, password }, thunkAPI) => {
  try {
    let res;
    res = await api.login({ email, password });
    let { accessToken, refreshToken } = res.data;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    return { ...res.data, email: email, password: password };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.errors);
  }
});

export const test = createAsyncThunk('LoginSlice/login', async (thunkAPI) => {
  try {
    let res;
    res = await api.test();
    console.log(res);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.errors);
  }
});

export const LoginSlice = createSlice({
  name: 'LoginSlices',
  initialState: {
    isLoading: false,
    isSuccess: false,
    isLoggedIn: false,
    isError: false,
    errorMessage: '',
    email: '',
    password: '',
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
      state.password = payload.password;
      state.isLoggedIn = true;
      state.isSuccess = true;
    },
    [login.rejected]: (state, { payload }) => {
      state.isError = true;
      state.errorMessage = payload;
    },
  },
});

export const { clearState } = LoginSlice.actions;

export default LoginSlice.reducer;
