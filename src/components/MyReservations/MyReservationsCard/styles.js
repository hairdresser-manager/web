const styles = () => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '480px',
    height: '130px',
    overflow: 'hidden',
    margin: '10px 0 10px 0',
    background: '#fafafa',
  },
  leftBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: '3',
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: '1',
    borderLeft: `1px solid #e6e6e6`,
  },
  text: {
    fontSize: '23px',
    fontWeight: 'bold',
  },
});

export default styles;
