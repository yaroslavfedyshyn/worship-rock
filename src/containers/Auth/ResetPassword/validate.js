import _ from 'lodash';

import { isPasswordLengthCorrect } from '../../../utils/validators';

export default (_values, props) => {
  const trans = (id) => props.intl.formatMessage({ id });

  const values = _values.toJS ? _values.toJS() : _values;

  const {
    password,
    confirmPassword,
  } = values;

  const errors = {};

  const trimmedPassword = _.trim(password);
  const trimmedConfirmPassword = _.trim(confirmPassword);

  if (!trimmedPassword) {
    errors.password = trans('errors.cannot.be.blank');
  } else if (!isPasswordLengthCorrect(trimmedPassword)) {
    errors.password = trans('errors.invalid.password.length');
  }

  if (!trimmedConfirmPassword) {
    errors.confirmPassword = trans('errors.cannot.be.blank');
  } else if (!isPasswordLengthCorrect(trimmedConfirmPassword)) {
    errors.confirmPassword = trans('errors.invalid.password.length');
  } else if (trimmedPassword !== trimmedConfirmPassword) {
    errors.confirmPassword = trans('errors.passwords.don`t.match');
  }


  return errors;
};
