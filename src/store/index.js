import { configureStore } from '@reduxjs/toolkit';
import ModalsReducer from 'slices/ModalsSlice';
import LoginReducer from 'slices/LoginSlice';
import RegisterReducer from 'slices/RegisterSlice';
import ChangePasswordReducer from 'slices/ChangePasswordSlice';
import verifyEmailReducer from 'slices/VerifyEmailSlice';

export default configureStore({
  reducer: {
    ModalsSlice: ModalsReducer,
    LoginSlice: LoginReducer,
    RegisterSlice: RegisterReducer,
    ChangePasswordSlice: ChangePasswordReducer,
    VerifyEmailSlice: verifyEmailReducer,
  },
});
