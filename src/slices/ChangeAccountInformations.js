import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const ChangeAccountInformations = createAsyncThunk(
  'ChangeAccountInformationsSlices/ChangeAccountInformations',
  async ({ firstName, lastName, mobilePhone }, thunkAPI) => {
    try {
      let res;
      res = await api.ChangeAccountInformations({
        firstName,
        lastName,
        mobilePhone,
      });
      return {
        ...res.data,
        firstName: firstName,
        lastName: lastName,
        mobilePhone: mobilePhone,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const ChangeAccountInformationsSlice = createSlice({
  name: 'ChangeAccountInformationsSlices',
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
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
    [ChangeAccountInformations.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    [ChangeAccountInformations.fulfilled]: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.mobilePhone = payload.mobilePhone;
      state.isSuccess = true;
      state.isLoading = false;
    },
    [ChangeAccountInformations.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { clearState } = ChangeAccountInformationsSlice.actions;

export default ChangeAccountInformationsSlice.reducer;
