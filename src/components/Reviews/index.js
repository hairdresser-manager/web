import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';
import styles from './styles';
import Review from './Review';

const initState = [
  {
    name: 'Ania',
    contents: 'Great experience! Looking forward to my hair growth journey....',
    rating: 4,
    date: 'Jan 28, 2021',
    about: 'Rafał',
  },
  {
    name: 'Włodek',
    contents: 'Great experience! Looking forward to my hair growth journey....',
    rating: 5,
    date: 'Jan 28, 2021',
    about: 'Włodek',
  },
];

const Reviews = ({ classes }) => {
  return (
    <Grid id="reviews" className={classes.styledGrid} container direction="row" spacing={2}>
      {initState.map((item, index) => (
        <Review key={index} item={item} />
      ))}
    </Grid>
  );
};

Reviews.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reviews);
