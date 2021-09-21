const styles = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .MuiTypography-root': {
      color: '#3D3D3D',
      opacity: '0.7',
    },
  },
  searchWarnings: {
    margin: '80px 0 20px 0',
  },
  selectedEmployee: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 20px 0 20px',
  },
  leftBox: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 20px 0 20px',
  },
  employeeAvatar: {
    width: '140px',
    height: '140px',
    borderRadius: '5px',
  },
  employeeName: {
    textAlign: 'center',
  },
  divider: {
    height: '150px',
  },
  alert: {
    marginBottom: theme.spacing(2),
    width: '400px',
  },
});

export default styles;
