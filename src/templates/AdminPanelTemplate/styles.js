const styles = (theme) => ({
  container: {
    display: 'flex',
    width: '80%',
    margin: '150px auto',
  },
  rightBox: {
    display: 'flex',
    flex: '1 1 75%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  leftBox: {
    flex: '1 1 25%',
  },
  [theme.breakpoints.down('md')]: {
    container: {
      width: '90%',
    },
  },
  [theme.breakpoints.down('sm')]: {
    container: {
      width: '100%',
      flexDirection: 'column',
    },
  },
});

export default styles;
