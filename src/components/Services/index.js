import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { isOpenAppointmentsModal } from 'slices/ModalsSlice';
import { Services as GetServices, selectservice } from 'slices/ServicesSlice';
import { ServicesCategories } from 'slices/ServicesCategoriesSlice';
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

const Services = ({ classes }) => {
  const [isShowAlert, setIsShowAlert] = useState(false);
  const isLoggedIn = localStorage.getItem('accessToken');
  const dispatch = useDispatch();
  const servicesData = useSelector((state) => state.ServicesSlice);
  const servicesCategoriesData = useSelector((state) => state.ServicesCategoriesSlice);

  const { services } = servicesData;
  const isLoadingServices = servicesData.isLoading;
  const { servicesCategories } = servicesCategoriesData;
  const isLoadingCategories = servicesCategoriesData.isLoading;

  const handleOpenModal = () => {
    dispatch(isOpenAppointmentsModal());
  };

  const handleSelectService = (id, name) => {
    const serviceDetail = {
      idService: id,
      nameService: name,
    };

    dispatch(selectservice(serviceDetail));
  };

  const handleAlert = () => {
    setIsShowAlert(!isShowAlert);
  };

  useEffect(() => {
    dispatch(GetServices());
    dispatch(ServicesCategories());
  }, []);

  return (
    <>
      {isShowAlert && (
        <Snackbar open={isShowAlert} autoHideDuration={6000} onClose={handleAlert}>
          <Slide direction="up" in={isShowAlert} mountOnEnter unmountOnExit>
            <Alert severity="error" onClose={handleAlert}>
              Log in to make an appointment
            </Alert>
          </Slide>
        </Snackbar>
      )}
      <Grid id="services" className={classes.container} container>
        {isLoadingServices || isLoadingCategories ? (
          <CircularProgress color="secondary" size={60} />
        ) : (
          <Paper elevation={4} className={classes.paper}>
            {servicesCategories.map((category, index) => (
              <Accordion key={index} className={classes.styledAccordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>{category.name}</Typography>
                </AccordionSummary>
                {services.map(
                  (serviceDetail) =>
                    serviceDetail.categoryId === category.id && (
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
                            <Typography variant="subtitle1">${serviceDetail.price}+</Typography>

                            <Button
                              onClick={
                                isLoggedIn
                                  ? () => {
                                      handleOpenModal();
                                      handleSelectService(serviceDetail.id, serviceDetail.name);
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
                    )
                )}
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
