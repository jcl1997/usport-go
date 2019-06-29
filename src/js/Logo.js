import React, { Component } from 'react';
import Perfil from './../img/perfil.png';
import './../css/logo.css';

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img
          className="
            logo
            rounded-circle
            d-block
            mx-auto"
          src={Perfil}
          alt="LOGO" />
        <h2 className="text-center">Dev USport-GO</h2>
      </div>
    );
  }
}
