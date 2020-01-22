import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search'; 
import Cart from './components/Cart'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Search} />
        <Route path={"/cart"} component={Cart} />
        <Route path={"/search"} component={Search}/>
      </Switch>
    </Router>
  );
}

export default App;
