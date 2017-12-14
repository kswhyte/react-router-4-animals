import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home.js'
import About from './About.js'
import TheWild from './TheWild.js'

class Main extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <h1 className="App-intro">A Demo for ReactRouter 4</h1>
        <h2>ROUTES:</h2>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/thewild' component={TheWild} />
        </Switch>
      </div>
    );
  }
}

export default Main;
