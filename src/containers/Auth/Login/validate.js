import _ from 'lodash';

import { isEmailCorrect, isPasswordLengthCorrect } from '../../../utils/validators';

export default (_values, props) => {
  const trans = (id) => props.intl.formatMessage({ id });

  const values = _values.toJS ? _values.toJS() : _values;

  const {
    email,
    password,
  } = values;
  const errors = {};

  const trimmedEmail = _.trim(email);
  if (!trimmedEmail) {
    errors.email = trans('errors.cannot.be.blank');
  } else if (!isEmailCorrect(trimmedEmail)) {
    errors.email = trans('errors.invalid.email');
  }

  const trimmedPassword = _.trim(password);
  if (!trimmedPassword) {
    errors.password = trans('errors.cannot.be.blank');
  } else if (!isPasswordLengthCorrect(trimmedPassword)) {
    errors.password = trans('errors.invalid.password.length');
  }

  return errors;
};
