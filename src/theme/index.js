import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h6: {
      fontSize: '18px',
    },
    subtitle1: {
      fontSize: '15px',
      fontWeight: 'bold',
    },
    subtitle2: {
      fontSize: '13px',
      fontWeight: 'normal',
      color: '#616161',
    },
  },
  palette: {
    error: {
      main: '#f50057',
    },
  },
});

export default theme;
