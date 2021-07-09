const styles = () => ({
  resultsContainer: {
    width: '600px',
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(63, 81, 181, 0.1)',
    },
  },
  details: {
    display: 'flex',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  employeeAvatar: {
    width: '75px',
    height: '75px',
    borderRight: `3px solid green`,
  },
  isActiveWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  iconActive: {
    color: 'green',
    marginLeft: '10px',
  },
  iconInActive: {
    color: 'red',
    marginLeft: '10px',
  },
});

export default styles;
