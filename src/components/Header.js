import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">REACT ROUTER 4</h1>
        <nav>
          <ul className="route-link-container">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/thewild'>TheWild</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
