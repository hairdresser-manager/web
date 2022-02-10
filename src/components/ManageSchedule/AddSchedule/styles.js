const styles = (theme) => ({
  container: {
    width: '50%',
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  alert: {
    marginBottom: theme.spacing(2),
    maxWidth: '400px',
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
