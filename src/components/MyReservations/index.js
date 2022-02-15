import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserReservations } from 'slices/UserReservationsSlice';
import PropTypes from 'prop-types';
import { Typography, withStyles, CircularProgress } from '@material-ui/core';
import styles from './styles';
import MyReservationsCard from './MyReservationsCard';
import AddReviewModal from 'components/AddReviewModal';

const MyReservations = ({ classes }) => {
  const dispatch = useDispatch();
  const UserReservationsData = useSelector((state) => state.UserReservationsSlice);
  const UserAppointments = UserReservationsData.appointments;
  const { isLoading } = UserReservationsData;
  const [open, setOpen] = useState(false);
  const [appointmentId, setAppointmentId] = useState(null);
  const isSuccessAdded = useSelector((state) => state.ReviewsSlice.isSuccessAdded);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(UserReservations());
  }, [isSuccessAdded]);

  return (
    <div className={classes.container}>
      <AddReviewModal appointmentId={appointmentId} handleClose={handleClose} open={open} />
      <Typography variant="h6">My Reservations:</Typography>
      <div className={classes.wrapper}>
        {isLoading ? (
          <CircularProgress size={70} />
        ) : (
          <>
            {UserAppointments.map((data) => (
              <MyReservationsCard
                setAppointmentId={setAppointmentId}
                handleOpen={handleOpen}
                key={data.appointmentId}
                appointments={data}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

MyReservations.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyReservations);
