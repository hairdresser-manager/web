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
    AppointmentsModal: {
      isModalOpen: false,
    },
    AddEmployeeModal: {
      isModalOpen: false,
    },
    EditEmployeeModal: {
      isModalOpen: false,
    },
    TeamModalDetails: {},
  },
  reducers: {
    isOpenAuthModal: (state) => {
      state.AuthModal.isModalOpen = !state.AuthModal.isModalOpen;
    },
    isOpenTeamModal: (state, data) => {
      state.TeamModal.isModalOpen = !state.TeamModal.isModalOpen;
      state.TeamModalDetails = data.payload;
    },
    isOpenAppointmentsModal: (state) => {
      state.AppointmentsModal.isModalOpen = !state.AppointmentsModal.isModalOpen;
    },
    isOpenAddEmployeeModal: (state) => {
      state.AddEmployeeModal.isModalOpen = !state.AddEmployeeModal.isModalOpen;
    },
    isOpenEditEmployeeModal: (state) => {
      state.EditEmployeeModal.isModalOpen = !state.EditEmployeeModal.isModalOpen;
    },
  },
});

export const {
  isOpenAuthModal,
  isOpenTeamModal,
  isOpenAppointmentsModal,
  isOpenAddEmployeeModal,
  isOpenEditEmployeeModal,
} = ModalsSlice.actions;

export default ModalsSlice.reducer;
