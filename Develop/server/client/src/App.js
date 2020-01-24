import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation'
import Search from './components/Search'; 
import Cart from './components/Cart'; 

const Page404 = ({ location }) => (
   <div>
      <h2>404 :(</h2>
   </div>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route 
          exact path={"/"} 
          component={Search} 
          render={()=><Navigation>Hello!</Navigation>}
        />

        <Route 
          path={"/cart"} 
          component={Cart} 
          render={()=><Navigation>Hello Infrastructure-Components!</Navigation>}
        />

        <Route 
          path={"/search"} 
          component={Search}
          render={()=><Navigation>Hello Infrastructure-Components!</Navigation>}
        />

        <Route 
          component={Page404} 
          render={()=><Navigation>Hello Infrastructure-Components!</Navigation>}
        />
      </Switch>
    </Router>
  );
}

export default App;

