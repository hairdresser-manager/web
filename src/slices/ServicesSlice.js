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

export const PublicServices = createAsyncThunk(
  'ServicesSlices/PublicServices',
  async (thunkAPI) => {
    try {
      let res;
      res = await api.publicServices();
      return {
        ...res.data,
        services: [...res.data],
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

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

export const AddEmployeeToService = createAsyncThunk(
  'ServicesSlices/AddEmployeeToService',
  async ({ employeeId, serviceId }, thunkAPI) => {
    try {
      let res;
      res = await api.addEmployeeToService(
        {
          employeeId,
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
    isAddEmployeeSuccess: false,
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
      state.isAddEmployeeSuccess = false;
      state.errorMessage = '';
      state.services = [];
    },
    clearError: (state) => {
      state.isError = false;
      state.errorMessage = '';
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
    [PublicServices.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    [PublicServices.fulfilled]: (state, { payload }) => {
      state.services = payload.services;
      state.isSuccess = true;
      state.isLoading = false;
    },
    [PublicServices.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
    [AddService.pending]: (state) => {
      state.isLoading = true;
      state.isAddSuccess = false;
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
    [AddEmployeeToService.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
      state.isAddEmployeeSuccess = false;
    },
    [AddEmployeeToService.fulfilled]: (state) => {
      state.isAddEmployeeSuccess = true;
      state.isLoading = false;
    },
    [AddEmployeeToService.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { clearState, selectservice, clearError } = ServicesSlice.actions;

export default ServicesSlice.reducer;
