import React from 'react';
import { useDispatch } from 'react-redux';
import { isOpenTeamModal } from 'slices/ModalsSlice';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import styles from './styles';

const TeamCard = ({ classes, person }) => {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(isOpenTeamModal(person));
  };
  return (
    <div className={classes.Card}>
      <img onClick={handleOpenModal} src={person.imgUrl} />
      <Typography>{person.name}</Typography>
    </div>
  );
};
TeamCard.propTypes = {
  classes: PropTypes.object.isRequired,
  person: PropTypes.object,
  id: PropTypes.number,
};

export default withStyles(styles)(TeamCard);
