import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { addSchedule as addEmployeeSchedule } from 'slices/AddScheduleSlice';
import PropTypes from 'prop-types';
import { withStyles, Typography, Divider, Button } from '@material-ui/core';
import SearchBar from 'components/SearchBar';
import styles from './styles';
import PersonIcon from '@material-ui/icons/Person';
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import { format } from 'date-fns';
import MuiAlert from '@material-ui/lab/Alert';

const AddSchedule = ({ classes }) => {
  const dispatch = useDispatch();
  const SearchEmployeeData = useSelector((state) => state.SearchEmployeeSlice);
  const { searchValue, isSelectedEmployee, selectedEmployee } = SearchEmployeeData;

  const AddScheduleData = useSelector((state) => state.AddScheduleSlice);
  const { isSuccess, isError, errorMessage } = AddScheduleData;

  const employees = useSelector((state) => state.EmployeesSlice.employees);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      date: new Date(),
      startHour: new Date(),
      endHour: new Date(),
    },
  });

  const watchFields = {
    date: watch('date'),
    startHour: watch('startHour'),
    endHour: watch('endHour'),
  };

  const searchingFilter = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchValue.toLowerCase())
  );

  let currentEmployee = employees.filter((employee) => employee.id === selectedEmployee);

  const onSubmit = (data) => {
    const newData = {
      date: format(data.date, 'yyyy-MM-dd'),
      startHour: format(data.startHour, 'HH:mm'),
      endHour: format(data.endHour, 'HH:mm'),
      id: selectedEmployee,
    };
    dispatch(addEmployeeSchedule(newData));
  };

  return (
    <div className={classes.container}>
      <SearchBar />
      <div className={classes.searchWarnings}>
        {searchingFilter.length === 0 && employees.length > 0 && (
          <Typography variant="body1">
            There are no results for: <b>{searchValue}</b>
          </Typography>
        )}
        {!isSelectedEmployee && !searchValue.length > 0 && (
          <Typography variant="body1">Use the search bar to find an employee...</Typography>
        )}
      </div>

      {isSuccess && (
        <MuiAlert className={classes.alert} elevation={6} variant="filled" severity="success">
          The schedule was added successfully.
        </MuiAlert>
      )}

      {isError && (
        <MuiAlert className={classes.alert} elevation={6} variant="filled" severity="error">
          {errorMessage}
        </MuiAlert>
      )}

      {isSelectedEmployee && (
        <div className={classes.selectedEmployee}>
          <div className={classes.leftBox}>
            {currentEmployee[0].avatarUrl ? (
              <img
                className={classes.employeeAvatar}
                src={currentEmployee[0].avatarUrl}
                alt="Employee Avatar"
              />
            ) : (
              <PersonIcon className={classes.employeeAvatar} />
            )}
            <Typography className={classes.employeeName} variant="body1">
              {currentEmployee[0].firstName + ' ' + currentEmployee[0].lastName}
            </Typography>
          </div>
          <Divider className={classes.divider} orientation="vertical" />
          <form onSubmit={handleSubmit(onSubmit)} className={classes.rightBox}>
            <Controller
              name="date"
              control={control}
              // eslint-disable-next-line no-unused-vars
              render={({ field: { ref, ...rest } }) => (
                <KeyboardDatePicker
                  inputRef={register('date', {
                    required: 'Enter date',
                    validate: () => watchFields.date > new Date() || 'Date must be from the future',
                    pattern: {
                      value: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/i,
                      message: 'invalid date format',
                    },
                  })}
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
              name="startHour"
              control={control}
              // eslint-disable-next-line no-unused-vars
              render={({ field: { ref, ...rest } }) => (
                <KeyboardTimePicker
                  inputRef={register('startHour', {
                    required: 'Enter starting hour',
                  })}
                  margin="normal"
                  inputProps={{ readOnly: true }}
                  id="startHour"
                  label="Choose starting hour"
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                  helperText={errors.startHour && errors.startHour.message}
                  error={errors.startHour ? true : false}
                  {...rest}
                />
              )}
            />
            <Controller
              name="endHour"
              control={control}
              // eslint-disable-next-line no-unused-vars
              render={({ field: { ref, ...rest } }) => (
                <KeyboardTimePicker
                  inputRef={register('endHour', {
                    required: 'Enter ending hour',
                    validate: () =>
                      format(watchFields.endHour, 'HH:mm') >
                        format(watchFields.startHour, 'HH:mm') ||
                      'Ending hour must be later than starting hour',
                  })}
                  margin="normal"
                  inputProps={{ readOnly: true }}
                  id="endHour"
                  label="Choose ending hour"
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                  helperText={errors.endHour && errors.endHour.message}
                  error={errors.endHour ? true : false}
                  {...rest}
                />
              )}
            />
            <Button type="submit" variant="contained" color="primary">
              ADD
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

AddSchedule.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddSchedule);
