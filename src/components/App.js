import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Footer from './Footer'

function App() {
  return (
    <div className='main-container' >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/projects'>
            <Projects />
          </Route>
          <Route exact path='/skills'>
            <Skills />
          </Route>
        </Switch>
        <Footer />
      </Router>
  
    </div>
  );
}

export default App;
