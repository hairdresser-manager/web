import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, withStyles } from '@material-ui/core';
import styles from './styles';

const Banner = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.bannerImg}></div>
      <Paper elevation="4" className={classes.textBox}>
        <Typography variant="h4">our services</Typography>
      </Paper>
    </div>
  );
};

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);
