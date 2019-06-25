import React, { Component } from 'react';
import './../css/sideBar.css';
import Logo from './Logo';
import ProgressBar from './ProgressBar';
import {
  faChartLine,
  faUsers,
  faTrophy,
  faFolder,
  faBars
} from '@fortawesome/free-solid-svg-icons'
import LinkIcon from './LinkIcon';
import Icon from './Icon';

export default class SiderBar extends Component {
  render() {
    const {
      button,
      visible
    } = this.props;
    
    if (!visible) {
      return <div />
    }
    
    return (
      <menu
        className="
          col-10
          col-sm-4
          col-md-5
          col-lg-4
          col-xl-3
          border-right
          sider-bar
          text-white">
        <div className="row">
          <div className="col-10">
            <Logo />
          </div>
          <div className="col-2">
            {button}
          </div>
        </div>
        <hr />
        <ProgressBar />
        <hr />
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <LinkIcon
                title="Dashbord"
                icon={faChartLine}
                to="#"
                size="2x" />
            </li>
            <li className="list-group-item">
              <LinkIcon
                title="Time"
                icon={faUsers}
                to="#"
                size="2x" />
            </li>
            <li className="list-group-item">
              <LinkIcon
                title="Campeonato"
                icon={faTrophy}
                to="#"
                size="2x" />
            </li>
            <li className="list-group-item">
            <LinkIcon
                title="Registro"
                icon={faFolder}
                to="#"
                size="2x" />
            </li>
          </ul>
        </div>
      </menu>
    );
  } 
}
