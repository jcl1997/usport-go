import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { isAuthenticated } from './Auth';
import Login from './Login';
import Home from './Home';

export default class Routes extends Component {
  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={ props => (
          isAuthenticated()
            ? <Component {...props} />
            : <Redirect
              to={{
                pathname: '/',
                state: {
                  from: props.location
                }
              }} />
        )} />
    );

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Login />} />
          <PrivateRoute
            path='/home'
            component={() => <Home />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
