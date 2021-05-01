import banner from 'images/banner.jpg';

const styles = (theme) => ({
  styledGrid: {
    position: 'relative',
  },
  bannerImg: {
    background: `url(${banner})`,
    width: '100%',
    minHeight: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '82px',
  },
  textBox: {
    position: 'absolute',
    top: '420px',
    width: '333px',
    height: '115px',
    background: '#E10050',
    color: 'white',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  [theme.breakpoints.down('xs')]: {
    container: {
      flexDirection: 'column',
    },
    textBox: {
      position: 'static',
      width: '100%',
    },
    bannerImg: {
      marginTop: '52px',
    },
  },
});

export default styles;
