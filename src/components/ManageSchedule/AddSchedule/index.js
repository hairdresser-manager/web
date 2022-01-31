import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { addSchedule as addEmployeeSchedule } from 'slices/AddScheduleSlice';
import PropTypes from 'prop-types';
import { withStyles, Button, Collapse } from '@material-ui/core';
import styles from './styles';
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import { format } from 'date-fns';
import MuiAlert from '@material-ui/lab/Alert';
import { clearState } from 'slices/AddScheduleSlice';

const AddSchedule = ({ classes, setManageSchedule }) => {
  const dispatch = useDispatch();
  const { selectedEmployeeId } = useSelector((state) => state.SearchEmployeeSlice);

  const AddScheduleData = useSelector((state) => state.AddScheduleSlice);
  const { isSuccess, isError, errorMessage } = AddScheduleData;

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

  const onSubmit = (data) => {
    const newData = {
      date: format(data.date, 'yyyy-MM-dd'),
      startHour: format(data.startHour, 'HH:mm'),
      endHour: format(data.endHour, 'HH:mm'),
      id: selectedEmployeeId,
    };
    dispatch(addEmployeeSchedule(newData));
  };

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <Collapse direction="up" in={isSuccess}>
        <MuiAlert className={classes.alert} elevation={6} variant="filled" severity="success">
          The schedule was added successfully.
        </MuiAlert>
      </Collapse>

      <Collapse direction="up" in={isError}>
        <MuiAlert className={classes.alert} elevation={6} variant="filled" severity="error">
          {errorMessage}
        </MuiAlert>
      </Collapse>
      <form className={classes.formStyle} onSubmit={handleSubmit(onSubmit)}>
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
                  format(watchFields.endHour, 'HH:mm') > format(watchFields.startHour, 'HH:mm') ||
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
        <Button className={classes.buttonStyle} type="submit" variant="contained" color="primary">
          ADD
        </Button>
        <Button
          className={classes.buttonStyle}
          variant="contained"
          color="primary"
          onClick={() => setManageSchedule('')}
        >
          Back
        </Button>
      </form>
    </div>
  );
};

AddSchedule.propTypes = {
  classes: PropTypes.object.isRequired,
  setManageSchedule: PropTypes.func,
};

export default withStyles(styles)(AddSchedule);
