const styles = (theme) => ({
  formContainer: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    '& .MuiTextField-root': {
      width: '30ch',
      margin: theme.spacing(1),
    },
  },
});

export default styles;
