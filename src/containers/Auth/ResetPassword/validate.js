import _ from 'lodash';

import {isPasswordLengthCorrect,} from '../../../utils/validators';

export default (values, props) => {
    const trans = (id) => {
        return props.intl.formatMessage({id});
    };

    const {
        password,
        confirm_password
    } = values;

    const errors = {};

    const trimmedPassword = _.trim(password);
    const trimmedConfirmPassword = _.trim(confirm_password);

    if (!trimmedPassword) {
        errors.password = trans('errors.cannot.be.blank');
    } else if (!isPasswordLengthCorrect(trimmedPassword)) {
        errors.password = trans('errors.invalid.password.length');
    }

    if (!trimmedConfirmPassword) {
        errors.confirm_password = trans('errors.cannot.be.blank');
    } else if (!isPasswordLengthCorrect(trimmedConfirmPassword)) {
        errors.confirm_password = trans('errors.invalid.password.length');
    } else if (trimmedPassword !== trimmedConfirmPassword) {
        errors.confirm_password = trans('errors.passwords.don`t.match')
    }


    return errors;
};
