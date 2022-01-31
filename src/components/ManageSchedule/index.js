import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from 'components/SearchBar';
import { useEffect } from 'react';
import { Button, Collapse, Divider, Fade, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import PropTypes from 'prop-types';
import { ADD_SCHEDULE, DELETE_SCHEDULE, SHOW_SCHEDULE } from 'helpers/constants';
import AddSchedule from './AddSchedule';
import { clearState as clearAddScheduleState } from 'slices/AddScheduleSlice';
import { clearState as clearRemoveScheduleState } from 'slices/RemoveScheduleSlice';
import RemoveSchedule from './RemoveSchedule';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ShowSchedule from './ShowSchedule';

const ManageSchedule = ({ classes }) => {
  const [selectedEmployee, setselectedEmployee] = useState();
  const [manageSchedule, setManageSchedule] = useState('');
  const { selectedEmployeeId, searchValue } = useSelector((state) => state.SearchEmployeeSlice);
  const employees = useSelector((state) => state.EmployeesSlice.employees);
  const filteredEmployees = () => employees.filter((item) => item.id === selectedEmployeeId);

  const dispatch = useDispatch();

  useEffect(() => {
    setselectedEmployee(...filteredEmployees());
    dispatch(clearAddScheduleState());
    dispatch(clearRemoveScheduleState());
  }, [filteredEmployees, dispatch]);

  const searchingFilter = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <SearchBar />
      <Collapse direction="up" in={searchingFilter.length === 0 && employees.length > 0}>
        <div className={classes.searchWarnings}>
          {searchingFilter.length === 0 && employees.length > 0 && (
            <Typography variant="body1">
              There are no results for: <b>{searchValue}</b>
            </Typography>
          )}
        </div>
      </Collapse>
      <div className={classes.container}>
        <Fade in={selectedEmployeeId} timeout={1000}>
          <div className={classes.wrapper}>
            {selectedEmployee &&
              (manageSchedule === SHOW_SCHEDULE ? (
                <ShowSchedule setManageSchedule={setManageSchedule} />
              ) : (
                <>
                  <div className={classes.leftWrapper}>
                    <img
                      className={classes.img}
                      src={selectedEmployee.avatarUrl}
                      alt="Employee Avatar"
                    />
                    <Typography variant="body1">
                      {selectedEmployee.firstName} {selectedEmployee.lastName}
                    </Typography>
                  </div>
                  <Divider className={classes.dividerStyle} orientation="vertical" />
                  <div className={classes.rightWrapper}>
                    {manageSchedule === ADD_SCHEDULE ? (
                      <AddSchedule setManageSchedule={setManageSchedule} />
                    ) : manageSchedule === DELETE_SCHEDULE ? (
                      <RemoveSchedule setManageSchedule={setManageSchedule} />
                    ) : (
                      <div>
                        <Button
                          className={classes.buttonStyle}
                          onClick={() => setManageSchedule(SHOW_SCHEDULE)}
                          type="submit"
                          variant="contained"
                          color="primary"
                          startIcon={<EventNoteIcon />}
                        >
                          Show Schedule
                        </Button>
                        <Button
                          className={classes.buttonStyle}
                          onClick={() => setManageSchedule(ADD_SCHEDULE)}
                          type="submit"
                          variant="contained"
                          color="primary"
                          startIcon={<AddBoxIcon />}
                        >
                          ADD SCHEDULE
                        </Button>
                        <Button
                          className={classes.buttonStyle}
                          onClick={() => setManageSchedule(DELETE_SCHEDULE)}
                          type="submit"
                          variant="contained"
                          color="primary"
                          startIcon={<IndeterminateCheckBoxIcon />}
                        >
                          DELETE SCHEDULE
                        </Button>
                      </div>
                    )}
                  </div>
                </>
              ))}
          </div>
        </Fade>
      </div>
    </>
  );
};

ManageSchedule.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ManageSchedule);
