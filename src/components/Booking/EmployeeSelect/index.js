import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { isOpenAppointmentsModal } from 'slices/ModalsSlice';
import { AvailableDates, selectEmployee, clearState } from 'slices/AvailableDatesSlice';
import { Avatar, Typography, withStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import styles from './styles';

const EmployeeSelect = ({ classes }) => {
  const dispatch = useDispatch();
  const EmployeeData = useSelector((state) => state.AvailableDatesSlice);

  const { appointments } = EmployeeData;

  useEffect(() => {
    dispatch(AvailableDates());
  }, []);

  const handleClose = () => {
    dispatch(clearState());
    dispatch(isOpenAppointmentsModal());
  };

  const handleSelectEmployee = (data) => {
    dispatch(selectEmployee(data));
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.textHeader}>
          <Typography variant="subtitle1">Select employee:</Typography>
        </div>
        <CloseIcon className={classes.closeIcon} onClick={handleClose} />
      </div>
      <div className={classes.content}>
        {appointments.map((data) => (
          <div
            onClick={() => handleSelectEmployee(data)}
            className={classes.employeeCard}
            key={data.employeeId}
          >
            <Avatar src={data.employeeLowQualityAvatar ? data.employeeLowQualityAvatar : null} />
            <Typography>{data.employeeName}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

EmployeeSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployeeSelect);
