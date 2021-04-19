import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Arrow } from './Arrows';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles';
import employee1 from 'images/employee1.jpg';
import employee2 from 'images/employee2.jpg';
import employee3 from 'images/employee3.jpg';
import employee4 from 'images/employee4.jpg';
import employee5 from 'images/employee5.jpg';
import TeamCard from './TeamCard';

const initState = [
  {
    name: 'Ania',
    imgUrl: employee1,
    description: 'person who cuts mens hair and shaves or trims beards as an occupation',
  },
  {
    name: 'Marta',
    imgUrl: employee2,
    description: 'person who cuts mens hair and shaves or trims beards as an occupation',
  },
  {
    name: 'Rafał',
    imgUrl: employee3,
    description: 'person who cuts mens hair and shaves or trims beards as an occupation',
  },
  {
    name: 'Włodek',
    imgUrl: employee4,
    description: 'person who cuts mens hair and shaves or trims beards as an occupation',
  },
  {
    name: 'Bartek',
    imgUrl: employee5,
    description: 'person who cuts mens hair and shaves or trims beards as an occupation',
  },
];

const TeamSlider = ({ classes }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: classes.root,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
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
        {initState.map((person, index) => (
          <TeamCard key={index} person={person} />
        ))}
      </Slider>
    </div>
  );
};

TeamSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamSlider);
