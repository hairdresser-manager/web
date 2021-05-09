const styles = (theme) => ({
  container: {
    width: '800px',
    minHeight: '500px',
    background: '#fafafa',
    boxShadow: '0 0.5rem 3rem rgba(0, 0, 0, 0.4)',
  },
  textHeader: {
    '& .MuiTypography-subtitle1': {
      fontSize: '26px',
    },
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
  },
  content: {
    display: 'grid',
    width: '100%',
    justifyItems: 'center',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  employeeCard: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '200px',
    alignItems: 'center',
    padding: '20px',
    margin: '15px 0 ',
    background: theme.palette.secondary.main,
    color: 'white',
    boxShadow: '0 0.5rem 3rem rgba(0, 0, 0, 0.4)',
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
  closeIcon: {
    position: 'absolute',
    fontSize: '2.3rem',
    cursor: 'pointer',
    left: '20px',
    top: '10px',

    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  [theme.breakpoints.down('md')]: {
    employees: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
  [theme.breakpoints.down('xs')]: {
    employees: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
});

export default styles;
