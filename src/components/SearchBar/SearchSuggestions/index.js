import React from 'react';
import { useDispatch } from 'react-redux';
import { clearSearchValue, setSelectedEmployee } from 'slices/SearchEmployeeSlice';
import PropTypes from 'prop-types';
import { withStyles, Divider, Typography } from '@material-ui/core';
import styles from './styles';
import PersonIcon from '@material-ui/icons/Person';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

const SearchSuggestions = ({ classes, employee }) => {
  const dispatch = useDispatch();

  const handleGetIdEmployee = (id) => {
    dispatch(setSelectedEmployee(id));
    dispatch(clearSearchValue());
  };

  return (
    <div onClick={() => handleGetIdEmployee(employee.id)} className={classes.resultsContainer}>
      <div className={classes.details}>
        <PersonIcon className={classes.employeeAvatar} />
        <Typography variant="body2">
          <b>Name:</b> {employee.firstName}
        </Typography>
        <Typography variant="body2">
          <b>Last Name:</b> {employee.lastName}
        </Typography>
        <span className={classes.isActiveWrapper}>
          <Typography variant="body2">
            <b>Active</b>
          </Typography>
          <CheckCircleOutlineOutlinedIcon className={classes.iconActive} />
        </span>
      </div>
      <Divider />
    </div>
  );
};

SearchSuggestions.propTypes = {
  classes: PropTypes.object.isRequired,
  employee: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchSuggestions);
