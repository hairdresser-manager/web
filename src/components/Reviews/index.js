import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { employeeReviews as getEmployeeReviews, Reviews as getReviews } from 'slices/ReviewsSlice';
import PropTypes from 'prop-types';
import { CircularProgress, Grid, Typography, withStyles } from '@material-ui/core';
import styles from './styles';
import Review from './Review';

const Reviews = ({ classes, employeeId }) => {
  const dispatch = useDispatch();
  const reviewsData = useSelector((state) => state.ReviewsSlice);

  const { reviews, isLoading, employeeReviews } = reviewsData;

  useEffect(() => {
    if (employeeId) {
      const newData = {
        employeeId: employeeId,
      };
      dispatch(getEmployeeReviews(newData));
    } else {
      dispatch(getReviews());
    }
  }, []);

  return (
    <Grid id="reviews" className={classes.styledGrid} container direction="row" spacing={2}>
      {isLoading ? (
        <CircularProgress className={classes.circularProgress} color="secondary" size={60} />
      ) : (
        <>
          {employeeId ? (
            employeeReviews.length > 0 &&
            employeeReviews.map((review) => <Review key={review.reviewId} review={review} />)
          ) : reviews.length > 0 ? (
            reviews.map((review) => <Review key={review.reviewId} review={review} />)
          ) : (
            <Typography>There is no reviews</Typography>
          )}
        </>
      )}
    </Grid>
  );
};

Reviews.propTypes = {
  classes: PropTypes.object.isRequired,
  employeeId: PropTypes.number,
};

export default withStyles(styles)(Reviews);
