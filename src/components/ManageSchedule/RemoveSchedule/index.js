import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';

const RemoveSchedule = ({ classes }) => {
  return (
    <div className={classes.container}>
      <h1>Remove Schedule</h1>
    </div>
  );
};

RemoveSchedule.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RemoveSchedule);
