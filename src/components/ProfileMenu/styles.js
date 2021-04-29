const styles = (theme) => ({
  container: {
    width: '400px',
    height: '400px',
    borderRight: 'solid 1px black',
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(1),
  },
});

export default styles;
