const styles = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
