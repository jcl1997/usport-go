import React, { Component } from 'react';
import './../css/sideBar.css';
import Logo from './Logo';
import ProgressBar from './ProgressBar';
import {
  faChartLine,
  faUsers,
  faTrophy,
  faFolder
} from '@fortawesome/free-solid-svg-icons'
import LinkIcon from './LinkIcon';

export default class SiderBar extends Component {
  render() {
    const {
      visible
    } = this.props;

    if (!visible) {
      return <div />
    }

    return (
      <div
        className="
          side-roxo
          col-10
          col-sm-4
          col-md-5
          col-lg-4
          col-xl-3
          text-white">
        <Logo />
        <hr />
        <ProgressBar />
        <hr />
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <LinkIcon
                title="Dashboard"
                icon={faChartLine}
                to="/"
                size="2x" />
            </li>
            <li className="list-group-item">
              <LinkIcon
                title="Time"
                icon={faUsers}
                to="/Team"
                size="2x" />
            </li>
            <li className="list-group-item">
              <LinkIcon
                title="Campeonato"
                icon={faTrophy}
                to="/Championship"
                size="2x" />
            </li>
            <li className="list-group-item">
            <LinkIcon
                title="Registro"
                icon={faFolder}
                to="record"
                size="2x" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
