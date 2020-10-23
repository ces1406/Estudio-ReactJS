import React from 'react';
import {Switch, Link, BrowserRouter as Router, Route,NavLink } from 'react-router-dom';
import {Home, Events, Products, Pag404, Contact, About} from './subpags';

function App() {
  return (
    <div className="App">           
      <Router>  
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/> 
          <Route exact path="/events" component={Events}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/contact" component={Contact}/>
          <Route component={Pag404}/>
        </Switch>
      </Router>
    </div>
  );
}
// NOTA: con <Route exact path="/about" component={About}/> =>no se va a poder acceder a una subruta como "/about/history" por el "exact"
export default App;