import React from 'react';
import PropTypes from 'prop-types';
import { Button, Link, TextField, Typography, withStyles } from '@material-ui/core';
import styles from './styles';

const Register = ({ classes, setShowRegisterForm }) => {
  const handleLoginForm = () => {
    setShowRegisterForm((prev) => !prev);
  };
  return (
    <>
      <Typography variant="h5">Log in</Typography>
      <TextField id="outlined-basic" label="Email" variant="outlined"></TextField>
      <TextField id="outlined-basic" label="Password" variant="outlined"></TextField>
      <TextField id="outlined-basic" label="Confirm Password" variant="outlined"></TextField>
      <TextField id="outlined-basic" label="First Name" variant="outlined"></TextField>
      <TextField id="outlined-basic" label="Last Name" variant="outlined"></TextField>
      <TextField id="outlined-basic" label="Phone Number" variant="outlined"></TextField>
      <Link className={classes.link} onClick={handleLoginForm}>
        already have an account? log in
      </Link>
      <Button variant="contained" color="secondary" className={classes.button}>
        Register
      </Button>
    </>
  );
};

Register.propTypes = {
  classes: PropTypes.object.isRequired,
  setShowRegisterForm: PropTypes.func,
};

export default withStyles(styles)(Register);
