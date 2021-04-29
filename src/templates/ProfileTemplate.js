import React from 'react';
import PropTypes from 'prop-types';
import ProfileMenu from 'components/ProfileMenu';
import { withStyles } from '@material-ui/core';
import ProfileStyles from './ProfileStyles';
import Profile from 'components/Profile';
import { Route } from 'react-router-dom';
import ChangePassword from 'components/ChangePassword';

const ProfileComponent = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.leftBox}>
        <ProfileMenu />
      </div>
      <div className={classes.rightBox}>
        <Route exact path="/profile" component={Profile}></Route>
        <Route path="/profile/change-password" component={ChangePassword}></Route>
      </div>
    </div>
  );
};

ProfileComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(ProfileStyles)(ProfileComponent);
