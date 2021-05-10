import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ChangeAccountInformations as sendNewAccountInformations,
  clearState,
} from 'slices/ChangeAccountInformations';
import { withStyles, Button, TextField, Typography } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router';
import styles from './styles';

const ChangeAccountInformations = ({ classes }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const registerData = useSelector((state) => state.ChangeAccountInformationsSlice);
  const { errorMessage, isError, isSuccess } = registerData;

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(sendNewAccountInformations(data));
  };

  const onLogOut = () => {
    localStorage.removeItem('accessToken');
    history.push('/');
    window.location.reload();
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        onLogOut();
        dispatch(clearState());
      }, 3000);
    }
  }, [isSuccess]);

  useEffect(() => {
    dispatch(clearState());
  }, []);

  return (
    <>
      {isSuccess && (
        <MuiAlert className={classes.alert} elevation={6} variant="filled" severity="success">
          The account informations was changed successfully! You will be logged out in 3 seconds
        </MuiAlert>
      )}
      {isError && (
        <MuiAlert className={classes.alert} elevation={6} variant="filled" severity="error">
          {errorMessage || 'Something went wrong, please try logging in again'}
        </MuiAlert>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formContainer}>
        <Typography variant="h6">Change Account Informations</Typography>
        <Controller
          name="firstName"
          render={({ field }) => (
            <TextField
              {...register('firstName', {
                required: 'This field is required',
              })}
              {...field}
              label="Change First Name"
              variant="outlined"
              type="text"
              helperText={errors.firstName && errors.firstName.message}
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
                required: 'This field is required',
              })}
              {...field}
              label="Change Last Name"
              variant="outlined"
              type="text"
              helperText={errors.lastName && errors.lastName.message}
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
                required: 'This field is required',
                pattern: {
                  value: /^-?[0-9]\d*\.?\d*$/,
                  message: 'invalid phone number',
                },
              })}
              {...field}
              label="New Mobile Phone"
              variant="outlined"
              type="tel"
              helperText={errors.mobilePhone && errors.mobilePhone.message}
              error={errors.mobilePhone ? true : false}
            />
          )}
          control={control}
          defaultValue=""
        />
        <Button type="submit" variant="contained" color="secondary" className={classes.button}>
          Change
        </Button>
      </form>
    </>
  );
};

ChangeAccountInformations.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChangeAccountInformations);
