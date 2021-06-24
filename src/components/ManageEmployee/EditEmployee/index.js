import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, Button, TextField, Typography, Switch } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import styles from './styles';
import { editEmployee, clearState } from 'slices/EditEmployeeSlice';
import { isOpenEditEmployeeModal } from 'slices/ModalsSlice';
import MuiAlert from '@material-ui/lab/Alert';

const EditEmployee = ({ classes }) => {
  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state.EditEmployeeSlice);

  const {
    nick,
    description,
    avatarUrl,
    lowQualityAvatarUrl,
    active,
    isError,
    isSuccess,
    errorMessage,
    employeeId,
  } = employeeData;

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = {
      active: data.active,
      avatarUrl: data.avatarUrl,
      description: data.description,
      lowQualityAvatarUrl: data.lowQualityAvatarUrl,
      nick: data.nick,
      id: employeeId,
    };

    dispatch(editEmployee(newData));
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(isOpenEditEmployeeModal());
      dispatch(clearState());
    }
  }, [isSuccess]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.formContainer}>
      {isError && (
        <MuiAlert className={classes.alert} elevation={6} variant="filled" severity="error">
          {errorMessage && 'Something went wrong'}
        </MuiAlert>
      )}
      <Typography variant="h6">Edit Employee</Typography>
      <Controller
        name="nick"
        render={({ field }) => (
          <TextField
            {...register('nick', {
              required: 'Enter your nick',
              pattern: {
                value: /^.{6,15}$/,
                message: 'Invalid nick. Nick must be at least 6 and a maximum of 15.',
              },
            })}
            {...field}
            label="Nick"
            variant="outlined"
            type="text"
            helperText={errors.nick && errors.nick.message}
            error={errors.nick ? true : false}
          />
        )}
        control={control}
        defaultValue={nick || ''}
      />
      <Controller
        name="description"
        render={({ field }) => (
          <TextField
            {...register('description', {
              required: 'Enter your description',
              pattern: {
                value: /^.{30,255}$/,
                message:
                  'Invalid description. description must be at least 30 and a maximum of 255.',
              },
            })}
            {...field}
            label="Description"
            variant="outlined"
            type="text"
            helperText={errors.description && errors.description.message}
            error={errors.description ? true : false}
          />
        )}
        control={control}
        defaultValue={description || ''}
      />
      <Controller
        name="avatarUrl"
        render={({ field }) => (
          <TextField
            {...register('avatarUrl', {
              required: 'Enter avatar url',
            })}
            {...field}
            label="Avatar Url"
            variant="outlined"
            type="url"
            helperText={errors.avatarUrl && errors.avatarUrl.message}
            error={errors.avatarUrl ? true : false}
          />
        )}
        control={control}
        defaultValue={avatarUrl || ''}
      />
      <Controller
        name="lowQualityAvatarUrl"
        render={({ field }) => (
          <TextField
            {...register('lowQualityAvatarUrl', {
              required: 'Enter Low Quality Avatar Url',
            })}
            {...field}
            label="Low Quality Avatar Url"
            variant="outlined"
            type={lowQualityAvatarUrl}
            helperText={errors.lowQualityAvatarUrl && errors.lowQualityAvatarUrl.message}
            error={errors.lowQualityAvatarUrl ? true : false}
          />
        )}
        control={control}
        defaultValue={lowQualityAvatarUrl || ''}
      />
      <Controller
        name="active"
        control={control}
        defaultValue={active}
        render={({ field }) => (
          <Switch onChange={(e) => field.onChange(e.target.checked)} checked={field.value} />
        )}
      />

      <Button type="submit" variant="contained" color="primary" className={classes.button}>
        Edit
      </Button>
    </form>
  );
};

EditEmployee.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditEmployee);
