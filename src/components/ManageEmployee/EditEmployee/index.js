import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  withStyles,
  Button,
  TextField,
  Typography,
  Switch,
  FormControlLabel,
} from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import styles from './styles';
import { editEmployee } from 'slices/EditEmployeeSlice';

const EditEmployee = ({ classes, id }) => {
  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state.editEmployeeSlice);

  const { nick, description, avatarUrl, lowQualityAvatarUrl, active } = employeeData;

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
      id: id,
    };
    dispatch(editEmployee(newData));
    window.location.reload();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.formContainer}>
      <Typography variant="h6">Update employee</Typography>
      <Controller
        name="nick"
        render={({ field }) => (
          <TextField
            {...register('nick', {
              required: 'Enter your nick',
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
        render={({ field }) => (
          <FormControlLabel
            {...field}
            labelPlacement="start"
            label="Active"
            control={<Switch name="isActive" color="secondary" />}
          />
        )}
        control={control}
        defaultValue={active || ''}
      />

      <Button type="submit" variant="contained" color="secondary" className={classes.button}>
        Edit
      </Button>
    </form>
  );
};

EditEmployee.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number,
};

export default withStyles(styles)(EditEmployee);
