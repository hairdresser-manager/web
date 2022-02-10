const styles = (theme) => ({
  container: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    padding: 15,
  },
  formStyle: {
    display: 'flex',
    flexDirection: 'column',
  },
  alert: {
    marginBottom: theme.spacing(2),
    width: '400px',
  },
  buttonStyle: {
    margin: '5px 0 5px 0',
  },
  [theme.breakpoints.down('md')]: {
    container: {
      width: '100%',
    },
  },
});

export default styles;
