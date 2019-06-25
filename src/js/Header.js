import React, { Component } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon';

export default class Header extends Component {
  render() {
    const {
      button,
      visible
    } = this.props;

    return(
      <div>
        {!visible && button}
      </div>
    );
  }
} 
