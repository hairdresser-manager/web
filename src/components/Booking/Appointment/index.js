import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Typography,
  withStyles,
  Avatar,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import styles from './styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Controller, useForm } from 'react-hook-form';
import { clearState } from 'slices/AvailableDatesSlice';
import { addAppointment } from 'slices/UserAppointmentSlice';
import MuiAlert from '@material-ui/lab/Alert';

const AppointmentSelect = ({ classes }) => {
  const dispatch = useDispatch();
  const selectedService = useSelector((state) => state.ServicesSlice.selectService);
  const { id } = selectedService;
  const AvailableDates = useSelector((state) => state.AvailableDatesSlice);
  const { selectedDate, selectedEmployee, appointments } = AvailableDates;
  const employees = useSelector((state) => state.TeamMembersSlice.teamMembers);
  const getEmployee = employees.filter((employee) => employee.employeeId === selectedEmployee);
  const UserAppointmentData = useSelector((state) => state.UserAppointmentSlice);
  const { isSuccess } = UserAppointmentData;
  const { nick, avatarUrl } = getEmployee[0];
  const availableDates = appointments[0].availableDates.filter(
    (date) => date.date === selectedDate
  );

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: new Date(),
    },
  });

  const onSubmit = (data) => {
    const newData = {
      date: selectedDate + 'T' + data.hour,
      employeeId: selectedEmployee,
      serviceId: id,
    };
    dispatch(addAppointment(newData));
  };

  const handleClearState = () => {
    dispatch(clearState());
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <ArrowBackIosIcon onClick={() => handleClearState()} className={classes.arrrowIcon} />
        <Avatar src={avatarUrl} />
        <Typography variant="subtitle1">{nick}</Typography>
      </div>
      <div className={classes.content}>
        {isSuccess ? (
          <MuiAlert className={classes.alert} elevation={6} variant="filled" severity="success">
            Appointment was added successful. Day of your appointment is {selectedDate}
          </MuiAlert>
        ) : availableDates[0]?.hours.length > 0 ? (
          <>
            <Typography>Avaible Dates:</Typography>
            <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="hour"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select hour</InputLabel>
                    <Select
                      {...register('hour', {
                        required: 'Enter category name',
                      })}
                      {...field}
                      error={errors.hour ? true : false}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      MenuProps={{ classes: { paper: classes.menuPaper } }}
                    >
                      {availableDates[0].hours.map((employee, index) => (
                        <MenuItem style={{ height: 50 }} key={index} value={employee}>
                          {employee}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
              <Button type="submit" className={classes.button} color="primary" variant="contained">
                Add
              </Button>
            </form>
          </>
        ) : (
          <Typography>No hours available 😬</Typography>
        )}
      </div>
      <div className={classes.footer}>
        <Typography variant="subtitle1">Selected Employee: {nick}</Typography>
        <Typography variant="subtitle1">Selected Day: {selectedDate}</Typography>
      </div>
    </div>
  );
};

AppointmentSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppointmentSelect);
