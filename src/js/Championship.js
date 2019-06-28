import React, { Component } from 'react';
import './../css/championship.css';
import ImgChampionship from './../img/championship.png'

export default class Championship extends Component {
  render() {
    return(
      <div className="container-fluid pt-2 mt-2">
        <img
            className="championship-img"
            src={ImgChampionship}
            alt="Campeonato" />
      </div>
    );   
  }
}
