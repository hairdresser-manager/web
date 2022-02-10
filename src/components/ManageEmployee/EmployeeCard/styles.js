const styles = (theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    overflow: 'hidden',
    margin: '10px auto',
    background: '#fafafa',
    cursor: 'pointer',
    height: 220,
  },
  leftBox: {
    display: 'flex',
    flex: '1 1 80%',
    padding: '10px',
    alignItems: 'center',
  },
  rightBox: {
    display: 'flex',
    flex: '1 1 20%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    fontSize: '23px',
    fontWeight: 'bold',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  imgActive: {
    borderLeft: `3px solid green`,
  },
  imgInActive: {
    borderLeft: `3px solid ${theme.palette.secondary.main}`,
  },
  status: {
    display: 'flex',
    alignItems: 'center',
  },
  iconActive: {
    color: 'green',
    marginLeft: '10px',
  },
  iconInActive: {
    color: 'red',
    marginLeft: '10px',
  },
  description: {
    width: '100%',
    height: '50px',
  },
  buttonStyle: {
    margin: '5px 0',
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  [theme.breakpoints.down('md')]: {
    buttonStyle: {
      width: '100%',
    },
  },
});

export default styles;
