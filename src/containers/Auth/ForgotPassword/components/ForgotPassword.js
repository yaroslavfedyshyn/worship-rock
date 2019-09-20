import { Field } from 'redux-form/immutable';
import React from 'react';
import Index from '../../../../components/TextInput';

const ForgotPassword = ({ handleFormSubmit, trans }) => (
  <section className="login-area section-padding-100 forgotPassword">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="login-content">
            <h3>Forgot password</h3>
            <div className="login-form">
              <form action="#" method="post" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <Field
                    name="email"
                    component={Index}
                    label={trans('form.email.field')}
                    type="text"
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

export default ForgotPassword;
