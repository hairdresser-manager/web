import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import styles from './styles';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const ProfileComponent = ({ classes }) => {
  const userName = localStorage.getItem('firstName');
  return (
    <>
      <Typography variant="h2">Hello, {userName}!</Typography>
      <HomeOutlinedIcon className={classes.icon} />
      <Typography variant="subtitle1">Profile page</Typography>
      <Typography variant="subtitle2">Here you will see a summary of your profile.</Typography>
    </>
  );
};

ProfileComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileComponent);
