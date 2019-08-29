import {injectIntl} from 'react-intl';
import _ from 'lodash';

import { isEmailCorrect, isPasswordLengthCorrect } from '../../../utils/validators';

export default (values, props) => {
    const trans = (id) => {
        return props.intl.formatMessage({id});
    };

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
