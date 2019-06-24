import React, { Component } from 'react';
import SiderBar from './SiderBar';

export default class home extends Component {
  render() {
    return (
      <div className="row">
        <SiderBar />
        <div>HEADER</div>
      </div>
    );
  }
}
