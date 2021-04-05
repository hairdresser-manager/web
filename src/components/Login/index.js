import React from 'react';
import PropTypes from 'prop-types';
import { Button, Link, TextField, Typography, withStyles } from '@material-ui/core';
import styles from './styles';

const Login = ({ classes, setShowRegisterForm }) => {
  const handleRegisterForm = () => {
    setShowRegisterForm((prev) => !prev);
  };

  return (
    <>
      <Typography variant="h5">Log in</Typography>
      <TextField id="outlined-basic" label="Email" variant="outlined"></TextField>
      <TextField id="outlined-basic" label="Password" variant="outlined"></TextField>
      <Link className={classes.link} onClick={handleRegisterForm}>
        Forgotten password?
      </Link>
      <Button variant="contained" color="secondary" className={classes.button}>
        Login
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Register
      </Button>
    </>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  setShowRegisterForm: PropTypes.func,
};

export default withStyles(styles)(Login);
