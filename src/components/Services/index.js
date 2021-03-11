import React from 'react';
import PropTypes from 'prop-types';
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
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './styles';

const Services = ({ classes }) => {
  return (
    <Grid container justify="center">
      <Paper elevation="4" className={classes.root}>
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
                <Button color="secondary" variant="contained">
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
  );
};

Services.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Services);
