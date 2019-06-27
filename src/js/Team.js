import React, { Component } from 'react';
import Member from './Member';
import { members, reservations } from './Members';
import Flamengo from './../img/times/Flamengo.png';
import './../css/logo.css';

export default class Team extends Component {
  render() {
    return (
      <div className="container-fluid pt-2 mt-2">
        <div>
          <img
            className="
              mx-auto
              d-block
              team-logo"
            src={Flamengo}
            alt="Flamengo" />
        </div>
        <div className="pt-2">
          <div
            className="
              card
              bloco">
            <div
              className="
              col
              d-flex
              justify-content-center
              align-items-center">
              <h3 className="card-title">Titulares</h3>
            </div>
          </div>
        </div>
        {
          members.map((i, k) => {
            return <Member key={k} item={i} />
          })
        }
        <div className="pt-2">
          <div
            className="
              card
              bloco">
            <div
              className="
              col
              d-flex
              justify-content-center
              align-items-center">
              <h3 className="card-title">Reservas</h3>
            </div>
          </div>
        </div>
        {
          reservations.map((i, k) => {
            return <Member key={k} item={i} />
          })
        }
      </div>
    );
  }
}
