const styles = (theme) => ({
  test: {
    maxHeight: '225px',
    overflow: 'auto',
    overflowY: 'overlay',
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      outline: '1px solid slategrey',
    },
  },
  container: {
    position: 'absolute',
    zIndex: '999',
  },
  searchBar: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xl')]: {
      width: '600px',
    },
    [theme.breakpoints.down('md')]: {
      width: '440px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '350px',
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    padding: 5,
    flex: 1,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

export default styles;
