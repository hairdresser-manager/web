import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'theme';
import Home from 'pages/Home';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
