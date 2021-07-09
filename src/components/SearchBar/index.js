import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from 'slices/EmployeesSlice';
import { setSearchValue } from 'slices/SearchEmployeeSlice';
import PropTypes from 'prop-types';
import { withStyles, Paper, InputBase, Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles';
import SearchSuggestions from './SearchSuggestions';

const SearchBar = ({ classes }) => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.SearchEmployeeSlice.searchValue);
  const employeeData = useSelector((state) => state.EmployeesSlice.employees);

  const Search = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <>
      <Paper className={classes.container}>
        <div className={classes.searchBar}>
          <SearchIcon />
          <Divider className={classes.divider} orientation="vertical" />
          <InputBase
            onChange={(e) => Search(e)}
            className={classes.input}
            placeholder="Search employee"
            value={searchValue}
          />
        </div>
        <Divider />
        <div className={classes.test}>
          {searchValue.length > 0 &&
            employeeData
              .filter(
                (employee) =>
                  employee.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
                  employee.lastName.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((employee) => <SearchSuggestions key={employee.id} employee={employee} />)}
        </div>
      </Paper>
    </>
  );
};

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);
