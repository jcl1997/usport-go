import React, { Component } from 'react';
import { conquests } from './Conquests';
import Conquest from './Conquest';

export default class ConquestCard extends Component {
  render() {
    return (
      <div className="container-fluid pt-2 mt-2">
        {
          conquests.map((i, k) => {
            return <Conquest key={k} item={i}/>;
          })
        }
      </div>
    );
  }
}
