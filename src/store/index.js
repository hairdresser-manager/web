import { configureStore } from '@reduxjs/toolkit';
import ModalsReducer from 'slices/ModalsSlice';

export default configureStore({
  reducer: {
    ModalsSlice: ModalsReducer,
  },
});
