import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { isOpenEditEmployeeModal } from 'slices/ModalsSlice';
import { setEmployee } from 'slices/EditEmployeeSlice';
import { Button, Paper, Typography, withStyles } from '@material-ui/core';
import styles from './styles';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import PersonIcon from '@material-ui/icons/Person';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import { ADD_SCHEDULE, DELETE_SCHEDULE, SHOW_SCHEDULE } from 'helpers/constants';

const EmployeeCard = ({ classes, employee, setManageSchedule, setEmployeeId }) => {
  const {
    firstName,
    lastName,
    description,
    phoneNumber,
    avatarUrl,
    active,
    id,
    lowQualityAvatarUrl,
    nick,
  } = employee;
  const dispatch = useDispatch();

  const handleEditEmployee = () => {
    const dataEmployee = {
      active: active,
      avatarUrl: avatarUrl,
      description: description,
      id: id,
      lowQualityAvatarUrl: lowQualityAvatarUrl,
      nick: nick,
    };
    dispatch(setEmployee(dataEmployee));
    dispatch(isOpenEditEmployeeModal());
  };

  const handleShowSchedule = (e) => {
    e.stopPropagation();
    setEmployeeId(id);
    setManageSchedule(SHOW_SCHEDULE);
  };

  const handleAddSchedule = (e) => {
    e.stopPropagation();
    setEmployeeId(id);
    setManageSchedule(ADD_SCHEDULE);
  };

  const handleRemoveSchedule = (e) => {
    e.stopPropagation();
    setEmployeeId(id);
    setManageSchedule(DELETE_SCHEDULE);
  };

  return (
    <Paper onClick={handleEditEmployee} elevation={7} className={classes.container}>
      <div className={classes.leftBox}>
        <div
          style={{
            flex: 0.5,
          }}
        >
          <Typography variant="subtitle2">
            <b>First Name:</b> {firstName}
          </Typography>
          <Typography variant="subtitle2">
            <b>Last Name:</b> {lastName}
          </Typography>

          <Typography variant="subtitle2">
            <b>Description:</b> {description && description.substring(0, 100)}
          </Typography>

          <Typography variant="subtitle2">
            <b>Phone Number:</b> {phoneNumber}
          </Typography>
          <div className={classes.status}>
            <Typography variant="subtitle2">
              <b>Active:</b>
            </Typography>
            {active ? (
              <CheckCircleOutlineOutlinedIcon className={classes.iconActive} />
            ) : (
              <HighlightOffOutlinedIcon className={classes.iconInActive} />
            )}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flex: 0.5,
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <Button
            startIcon={<EventNoteIcon />}
            className={classes.buttonStyle}
            variant="contained"
            color="primary"
            onClick={(e) => handleShowSchedule(e)}
          >
            Show Schedule
          </Button>
          <Button
            startIcon={<AddBoxIcon />}
            className={classes.buttonStyle}
            variant="contained"
            color="primary"
            onClick={(e) => handleAddSchedule(e)}
          >
            Add Schedule
          </Button>
          <Button
            startIcon={<IndeterminateCheckBoxIcon />}
            className={classes.buttonStyle}
            variant="contained"
            color="primary"
            onClick={(e) => handleRemoveSchedule(e)}
          >
            Remove Schedule
          </Button>
        </div>
      </div>
      <div className={classes.rightBox}>
        {avatarUrl ? (
          <img
            className={`${classes.img} ${active ? classes.imgActive : classes.imgInActive}`}
            src={avatarUrl}
            alt="Employee Avatar"
          />
        ) : (
          <PersonIcon
            className={`${classes.img} ${active ? classes.imgActive : classes.imgInActive}`}
          />
        )}
      </div>
    </Paper>
  );
};

EmployeeCard.propTypes = {
  classes: PropTypes.object.isRequired,
  employee: PropTypes.object,
  setManageSchedule: PropTypes.func,
  setEmployeeId: PropTypes.func,
};

export default withStyles(styles)(EmployeeCard);
