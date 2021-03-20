import { Typography, withStyles } from '@material-ui/core';
import { StyledArrowBackIosIcon } from './Arrows';
import { StyledArrowForwardIosIcon } from './Arrows';
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles';
import employee1 from '../../images/employee1.jpg';
import employee2 from '../../images/employee2.jpg';
import employee3 from '../../images/employee3.jpg';
import employee4 from '../../images/employee4.jpg';
import employee5 from '../../images/employee5.jpg';

const TeamSlider = ({ classes }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: classes.root,
    nextArrow: <StyledArrowForwardIosIcon />,
    prevArrow: <StyledArrowBackIosIcon />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={classes.container}>
      <Slider {...settings}>
        <div className={classes.Card}>
          <img src={employee1} alt="" />
          <Typography>Ania</Typography>
        </div>
        <div className={classes.Card}>
          <img src={employee2} alt="" />
          <Typography>Marta</Typography>
        </div>
        <div className={classes.Card}>
          <img src={employee3} alt="" />
          <Typography>Rafał</Typography>
        </div>
        <div className={classes.Card}>
          <img src={employee4} alt="" />
          <Typography>Włodek</Typography>
        </div>
        <div className={classes.Card}>
          <img src={employee5} alt="" />
          <Typography>Bartek</Typography>
        </div>
      </Slider>
    </div>
  );
};

TeamSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamSlider);
