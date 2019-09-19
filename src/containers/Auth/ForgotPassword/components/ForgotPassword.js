import { Field } from 'redux-form/immutable';
import React from 'react';
import TextInput from '../../../../components/TextInput/TextInput';

const ForgotPassword = ({ handleFormSubmit, trans }) => (
  <section className="forgotPassword">
    <form onSubmit={handleFormSubmit}>
      <Field name="email" component={TextInput} label={trans('form.email.field')} type="text" />
      <button type="button">{trans('submit')}</button>
    </form>
  </section>
);

export default ForgotPassword;
