import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Paper, Typography, withStyles } from '@material-ui/core';
import styles from './styles';
import { GetDay, GetHour, GetMonth } from 'helpers/GetMonth';
import RateReviewIcon from '@material-ui/icons/RateReview';
import moment from 'moment';
import { Rating } from '@material-ui/lab';

const MyReservationsCard = ({ classes, appointments, handleOpen, setAppointmentId }) => {
  const {
    employeeNick,
    serviceName,
    date,
    employeeLowQualityAvatar,
    canceled,
    clientDidntShowUp,
    appointmentId,
    rate,
  } = appointments;

  return (
    <div>
      <Paper elevation={7} className={classes.container}>
        <div className={classes.LeftBox}>
          <Avatar src={employeeLowQualityAvatar ? employeeLowQualityAvatar : ''} />
        </div>
        <div className={classes.centerBox}>
          <Typography variant="subtitle1">{serviceName}</Typography>
          <Typography variant="subtitle2">Employee: {employeeNick} </Typography>
          {moment(date).isBefore(moment()) &&
            !canceled &&
            !clientDidntShowUp &&
            (rate ? (
              <Rating value={rate} disabled />
            ) : (
              <Typography
                onClick={() => [handleOpen(), setAppointmentId(appointmentId)]}
                className={classes.reviewText}
                variant="subtitle2"
              >
                Write a review
                <RateReviewIcon style={{ marginLeft: 5 }} />
              </Typography>
            ))}
        </div>
        <div className={classes.RightBox}>
          <Typography variant="subtitle2">{GetMonth(date)}</Typography>
          <Typography className={classes.text}>{GetDay(date)}</Typography>
          <Typography variant="subtitle2">{GetHour(date)}</Typography>
        </div>
      </Paper>
    </div>
  );
};

MyReservationsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  appointments: PropTypes.object,
  handleOpen: PropTypes.func.isRequired,
  setAppointmentId: PropTypes.func.isRequired,
};

export default withStyles(styles)(MyReservationsCard);
