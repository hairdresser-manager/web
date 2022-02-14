import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { isOpenAppointmentsModal } from 'slices/ModalsSlice';
import { Services as GetServices, selectservice } from 'slices/ServicesSlice';
import { ServicesCategories, ChangeServicesCategory } from 'slices/ServicesCategoriesSlice';
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
  TextField,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Alert from '@material-ui/lab/Alert';
import styles from './styles';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useForm, Controller } from 'react-hook-form';

export function stopPropagate(callback) {
  return (e) => {
    e.stopPropagation();
    callback();
  };
}

const Services = ({ classes, isEdit, setOpen, setService, setIsAddEmployee }) => {
  const [isShowAlert, setIsShowAlert] = useState(false);
  const isLoggedIn = localStorage.getItem('accessToken');
  const dispatch = useDispatch();
  const servicesData = useSelector((state) => state.ServicesSlice);
  const servicesCategoriesData = useSelector((state) => state.ServicesCategoriesSlice);

  const { services, isAddSuccess, isEditSuccess } = servicesData;
  const isLoadingServices = servicesData.isLoading;
  const { servicesCategories, isUpdateSuccess } = servicesCategoriesData;
  const isLoadingCategories = servicesCategoriesData.isLoading;
  const [isEditCategory, setIsEditCategory] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState(false);

  const handleOpenModal = () => {
    dispatch(isOpenAppointmentsModal());
  };

  const handleOpenServiceEditModal = () => {
    setOpen(true);
    setIsAddEmployee(false);
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

  const handleIsEditCategory = (e, id) => {
    e.stopPropagation();
    setEditCategoryId(id);
    setIsEditCategory(!isEditCategory);
    reset();
  };

  useEffect(() => {
    dispatch(GetServices());
    dispatch(ServicesCategories());
  }, [isUpdateSuccess, isAddSuccess, isEditSuccess]);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (id) => (data) => {
    const newData = {
      id: id,
      name: data.categoryName,
    };
    dispatch(ChangeServicesCategory(newData));
    setIsEditCategory(!isEditCategory);
  };

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
            {servicesCategories.map((category) => (
              <Accordion key={category.id} className={classes.styledAccordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {(editCategoryId === category.id) & isEditCategory ? (
                    <>
                      <form onSubmit={handleSubmit(onSubmit(category.id))}>
                        <Controller
                          name="categoryName"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              key={category.id}
                              {...register('categoryName', {
                                required: 'Enter category name',
                                pattern: {
                                  value: /^.{5,25}$/i,
                                  message:
                                    'Category name must have at least 5 and a maximum of 25 characters',
                                },
                              })}
                              {...field}
                              type="text"
                              helperText={errors.categoryName?.message}
                              error={errors.categoryName ? true : false}
                            />
                          )}
                          defaultValue={category.name}
                        />

                        <CheckCircleIcon
                          onClick={stopPropagate(handleSubmit(onSubmit(category.id)))}
                          style={{ margin: '0 10px' }}
                        />
                      </form>
                    </>
                  ) : (
                    <Typography className={classes.heading}>{category.name}</Typography>
                  )}
                  {isEdit &&
                    (isEditCategory & (editCategoryId === category.id) ? (
                      <CancelIcon onClick={(e) => handleIsEditCategory(e, category.id)} />
                    ) : (
                      <EditIcon
                        onClick={(e) => handleIsEditCategory(e, category.id)}
                        style={{ margin: '0 10px' }}
                      />
                    ))}
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
                            {isEdit ? (
                              <>
                                <Button
                                  className={classes.buttonStyle}
                                  onClick={() => [
                                    handleOpenServiceEditModal(),
                                    setService(serviceDetail),
                                    setIsAddEmployee(true),
                                  ]}
                                  color="secondary"
                                  variant="contained"
                                >
                                  Add employee
                                </Button>
                                <Button
                                  onClick={() => [
                                    handleOpenServiceEditModal(),
                                    setService(serviceDetail),
                                  ]}
                                  color="secondary"
                                  variant="contained"
                                >
                                  Edit
                                </Button>
                              </>
                            ) : (
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
                            )}
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
  isEdit: PropTypes.bool,
  setOpen: PropTypes.func,
  setService: PropTypes.func,
  setIsAddEmployee: PropTypes.func,
};

export default withStyles(styles)(Services);
