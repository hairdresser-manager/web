import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, withStyles } from '@material-ui/core';
import styles from './styles';
import { GetDay, GetMonth } from 'helpers/GetMonth';

const MyReservationsCard = ({ classes, appointments }) => {
  const { employeeName, serviceName, date, hour } = appointments;

  return (
    <div className={classes.test}>
      <Paper elevation={7} className={classes.container}>
        <div className={classes.leftBox}>
          <Typography variant="subtitle1">{serviceName}</Typography>
          <Typography variant="subtitle2">Employee: {employeeName} </Typography>
        </div>
        <div className={classes.rightBox}>
          <Typography variant="subtitle2">{GetMonth(date)}</Typography>
          <Typography className={classes.text}>{GetDay(date)}</Typography>
          <Typography variant="subtitle2">{hour}</Typography>
        </div>
      </Paper>
    </div>
  );
};

MyReservationsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  appointments: PropTypes.object,
};

export default withStyles(styles)(MyReservationsCard);
