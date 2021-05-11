import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isOpenEditEmployeeModal } from 'slices/ModalsSlice';
import { Dialog, DialogContent, DialogActions, DialogTitle, Button } from '@material-ui/core';
import EditEmployee from 'components/ManageEmployee/EditEmployee';

const EditEmployeeModal = () => {
  const isModalOpen = useSelector((state) => state.ModalsSlice.EditEmployeeModal.isModalOpen);
  const id = useSelector((state) => state.editEmployeeSlice.employeeId);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(isOpenEditEmployeeModal());
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isModalOpen}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Add employee
      </DialogTitle>
      <DialogContent dividers>
        <EditEmployee id={id} />
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
