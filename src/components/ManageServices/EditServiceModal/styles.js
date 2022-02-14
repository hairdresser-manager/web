const styles = (theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    position: 'relative',
  },
  cancelIconStyle: {
    position: 'absolute',
    top: 10,
    left: 10,
    cursor: 'pointer',
  },
  typographyStyle: {
    textAlign: 'center',
  },
});

export default styles;
