import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from 'components/SearchBar';
import PropTypes from 'prop-types';
import { withStyles, Typography, Divider, Button } from '@material-ui/core';
import styles from './styles';
import { useForm, Controller } from 'react-hook-form';
import PersonIcon from '@material-ui/icons/Person';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { format } from 'date-fns';
import { removeSchedule } from 'slices/RemoveScheduleSlice';
import MuiAlert from '@material-ui/lab/Alert';

const RemoveSchedule = ({ classes }) => {
  const dispatch = useDispatch();
  const SearchEmployeeData = useSelector((state) => state.SearchEmployeeSlice);
  const { searchValue, isSelectedEmployee, selectedEmployee } = SearchEmployeeData;

  const RemoveScheduleData = useSelector((state) => state.RemoveScheduleSlice);
  const { isSuccess, isError, errorMessage } = RemoveScheduleData;

  const employees = useSelector((state) => state.EmployeesSlice.employees);

  const searchingFilter = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onSubmit = (data) => {
    const newData = {
      date: format(data.date, 'yyyy-MM-dd'),
      id: selectedEmployee,
    };
    dispatch(removeSchedule(newData));
  };

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      date: new Date(),
    },
  });

  const watchFields = {
    date: watch('date'),
  };

  let currentEmployee = employees.filter((employee) => employee.id === selectedEmployee);

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
          The schedule was remove successfully.
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
            <Button type="submit" variant="contained" color="secondary">
              Remove
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

RemoveSchedule.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RemoveSchedule);
