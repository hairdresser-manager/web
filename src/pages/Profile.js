import React from 'react';
import Navbar from 'components/Navbar';
import ProfileTemplate from 'templates/ProfileTemplate';
import AddEmployeeModal from 'components/ManageEmployee/AddEmployeeModal';
import EditEmployeeModal from 'components/ManageEmployee/EditEmployeeModal';

const Profile = () => {
  return (
    <>
      <Navbar />
      <ProfileTemplate />
      <AddEmployeeModal />
      <EditEmployeeModal />
    </>
  );
};

export default Profile;
