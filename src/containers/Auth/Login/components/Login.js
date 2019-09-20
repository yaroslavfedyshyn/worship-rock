import { Field } from 'redux-form/immutable';
import React from 'react';
import Index from '../../../../components/TextInput';

const Login = ({
  handleFormSubmit,
  goToForgotPassword,
  goToSignUp,
  trans,
}) => (
  <section className="login-area section-padding-100 login">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="login-content">
            <h3>Welcome Back</h3>
            <div className="login-form">
              <form action="#" method="post" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <Field
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    component={Index}
                    label={trans('form.email.field')}
                    type="text"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    <i
                      className="fa fa-lock mr-2"
                    />
We`ll never share your email with anyone
                    else.
                  </small>
                </div>
                <div className="form-group">
                  <Field
                    name="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    component={Index}
                    label={trans('form.password.field')}
                    type="password"
                  />
                </div>
                <button type="submit" className="btn oneMusic-btn mt-30">{trans('submit')}</button>
                <button
                  type="submit"
                  className="btn oneMusic-btn mt-30"
                  onClick={goToForgotPassword}
                >
                  {trans('auth.forgot.password.link')}
                </button>
                <button
                  type="submit"
                  className="btn oneMusic-btn mt-30"
                  onClick={goToSignUp}
                >
                  {trans('auth.signUp')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Login;
