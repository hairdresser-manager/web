/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { isOpenAppointmentsModal } from 'slices/ModalsSlice';
import { AvailableDates, clearState } from 'slices/AvailableDatesSlice';
import {
  Avatar,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  withStyles,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import styles from './styles';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { Controller, useForm } from 'react-hook-form';

const DateAndEmployeeSelect = ({ classes }) => {
  const dispatch = useDispatch();
  const selectedService = useSelector((state) => state.ServicesSlice.selectService);
  const { name, employeeIds, maximumTime } = selectedService;
  const employees = useSelector((state) => state.TeamMembersSlice.teamMembers);
  const filteredEmployee = employees.filter((el) => employeeIds.includes(el.employeeId));

  const handleClose = () => {
    dispatch(clearState());
    dispatch(isOpenAppointmentsModal());
  };

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
      Employees: data.employeeId,
      ServiceDuration: maximumTime,
      StartDate: new Date().toISOString().slice(0, 10),
      EndDate: data.date.toISOString().slice(0, 10),
    };
    dispatch(AvailableDates(newData));
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.textHeader}>
          <Typography variant="subtitle1">Select Date</Typography>
        </div>
        <CloseIcon className={classes.closeIcon} onClick={handleClose} />
      </div>
      <div className={classes.content}>
        <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="date"
            control={control}
            // eslint-disable-next-line no-unused-vars
            render={({ field: { ref, ...rest } }) => (
              <KeyboardDatePicker
                inputRef={register('date', {
                  required: 'Enter date',
                })}
                fullWidth
                disablePast
                margin="normal"
                id="date-picker-dialog"
                label="Choose the date"
                format="MM/dd/yyyy"
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                helperText={errors.date && errors.date.message}
                error={errors.date ? true : false}
                {...rest}
              />
            )}
          />
          <Controller
            name="employeeId"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Employee</InputLabel>
                <Select
                  {...register('employeeId', {
                    required: 'Select employee',
                  })}
                  {...field}
                  error={errors.employeeId ? true : false}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  MenuProps={{ classes: { paper: classes.menuPaper } }}
                >
                  {filteredEmployee.map((employee) => (
                    <MenuItem
                      style={{ height: 50 }}
                      key={employee.employeeId}
                      value={employee.employeeId}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar style={{ marginRight: 5 }} src={employee.avatarUrl} />
                        {employee.nick}
                      </div>
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText style={{ color: '#f50057' }}>
                  {errors.employeeId?.message}
                </FormHelperText>
              </FormControl>
            )}
          />
          <Button type="submit" className={classes.button} color="primary" variant="contained">
            Next
          </Button>
        </form>
      </div>
      <div className={classes.footer}>
        <Typography variant="subtitle1">Service Name: {name}</Typography>
      </div>
    </div>
  );
};

DateAndEmployeeSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateAndEmployeeSelect);
