import React from 'react';
import { Route, Switch } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar'
import Detail from './components/Detail'
import Contact from './components/Contact'
import Modal from './components/Modal'
import Default from './components/Default'


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/detail" component={Detail} />
        <Route path="/contact" component={Contact} />
        <Route component={Default} />
      </Switch>
      <Modal/>
    </React.Fragment>
  )
}

export default App;
