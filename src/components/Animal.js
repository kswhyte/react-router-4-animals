import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AnimalAPI from '../AnimalAPI';

class Animal extends Component {
  render() {
    const animal = AnimalAPI.get(
      parseInt(this.props.match.params.number, 10)
    )
    if (!animal) {
      return <div>Sorry, but the animal was not found</div>
    }
    return (
      <div>
        <h1>{animal.name} (#{animal.number})</h1>
        <h2>{animal.class}</h2>
        <Link to='/thewild'>Back</Link>
      </div>
    );
  }
}

export default Animal;