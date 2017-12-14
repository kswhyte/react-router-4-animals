import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home.js'
import About from './About.js'
import TheWild from './TheWild.js'

class Main extends Component {
  render() {
    return (
      <div>
        <h1 className="App-intro">
          ROUTES:
        </h1>
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
