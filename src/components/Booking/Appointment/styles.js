const styles = (theme) => ({
  container: {
    width: '800px',
    minHeight: '500px',
    background: '#fafafa',
    boxShadow: '0 0.5rem 3rem rgba(0, 0, 0, 0.4)',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 30px',
    textAlign: 'center',
    background: theme.palette.secondary.main,
    color: '#eee',
    textShadow: '0 0.2rem 0.4rem rgba(0, 0, 0, 0.5)',
    '& .MuiTypography-subtitle1': {
      fontSize: '26px',
      marginLeft: '10px',
    },
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    padding: 10,
  },
  arrrowIcon: {
    cursor: 'pointer',
    position: 'absolute',
    left: '20px',
    top: '10px',
    fontSize: '2.3rem',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minHeight: '50px',
    background: theme.palette.secondary.main,
    marginTop: 'auto',
    color: '#fafafa',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
    width: '50%',
    flexDirection: 'column',
  },
  menuPaper: {
    maxHeight: 250,
  },
  button: {
    margin: '15px 0',
  },
  alert: {
    width: '50%',
  },
});

export default styles;
