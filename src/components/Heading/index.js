import React from 'react';
import PropTypes from 'prop-types';
import { Divider, withStyles, Grid } from '@material-ui/core';
import styles from './styles';
import scissorImg from 'images/pink-scissor.svg';

const Heading = ({ classes, title }) => {
  return (
    <Grid container justify="center" alignItems="center" className={classes.styledGrid}>
      <Divider className={classes.styledDivider} />
      <img src={scissorImg} alt="Scissor Icon" />
      <h1 className={classes.heading}>{title}</h1>
      <img src={scissorImg} alt="Scissor Icon" />
      <Divider className={classes.styledDivider} />
    </Grid>
  );
};

Heading.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Heading);
