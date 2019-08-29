import {Field, getFormSyncErrors, reduxForm} from "redux-form";
import React from "react";

import TextInput from "../../../components/TextInput";
import {forgotPasswordAction} from "../actions";
import {compose} from "redux";
import {connect} from "react-redux";
import validate from "./validate";
import {injectIntl} from "react-intl";
import ForgotPassword from "./components/ForgotPassword";

const ForgotPasswordContainer = (props) => {

    const trans = (id) => {
        return props.intl.formatMessage({id});
    };

    const {
        onSubmit,
        handleSubmit,
        valid,
        touch,
        errors = {}
    } = props;

    const handleFormSubmit = (e) => {

        e.preventDefault();

        if (!valid) {
            return touch(...Object.keys(errors))
        }

        const submitter = handleSubmit(async values => await onSubmit(values));

        submitter();

    };

    return (
        <ForgotPassword handleFormSubmit={handleFormSubmit} trans={trans}/>
    );
};

const formName = 'forgotPassword';

const mapStateToProps = state => ({
    errors: getFormSyncErrors(formName)(state)
});

const mapDispatchToProps = dispatch => ({
    onSubmit: payload => dispatch(forgotPasswordAction(payload))
});

export default compose(
    injectIntl,
    reduxForm({
        form: formName,
        validate
    }),
    connect(mapStateToProps, mapDispatchToProps)
)(ForgotPasswordContainer)