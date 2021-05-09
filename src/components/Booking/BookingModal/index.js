import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { clearState } from 'slices/AvailableDatesSlice';
import { isOpenAppointmentsModal } from 'slices/ModalsSlice';
import { withStyles, Dialog, CircularProgress } from '@material-ui/core';
import styles from './styles';
import EmployeeSelect from '../EmployeeSelect';
import AppointmentSelect from '../AppointmentSelect';

const BookingModal = ({ classes }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.ModalsSlice.AppointmentsModal.isModalOpen);
  const EmployeeData = useSelector((state) => state.AvailableDatesSlice);

  const { isEmployeeSelected, isLoading } = EmployeeData;

  const handleClose = () => {
    dispatch(clearState());
    dispatch(isOpenAppointmentsModal());
  };

  return (
    <Dialog
      maxWidth="lg"
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={isModalOpen}
    >
      <div className={classes.container}>
        {isLoading && (
          <CircularProgress className={classes.loadingCircular} color="secondary" size={60} />
        )}
        {isEmployeeSelected ? <AppointmentSelect /> : <EmployeeSelect />}
      </div>
    </Dialog>
  );
};

BookingModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookingModal);
