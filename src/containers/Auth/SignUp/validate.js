import _ from 'lodash';

import {
    isEmailCorrect,
    isPasswordLengthCorrect,
    isNameLengthCorrect
} from '../../../utils/validators';

export default (values, props) => {
    const trans = (id) => {
        return props.intl.formatMessage({id});
    };

    const {
        name,
        email,
        password,
        confirm_password
    } = values;

    const errors = {};

    const trimmedEmail = _.trim(email);
    const trimmedName = _.trim(name);

    const trimmedPassword = _.trim(password);
    const trimmedConfirmPassword = _.trim(confirm_password);

    //debugger;

    if (!trimmedName) {
        errors.name = trans('errors.cannot.be.blank');
    } else if (!isNameLengthCorrect(trimmedName)) {
        errors.name = trans('errors.invalid.name.length')
    }

    if (!trimmedEmail) {
        errors.email = trans('errors.cannot.be.blank');
    } else if (!isEmailCorrect(trimmedEmail)) {
        errors.email = trans('errors.invalid.email');
    }

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
