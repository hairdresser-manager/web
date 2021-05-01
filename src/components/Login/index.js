import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isOpenAuthModal } from 'slices/ModalsSlice';
import { login, clearState } from 'slices/LoginSlice';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import {
  Button,
  Link,
  TextField,
  Typography,
  withStyles,
  CircularProgress,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import styles from './styles';

const Login = ({ classes, setShowRegisterForm }) => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.LoginSlice);
  const { errorMessage, isLoading, isError, isSuccess } = loginData;

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data));
  };
  const handleRegisterForm = () => {
    setShowRegisterForm((prev) => !prev);
  };

  useEffect(() => {
    dispatch(clearState());
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(isOpenAuthModal());
      dispatch(clearState());
    }
    if (isError) {
      dispatch(clearState());
    }
  }, [isError, isSuccess]);

  return (
    <>
      {errorMessage ? (
        <MuiAlert className={classes.alert} elevation={6} variant="filled" severity="error">
          {errorMessage}
        </MuiAlert>
      ) : null}
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
        {isLoading ? <CircularProgress /> : null}
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
