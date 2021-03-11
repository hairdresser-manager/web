import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles, Avatar, Typography, Divider } from '@material-ui/core';
import styles from './styles';
import StarIcon from '@material-ui/icons/Star';

const Comment = ({ classes }) => {
  return (
    <Grid className={classes.styledGrid} container direction="row" spacing={2}>
      <Grid item>
        <Avatar color="primary">N</Avatar>
      </Grid>
      <Grid item>
        <Typography>Natalie</Typography>
        <div className={classes.rating}>
          <span className={classes.stars}>
            <StarIcon style={{ color: '#FFC107' }} />
            <StarIcon style={{ color: '#FFC107' }} />
            <StarIcon style={{ color: '#FFC107' }} />
            <StarIcon />
          </span>
          <Typography variant="subtitle1">Jan 28, 2021</Typography>
        </div>
        <Typography variant="subtitle2">About Włodek:</Typography>
        <Typography variant="subtitle2">
          Great experience! Looking forward to my hair growth journey....
        </Typography>
      </Grid>
      <Divider className={classes.styledDivider} />
      <Grid item>
        <Avatar color="primary">N</Avatar>
      </Grid>
      <Grid item>
        <Typography>Natalie</Typography>
        <div className={classes.rating}>
          <span className={classes.stars}>
            <StarIcon style={{ color: '#FFC107' }} />
            <StarIcon style={{ color: '#FFC107' }} />
            <StarIcon style={{ color: '#FFC107' }} />
            <StarIcon />
          </span>
          <Typography variant="subtitle1">Jan 28, 2021</Typography>
        </div>
        <Typography variant="subtitle2">About Włodek:</Typography>
        <Typography variant="subtitle2">
          Great experience! Looking forward to my hair growth journey....
        </Typography>
      </Grid>
      <Divider className={classes.styledDivider} />
    </Grid>
  );
};

Comment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comment);
