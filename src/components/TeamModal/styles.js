const styles = (theme) => ({
  styledAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  dialogTitleWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  styledTitle: {
    marginLeft: theme.spacing(1),
  },
});

export default styles;
