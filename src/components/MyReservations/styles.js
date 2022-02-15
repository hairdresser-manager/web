const styles = (theme) => ({
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    container: {
      marginTop: 100,
    },
  },
});

export default styles;
