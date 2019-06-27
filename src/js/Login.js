import React, { Component, Fragment } from 'react';
import { withFormik } from 'formik';
import * as rules from './rules';
import './../css/login.css';
import UserIcon from './../img/login/user6.png'

class Login extends Component {
  render() {
    const {
      handleChange,
      handleSubmit,
      values,
      errors
    } = this.props;

    return (
      <div className="
        sport
        d-flex
        justify-content-center
        align-items-center">
        <div className="
          card form
          col-10
          col-md-8
          col-lg-5
          col-xl-3
          text-white">
          <form
            onSubmit={handleSubmit}>
              <Fragment>
                <div className="usuario">
                    <img
                      className="d-block mx-auto"
                      src={UserIcon}
                      alt="User" />
                </div>
                <div  className="login text-center">
                  <h1>Login</h1>
                  <div>
                    <p>Usuário</p>
                    <input
                      id="user"
                      name="user"
                      onChange={handleChange}
                      type="text"
                      value={values.user}
                      placeholder="Insira seu nome de usuário" />
                      <div>
                        <p className="error-login-alert">{errors.user}</p>
                      </div>
                  </div>
                  <div>
                    <p>Senha</p>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={handleChange}
                      value={values.password}
                      errors={errors.password}
                      placeholder="Insira sua senha" />
                      <div>
                        <p className="error-login-alert">{errors.password}</p>
                      </div>
                  </div>
                  <div>
                    <input
                      type="submit"
                      name="login"
                      id="login"
                      value="Login"
                      onSubmit={handleSubmit} />
                  </div>
                  <div>
                    <ul>
                      <li><a href="#">Ainda não possui uma conta?</a></li>
                      <li><a href="#">Esqueceu sua senha?</a></li>
                    </ul>
                  </div>
                </div>
              </Fragment>
            </form>
          </div>
        </div>
    );
  }
}

export default withFormik({
  validateOnChange: false,
  mapPropsToValues: () => ({
    user: 'dev@usportgo.com',
    password: '123456'
  }),
  handleSubmit: (values, { props }) => {
    let user = 'dev@usportgo.com';
    let password = '123456';

    const email = values.user.toString() === user.toString();
    const authentication = values.password.toString() === password.toString();
    if (email && authentication) {
      props.handleAuthenticated()
    }
  },
  validationSchema: rules.join({
    user: rules.email(),
    password: rules.required()
  }),
  displayName: 'LoginForm',
})(Login);
