import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, TextField, Typography, withStyles } from '@material-ui/core';
import styles from './styles';
import CloseIcon from '@material-ui/icons/Close';

const Register = ({ classes }) => {
  return (
    <Grid container className={classes.conatiner}>
      <Grid item xs={false} sm={6} className={classes.leftBox}></Grid>
      <Grid item xs={12} sm={6} className={classes.rightBox}>
        <CloseIcon className={classes.closeIcon} />
        <Typography variant="h5">Log in</Typography>
        <TextField id="outlined-basic" label="Email" variant="outlined"></TextField>
        <TextField id="outlined-basic" label="Password" variant="outlined"></TextField>
        <TextField id="outlined-basic" label="Confirm Password" variant="outlined"></TextField>
        <TextField id="outlined-basic" label="First Name" variant="outlined"></TextField>
        <TextField id="outlined-basic" label="Last Name" variant="outlined"></TextField>
        <TextField id="outlined-basic" label="Phone Number" variant="outlined"></TextField>
        <a href="#">already have an account? log in</a>
        <Button variant="contained" color="secondary" className={classes.button}>
          Register
        </Button>
      </Grid>
    </Grid>
  );
};

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
