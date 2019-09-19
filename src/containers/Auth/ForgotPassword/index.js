import { getFormSyncErrors, reduxForm } from 'redux-form/immutable';
import React from 'react';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { forgotPasswordAction } from '../actions';
import validate from './validate';
import ForgotPassword from './components/ForgotPassword';

const ForgotPasswordContainer = (props) => {
  const {
    onSubmit,
    handleSubmit,
    valid,
    touch,
    errors,
  } = props;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!valid) {
      return touch(...Object.keys(errors));
    }

    const submitter = handleSubmit(async (values) => await onSubmit(values));

    return submitter();
  };

  return (
    <ForgotPassword
      handleFormSubmit={handleFormSubmit}
      trans={(id) => props.intl.formatMessage({ id })}
    />
  );
};

const formName = 'forgotPassword';

const mapStateToProps = (state) => ({
  errors: getFormSyncErrors(formName)(state) || {},
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (payload) => dispatch(forgotPasswordAction(payload)),
});

export default compose(
  injectIntl,
  reduxForm({
    form: formName,
    validate,
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(ForgotPasswordContainer);
