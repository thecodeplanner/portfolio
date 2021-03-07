// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'



function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
