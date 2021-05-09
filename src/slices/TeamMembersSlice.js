import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const TeamMembers = createAsyncThunk('TeamMembersSlices/TeamMembers', async (thunkAPI) => {
  try {
    let res;
    res = await api.teamMembers();
    return {
      ...res.data,
      teamMembers: [...res.data],
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.errors);
  }
});

export const TeamMembersSlice = createSlice({
  name: 'TeamMembersSlices',
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    teamMembers: [],
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = '';
      state.teamMembers = [];
    },
  },
  extraReducers: {
    [TeamMembers.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    [TeamMembers.fulfilled]: (state, { payload }) => {
      state.teamMembers = payload.teamMembers;
      state.isSuccess = true;
      state.isLoading = false;
    },
    [TeamMembers.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { clearState } = TeamMembersSlice.actions;

export default TeamMembersSlice.reducer;
