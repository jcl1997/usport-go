import yup from 'yup';

const messageRequired = 'Este campo é obrigatório';
const messageEmail = 'E-mail inválido';

export const join = fields => console.log(yup);
  // .object()
  // .shape(fields);

export const required = () => yup
  .string()
  .required(messageRequired);

export const email = () => console.log(yup);
  // .string()
  // .required(messageRequired)
  // .email(messageEmail);
