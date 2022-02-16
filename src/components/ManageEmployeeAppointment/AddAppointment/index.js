import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, withStyles } from '@material-ui/core';
import styles from './styles';
import { Controller, useForm } from 'react-hook-form';

const AddAppointment = ({ classes }) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formContainer}>
        <Controller
          name="clientFirstName"
          render={({ field }) => (
            <TextField
              {...register('clientFirstName', {
                required: 'Enter your e-mail',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid clientFirstName address',
                },
              })}
              {...field}
              label="clientFirstName"
              variant="outlined"
              type="clientFirstName"
              helperText={errors.clientFirstName && errors.clientFirstName.message}
              error={errors.clientFirstName ? true : false}
            />
          )}
          control={control}
          defaultValue=""
        />
        <Controller
          name="password"
          render={({ field }) => (
            <TextField
              {...register('password', {
                required: 'This field is required',
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/,
                  message:
                    'Password must contain at least one number and one uppercase and lowercase letter, and at least 8 and a maximum of 20 characters and one special character',
                },
              })}
              {...field}
              label="Password"
              variant="outlined"
              type="password"
              helperText={errors.password && errors.password.message}
              error={errors.password ? true : false}
            />
          )}
          control={control}
          defaultValue=""
        />
        <Button type="submit" variant="contained" color="secondary" className={classes.button}>
          Login
        </Button>
      </form>
    </div>
  );
};

AddAppointment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddAppointment);
