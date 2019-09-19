import { Field } from 'redux-form/immutable';
import React from 'react';
import TextInput from '../../../../components/TextInput/TextInput';

const Login = ({
  handleFormSubmit,
  goToForgotPassword,
  goToSignUp,
  trans,
}) => (
  <section className="login">
    <form onSubmit={handleFormSubmit}>
      <Field name="email" component={TextInput} label={trans('form.email.field')} type="text" />
      <Field name="password" component={TextInput} label={trans('form.password.field')} type="password" />
      <button type="button">{trans('submit')}</button>
      <button
        type="button"
        className="forgotPasswordLink"
        onClick={goToForgotPassword}
      >
        {trans('auth.forgot.password.link')}
      </button>

      <button
        type="button"
        className="fgoToSignUp"
        onClick={goToSignUp}
      >
        {trans('auth.signUp')}
      </button>
    </form>
  </section>
);

export default Login;
