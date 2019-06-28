import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon';
import Dashboard from './Dashboard';
import Login from './Login';
import Team from './Team';

export default class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: false,
      isAuthenticated: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleAuthenticated = this.handleAuthenticated.bind(this);
  }

  handleAuthenticated() {
    this.setState(state => ({
      isAuthenticated: !state.isAuthenticated
    }));
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    const {
      isAuthenticated,
      isToggleOn
    } = this.state;

    if (!isAuthenticated) {
      return <Login
        {...this.props}
        handleAuthenticated={this.handleAuthenticated} />;
    }

    const button = (
      <button
        className="text-white border-0 btn"
        onClick={this.handleClick} >
        <Icon
          icon={faBars}
          size="2x" />
      </button>
    );


    return (
      <BrowserRouter>
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
            <Switch>
              <Route
                exact
                path="/usport-go/login"
                render={() => <Login />} />
              <Route
                exact
                path="/usport-go/"
                render={() => <Dashboard {...this.props} />} />
              <Route
                exact
                path="/usport-go/Team"
                render={() => <Team />} />
              <Route
                exact
                path="/usport-go/Championship"
                render={() => <div>Campeonato</div>} />
              <Route
                exact
                path="/usport-go/record"
                render={() => <div>Registro</div>} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
