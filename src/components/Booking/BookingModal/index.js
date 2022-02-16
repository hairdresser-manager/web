import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { clearState as clearAvailableDatesState } from 'slices/AvailableDatesSlice';
import { clearState as clearUserAppointmentState } from 'slices/UserAppointmentSlice';
import { clearState as clearAddAppointmentEmployeeState } from 'slices/AddAppointmentEmployeeSlice';
import { isOpenAppointmentsModal } from 'slices/ModalsSlice';
import { withStyles, Dialog, CircularProgress } from '@material-ui/core';
import styles from './styles';
import DateAndEmployeeSelect from '../DateAndEmployeeSelect';
import Appointment from '../Appointment';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const BookingModal = ({ classes }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.ModalsSlice.AppointmentsModal.isModalOpen);
  const AvailableDates = useSelector((state) => state.AvailableDatesSlice);

  const { isLoading, isSuccess } = AvailableDates;

  const handleClose = () => {
    dispatch(clearAvailableDatesState());
    dispatch(isOpenAppointmentsModal());
    dispatch(clearUserAppointmentState());
    dispatch(clearAddAppointmentEmployeeState());
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      fullScreen={fullScreen}
      onClose={handleClose}
      maxWidth={9009}
      aria-labelledby="customized-dialog-title"
      open={isModalOpen}
    >
      <div className={classes.container}>
        {isLoading && (
          <CircularProgress className={classes.loadingCircular} color="secondary" size={60} />
        )}
        {isSuccess ? <Appointment /> : <DateAndEmployeeSelect />}
      </div>
    </Dialog>
  );
};

BookingModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookingModal);
