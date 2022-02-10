import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isOpenAddEmployeeModal } from 'slices/ModalsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from 'slices/EmployeesSlice';
import { withStyles, Typography, Button, Collapse } from '@material-ui/core';
import styles from './styles';
import EmployeeCard from './EmployeeCard';
import { ADD_SCHEDULE, DELETE_SCHEDULE, SHOW_SCHEDULE } from 'helpers/constants';
import AddSchedule from 'components/ManageSchedule/AddSchedule';
import RemoveSchedule from 'components/ManageSchedule/RemoveSchedule';
import ShowSchedule from 'components/ManageSchedule/ShowSchedule';
import SearchBar from 'components/SearchBar';

const ManageEmployee = ({ classes }) => {
  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state.EmployeesSlice);
  const editEmployeeData = useSelector((state) => state.EditEmployeeSlice);
  const addEmployeeData = useSelector((state) => state.AddEmployeeSlice);
  const searchValue = useSelector((state) => state.SearchEmployeeSlice.searchValue);
  const [manageSchedule, setManageSchedule] = useState('');
  const [employeeId, setEmployeeId] = useState(null);

  const { employees } = employeeData;

  useEffect(() => {
    dispatch(getEmployees());
  }, [editEmployeeData, addEmployeeData]);

  const handleClickOpen = () => {
    dispatch(isOpenAddEmployeeModal());
  };

  const searchingFilter = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <SearchBar />
      <Collapse direction="up" in={searchingFilter.length === 0 && employees.length > 0}>
        {searchingFilter.length === 0 && employees.length > 0 && (
          <Typography variant="body1">
            There are no results for: <b>{searchValue}</b>
          </Typography>
        )}
      </Collapse>

      {manageSchedule === ADD_SCHEDULE ? (
        <AddSchedule setManageSchedule={setManageSchedule} employeeId={employeeId} />
      ) : manageSchedule === DELETE_SCHEDULE ? (
        <RemoveSchedule setManageSchedule={setManageSchedule} employeeId={employeeId} />
      ) : manageSchedule === SHOW_SCHEDULE ? (
        <ShowSchedule setManageSchedule={setManageSchedule} employeeId={employeeId} />
      ) : (
        <>
          <div className={classes.header}>
            <Typography variant="h6">Employees:</Typography>
            <Button onClick={handleClickOpen} type="submit" color="primary" variant="contained">
              Add
            </Button>
          </div>
          <div className={classes.container}>
            {employees
              .filter(
                (employee) =>
                  employee.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
                  employee.lastName.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((employee) => (
                <EmployeeCard
                  key={employee.id}
                  employee={employee}
                  setManageSchedule={setManageSchedule}
                  setEmployeeId={setEmployeeId}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
};

ManageEmployee.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ManageEmployee);
