import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles, Avatar, Typography, Divider } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import styles from './styles';

const Review = ({ classes, item }) => {
  return (
    <>
      <Grid item>
        <Avatar className={classes.styledAvatar} alt="Remy Sharp" />
      </Grid>
      <Grid item>
        <Typography>{item.name}</Typography>
        <div className={classes.rating}>
          <span className={classes.stars}>
            <Rating name="read-only" value={item.rating} readOnly />
          </span>
          <Typography variant="subtitle1">{item.date}</Typography>
        </div>
        <Typography variant="subtitle2">About {item.about}:</Typography>
        <Typography variant="subtitle2">{item.contents}</Typography>
      </Grid>
      <Divider className={classes.styledDivider} />
    </>
  );
};

Review.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object,
};

export default withStyles(styles)(Review);
