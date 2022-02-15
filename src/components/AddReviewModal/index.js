import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  withStyles,
  Backdrop,
  Fade,
  Typography,
  TextField,
  Button,
  Box,
  FormHelperText,
} from '@material-ui/core';
import styles from './styles';
import { Controller, useForm } from 'react-hook-form';
import CloseIcon from '@material-ui/icons/Close';
import { Rating } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import { addReview } from 'slices/ReviewsSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const AddReviewModal = ({ classes, handleClose, open, appointmentId }) => {
  const dispatch = useDispatch();
  const isSuccessAdded = useSelector((state) => state.ReviewsSlice.isSuccessAdded);
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = {
      appointmentId: appointmentId,
      ...data,
    };
    dispatch(addReview(newData));
  };

  useEffect(() => {
    if (isSuccessAdded) {
      handleClose();
    }
  }, [isSuccessAdded]);

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
          <CloseIcon
            onClick={handleClose}
            style={{ position: 'absolute', top: 10, left: 10, cursor: 'pointer' }}
          />

          <form onSubmit={handleSubmit(onSubmit)} className={classes.formContainer}>
            <Controller
              name="rate"
              render={({ field }) => (
                <>
                  <Box
                    style={{
                      display: 'flex',
                      alignSelf: 'center',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                  >
                    <Typography component="legend">Rate service</Typography>
                    <Rating
                      {...register('rate', {
                        required: 'First rate us!',
                      })}
                      {...field}
                      name="rate"
                    />
                    <FormHelperText style={{ color: '#f50057' }}>
                      {errors.rate?.message}
                    </FormHelperText>
                  </Box>
                </>
              )}
              control={control}
              defaultValue={null}
            />
            <Controller
              name="description"
              render={({ field }) => (
                <TextField
                  {...register('description', {
                    required: 'Enter opinion.',
                  })}
                  {...field}
                  multiline
                  rows={3}
                  label="Enter your opinion about service."
                  variant="outlined"
                  type="description"
                  helperText={errors.description && errors.description.message}
                  error={errors.description ? true : false}
                />
              )}
              control={control}
              defaultValue=""
            />

            <Button type="submit" variant="contained" color="secondary" className={classes.button}>
              Add
            </Button>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};

AddReviewModal.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  appointmentId: PropTypes.number,
};

export default withStyles(styles)(AddReviewModal);
