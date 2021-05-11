const styles = (theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    height: '140px',
    overflow: 'hidden',
    margin: '10px auto',
    background: '#fafafa',
    cursor: 'pointer',
  },
  leftBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    padding: '10px',
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  text: {
    fontSize: '23px',
    fontWeight: 'bold',
  },
  img: {
    width: '140px',
    height: '140px',
    borderLeft: `2px solid ${theme.palette.secondary.main}`,
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
});

export default styles;
