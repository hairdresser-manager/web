const styles = (theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '140px',
    overflow: 'hidden',
    margin: '10px auto',
    background: '#fafafa',
    cursor: 'pointer',
  },
  leftBox: {
    display: 'flex',
    flex: '1 1 80%',
    flexDirection: 'column',
    padding: '10px',
  },
  rightBox: {
    display: 'flex',
    flex: '1 1 20%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: '23px',
    fontWeight: 'bold',
  },
  img: {
    width: '100%',
    height: '140px',
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
  employeeName: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  description: {
    width: '100%',
    height: '50px',
  },
});

export default styles;
