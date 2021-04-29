import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Button, TextField, Typography } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import styles from './styles';

const ChangeNumberPhone = ({ classes }) => {
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
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formContainer}>
        <Typography variant="h6">Change Number Phone</Typography>
        <Controller
          name="mobilePhone"
          render={({ field }) => (
            <TextField
              {...register('mobilePhone', {
                required: 'This field is required',
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
          Change Number Phone
        </Button>
      </form>
    </>
  );
};

ChangeNumberPhone.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChangeNumberPhone);
