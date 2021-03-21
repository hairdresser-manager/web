import banner from 'images/banner.jpg';

const styles = (theme) => ({
  conatiner: {
    height: '100vh',
  },
  leftBox: {
    background: `url(${banner})`,
    backgroundSize: 'cover',
    borderRight: `8px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.down('xs')]: {
      border: 'none',
    },
  },
  rightBox: {
    background: 'white',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '& h5': {
      marginBottom: theme.spacing(1),
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  closeIcon: {
    position: 'absolute',
    fontSize: '3rem',
    cursor: 'pointer',
    right: '10px',
    top: '10px',
    color: theme.palette.secondary.main,

    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  button: {
    width: '200px',
    marginTop: theme.spacing(1),
  },
});

export default styles;
