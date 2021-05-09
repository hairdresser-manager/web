import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserReservations } from 'slices/UserReservationsSlice';
import PropTypes from 'prop-types';
import { Typography, withStyles, CircularProgress } from '@material-ui/core';
import styles from './styles';
import MyReservationsCard from './MyReservationsCard';

const MyReservations = ({ classes }) => {
  const dispatch = useDispatch();
  const UserReservationsData = useSelector((state) => state.UserReservationsSlice);
  const UserAppointments = UserReservationsData.appointments;
  const { isLoading } = UserReservationsData;

  useEffect(() => {
    dispatch(UserReservations());
  }, []);

  return (
    <>
      <Typography variant="h6">My Reservations:</Typography>
      <div className={classes.container}>
        {isLoading ? (
          <CircularProgress size={70} />
        ) : (
          <>
            {UserAppointments.map((data) => (
              <MyReservationsCard key={data.appointmentId} appointments={data} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

MyReservations.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyReservations);
