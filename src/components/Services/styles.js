const styles = (theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  paper: {
    width: '90%',
    background: '#E10050',
    borderRadius: '5px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
  },
  styledAccordion: {
    marginBottom: '15px',
  },
  styledAccordionDetails: {
    flexDirection: 'column',
  },
  accordionWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  leftBox: {},
  rightBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '150px',
  },
  styledDivider: {
    margin: '20px 0 10px 0',
  },
});

export default styles;
