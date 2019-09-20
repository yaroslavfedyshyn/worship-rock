import { Field } from 'redux-form/immutable';
import React from 'react';
import Index from '../../../../components/TextInput';

const SignUp = ({ handleFormSubmit, goToLogin, trans }) => (
  <section className="login-area section-padding-100 sighUp">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="login-content">
            <h3>Sign Up</h3>
            <div className="login-form">
              <form action="#" method="post" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <Field
                    name="firstName"
                    component={Index}
                    label={trans('form.firstName.field')}
                    type="text"
                  />
                  <Field
                    name="lastName"
                    component={Index}
                    label={trans('form.lastName.field')}
                    type="text"
                  />
                  <Field
                    name="email"
                    component={Index}
                    label={trans('form.email.field')}
                    type="text"
                  />
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
                <button
                  type="button"
                  className="btn oneMusic-btn mt-30"
                  onClick={goToLogin}
                >
                  {trans('auth.login')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SignUp;
