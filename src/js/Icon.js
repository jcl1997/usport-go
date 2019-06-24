import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Icon extends Component {
  render() {
    const {
      icon,
      size
    } = this.props;
    return(
      <div className="col-2 justify-content-end">
        <FontAwesomeIcon
          icon={icon}
          size={size} />
      </div>
    );
  }
}
