import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { isOpenTeamModal } from 'slices/ModalsSlice';
import {
  withStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Avatar,
  Box,
} from '@material-ui/core';
import Reviews from 'components/Reviews';
import styles from './styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const TeamModal = ({ classes }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(isOpenTeamModal());
  };
  const isModalOpen = useSelector((state) => state.ModalsSlice.TeamModal.isModalOpen);
  const TeamDetails = useSelector((state) => state.ModalsSlice.TeamModalDetails);
  return (
    <>
      {TeamDetails ? (
        <Dialog
          maxWidth="sm"
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={isModalOpen}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            <div className={classes.dialogTitleWrapper}>
              <Avatar className={classes.styledAvatar} src={TeamDetails.imgUrl} />
              <Typography className={classes.styledTitle} variant="h6">
                {TeamDetails.name}
              </Typography>
            </div>
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Typography>About me: {TeamDetails.description}</Typography>

            <Box mt={3}>
              <Typography variant="h6">The latest reviews:</Typography>
              <Reviews />
            </Box>
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  );
};

TeamModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamModal);
