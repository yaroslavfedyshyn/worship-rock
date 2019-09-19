import { Field } from 'redux-form/immutable';
import React from 'react';
import TextInput from '../../../../components/TextInput/TextInput';

const ResetPassword = ({ handleFormSubmit, trans }) => (
  <section className="reset_password">
    <form onSubmit={handleFormSubmit}>
      <Field
        name="password"
        component={TextInput}
        label={trans('form.password.field')}
        type="password"
      />
      <Field
        name="confirmPassword"
        component={TextInput}
        label={trans('form.confirm.password.field')}
        type="password"
      />
      <button type="button">{trans('submit')}</button>
    </form>
  </section>
);

export default ResetPassword;
