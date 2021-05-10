const styles = (theme) => ({
  container: {
    display: 'flex',
    width: '80%',
    margin: '150px auto',
  },
  rightBox: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
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
