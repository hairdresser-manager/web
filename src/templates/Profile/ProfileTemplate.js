import React from 'react';
import PropTypes from 'prop-types';
import ProfileMenu from 'components/Menu';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Profile from 'components/Profile';
import { Route } from 'react-router-dom';
import ChangePassword from 'components/ChangePassword';
import ChangeAccountInformations from 'components/ChangeAccountInformations';
import MyReservations from 'components/MyReservations';
import ManageSchedule from 'components/ManageSchedule';
import ManageEmployee from 'components/ManageEmployee';

const ProfileComponent = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.leftBox}>
        <ProfileMenu />
      </div>
      <div className={classes.rightBox}>
        <Route exact path="/profile" component={Profile}></Route>
        <Route path="/profile/change-password" component={ChangePassword}></Route>
        <Route
          path="/profile/change-account-informations"
          component={ChangeAccountInformations}
        ></Route>
        <Route path="/profile/my-reservations" component={MyReservations}></Route>
        <Route path="/profile/manage-schedule" component={ManageSchedule}></Route>
        <Route path="/profile/manage-employee" component={ManageEmployee}></Route>
      </div>
    </div>
  );
};

ProfileComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileComponent);
