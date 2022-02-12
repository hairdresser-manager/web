import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, Typography, withStyles } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { AddServicesCategory } from 'slices/ServicesCategoriesSlice';
import styles from './styles';
import PropTypes from 'prop-types';

const AddCategory = ({ classes }) => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    dispatch(AddServicesCategory(data));
    reset({
      categoryName: '',
    });
  };
  return (
    <>
      <Typography>Add category:</Typography>
      <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="categoryName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              fullWidth
              style={{ width: '50%' }}
              label="Add category"
              {...register('categoryName', {
                required: 'Enter category name',
                pattern: {
                  value: /^.{5,25}$/i,
                  message: 'Category name must have at least 5 and a maximum of 25 characters',
                },
              })}
              {...field}
              helperText={errors.categoryName?.message}
              error={errors.categoryName ? true : false}
            />
          )}
        />

        <Button type="submit" className={classes.button} color="primary" variant="contained">
          Add
        </Button>
      </form>
    </>
  );
};

AddCategory.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddCategory);
