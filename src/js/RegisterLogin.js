import React, { Component, Fragment } from 'react';
import { withFormik } from 'formik';
import * as rules from './rules';

class RegisterLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: false
    };

    this.handleSend = this.handleSend.bind(this);
  }

  handleSend() {
    this.setState(state => ({
      message: true
    }));
  }

  render() {
    const {
      handleChange,
      handleSubmit,
      handleRegister,
      values,
      errors
    } = this.props;
    const { message } = this.state;
    const errorS = (errors.name === undefined)
      && (errors.user === undefined)
      && (errors.password === undefined)
      && (errors.confirmPassword === undefined);

    return(
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
          { message && errorS && <div className="pt-2 mt-2">
                <div className="text-success text-center" role="alert">
                Mensagem enviada com sucesso.
                </div>
            </div>
          }
          <form
            onSubmit={handleSubmit}>
            <Fragment>
              <div  className="login text-center">
                <h1>Formulário
                    <br />
                    de Registro
                </h1>
                <div>
                  <p>Nome</p>
                  <input
                    id="name"
                    name="name"
                    onChange={handleChange}
                    type="text"
                    value={values.name}
                    placeholder="nome" />
                    <div>
                      <p className="error-login-alert">{errors.name}</p>
                    </div>
                </div>
                <div>
                  <p>Email</p>
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
                    id="password"
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    placeholder="senha" />
                    <div>
                      <p className="error-login-alert">{errors.password}</p>
                    </div>
                </div>
                <div>
                  <p>Confirmar senha</p>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={handleChange}
                    type="password"
                    value={values.confirmPassword}
                    placeholder="Confirmar senha" />
                    <div>
                      <p className="error-login-alert">{errors.confirmPassword}</p>
                    </div>
                </div>
                <div>
                  <input
                    type="submit"
                    name="enviar"
                    id="register-login"
                    value="Enviar"
                    onClick={() => this.handleSend()} />
                </div>
                <div>
                  <ul>
                    <li><a href="#" onClick={() => handleRegister()}>Volta para login</a></li>
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
      name: 'Dev USport-GO',
      user: 'dev@usportgo.com',
      password: '123456',
      confirmPassword: '123456'
    }),
    handleSubmit: () => {},
    validationSchema: rules.join({
      name: rules.required(),
      user: rules.email(),
      password: rules.required(),
      confirmPassword: rules.required()
    }),
  displayName: 'RegisterLoginForm',
})(RegisterLogin);
