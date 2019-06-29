import React, { Component, Fragment } from 'react';
import { withFormik } from 'formik';
import * as rules from './rules';

class Recover extends Component {
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
      handlePassword,
      values,
      errors
    } = this.props;
    const { message } = this.state;

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
          { message && (errors.user === undefined) && <div className="pt-2 mt-2">
              <div className="text-success text-center" role="alert">
                Mensagem enviada com sucesso.
              </div>
            </div>
          }
          <form
            onSubmit={handleSubmit}>
            <Fragment>
              <div  className="login text-center">
                <h1>
                  Recuperar
                  <br />
                  Senha
                </h1>
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
                  <input
                    type="submit"
                    name="enviar"
                    id="recover"
                    value="Enviar"
                    onClick={() => this.handleSend()} />
                </div>
                <div>
                  <ul>
                    <li><a href="#" onClick={() => handlePassword()}>Volta para login</a></li>
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
  handleSubmit: () => {},
  validationSchema: rules.join({
    user: rules.email(),
    password: rules.required()
  }),
  displayName: 'RecoverForm',
})(Recover);
