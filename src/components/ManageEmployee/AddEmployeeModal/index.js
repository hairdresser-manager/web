import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isOpenAddEmployeeModal } from 'slices/ModalsSlice';
import { Dialog, DialogContent, DialogActions, DialogTitle, Button } from '@material-ui/core';
import AddEmployee from '../AddEmployee';

const AddEmployeeModal = () => {
  const isModalOpen = useSelector((state) => state.ModalsSlice.AddEmployeeModal.isModalOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(isOpenAddEmployeeModal());
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isModalOpen}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Add employee
      </DialogTitle>
      <DialogContent dividers>
        <AddEmployee />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEmployeeModal;
