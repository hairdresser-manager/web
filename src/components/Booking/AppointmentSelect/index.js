import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  selectDay,
  selectHour,
  clearStateSelectHour,
  clearStateSelectDay,
  clearState,
} from 'slices/AvailableDatesSlice';
import { isOpenAppointmentsModal } from 'slices/ModalsSlice';
import { Typography, withStyles, Avatar, Button } from '@material-ui/core';
import styles from './styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const AppointmentSelect = ({ classes }) => {
  const dispatch = useDispatch();
  const AvailableDatesData = useSelector((state) => state.AvailableDatesSlice);

  const {
    selectedEmployee,
    selectedDay,
    selectedHour,
    isDaySelected,
    isHourSelected,
    isEmployeeSelected,
  } = AvailableDatesData;

  const handleDay = (data) => {
    dispatch(selectDay(data));
  };

  const handleHour = (data) => {
    dispatch(selectHour(data));
  };

  const handleBackToSelectEmployee = () => {
    dispatch(clearState());
  };

  const handleBackToDaySelect = () => {
    dispatch(clearStateSelectDay());
    dispatch(clearStateSelectHour());
  };

  const handleClose = () => {
    dispatch(isOpenAppointmentsModal());
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <ArrowBackIosIcon
          onClick={isDaySelected ? handleBackToDaySelect : handleBackToSelectEmployee}
          className={classes.arrrowIcon}
        />

        <Avatar src={selectedEmployee.employeeLowQualityAvatar} />
        <Typography variant="subtitle1">{selectedEmployee.employeeName}</Typography>
      </div>
      <div className={classes.content}>
        {isDaySelected
          ? selectedDay.hours.map((data, index) => (
              <div onClick={() => handleHour(data, index)} className={classes.cards} key={index}>
                <Typography>{data}</Typography>
              </div>
            ))
          : selectedEmployee.availableDates.map((data, index) => (
              <div onClick={() => handleDay(data)} className={classes.cards} key={index}>
                <Typography>{data.date}</Typography>
              </div>
            ))}
      </div>
      <div className={classes.footer}>
        <Typography variant="subtitle1">
          Selected Employee: {isEmployeeSelected ? selectedEmployee.employeeName : '...'}
        </Typography>
        <Typography variant="subtitle1">
          Selected Day: {isDaySelected ? selectedDay.date : '...'}
        </Typography>
        <Typography variant="subtitle1">
          Selected Hour: {isHourSelected ? selectedHour : '...'}
        </Typography>
        {isHourSelected && (
          <Button
            onClick={handleClose}
            className={classes.button}
            variant="outlined"
            color="inherit"
            endIcon={<ArrowForwardIcon />}
          >
            Confirm
          </Button>
        )}
      </div>
    </div>
  );
};

AppointmentSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppointmentSelect);
