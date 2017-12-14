import React, { Component } from 'react';
import AnimalAPI from '../AnimalAPI';
import { Link } from 'react-router-dom';

class TheWildList extends Component {
  render() {
    return (
      <ul className="App-TheWildList">
        { 
          AnimalAPI.all().map(animal => (
            <li key={animal.number}>
              <Link to={`/thewild/${animal.number}`}>{animal.name}</Link>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default TheWildList;
