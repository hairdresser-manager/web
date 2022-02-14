import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const Services = createAsyncThunk('ServicesSlices/Services', async (thunkAPI) => {
  try {
    let res;
    res = await api.services();
    return {
      ...res.data,
      services: [...res.data],
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.errors);
  }
});

export const AddService = createAsyncThunk(
  'ServicesSlices/AddService',
  async (
    { name, categoryId, description, minimumTime, maximumTime, price, available },
    thunkAPI
  ) => {
    try {
      let res;
      res = await api.addService({
        name,
        categoryId,
        description,
        minimumTime,
        maximumTime,
        price,
        available,
      });
      return {
        ...res.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const EditService = createAsyncThunk(
  'ServicesSlices/EditService',
  async (
    { name, categoryId, description, minimumTime, maximumTime, price, available, serviceId },
    thunkAPI
  ) => {
    try {
      let res;
      res = await api.editService(
        {
          name,
          categoryId,
          description,
          minimumTime,
          maximumTime,
          price,
          available,
        },
        serviceId
      );
      return {
        ...res.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const ServicesSlice = createSlice({
  name: 'ServicesSlices',
  initialState: {
    isLoading: false,
    isSuccess: false,
    isAddSuccess: false,
    isEditSuccess: false,
    isError: false,
    errorMessage: '',
    services: [],
    selectService: {},
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = '';
      state.services = [];
    },
    selectservice: (state, data) => {
      state.selectService = data.payload;
    },
  },
  extraReducers: {
    [Services.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    [Services.fulfilled]: (state, { payload }) => {
      state.services = payload.services;
      state.isSuccess = true;
      state.isLoading = false;
    },
    [Services.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
    [AddService.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    [AddService.fulfilled]: (state) => {
      state.isAddSuccess = true;
      state.isLoading = false;
    },
    [AddService.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
    [EditService.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
      state.isEditSuccess = false;
    },
    [EditService.fulfilled]: (state) => {
      state.isEditSuccess = true;
      state.isLoading = false;
    },
    [EditService.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { clearState, selectservice } = ServicesSlice.actions;

export default ServicesSlice.reducer;
