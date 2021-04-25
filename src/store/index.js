import { configureStore } from '@reduxjs/toolkit';
import ModalsReducer from 'slices/ModalsSlice';
import LoginReducer from 'slices/LoginSlice.js';
import RegisterReducer from 'slices/RegisterSlice';

export default configureStore({
  reducer: {
    ModalsSlice: ModalsReducer,
    LoginSlice: LoginReducer,
    RegisterSlice: RegisterReducer,
  },
});
