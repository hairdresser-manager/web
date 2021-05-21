import React from 'react';
import Navbar from 'components/Navbar';
import AdminPanelTemplate from 'templates/AdminPanelTemplate';
import AddEmployeeModal from 'components/ManageEmployee/AddEmployeeModal';
import EditEmployeeModal from 'components/ManageEmployee/EditEmployeeModal';

const AdminPanel = () => {
  return (
    <>
      <Navbar />
      <AdminPanelTemplate />
      <AddEmployeeModal />
      <EditEmployeeModal />
    </>
  );
};

export default AdminPanel;
