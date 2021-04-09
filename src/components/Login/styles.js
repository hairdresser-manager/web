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
});

export default styles;
