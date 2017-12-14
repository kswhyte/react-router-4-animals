import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import TheWildList from './TheWildList.js';
import Animal from './Animal.js';

class TheWild extends Component {
  render() {
    return (
      <div className="App-TheWild">
        <h1>This is the THEWILD page</h1>
        <h2>SUBROUTES:</h2>
        <Switch>
          <Route exact path='/thewild' component={TheWildList}/>
          <Route path='/thewild/:number' component={Animal}/>
        </Switch>
      </div>
    );
  }
}

export default TheWild;
