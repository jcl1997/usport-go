import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

export default class LinkIcon extends Component {
  render() {
    const {
      icon,
      title,
      to,
      size
    } = this.props;
    return(
      <Link
        className="text-white"
        to={to}>
        <div className="container-fluid row">
          <div className="col-10 justify-content-start">
            {title}
          </div>
          <div className="col-2">
            <Icon
              icon={icon}
              size={size} />
          </div>
        </div>
      </Link>
    );
  }
}
