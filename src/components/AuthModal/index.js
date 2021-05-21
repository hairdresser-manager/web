import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isOpenAuthModal } from 'slices/ModalsSlice';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';
import styles from './styles';
import CloseIcon from '@material-ui/icons/Close';
import Login from 'components/Login';
import Register from 'components/Register';

const AuthModal = ({ classes }) => {
  const isShowRegisterForm = useSelector(
    (state) => state.ModalsSlice.showRegisterForm.isShowRegisterForm
  );
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(isOpenAuthModal());
  };

  return (
    <Grid container className={classes.conatiner}>
      <Grid item xs={false} sm={6} className={classes.leftBox}></Grid>
      <Grid item xs={12} sm={6} className={classes.rightBox}>
        <CloseIcon onClick={handleCloseModal} className={classes.closeIcon} />
        {isShowRegisterForm ? <Register /> : <Login />}
      </Grid>
    </Grid>
  );
};

AuthModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AuthModal);
