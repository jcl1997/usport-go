import React, { Component } from 'react';
import './../css/members.css';

export default class Members extends Component {
  render() {
    const {
      alt,
      player,
      firstName,
      secondName,
      nickPlayers,
      position
    } = this.props;
    return (
      <div
        className="card">
        <div className="row">
          <div className="col">
            <img
              className="
                rounded-circle
                d-block
                mx-auto
                player"
              src={player}
              alt={alt} />
          </div>
          <div class="col text-center">
            <h2 class="titulo">
              {firstName}
              <span class="nickjogadores">"{nickPlayers}"</span>
              {secondName}
            </h2>
            <h3>{position}</h3>
          </div>
        </div>
      </div>
    );
  }
}
