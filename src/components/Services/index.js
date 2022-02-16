import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { isOpenAppointmentsModal } from 'slices/ModalsSlice';
import { PublicServices, selectservice } from 'slices/ServicesSlice';
import {
  Typography,
  Button,
  Divider,
  withStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Grid,
  Slide,
  Snackbar,
  CircularProgress,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Alert from '@material-ui/lab/Alert';
import styles from './styles';
import { CheckRoles } from 'helpers/CheckRoles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const Services = ({ classes }) => {
  const [isShowAlert, setIsShowAlert] = useState(false);
  const dispatch = useDispatch();
  const servicesData = useSelector((state) => state.ServicesSlice);
  const isLoggedIn = localStorage.getItem('accessToken');
  const { services } = servicesData;
  const isLoadingServices = servicesData.isLoading;

  const handleOpenModal = () => {
    dispatch(isOpenAppointmentsModal());
  };

  const handleSelectService = (serviceDetail) => {
    dispatch(selectservice(serviceDetail));
  };

  const handleAlert = () => {
    setIsShowAlert(!isShowAlert);
  };

  useEffect(() => {
    dispatch(PublicServices());
  }, []);

  return (
    <>
      {isShowAlert && (
        <Snackbar open={isShowAlert} autoHideDuration={6000} onClose={handleAlert}>
          <Slide direction="up" in={isShowAlert} mountOnEnter unmountOnExit>
            <Alert severity="error" onClose={handleAlert}>
              {CheckRoles('Admin') ? (
                <Typography>Only user can make appointment!</Typography>
              ) : (
                <Typography>Log in to make an appointment</Typography>
              )}
            </Alert>
          </Slide>
        </Snackbar>
      )}
      <Grid id="services" className={classes.container} container>
        {isLoadingServices ? (
          <CircularProgress color="secondary" size={60} />
        ) : (
          <Paper elevation={4} className={classes.paper}>
            {services.map((service, index) => (
              <Accordion key={index} className={classes.styledAccordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>{service.categoryName}</Typography>
                </AccordionSummary>
                {service.services.map((serviceDetail) => (
                  <AccordionDetails
                    key={serviceDetail.id}
                    className={classes.styledAccordionDetails}
                  >
                    <div className={classes.accordionWrapper}>
                      <div className={classes.leftBox}>
                        <Typography variant="subtitle1">{serviceDetail.name}</Typography>
                        <Typography variant="subtitle2">{serviceDetail.description}</Typography>
                      </div>
                      <div className={classes.rightBox}>
                        <AccessTimeIcon fontSize="small" />
                        <Typography style={{ marginRight: 15 }} variant="subtitle1">
                          {serviceDetail.minimumTime === serviceDetail.maximumTime
                            ? serviceDetail.maximumTime + `min`
                            : `${serviceDetail.minimumTime}` +
                              `-` +
                              `${serviceDetail.maximumTime}min`}
                        </Typography>
                        <Typography style={{ marginRight: 15 }} variant="subtitle1">
                          ${serviceDetail.price}+
                        </Typography>
                        <Button
                          onClick={
                            isLoggedIn && !CheckRoles('Admin')
                              ? () => {
                                  handleOpenModal();
                                  handleSelectService(serviceDetail);
                                }
                              : handleAlert
                          }
                          color="secondary"
                          variant="contained"
                        >
                          book
                        </Button>
                      </div>
                    </div>
                    <Divider className={classes.styledDivider} />
                  </AccordionDetails>
                ))}
              </Accordion>
            ))}
          </Paper>
        )}
      </Grid>
    </>
  );
};

Services.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Services);
