import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  register as registerSlice,
  clearState as ClearStateRegister,
} from 'slices/RegisterSlice.js';
import { verifyEmail, clearState as ClearStateVerifyEmail } from 'slices/VerifyEmailSlice';
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

const Register = ({ classes, setShowRegisterForm }) => {
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.RegisterSlice);
  const { errorMessage, isLoading, isSuccess, isError, email, verifyToken } = registerData;
  const verifyEmailData = useSelector((state) => state.VerifyEmailSlice);
  const { isConfirm } = verifyEmailData;

  const {
    handleSubmit,
    control,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch('password', '');

  const handleLoginForm = () => {
    setShowRegisterForm((prev) => !prev);
  };

  const onSubmit = (data) => {
    dispatch(registerSlice(data));
  };

  const handleConfirmLink = () => {
    dispatch(
      verifyEmail({
        token: verifyToken,
        email: email,
      })
    );
  };

  useEffect(() => {
    dispatch(ClearStateRegister());
  }, []);

  useEffect(() => {
    if (isSuccess && isConfirm) {
      setTimeout(() => {
        handleLoginForm();
        dispatch(ClearStateRegister());
        dispatch(ClearStateVerifyEmail());
      }, 3000);
    }
  }, [isSuccess, isConfirm]);
  return (
    <>
      {isSuccess ? (
        <>
          <Typography variant="subtitle1">
            Your account has been created successfully, click this{' '}
            <Link onClick={handleConfirmLink} className={classes.confirmLink}>
              link
            </Link>{' '}
            to confirm your account
          </Typography>
          {isConfirm && (
            <Typography>
              Your account has been activated successfully. In 3 seconds you will be redirected to
              the login page
            </Typography>
          )}
        </>
      ) : (
        <>
          {isError ? (
            <MuiAlert className={classes.alert} elevation={6} variant="filled" severity="error">
              {errorMessage}
            </MuiAlert>
          ) : null}
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
            <Controller
              name="reTypedPassword"
              render={({ field }) => (
                <TextField
                  {...register('reTypedPassword', {
                    required: 'This field is required',
                    validate: (value) => value === password.current || 'The passwords do not match',
                  })}
                  {...field}
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  helperText={errors.reTypedPassword && errors.reTypedPassword.message}
                  error={errors.reTypedPassword ? true : false}
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
              name="mobilePhone"
              render={({ field }) => (
                <TextField
                  {...register('mobilePhone', {
                    required: true,
                  })}
                  {...field}
                  label="Phone Number"
                  variant="outlined"
                  helperText={errors.mobilePhone && 'This field is required'}
                  error={errors.mobilePhone ? true : false}
                />
              )}
              control={control}
              defaultValue=""
            />
            {isLoading ? <CircularProgress /> : null}
            <Link className={classes.link} onClick={handleLoginForm}>
              already have an account? log in
            </Link>
            <Button type="submit" variant="contained" color="secondary" className={classes.button}>
              Register
            </Button>
          </form>
        </>
      )}
    </>
  );
};

Register.propTypes = {
  classes: PropTypes.object.isRequired,
  setShowRegisterForm: PropTypes.func,
};

export default withStyles(styles)(Register);
