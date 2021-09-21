import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'components/Menu';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Profile from 'components/Profile';
import { Route } from 'react-router-dom';
import ManageEmployee from 'components/ManageEmployee';
import AddSchedule from 'components/ManageSchedule/AddSchedule';
import ShowSchedule from 'components/ManageSchedule/ShowSchedule';
import RemoveSchedule from 'components/ManageSchedule/RemoveSchedule';

const AdminPanelTemplate = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.leftBox}>
        <Menu />
      </div>
      <div className={classes.rightBox}>
        <Route exact path="/admin" component={Profile}></Route>
        <Route exact path="/admin/show-schedule" component={ShowSchedule}></Route>
        <Route exact path="/admin/add-schedule" component={AddSchedule}></Route>
        <Route exact path="/admin/remove-schedule" component={RemoveSchedule}></Route>
        <Route exact path="/admin/manage-employee" component={ManageEmployee}></Route>
      </div>
    </div>
  );
};

AdminPanelTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminPanelTemplate);
