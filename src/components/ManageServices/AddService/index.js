import React from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { time, timeConvert } from 'helpers/convertMinutes';
import { AddService as AddServiceToApi } from 'slices/ServicesSlice';

const AddService = ({ classes }) => {
  const dispatch = useDispatch();
  const servicesCategoriesData = useSelector(
    (state) => state.ServicesCategoriesSlice.servicesCategories
  );

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(AddServiceToApi(data));
    reset({
      name: '',
      categoryId: '',
      description: '',
      minimumTime: '',
      maximumTime: '',
      price: '',
      available: false,
    });
  };

  return (
    <>
      <Typography>Add service:</Typography>
      <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              style={{ width: '50%', margin: 10 }}
              label="Add service name"
              {...register('name', {
                required: 'Enter service name',
                pattern: {
                  value: /^.{5,25}$/i,
                  message: 'Category name must have at least 5 and a maximum of 25 characters',
                },
              })}
              {...field}
              helperText={errors.name?.message}
              error={errors.name ? true : false}
            />
          )}
        />

        <Controller
          name="categoryId"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl style={{ width: '50%' }}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                {...register('categoryId', {
                  required: 'Enter category name',
                })}
                {...field}
                error={errors.categoryId ? true : false}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                MenuProps={{ classes: { paper: classes.menuPaper } }}
              >
                {servicesCategoriesData.map((category) => (
                  <MenuItem style={{ height: 50 }} key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText style={{ color: '#f50057' }}>
                {errors.categoryId?.message}
              </FormHelperText>
            </FormControl>
          )}
        />

        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              multiline
              rows={2}
              style={{ width: '50%', margin: 10 }}
              label="Add description"
              {...register('description', {
                required: 'Enter description',
                pattern: {
                  value: /^.{10,255}$/i,
                  message: 'description name must have at least 10 and a maximum of 255 characters',
                },
              })}
              {...field}
              helperText={errors.description?.message}
              error={errors.description ? true : false}
            />
          )}
        />

        <Controller
          name="minimumTime"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl style={{ width: '50%' }}>
              <InputLabel id="demo-simple-select-label">Minimum time</InputLabel>
              <Select
                {...register('minimumTime', {
                  required: 'Enter category name',
                })}
                {...field}
                error={errors.minimumTime ? true : false}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                MenuProps={{ classes: { paper: classes.menuPaper } }}
              >
                {time.map((time, index) => (
                  <MenuItem style={{ height: 50 }} key={index} value={time}>
                    {timeConvert(time)}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText style={{ color: '#f50057' }}>
                {errors.minimumTime?.message}
              </FormHelperText>
            </FormControl>
          )}
        />

        <Controller
          name="maximumTime"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl style={{ width: '50%' }}>
              <InputLabel id="demo-simple-select-label">Maximum time</InputLabel>
              <Select
                {...register('maximumTime', {
                  required: 'Enter category name',
                })}
                {...field}
                error={errors.maximumTime ? true : false}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                MenuProps={{ classes: { paper: classes.menuPaper } }}
              >
                {time.map((time, index) => (
                  <MenuItem style={{ height: 50 }} key={index} value={time}>
                    {timeConvert(time)}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText style={{ color: '#f50057' }}>
                {errors.maximumTime?.message}
              </FormHelperText>
              <FormHelperText>
                If you want to set only one time, set minimum and maximum time to the same value.
              </FormHelperText>
            </FormControl>
          )}
        />

        <Controller
          name="price"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              type="number"
              style={{ width: '50%', margin: 10 }}
              label="Add price"
              {...register('price', {
                required: 'Enter price',
                pattern: {
                  value: /^[1-9][0-9]*$/i,
                  message: 'Price name must be greater than 0',
                },
              })}
              {...field}
              helperText={errors.price?.message}
              error={errors.price ? true : false}
            />
          )}
        />

        <Controller
          name="available"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <>
              <label>Available:</label>
              <Switch onChange={(e) => field.onChange(e.target.checked)} checked={field.value} />
            </>
          )}
        />

        <Button type="submit" className={classes.button} color="primary" variant="contained">
          Add
        </Button>
      </form>
    </>
  );
};

AddService.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AddService);
