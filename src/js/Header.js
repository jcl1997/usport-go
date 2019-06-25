import React, { Component } from 'react';
import './../css/header.css';

export default class Header extends Component {
  render() {
    const {
      button
    } = this.props;

    return(
      <div className="
        header
        row
        text-white
        d-flex">
        {button}
        <div className="
          col
          container-fluid
          justify-content-center
          align-items-stretch">
          <h1 className="text-center">USPORT-GO</h1>
        </div>
      </div>
    );
  }
}
