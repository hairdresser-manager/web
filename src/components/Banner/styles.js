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
  },
  textBox: {
    position: 'absolute',
    top: '340px',
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
  },
});

export default styles;
