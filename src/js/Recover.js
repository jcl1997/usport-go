import React, { Component, Fragment } from 'react';
import { withFormik } from 'formik';
import * as rules from './rules';

class Recover extends Component {
  render() {
    const {
      handleChange,
      handleSubmit,
      handlePassword,
      values,
      errors
    } = this.props;
    
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
                    id="enviar"
                    value="enviar"
                    onSubmit={handleSubmit} />
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
  handleSubmit: (values, { props }) => {
    let user = 'dev@usportgo.com'
  },
  validationSchema: rules.join({
    user: rules.email(),
    password: rules.required()
  }),
  displayName: 'RecoverForm',
})(Recover);
