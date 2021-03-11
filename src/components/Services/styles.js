const styles = (theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  root: {
    width: '90vw',
    marginTop: '100px',
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
