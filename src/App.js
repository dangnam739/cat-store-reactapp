import React from 'react';
import { Route, Switch } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar'
import Detail from './components/Detail'
import Contact from './components/Contact'
import Modal from './components/Modal'
import Default from './components/Default'
import Cart from './components/Cart'
import CatList from './components/CatList'


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={CatList}/>
        <Route path="/detail" component={Detail} />
        <Route path="/cart" component={Cart}/>
        <Route path="/contact" component={Contact} />
        <Route component={Default} />
      </Switch>
      <Modal/>
    </React.Fragment>
  )
}

export default App;
