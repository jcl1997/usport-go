import React, { Component } from 'react';
import SideBar from './SideBar';
import Header from './Header';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon';

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    const { isToggleOn } = this.state;

    const button = (
      <button
        className="text-white"
        onClick={this.handleClick} >
        <Icon
          icon={faBars}
          size="2x" />
      </button>
    );


    return (
      <div className="row">
        <SideBar
          ref={left => this.left = left}
          alignment="left"
          visible={isToggleOn}
          handleClick={this.handleClick} />
        <div className="col">
            <Header
              button={button}
              visible={isToggleOn} />
            <div className="col">BODY</div>
          </div>
      </div>
    );
  }
}
