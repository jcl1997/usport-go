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
      position,
      age,
      city,
      firstChampion,
      firstChampionAlt,
      secondChampion,
      secondChampionAlt,
      invert
    } = this.props.item;
    

    const className = [
      'card-body',
      'row'
    ];

    if (invert) {
      className.push('invert');
    }

    return (
      <div className="pt-2">
        <div
          className="card bloco">
          <div className={className.join(' ')}>
            <div className="
              col
              d-flex
              justify-content-center
              align-items-center">
              <img
                className="
                  rounded-circle
                  d-block
                  mx-auto
                  player"
                src={player}
                alt={alt} />
            </div>
            <div className="col text-center">
              <h3 className="card-title">
                {firstName}
                <span className="nick-player">"{nickPlayers}"</span>
                {secondName}
              </h3>
              <h4>{position}</h4>
              <p>Idade:&nbsp;{age}</p>
              <p>Cidade:&nbsp;{city}</p>
              <p>Campeões Favoritos</p>
              <div className="
                row
                d-flex
                justify-content-center
                align-items-center">
                <img
                  className="float-left"
                  src={firstChampion}
                  alt={firstChampionAlt} />
                <img
                  className="float-left"
                  src={secondChampion}
                  alt={secondChampionAlt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
