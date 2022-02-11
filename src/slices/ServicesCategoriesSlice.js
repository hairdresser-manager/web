import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const ServicesCategories = createAsyncThunk(
  'ServicesCategoriesSlices/ServicesCategories',
  async (thunkAPI) => {
    try {
      let res;
      res = await api.servicesCategories();
      return {
        ...res.data,
        servicesCategories: [...res.data],
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const ServicesCategoriesSlice = createSlice({
  name: 'ServicesCategoriesSlices',
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    servicesCategories: [],
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
    [ServicesCategories.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    [ServicesCategories.fulfilled]: (state, { payload }) => {
      state.servicesCategories = payload.servicesCategories;
      state.isSuccess = true;
      state.isLoading = false;
    },
    [ServicesCategories.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { clearState } = ServicesCategoriesSlice.actions;

export default ServicesCategoriesSlice.reducer;
