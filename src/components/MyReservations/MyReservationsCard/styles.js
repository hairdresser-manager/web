const styles = () => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '480px',
    height: '130px',
    overflow: 'hidden',
    margin: '10px auto',
    background: '#fafafa',
    flexGrow: 1,
  },
  centerBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: '3',
  },
  RightBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: '1',
    borderLeft: `2px solid #e6e6e6`,
  },
  LeftBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: '1',
    borderRight: `2px solid #e6e6e6`,
  },
  reviewText: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      color: '#f50057',
    },
  },
  text: {
    fontSize: '23px',
    fontWeight: 'bold',
  },
});

export default styles;
