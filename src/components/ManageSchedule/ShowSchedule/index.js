import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import styles from './styles';
import EmployeeSchedule from 'components/EmployeeSchedule';
import SearchBar from 'components/SearchBar';

const ShowSchedule = ({ classes }) => {
  const SearchEmployeeData = useSelector((state) => state.SearchEmployeeSlice);
  const { selectedEmployee, isSelectedEmployee, searchValue } = SearchEmployeeData;
  const employees = useSelector((state) => state.EmployeesSlice.employees);

  const searchingFilter = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className={classes.container}>
      <SearchBar />
      <div className={classes.searchWarnings}>
        {searchingFilter.length === 0 && employees.length > 0 && (
          <Typography variant="body1">
            There are no results for: <b>{searchValue}</b>
          </Typography>
        )}
        {!isSelectedEmployee && !searchValue.length > 0 && (
          <Typography variant="body1">Use the search bar to find an employee...</Typography>
        )}
      </div>
      {isSelectedEmployee && <EmployeeSchedule employeeId={selectedEmployee} />}
    </div>
  );
};

ShowSchedule.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowSchedule);
