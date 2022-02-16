import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const Reviews = createAsyncThunk('ReviewsSlices/Reviews', async (thunkAPI) => {
  try {
    let res;
    res = await api.reviews();
    return {
      ...res.data,
      reviews: [...res.data],
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.errors);
  }
});

export const employeeReviews = createAsyncThunk(
  'ReviewsSlices/employeeReviews',
  async ({ employeeId }, thunkAPI) => {
    try {
      let res;
      res = await api.employeeReviews(employeeId);
      return {
        ...res.data,
        employeeReviews: [...res.data],
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const addReview = createAsyncThunk(
  'ReviewsSlices/addReview',
  async ({ appointmentId, rate, description }, thunkAPI) => {
    try {
      let res;
      res = await api.addReview({ appointmentId, rate, description });
      return {
        ...res.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const ReviewsSlice = createSlice({
  name: 'ReviewsSlices',
  initialState: {
    isLoading: false,
    isSuccess: false,
    isSuccessAdded: false,
    isError: false,
    errorMessage: '',
    reviews: [],
    employeeReviews: [],
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
    [Reviews.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    [Reviews.fulfilled]: (state, { payload }) => {
      state.reviews = payload.reviews;
      state.isSuccess = true;
      state.isLoading = false;
    },
    [Reviews.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
    [addReview.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    [addReview.fulfilled]: (state) => {
      state.isSuccessAdded = true;
      state.isLoading = false;
    },
    [addReview.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
    [employeeReviews.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    [employeeReviews.fulfilled]: (state, { payload }) => {
      state.employeeReviews = payload.employeeReviews;
      state.isSuccess = true;
      state.isLoading = false;
    },
    [employeeReviews.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
      state.employeeReviews = [];
    },
  },
});

export const { clearState, selectservice } = ReviewsSlice.actions;

export default ReviewsSlice.reducer;
