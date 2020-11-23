import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Importing components
import Nav from './Components/Pages/Nav';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Shop from './Components/Pages/Shop';
import Home from './Components/Pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Nav></Nav>
        </header>
        <Switch>
          <Route path='/' exact component={Home}>
            <Home></Home>
          </Route>
          <Route path='/About' component={About}>
            <About></About>
          </Route>
          <Route path='/Shop' component={Shop}>
            <Shop></Shop>
          </Route>
          <Route path='/Contact' component={Contact}>
            <Contact></Contact>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
