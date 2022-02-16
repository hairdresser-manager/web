import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showScheduleById, showSchedule } from 'slices/ShowScheduleSlice';
import PropTypes from 'prop-types';
import { Typography, withStyles, CircularProgress } from '@material-ui/core';
import styles from './styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { format, startOfWeek, addWeeks, subWeeks, addDays } from 'date-fns';
import MuiAlert from '@material-ui/lab/Alert';
import CancelIcon from '@material-ui/icons/Cancel';

const ShowSchedule = ({ classes, setManageSchedule, employeeId, isSpecificEmployee }) => {
  const dispatch = useDispatch();
  const scheduleData = useSelector((state) => state.showScheduleSlice);
  const employees = useSelector((state) => state.EmployeesSlice.employees);
  const { schedule, isError, isLoading, errorMessage } = scheduleData;
  const [currentDate, setCurrentDate] = useState(new Date());
  const getEmployeeName = window.localStorage.getItem('firstName');

  const nextMonth = () => {
    setCurrentDate(addWeeks(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(subWeeks(currentDate, 1));
  };

  useEffect(() => {
    if (isSpecificEmployee) {
      const newData = {
        id: employeeId,
      };
      dispatch(showScheduleById(newData));
    } else {
      const newData = {
        id: employeeId,
      };
      dispatch(showSchedule(newData));
    }
  }, [employeeId]);

  const daysOfWeek = () => {
    const days = [];
    let startDate = startOfWeek(currentDate);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i}>
          <>
            <Typography variant="h6">{format(addDays(startDate, i), 'EEE')}</Typography>
            {schedule
              .filter((item) => item.date === format(addDays(startDate, i), 'yyyy-MM-dd'))
              .map((filteredPerson) => (
                <Typography key={filteredPerson.id} variant="subtitle2">
                  {filteredPerson.startingHour} to {filteredPerson.endingHour}
                </Typography>
              ))}
            <Typography variant="h6">{format(addDays(startDate, i), 'MM-dd')}</Typography>
          </>
        </div>
      );
    }
    return <>{days}</>;
  };

  return (
    <>
      {isError ? (
        <MuiAlert className={classes.alert} elevation={6} variant="filled" severity="error">
          {errorMessage || 'something gone wrong'}
        </MuiAlert>
      ) : (
        <div className={classes.container}>
          <div className={classes.schedule}>
            <div className={classes.scheduleHeader}>
              {isSpecificEmployee && (
                <CancelIcon
                  onClick={() => setManageSchedule('')}
                  style={{ position: 'absolute', top: 10, left: 10, cursor: 'pointer' }}
                />
              )}
              <ArrowBackIosIcon onClick={prevMonth} className={classes.arrrowIcon} />
              <div className={classes.date}>
                <Typography variant="subtitle1">{format(currentDate, 'MMMM')}</Typography>
                <Typography variant="body2">
                  Today is: {format(new Date(), 'yyyy-MM-dd')}
                </Typography>
              </div>
              <ArrowForwardIosIcon onClick={nextMonth} className={classes.arrrowIcon} />
            </div>
            {isLoading ? (
              <div className={classes.loadingWrapper}>
                <CircularProgress />
              </div>
            ) : (
              <div className={classes.scheduleEmployee}>
                <div>
                  {isSpecificEmployee ? (
                    <Typography variant="h6">
                      {employees.filter((employee) => employee.id === employeeId)[0].firstName}
                    </Typography>
                  ) : (
                    <Typography variant="h6">{getEmployeeName}</Typography>
                  )}
                </div>
                {daysOfWeek()}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

ShowSchedule.propTypes = {
  classes: PropTypes.object.isRequired,
  setManageSchedule: PropTypes.func,
  employeeId: PropTypes.number,
  isSpecificEmployee: PropTypes.bool,
};

export default withStyles(styles)(ShowSchedule);
