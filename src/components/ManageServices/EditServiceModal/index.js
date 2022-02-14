import React from 'react';
import { withStyles, Fade, Backdrop, Modal, Typography } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';
import EditService from '../EditService';
import CancelIcon from '@material-ui/icons/Cancel';

const EditServiceModal = ({ classes, setOpen, open, service }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <CancelIcon onClick={handleClose} className={classes.cancelIconStyle} />
          <Typography className={classes.typographyStyle} variant="h5">
            Edit Service
          </Typography>
          <EditService service={service} handleClose={handleClose} />
        </div>
      </Fade>
    </Modal>
  );
};

EditServiceModal.propTypes = {
  classes: PropTypes.object.isRequired,
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  service: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditServiceModal);
