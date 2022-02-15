const styles = (theme) => ({
  container: {
    width: 800,
    display: 'flex',
    flex: 1,
    background: '#fafafa',
    boxShadow: '0 0.5rem 3rem rgba(0, 0, 0, 0.4)',
  },
  loadingCircular: {
    position: 'absolute',
    margin: 'auto',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  },
  [theme.breakpoints.down('sm')]: {
    container: {
      width: '100%',
    },
  },
});

export default styles;
