
import './App.css';
import Nav from './nav';
import Home from './home';
import AboutUs from './about';
import Customer from './cmp';
import Contactus from './contact';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import NotFound from './notfoound';

function App() {
  return (
    <Router>
      <div className='App'>
      <Nav />
      <div className="content">
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/cmp">
            <Customer />
          </Route>
          <Route exact path="/contact">
          <Contactus />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>


      </div>
      </div>
    </Router>

    
  );
}

export default App;
