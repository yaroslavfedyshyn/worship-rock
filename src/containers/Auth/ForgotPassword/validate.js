import _ from 'lodash';
import { isEmailCorrect } from '../../../utils/validators';

export default (values, props) => {

    const trans = (id) => {
        return props.intl.formatMessage({id});
    };

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
