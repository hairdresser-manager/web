const styles = (theme) => ({
  root: {
    flexGrow: 1,
    textTransform: 'Uppercase',
  },
  styledMenu: {
    display: 'flex',
    alignItems: 'center',
    height: '82px',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  styledToolbar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  styledLogo: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      width: '37px',
      height: '37px',
      marginRight: '10px',
    },
  },
  styledButton: {
    fontWeight: 'bold',
    marginRight: theme.spacing(2),
  },
  styledAccountButton: {
    marginLeft: '5px',
  },
  [theme.breakpoints.down('sm')]: {
    styledLogoTypography: {
      display: 'none',
    },
    styledButton: {
      display: 'none',
    },
  },
  [theme.breakpoints.down('xs')]: {
    styledLogoTypography: {
      display: 'block',
    },
    styledMenu: {
      display: 'none',
    },
  },
});

export default styles;
