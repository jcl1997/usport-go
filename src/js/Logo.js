import React, { Component } from 'react';
import LogoImg from './../img/logo.png';
import './../css/logo.css';

export default class Logo extends Component {
  render() {
    return (
      <div className="row">
        <img
          className="
            logo
            rounded-circle
            d-block
            mx-auto"
          src={LogoImg}
          alt="LOGO" />
      </div>
    );
  }
}
