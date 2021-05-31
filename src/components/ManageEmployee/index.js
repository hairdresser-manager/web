import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { isOpenAddEmployeeModal } from 'slices/ModalsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from 'slices/EmployeesSlice';
import { withStyles, Typography, Button } from '@material-ui/core';
import styles from './styles';
import EmployeeCard from './EmployeeCard';

const ManageEmployee = ({ classes }) => {
  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state.EmployeesSlice);
  const editEmployeeData = useSelector((state) => state.editEmployeeSlice);

  const { employees } = employeeData;

  useEffect(() => {
    dispatch(getEmployees());
  }, [editEmployeeData]);

  const handleClickOpen = () => {
    dispatch(isOpenAddEmployeeModal());
  };

  return (
    <>
      <div className={classes.header}>
        <Typography variant="h6">Employees:</Typography>
        <Button onClick={handleClickOpen} type="submit" color="primary" variant="contained">
          Add
        </Button>
      </div>
      <div className={classes.container}>
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </>
  );
};

ManageEmployee.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ManageEmployee);
