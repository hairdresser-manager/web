import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Tabs, Tab } from '@material-ui/core';
import TabPanel from './TabPanel';
import styles from './styles';

const ManageSchedule = ({ classes }) => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="static">
        <Tabs
          variant="fullWidth"
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          aria-label="Shedule"
          indicatorColor="primary"
        >
          <Tab value="one" label="Show Shedule" wrapped />
          <Tab value="two" label="Add Shedule" />
          <Tab value="three" label="Delete Shedule" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        Show employee schedule
      </TabPanel>
      <TabPanel value={value} index="two">
        Item Two
      </TabPanel>
      <TabPanel value={value} index="three">
        Item Three
      </TabPanel>
    </div>
  );
};

ManageSchedule.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ManageSchedule);
