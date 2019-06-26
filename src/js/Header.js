import React, { Component } from 'react';
import './../css/header.css';

export default class Header extends Component {
  render() {
    const {
      visible,
      button
    } = this.props;

    const className = [
      'header',
      'row',
      'text-white',
      'd-flex',
    ];

    if (visible) {
      className.push('invert')
    }

    return(
      <div className={className.join(' ')}>
        {button}
        <div className="
          col
          container-fluid
          justify-content-center
          align-items-stretch">
          <h2 className="text-center">USPORT-GO</h2>
        </div>
      </div>
    );
  }
}
