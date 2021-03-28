import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Components from './components';
import Docs from './docs';
import Count from './components/Count'
function App() {
  return (
    //add provider here
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Docs} />
          <Route path='/components' component={Components} />
          <Route path='/count' component={Count} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
