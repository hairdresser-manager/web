import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { Button, Link, TextField, Typography, withStyles } from '@material-ui/core';
import styles from './styles';

const Register = ({ classes, setShowRegisterForm }) => {
  const {
    handleSubmit,
    control,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = (data) => console.log(data);

  const handleLoginForm = () => {
    setShowRegisterForm((prev) => !prev);
  };
  return (
    <>
      <Typography variant="h5">Register</Typography>
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
              helperText={errors.email && errors.email.message}
              error={errors.email ? true : false}
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
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/,
                  message:
                    'Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters and one special character',
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
        <Controller
          name="confirmPassword"
          render={({ field }) => (
            <TextField
              {...register('confirmPassword', {
                required: 'This field is required',
                validate: (value) => value === password.current || 'The passwords do not match',
              })}
              {...field}
              label="Confirm Password"
              variant="outlined"
              type="password"
              helperText={errors.confirmPassword && errors.confirmPassword.message}
              error={errors.confirmPassword ? true : false}
            />
          )}
          control={control}
          defaultValue=""
        />

        <Controller
          name="firstName"
          render={({ field }) => (
            <TextField
              {...register('firstName', {
                required: true,
              })}
              {...field}
              label="First Name"
              variant="outlined"
              helperText={errors.firstName && 'This field is required'}
              error={errors.firstName ? true : false}
            />
          )}
          control={control}
          defaultValue=""
        />
        <Controller
          name="lastName"
          render={({ field }) => (
            <TextField
              {...register('lastName', {
                required: true,
              })}
              {...field}
              label="Last Name"
              variant="outlined"
              helperText={errors.lastName && 'This field is required'}
              error={errors.lastName ? true : false}
            />
          )}
          control={control}
          defaultValue=""
        />
        <Controller
          name="phoneNumber"
          render={({ field }) => (
            <TextField
              {...register('phoneNumber', {
                required: true,
              })}
              {...field}
              label="Phone Number"
              variant="outlined"
              helperText={errors.phoneNumber && 'This field is required'}
              error={errors.phoneNumber ? true : false}
            />
          )}
          control={control}
          defaultValue=""
        />
        <Link className={classes.link} onClick={handleLoginForm}>
          already have an account? log in
        </Link>
        <Button type="submit" variant="contained" color="secondary" className={classes.button}>
          Register
        </Button>
      </form>
    </>
  );
};

Register.propTypes = {
  classes: PropTypes.object.isRequired,
  setShowRegisterForm: PropTypes.func,
};

export default withStyles(styles)(Register);
