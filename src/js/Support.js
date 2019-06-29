import React, { Component } from 'react';
import { withFormik } from 'formik';
import * as rules from './rules';
import './../css/suport.css';

class Support extends Component {
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

    const messageSuccess = this.state.message;

    const errorS = (errors.name === undefined)
      && (errors.user === undefined)
      && (errors.message === undefined);

    return(
      <div className="container-fluid pt-2 mt-2">
        { messageSuccess && errorS && <div className="pt-2 mt-2">
            <div className="alert alert-success" role="alert">
              Mensagem enviada com sucesso.
            </div>
          </div>
        }
        <form onSubmit={handleSubmit}>
          <div id="page-wrapper">
            <h1>Formulário para Suporte</h1>
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
              <label>Mensagem</label>
              <textarea
                name="message"
                onChange={handleChange}
                value={values.message}
                placeholder="Mensagem Aqui!!!" />
                <div>
                  <p className="error-login-alert">{errors.message}</p>
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
    message: 'Oi, tudo bem? Só passando para avisar que no dia [data agendada]. Nós teremos nossa reunião sobre [assunto da reunião]. Se houver algo que eu possa adiantar, não hesite em me dizer. Abraços!'
  }),
  handleSubmit: () => {},
  validationSchema: rules.join({
    name: rules.required(),
    user: rules.email(),
    message: rules.required()
  }),
  displayName: 'SupportForm',
})(Support);
