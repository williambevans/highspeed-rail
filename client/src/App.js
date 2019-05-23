
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';
import CMAView from './pages/CMA'
import Messages from './pages/Messages';
import Index from './pages/Index';


function App (){


  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/cma" component={CMAView} />
          <Route exact path="/message" component={Messages} />
        </Switch>
    </Router>
  );
}

export default App;