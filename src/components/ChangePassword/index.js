import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { changePassword, clearState } from 'slices/ChangePasswordSlice';
import { withStyles, Button, TextField, Typography } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import MuiAlert from '@material-ui/lab/Alert';
import styles from './styles';

const ChangePassword = ({ classes }) => {
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.ChangePasswordSlice);
  const { errorMessage, isError, isSuccess } = registerData;
  const {
    handleSubmit,
    control,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const newPassword = useRef({});
  newPassword.current = watch('newPassword', '');

  const onSubmit = (data) => {
    dispatch(changePassword(data));
  };

  useEffect(() => {
    dispatch(clearState());
  }, []);

  return (
    <>
      {isSuccess && (
        <MuiAlert className={classes.alert} elevation={6} variant="filled" severity="success">
          The password was changed successfully!
        </MuiAlert>
      )}
      {isError && (
        <MuiAlert className={classes.alert} elevation={6} variant="filled" severity="error">
          {errorMessage}
        </MuiAlert>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formContainer}>
        <Typography variant="h6">Change Password</Typography>
        <Controller
          name="currentPassword"
          render={({ field }) => (
            <TextField
              {...register('currentPassword', {
                required: 'This field is required',
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/,
                  message:
                    'Password must contain at least one number and one uppercase and lowercase letter, and at least 8 and a maximum of 20 characters and one special character',
                },
              })}
              {...field}
              label="Current Password"
              variant="outlined"
              type="password"
              helperText={errors.currentPassword && errors.currentPassword.message}
              error={errors.currentPassword ? true : false}
            />
          )}
          control={control}
          defaultValue=""
        />
        <Controller
          name="newPassword"
          render={({ field }) => (
            <TextField
              {...register('newPassword', {
                required: 'This field is required',
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/,
                  message:
                    'Password must contain at least one number and one uppercase and lowercase letter, and at least 8 and a maximum of 20 characters and one special character',
                },
              })}
              {...field}
              label="New Password"
              variant="outlined"
              type="password"
              helperText={errors.newPassword && errors.newPassword.message}
              error={errors.newPassword ? true : false}
            />
          )}
          control={control}
          defaultValue=""
        />
        <Controller
          name="reTypedNewPassword"
          render={({ field }) => (
            <TextField
              {...register('reTypedNewPassword', {
                required: 'This field is required',
                validate: (value) => value === newPassword.current || 'The passwords do not match',
              })}
              {...field}
              label="Confirm New Password"
              variant="outlined"
              type="password"
              helperText={errors.reTypedNewPassword && errors.reTypedNewPassword.message}
              error={errors.reTypedNewPassword ? true : false}
            />
          )}
          control={control}
          defaultValue=""
        />
        <Button type="submit" variant="contained" color="secondary" className={classes.button}>
          Change Password
        </Button>
      </form>
    </>
  );
};

ChangePassword.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChangePassword);
