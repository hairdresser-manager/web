import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TeamMembers } from 'slices/TeamMembersSlice';
import PropTypes from 'prop-types';
import { CircularProgress, withStyles } from '@material-ui/core';
import { Arrow } from './Arrows';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles';
import TeamCard from './TeamCard';

const TeamSlider = ({ classes }) => {
  const dispatch = useDispatch();
  const teamMembersData = useSelector((state) => state.TeamMembersSlice);

  const { teamMembers, isLoading } = teamMembersData;

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

  useEffect(() => {
    dispatch(TeamMembers());
  }, []);

  return (
    <div id="team" className={classes.container}>
      {isLoading ? (
        <CircularProgress color="secondary" size={60} />
      ) : (
        <Slider {...settings}>
          {teamMembers.map((person, index) => (
            <TeamCard key={index} person={person} />
          ))}
        </Slider>
      )}
    </div>
  );
};

TeamSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamSlider);
