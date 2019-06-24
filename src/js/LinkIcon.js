import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class LinkIcon extends Component {
  render() {
    const {
      icon,
      title,
      to,
      size
    } = this.props;
    return(
      <a
        className="text-white"
        href={to}>
        <div className="container-fluid row">
          <div className="col-10 justify-content-start">{title}</div>
          <div className="col-2 justify-content-end">
            <FontAwesomeIcon
              icon={icon}
              size={size} />
          </div>
        </div>
      </a>
    );
  }
}
