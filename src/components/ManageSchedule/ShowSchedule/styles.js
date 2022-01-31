const styles = (theme) => ({
  container: {
    width: '100%',
  },
  schedule: {
    width: '100%',
    height: '500px',
    background: '#fafafa',
    boxShadow: '0 0.5rem 3rem rgba(0, 0, 0, 0.4)',
  },
  date: {
    '& .MuiTypography-subtitle1': {
      fontSize: '26px',
    },
    '& .MuiTypography-body2': {
      fontSize: '16px',
    },
  },
  scheduleHeader: {
    width: '100%',
    height: '140px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 30px',
    textAlign: 'center',
    background: theme.palette.primary.main,
    color: '#eee',
    textShadow: '0 0.2rem 0.4rem rgba(0, 0, 0, 0.5)',
    position: 'relative',
  },
  arrrowIcon: {
    cursor: 'pointer',
  },
  scheduleEmployee: {
    display: 'grid',
    gridTemplateColumns: '2fr repeat(7, 1fr)',
    gridTemplateRows: 'repeat(8, 130px)',
    '& div': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      border: '1px solid #dedcdc',
    },
  },
  loadingWrapper: {
    display: 'flex',
    height: 'calc(100% - 100px)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alert: {
    marginTop: '50px',
  },
});

export default styles;
