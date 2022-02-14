/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Collapse, Paper, withStyles } from '@material-ui/core';
import Services from 'components/Services';
import AddCategory from './AddCategory';
import AddService from './AddService';
import CancelIcon from '@material-ui/icons/Cancel';
import styles from './styles';
import PropTypes from 'prop-types';
import EditServiceModal from './EditServiceModal';

const ManageServices = ({ classes }) => {
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [isAddServiceOpen, setIsAddServiceOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [service, setService] = useState({});

  return (
    <div className={classes.container}>
      <EditServiceModal setOpen={setOpen} open={open} service={service} />
      <div style={{ padding: 15 }}>
        <Button
          onClick={() => setIsAddCategoryOpen(!isAddCategoryOpen)}
          style={{ margin: '0 15px' }}
          color="primary"
          variant="contained"
        >
          Add category
        </Button>
        <Button
          onClick={() => setIsAddServiceOpen(!isAddServiceOpen)}
          style={{ margin: '0 15px' }}
          color="primary"
          variant="contained"
        >
          Add service
        </Button>
      </div>
      <Collapse className={classes.collapseStyle} orientation="horizontal" in={isAddCategoryOpen}>
        <Paper className={classes.paperStyle}>
          <CancelIcon
            onClick={() => setIsAddCategoryOpen(!isAddCategoryOpen)}
            className={classes.cancelIcon}
          />
          <AddCategory />
        </Paper>
      </Collapse>

      <Collapse className={classes.collapseStyle} orientation="horizontal" in={isAddServiceOpen}>
        <Paper className={classes.paperStyle}>
          <CancelIcon
            onClick={() => setIsAddServiceOpen(!isAddServiceOpen)}
            className={classes.cancelIcon}
          />
          <AddService />
        </Paper>
      </Collapse>
      <Services isEdit setOpen={setOpen} setService={setService} />
    </div>
  );
};

ManageServices.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ManageServices);
