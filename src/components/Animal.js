import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AnimalAPI from '../AnimalAPI';

class Animal extends Component {
  render() {
    console.log(this.props.match.params.name)
    const animal = AnimalAPI.get(
      parseInt(this.props.match.params.number, 10)
    )
    if (!animal) {
      return <div>Sorry, but the animal was not found</div>
    }
    return (
      <div>
        <h1 className="animal-info">{animal.name} (#{animal.number})</h1>
        <h2 className="animal-info">{animal.class}</h2>
        <Link to='/thewild'>Back</Link>
      </div>
    );
  }
}

export default Animal;