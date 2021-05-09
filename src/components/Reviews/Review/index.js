import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles, Avatar, Typography, Divider } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import styles from './styles';

const Review = ({ classes, review }) => {
  return (
    <>
      <Grid item>
        <Avatar className={classes.styledAvatar} alt="Remy Sharp" />
      </Grid>
      <Grid item>
        <Typography>{review.nick}</Typography>
        <div className={classes.rating}>
          <span className={classes.stars}>
            <Rating name="read-only" value={review.rate} readOnly />
          </span>
          <Typography variant="subtitle1">{review.date}</Typography>
        </div>
        <Typography variant="subtitle2">{review.description}</Typography>
      </Grid>
      <Divider className={classes.styledDivider} />
    </>
  );
};

Review.propTypes = {
  classes: PropTypes.object.isRequired,
  review: PropTypes.object,
};

export default withStyles(styles)(Review);
