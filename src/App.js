import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/Navbar';
import theme from './theme';
import Banner from './components/Banner';
import Services from './components/Services';
import Heading from './components/Heading';
import Comment from './components/Comment';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Banner />
        <Services />
        <Heading />
        <Comment />
      </ThemeProvider>
    </div>
  );
}

export default App;
