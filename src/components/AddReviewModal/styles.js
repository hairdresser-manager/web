const styles = (theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 210,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'space-between',
    flexDirection: 'column',
    width: 500,
    padding: 10,
  },
  button: {
    margin: '5px 0',
  },
  [theme.breakpoints.down('sm')]: {
    modal: {
      marginLeft: 0,
    },
  },
});

export default styles;
