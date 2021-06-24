import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isOpenEditEmployeeModal } from 'slices/ModalsSlice';
import { clearState } from 'slices/EditEmployeeSlice';
import { Dialog, DialogContent, DialogActions, DialogTitle, Button } from '@material-ui/core';
import EditEmployee from 'components/ManageEmployee/EditEmployee';

const EditEmployeeModal = () => {
  const isModalOpen = useSelector((state) => state.ModalsSlice.EditEmployeeModal.isModalOpen);
  const dispatch = useDispatch();

  const clearEditEmployeeState = () => {
    dispatch(clearState());
  };

  const handleClose = () => {
    dispatch(isOpenEditEmployeeModal());
    clearEditEmployeeState();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isModalOpen}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Edit employee
      </DialogTitle>
      <DialogContent dividers>
        <EditEmployee />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditEmployeeModal;
