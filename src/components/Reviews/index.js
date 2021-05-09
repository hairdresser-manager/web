import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Reviews as GetReviews } from 'slices/ReviewsSlice';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';
import styles from './styles';
import Review from './Review';

const Reviews = ({ classes }) => {
  const dispatch = useDispatch();
  const reviewsData = useSelector((state) => state.ReviewsSlice);

  const { reviews } = reviewsData;

  useEffect(() => {
    dispatch(GetReviews());
  }, []);

  return (
    <Grid className={classes.styledGrid} container direction="row" spacing={2}>
      {reviews.map((review) => (
        <Review key={review.reviewId} review={review} />
      ))}
    </Grid>
  );
};

Reviews.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reviews);
