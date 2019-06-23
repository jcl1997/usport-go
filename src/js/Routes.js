import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { isAuthenticated } from './Auth';
import Login from './Login';

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
                pathname: '/login',
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
            path="/login"
            component={() => <Login />} />
          <PrivateRoute path='/home' component={() => <h1>AQUI</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}
