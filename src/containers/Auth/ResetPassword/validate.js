import _ from 'lodash';

import {isPasswordLengthCorrect,} from '../../../utils/validators';

export default (values, props) => {
    const trans = (id) => {
        return props.intl.formatMessage({id});
    };

    const {
        password,
        confirmPassword
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
        errors.confirmPassword = trans('errors.passwords.don`t.match')
    }


    return errors;
};
