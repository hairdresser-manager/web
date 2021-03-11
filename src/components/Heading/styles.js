const styles = (theme) => ({
  container: {
    width: '90%',
    margin: '70px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      width: '71px',
      margin: '0 15px 0 15px',
      [theme.breakpoints.down('xs')]: {
        display: ' none',
      },
    },
  },
  styledDivider: {
    flexGrow: '1',
    height: '2px',
    background: '#E10050',
  },
  heading: {
    textTransform: 'uppercase',
    fontWeight: 'normal',
  },
});

export default styles;
