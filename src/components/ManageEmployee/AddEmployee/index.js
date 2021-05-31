import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmployee } from 'slices/AddEmployeeSlice';
import { useForm, Controller } from 'react-hook-form';
import { withStyles, Button, TextField } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import styles from './styles';

const AddEmployee = ({ classes }) => {
  const addEmployeeData = useSelector((state) => state.AddEmployeeSlice);
  const { isError, errorMessage } = addEmployeeData;
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addEmployee(data));
  };

  return (
    <>
      {isError && (
        <MuiAlert className={classes.alert} elevation={6} variant="filled" severity="error">
          {errorMessage || 'Something went wrong'}
        </MuiAlert>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formContainer}>
        <Controller
          name="email"
          render={({ field }) => (
            <TextField
              {...register('email', {
                required: 'Enter your e-mail',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              })}
              {...field}
              label="Email"
              variant="outlined"
              type="email"
              size="small"
              helperText={errors.email && errors.email.message}
              error={errors.email ? true : false}
            />
          )}
          control={control}
          defaultValue=""
        />
        <Button type="submit" variant="contained" color="primary" className={classes.button}>
          Add
        </Button>
      </form>
    </>
  );
};

AddEmployee.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddEmployee);
