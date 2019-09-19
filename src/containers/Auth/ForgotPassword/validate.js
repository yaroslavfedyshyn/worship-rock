import _ from 'lodash';
import { isEmailCorrect } from '../../../utils/validators';

export default (_values, props) => {
  const trans = (id) => props.intl.formatMessage({ id });

  const values = _values.toJS ? _values.toJS() : _values;

  const {
    email,
  } = values;
  const errors = {};

  const trimmedEmail = _.trim(email);
  if (!trimmedEmail) {
    errors.email = trans('errors.cannot.be.blank');
  } else if (!isEmailCorrect(trimmedEmail)) {
    errors.email = trans('errors.invalid.email');
  }

  return errors;
};
