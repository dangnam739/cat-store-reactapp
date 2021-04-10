import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact'
import React from 'react';
import { Route, Switch } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component{
  render(){
      return(
          <React.Fragment>
             <Switch>
                 <Route path="/contact" component={Contact}/>
             </Switch>
          </React.Fragment>
      )
  }
}

export default App;
