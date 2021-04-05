import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';
import styles from './styles';
import CloseIcon from '@material-ui/icons/Close';
import Login from 'components/Login';
import Register from 'components/Register';

const AuthTemplate = ({ classes, isModalOpen }) => {
  const handleCloseModal = () => {
    isModalOpen((prev) => !prev);
  };
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  return (
    <Grid container className={classes.conatiner}>
      <Grid item xs={false} sm={6} className={classes.leftBox}></Grid>
      <Grid item xs={12} sm={6} className={classes.rightBox}>
        <CloseIcon onClick={handleCloseModal} className={classes.closeIcon} />
        {showRegisterForm ? (
          <Register showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />
        ) : (
          <Login setShowRegisterForm={setShowRegisterForm} />
        )}
      </Grid>
    </Grid>
  );
};

AuthTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
  isModalOpen: PropTypes.func,
};

export default withStyles(styles)(AuthTemplate);
