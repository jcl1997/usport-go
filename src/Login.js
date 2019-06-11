import React, { Component, Fragment } from 'react';
import { withFormik } from 'formik';
import './css/login.css';
import UserIcon from './img/login/user6.png'

class Login extends Component {
  render() {
    const {
      handleChange,
      handleSubmit,
      values,
      errors
    } = this.props;

    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <Fragment>
            <div className="usuario">
                <img src={UserIcon} alt="User" />
            </div>
            <div  className="login">
                <h1>Login</h1>
                <div>
                    <p>Usuário</p>
                    <input
                      id="user"
                      name="user"
                      onChange={handleChange}
                      type="email"
                      value={values.user}
                      errors={errors.user}
                      placeholder="Insira seu nome de usuário" />
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
                </div>
                <div>
                    <input
                      type="submit"
                      name="login"
                      id="login"
                      value="Login" />
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
    );
  }
}

export default withFormik({
  isValid: false,
  mapPropsToValues: () => ({
    user: 'dev@usportgo.com',
    password: '123456'
  }),
  handleSubmit: () => {},
  validate: () => {},
  displayName: 'LoginForm',
})(Login);
