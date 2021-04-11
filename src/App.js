import Contact from './components/Contact'
import React from 'react';
import { Route, Switch } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Detail from './components/Detail';


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/detail" component={Detail} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Detail/>
    </React.Fragment>
  )
}

export default App;
