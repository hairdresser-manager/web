const styles = (theme) => ({
  container: {
    width: '400px',
    height: '400px',
    borderRight: 'solid 1px #7F7F7F',
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
    '&.MuiAvatar-colorDefault': {
      background: theme.palette.secondary.main,
    },
  },
  avatarUser: {
    '&.MuiAvatar-colorDefault': {
      background: theme.palette.secondary.main,
    },
  },
  avatarAdmin: {
    '&.MuiAvatar-colorDefault': {
      background: theme.palette.primary.main,
    },
  },
  [theme.breakpoints.down('sm')]: {
    container: {
      width: '100%',
      borderRight: 'none',
    },
    user: {
      justifyContent: 'center',
    },
  },
});

export default styles;
