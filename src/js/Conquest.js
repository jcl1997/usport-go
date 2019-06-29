import React, { Component } from 'react';
import Icon from './Icon';

export default class Conquest extends Component {
  render() {
    const {
        icon,
        name,
        success
    } = this.props.item;
    const className = [
      'card-body',
      'row'
    ];

    className.push(success, 'border-0');

    return (
      <div className="pt-2">
        <div
          className="bloco">
          <div className={className.join(' ')}>
            <div className="
              col
              d-flex
              justify-content-center
              align-items-center">
              <Icon icon={icon} size="2x" />
            </div>
            <div className="col text-center">
              <h3>{name}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
