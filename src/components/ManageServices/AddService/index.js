import React from 'react';
import { Button, TextField, Typography, withStyles } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';

const AddService = () => {
  return (
    <>
      <Typography>Add service:</Typography>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextField label="Add category" />
        <Button style={{ margin: '0 15px' }} color="primary" variant="contained">
          Add
        </Button>
      </div>
    </>
  );
};

AddService.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AddService);
