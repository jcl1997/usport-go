import React, { Component } from 'react';

export default class Members extends Component {
  render() {
    const {
      alt,
      player
    } = this.props;
    return (
      <div className="row">
        <div
          className="card">
          <img
            className="
              rounded-circle
              d-block
              mx-auto"
            src={player}
            alt={alt} />
        </div>
      </div>
    );
  }
}
