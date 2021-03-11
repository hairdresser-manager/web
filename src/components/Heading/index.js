import React from 'react';
import PropTypes from 'prop-types';
import { Divider, withStyles } from '@material-ui/core';
import styles from './styles';
import scissorImg from '../../images/pink-scissor.svg';

const Heading = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Divider className={classes.styledDivider} />
      <img src={scissorImg} alt="Scissor Icon" />
      <h1 className={classes.heading}>meet the team</h1>
      <img src={scissorImg} alt="Scissor Icon" />
      <Divider className={classes.styledDivider} />
    </div>
  );
};

Heading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Heading);
