import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, Button, Collapse } from '@material-ui/core';
import styles from './styles';
import { useForm, Controller } from 'react-hook-form';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { format } from 'date-fns';
import { removeSchedule, clearState } from 'slices/RemoveScheduleSlice';
import MuiAlert from '@material-ui/lab/Alert';

const RemoveSchedule = ({ classes, setManageSchedule, employeeId }) => {
  const dispatch = useDispatch();

  const RemoveScheduleData = useSelector((state) => state.RemoveScheduleSlice);
  const { isSuccess, isError, errorMessage } = RemoveScheduleData;

  const onSubmit = (data) => {
    const newData = {
      date: format(data.date, 'yyyy-MM-dd'),
      id: employeeId,
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

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <Collapse direction="up" in={isSuccess}>
        <MuiAlert className={classes.alert} elevation={6} variant="filled" severity="success">
          The schedule was remove successfully.
        </MuiAlert>
      </Collapse>

      <Collapse direction="up" in={isError}>
        <MuiAlert className={classes.alert} elevation={6} variant="filled" severity="error">
          {errorMessage}
        </MuiAlert>
      </Collapse>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formStyle}>
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
        <Button className={classes.buttonStyle} type="submit" variant="contained" color="primary">
          Remove
        </Button>
        <Button
          onClick={() => setManageSchedule('')}
          className={classes.buttonStyle}
          variant="contained"
          color="primary"
        >
          Back
        </Button>
      </form>
    </div>
  );
};

RemoveSchedule.propTypes = {
  classes: PropTypes.object.isRequired,
  setManageSchedule: PropTypes.func,
  employeeId: PropTypes.number,
};

export default withStyles(styles)(RemoveSchedule);
