const styles = (theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 900,
    flex: 1,
    marginTop: 50,
    padding: '0 10px 0 10px',
  },
  wrapper: {
    display: 'flex',
    marginTop: 25,
    flex: 1,
    alignItems: 'center',
    minHeight: 430,
  },
  leftWrapper: {
    display: 'flex',
    width: '50%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightWrapper: {
    display: 'flex',
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 140,
    height: 140,
    borderRadius: 5,
    margin: '5px 0 5px 0',
  },
  buttonStyle: {
    margin: '10px 0 10px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    width: 250,
  },
  searchWarnings: {
    display: 'flex',
    marginTop: 80,
    width: '100%',
    justifyContent: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    wrapper: {
      flexDirection: 'column',
    },
    leftWrapper: {
      width: '100%',
    },
    rightWrapper: {
      width: '100%',
      alignItems: 'flex-start',
    },
    dividerStyle: {
      display: 'none',
    },
  },
});

export default styles;
