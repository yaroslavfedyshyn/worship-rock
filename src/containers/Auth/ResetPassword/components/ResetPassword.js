import { Field } from 'redux-form/immutable';
import React from 'react';
import Index from '../../../../components/TextInput';

const ResetPassword = ({ handleFormSubmit, trans }) => (
  <section className="login-area section-padding-100 resetPassword">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="login-content">
            <h3>Reset password</h3>
            <div className="login-form">
              <form action="#" method="post" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <Field
                    name="password"
                    component={Index}
                    label={trans('form.password.field')}
                    type="password"
                  />
                  <Field
                    name="confirmPassword"
                    component={Index}
                    label={trans('form.confirm.password.field')}
                    type="password"
                  />
                </div>
                <button type="submit" className="btn oneMusic-btn mt-30">{trans('submit')}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ResetPassword;
