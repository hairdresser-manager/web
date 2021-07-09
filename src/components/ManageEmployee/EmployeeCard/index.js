import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { isOpenEditEmployeeModal } from 'slices/ModalsSlice';
import { setEmployee } from 'slices/EditEmployeeSlice';
import { Paper, Typography, withStyles } from '@material-ui/core';
import styles from './styles';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import PersonIcon from '@material-ui/icons/Person';

const EmployeeCard = ({ classes, employee }) => {
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

  return (
    <Paper onClick={handleEditEmployee} elevation={7} className={classes.container}>
      <div className={classes.leftBox}>
        <div className={classes.employeeName}>
          <Typography variant="subtitle2">
            <b>First Name:</b> {firstName}
          </Typography>
          <Typography variant="subtitle2">
            <b>Last Name:</b> {lastName}
          </Typography>
        </div>

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
};

export default withStyles(styles)(EmployeeCard);
