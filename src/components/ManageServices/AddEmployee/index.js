import React, { useEffect } from 'react';
import {
  Avatar,
  Button,
  Collapse,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  withStyles,
} from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from 'slices/EmployeesSlice';
import { AddEmployeeToService } from 'slices/ServicesSlice';
import MuiAlert from '@material-ui/lab/Alert';

const AddEmployee = ({ classes, service }) => {
  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state.EmployeesSlice.employees);
  const servicesData = useSelector((state) => state.ServicesSlice);

  const { isAddEmployeeSuccess, errorMessage } = servicesData;
  const { name, id } = service;

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, serviceId: id };
    dispatch(AddEmployeeToService(newData));
  };

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <Typography style={{ margin: '5px 0', textAlign: 'center' }}>Service name: {name}</Typography>
      <Collapse direction="up" in={isAddEmployeeSuccess}>
        <MuiAlert className={classes.alert} elevation={6} variant="filled" severity="success">
          Employee was added successfully.
        </MuiAlert>
      </Collapse>
      <Controller
        name="employeeId"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Employee</InputLabel>
            <Select
              {...register('employeeId', {
                required: 'Enter category name',
              })}
              {...field}
              error={errors.employeeId ? true : false}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              MenuProps={{ classes: { paper: classes.menuPaper } }}
            >
              {employeeData.map((employee) => (
                <MenuItem style={{ height: 50 }} key={employee.id} value={employee.id}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar style={{ marginRight: 5 }} src={employee.lowQualityAvatarUrl} />
                    {employee.firstName} {employee.lastName}
                  </div>
                </MenuItem>
              ))}
            </Select>
            <FormHelperText style={{ color: '#f50057' }}>{errorMessage}</FormHelperText>
          </FormControl>
        )}
      />
      <Button type="submit" className={classes.button} color="primary" variant="contained">
        Add
      </Button>
    </form>
  );
};

AddEmployee.propTypes = {
  classes: PropTypes.object.isRequired,
  service: PropTypes.object.isRequired,
};
export default withStyles(styles)(AddEmployee);
