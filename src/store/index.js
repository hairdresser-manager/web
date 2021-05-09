import { configureStore } from '@reduxjs/toolkit';
import ModalsReducer from 'slices/ModalsSlice';
import LoginReducer from 'slices/LoginSlice';
import RegisterReducer from 'slices/RegisterSlice';
import ChangePasswordReducer from 'slices/ChangePasswordSlice';
import verifyEmailReducer from 'slices/VerifyEmailSlice';
import UserReservationsReducer from 'slices/UserReservationsSlice';
import AvailableDatesReducer from 'slices/AvailableDatesSlice';
import TeamMembersReducer from 'slices/TeamMembersSlice';
import ServicesReducer from 'slices/ServicesSlice';
import ReviewsReducer from 'slices/ReviewsSlice';
import ChangeAccountInformationsReducer from 'slices/ChangeAccountInformations';

export default configureStore({
  reducer: {
    ModalsSlice: ModalsReducer,
    LoginSlice: LoginReducer,
    RegisterSlice: RegisterReducer,
    ChangePasswordSlice: ChangePasswordReducer,
    VerifyEmailSlice: verifyEmailReducer,
    UserReservationsSlice: UserReservationsReducer,
    AvailableDatesSlice: AvailableDatesReducer,
    TeamMembersSlice: TeamMembersReducer,
    ServicesSlice: ServicesReducer,
    ReviewsSlice: ReviewsReducer,
    ChangeAccountInformationsSlice: ChangeAccountInformationsReducer,
  },
});
