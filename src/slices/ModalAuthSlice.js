import { createSlice } from '@reduxjs/toolkit';

export const ModalAuthSlice = createSlice({
  name: 'ModalAuth',
  initialState: {
    isModalOpen: false,
  },
  reducers: {
    isOpen: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { isOpen } = ModalAuthSlice.actions;

export default ModalAuthSlice.reducer;
