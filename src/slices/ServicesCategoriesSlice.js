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

export const ChangeServicesCategory = createAsyncThunk(
  'ServicesCategoriesSlices/ChangeServicesCategory',
  async ({ name, id }, thunkAPI) => {
    try {
      let res;
      res = await api.changeServicesCategory({ name }, id);
      return {
        ...res.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const AddServicesCategory = createAsyncThunk(
  'ServicesCategoriesSlices/AddServicesCategory',
  async ({ categoryName }, thunkAPI) => {
    try {
      let res;
      res = await api.addServicesCategory({ name: categoryName });
      return {
        ...res.data,
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
    isUpdateSuccess: false,
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
      state.isSuccess = false;
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
    [ChangeServicesCategory.pending]: (state) => {
      state.isLoading = true;
      state.isUpdateSuccess = false;
      state.errorMessage = '';
    },
    [ChangeServicesCategory.fulfilled]: (state) => {
      state.isUpdateSuccess = true;
      state.isLoading = false;
    },
    [ChangeServicesCategory.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
    [AddServicesCategory.pending]: (state) => {
      state.isLoading = true;
      state.isUpdateSuccess = false;
      state.errorMessage = '';
    },
    [AddServicesCategory.fulfilled]: (state) => {
      state.isUpdateSuccess = true;
      state.isLoading = false;
    },
    [AddServicesCategory.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { clearState } = ServicesCategoriesSlice.actions;

export default ServicesCategoriesSlice.reducer;
