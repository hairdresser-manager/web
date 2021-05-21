import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Typography, withStyles } from '@material-ui/core';
import { isShowRegisterForm } from 'slices/ModalsSlice';
import { clearState as ClearStateRegister } from 'slices/RegisterSlice.js';
import { verifyEmail, clearState as ClearStateVerifyEmail } from 'slices/VerifyEmailSlice';
import styles from './styles';

const ConfirmAccount = ({ classes }) => {
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.RegisterSlice);
  const { isSuccess, email, verifyToken } = registerData;
  const isConfirm = useSelector((state) => state.VerifyEmailSlice.isConfirm);

  const showLoginForm = () => {
    dispatch(isShowRegisterForm());
  };

  const handleConfirmLink = () => {
    dispatch(
      verifyEmail({
        token: verifyToken,
        email: email,
      })
    );
  };

  useEffect(() => {
    if (isSuccess && isConfirm) {
      setTimeout(() => {
        showLoginForm();
        dispatch(ClearStateRegister());
        dispatch(ClearStateVerifyEmail());
      }, 3000);
    }
  }, [isSuccess, isConfirm]);

  return (
    <>
      {isConfirm ? (
        <Typography>
          Your account has been activated successfully. In 3 seconds you will be redirected to the
          login page
        </Typography>
      ) : (
        <Typography variant="subtitle1">
          Your account has been created successfully, click this
          <Link onClick={handleConfirmLink} className={classes.confirmLink}>
            {' '}
            link{' '}
          </Link>
          to confirm your account
        </Typography>
      )}
    </>
  );
};

ConfirmAccount.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConfirmAccount);
