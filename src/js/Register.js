import React, { Component } from 'react';
import { withFormik } from 'formik';
import * as rules from './rules';
import './../css/suport.css';

class Register extends Component {
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
      values,
      errors
    } = this.props;

    const { message } = this.state;

    return(
      <div className="container-fluid pt-2 mt-2">
        { message && <div className="pt-2 mt-2">
            <div className="alert alert-success" role="alert">
              Mensagem enviada com sucesso.
            </div>
          </div>
        }
        <form onSubmit={handleSubmit}>
          <div id="page-wrapper">
            <h1>Formulário para Registro</h1>
            <div>
              <label>Nome</label>
              <input
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
              <label>Email</label>
              <input
                name="user"
                onChange={handleChange}
                type="text"
                value={values.user}
                placeholder="nome" />
                <div>
                  <p className="error-login-alert">{errors.user}</p>
                </div>
            </div>
            <div>
              <label>Senha</label>
              <input
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
              <label>Confirmar senha</label>
              <input
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
                id="enviar"
                value="Enviar"
                onClick={() => this.handleSend()} />
            </div>
          </div>
        </form>
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
  displayName: 'RegisterForm',
})(Register);
