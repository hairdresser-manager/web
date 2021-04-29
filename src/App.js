import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'theme';
import Home from 'pages/Home';
import Profile from 'pages/Profile';

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/profile" component={Profile}></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </div>
);

export default App;
