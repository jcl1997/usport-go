import React, { Component } from 'react';
import {
  Route,
  // Redirect,
  Switch
} from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

export default class Routes extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isAuthenticated: false
    };
    this.handleAuthenticated = this.handleAuthenticated.bind(this);
  }

  handleAuthenticated() {
    this.setState(state => ({
      isAuthenticated: !state.isAuthenticated
    }));
  }

  render() {
    // const { state /} = this;    

    return (
      
    );
  }
}
