import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const editEmployee = createAsyncThunk(
  'EditEmployeeSlices/editEmployee',
  async ({ nick, description, avatarUrl, lowQualityAvatarUrl, active, id }, thunkAPI) => {
    try {
      let res;
      res = await api.editEmployee(
        {
          nick,
          description,
          avatarUrl,
          lowQualityAvatarUrl,
          active,
        },
        id
      );
      return {
        ...res.data,
        nick: nick,
        description: description,
        avatarUrl: avatarUrl,
        lowQualityAvatarUrl: lowQualityAvatarUrl,
        active: active,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const EditEmployeeSlice = createSlice({
  name: 'EditEmployeeSlices',
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    isSelectedEmployee: false,
    errorMessage: '',
    nick: '',
    description: '',
    avatarUrl: '',
    lowQualityAvatarUrl: '',
    active: false,
    employeeId: null,
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.isSelectedEmployee = false;
      state.errorMessage = '';
      state.nick = '';
      state.description = '';
      state.avatarUrl = '';
      state.lowQualityAvatarUrl = '';
      state.active = false;
      state.employeeId = null;
    },
    setEmployee: (state, data) => {
      state.isSelectedEmployee = true;
      state.employeeId = data.payload.id;
      state.active = data.payload.active;
      state.description = data.payload.description;
      state.avatarUrl = data.payload.avatarUrl;
      state.lowQualityAvatarUrl = data.payload.lowQualityAvatarUrl;
      state.nick = data.payload.nick;
    },
  },
  extraReducers: {
    [editEmployee.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    [editEmployee.fulfilled]: (state, { payload }) => {
      state.nick = payload.nick;
      state.description = payload.description;
      state.avatarUrl = payload.avatarUrl;
      state.lowQualityAvatarUrl = payload.lowQualityAvatarUrl;
      state.active = payload.active;
      state.isSuccess = true;
      state.isLoading = false;
    },
    [editEmployee.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { clearState, setEmployee } = EditEmployeeSlice.actions;

export default EditEmployeeSlice.reducer;
