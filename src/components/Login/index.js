import React from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { Button, Link, TextField, Typography, withStyles } from '@material-ui/core';
import styles from './styles';

const Login = ({ classes, setShowRegisterForm }) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const handleRegisterForm = () => {
    setShowRegisterForm((prev) => !prev);
  };

  return (
    <>
      <Typography variant="h5">Log in</Typography>
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
                minLength: { value: 8, message: 'Password must have at least 8 characters' },
              })}
              {...field}
              label="Password"
              variant="outlined"
              type="password"
              helperText={errors.password && errors.password.message}
              error={errors.password ? true : false}
              fullWidth
            />
          )}
          control={control}
          defaultValue=""
        />
        <Link className={classes.link}>Forgotten password?</Link>
        <Button type="submit" variant="contained" color="secondary" className={classes.button}>
          Login
        </Button>
      </form>
      <Button
        onClick={handleRegisterForm}
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        Register
      </Button>
    </>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  setShowRegisterForm: PropTypes.func,
};

export default withStyles(styles)(Login);
