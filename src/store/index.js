import { configureStore } from '@reduxjs/toolkit';
import ModalAuthReducer from 'slices/ModalAuthSlice';

export default configureStore({
  reducer: {
    ModalAuth: ModalAuthReducer,
  },
});
