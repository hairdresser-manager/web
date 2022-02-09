const styles = (theme) => ({
  button: {
    width: '200px',
    marginTop: theme.spacing(1),
  },
  link: {
    cursor: 'pointer',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiTextField-root': {
      width: '25ch',
    },
  },
  alert: {
    marginBottom: theme.spacing(2),
  },
  fbButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#4c69ba',
    color: 'white',
    border: 0,
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    height: 55,
    width: 250,
    marginBottom: 8,
    cursor: 'pointer',
  },
});

export default styles;
