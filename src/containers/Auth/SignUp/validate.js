import _ from 'lodash';

import {
    isEmailCorrect,
    isPasswordLengthCorrect,
    isNameLengthCorrect
} from '../../../utils/validators';

export default (_values, props) => {
    const values = _values.toJS ? _values.toJS(): _values;

    const trans = (id) => {
        return props.intl.formatMessage({id});
    };

    const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword
    } = values;

    let errors = {};

    const trimmedEmail = _.trim(email);
    const trimmedFirstName = _.trim(firstName);
    const trimmedLastName = _.trim(lastName);

    const trimmedPassword = _.trim(password);
    const trimmedConfirmPassword = _.trim(confirmPassword);

    if (!trimmedFirstName) {
        errors.firstName = trans('errors.cannot.be.blank');
    } else if (!isNameLengthCorrect(trimmedFirstName)) {
        errors.firstName = trans('errors.invalid.name.length')
    }

    if (!trimmedLastName) {
        errors.lastName = trans('errors.cannot.be.blank');
    } else if (!isNameLengthCorrect(trimmedLastName)) {
        errors.lastName = trans('errors.invalid.name.length')
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
        errors.confirmPassword = trans('errors.cannot.be.blank');
    } else if (!isPasswordLengthCorrect(trimmedConfirmPassword)) {
        errors.confirmPassword = trans('errors.invalid.password.length');
    } else if (trimmedPassword !== trimmedConfirmPassword) {
        errors.confirmPassword = trans('errors.passwords.don`t.match')
    }


    return errors;
};
