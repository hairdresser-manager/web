const styles = (theme) => ({
  root: {
    flexGrow: 1,
    textTransform: 'Uppercase',
  },
  styledMenu: {
    display: 'flex',
    alignItems: 'center',
    height: '82px',
    marginTop: '3px',
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
  styledLink: {
    borderBottom: `3px solid transparent`,
    '&:hover': {
      borderBottom: `3px solid ${theme.palette.secondary.main}`,
    },
  },
  iconButton: {
    width: '95px',
  },
  menuItemAdmin: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
});

export default styles;
