import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { isOpenAppointmentsModal } from 'slices/ModalsSlice';
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
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Alert from '@material-ui/lab/Alert';
import styles from './styles';

const Services = ({ classes }) => {
  const [isShowAlert, setIsShowAlert] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem('accessToken');

  const handleOpenModal = () => {
    dispatch(isOpenAppointmentsModal());
  };

  const handleAlert = () => {
    setIsShowAlert(!isShowAlert);
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
      <Grid id="services" container justify="center">
        <Paper elevation={4} className={classes.root}>
          <Accordion className={classes.styledAccordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Hair Care / Cut / Styling</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.styledAccordionDetails}>
              <div className={classes.accordionWrapper}>
                <div className={classes.leftBox}>
                  <Typography variant="subtitle1">Hair Cut</Typography>
                  <Typography variant="subtitle2">
                    Precision cut shaped to your request . Styling not included in this price
                  </Typography>
                </div>
                <div className={classes.rightBox}>
                  <Typography variant="subtitle1">$40.00+</Typography>

                  <Button
                    onClick={isLoggedIn ? handleOpenModal : handleAlert}
                    color="secondary"
                    variant="contained"
                  >
                    book
                  </Button>
                </div>
              </div>
              <Divider className={classes.styledDivider} />
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.styledAccordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Hair Cut</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Grid>
    </>
  );
};

Services.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Services);
