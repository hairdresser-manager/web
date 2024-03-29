import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'components/Menu';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Profile from 'components/Profile';
import { Route } from 'react-router-dom';
import ManageEmployee from 'components/ManageEmployee';
import ManageServices from 'components/ManageServices';

const AdminPanelTemplate = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.leftBox}>
        <Menu />
      </div>
      <div className={classes.rightBox}>
        <Route exact path="/admin" component={Profile} />
        <Route exact path="/admin/manage-employee" component={ManageEmployee} />
        <Route exact path="/admin/manage-services" component={ManageServices} />
      </div>
    </div>
  );
};

AdminPanelTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminPanelTemplate);
