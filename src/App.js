import Contact from './components/Contact'
import React from 'react';
import { Route, Switch } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/contact" component={Contact} />
      </Switch>
    </React.Fragment>
  )
}

export default App;
