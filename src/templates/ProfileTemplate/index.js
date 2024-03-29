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
import ShowSchedule from 'components/ManageSchedule/ShowSchedule';

const ProfileComponent = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.leftBox}>
        <ProfileMenu />
      </div>
      <div className={classes.rightBox}>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/profile/change-password" component={ChangePassword}></Route>
        <Route
          exact
          path="/profile/change-account-informations"
          component={ChangeAccountInformations}
        ></Route>
        <Route exact path="/profile/my-reservations" component={MyReservations}></Route>
        <Route exact path="/profile/my-schedule" component={ShowSchedule}></Route>
      </div>
    </div>
  );
};

ProfileComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileComponent);
