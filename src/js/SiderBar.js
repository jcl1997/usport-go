import React, { Component } from 'react';
import './../css/siderBar.css';
import Logo from './Logo';
import ProgressBar from './ProgressBar';

export default class SiderBar extends Component {
  render() {
    return (
      <menu
        className="
          col-12
          col-sm-4
          col-lg-2
          border-right
          sider-bar
          text-white" >
        <Logo />
        <hr />
        <ProgressBar />
        <hr />
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><a className="text-white" href="#">Dashbord</a></li>
            <li className="list-group-item"><a className="text-white" href="#">Times</a></li>
            <li className="list-group-item"><a className="text-white" href="#">Campeonato</a></li>
            <li className="list-group-item"><a className="text-white" href="#">Registro</a></li>
          </ul>
        </div>
      </menu>
    );
  } 
}
