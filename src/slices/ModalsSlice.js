import { createSlice } from '@reduxjs/toolkit';

export const ModalsSlice = createSlice({
  name: 'ModalsSlice',
  initialState: {
    AuthModal: {
      isModalOpen: false,
    },
    showRegisterForm: {
      isShowRegisterForm: false,
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
    isShowRegisterForm: (state) => {
      state.showRegisterForm.isShowRegisterForm = !state.showRegisterForm.isShowRegisterForm;
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
  isShowRegisterForm,
  isOpenTeamModal,
  isOpenAppointmentsModal,
  isOpenAddEmployeeModal,
  isOpenEditEmployeeModal,
} = ModalsSlice.actions;

export default ModalsSlice.reducer;
