import { createSlice } from '@reduxjs/toolkit';

export const ModalsSlice = createSlice({
  name: 'ModalsSlice',
  initialState: {
    AuthModal: {
      isModalOpen: false,
    },
    TeamModal: {
      isModalOpen: false,
    },
    TeamModalDetails: {},
  },
  reducers: {
    isOpenAuthModal: (state) => {
      state.AuthModal.isModalOpen = !state.AuthModal.isModalOpen;
    },
    isOpenTeamModal: (state, person) => {
      state.TeamModal.isModalOpen = !state.TeamModal.isModalOpen;
      state.TeamModalDetails = person.payload;
    },
  },
});

export const { isOpenAuthModal, isOpenTeamModal } = ModalsSlice.actions;

export default ModalsSlice.reducer;
