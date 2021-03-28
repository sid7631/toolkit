import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Components from './components';
import Docs from './docs';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    //add provider here
    <Provider store={store}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Docs} />
          <Route path='/components' component={Components} />
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
