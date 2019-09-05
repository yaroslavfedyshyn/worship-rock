import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {injectIntl} from "react-intl";
import {reduxForm, getFormSyncErrors} from 'redux-form/immutable';

import validate from "./validate";
import { resetPasswordAction} from "../actions";
import ResetPassword from "./components/ResetPassword";

const ResetPasswordContainer = (props) => {

    const {
        handleSubmit,
        onSubmit,
        valid,
        touch,
        errors
    } = props;


    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!valid) {
            return touch(...Object.keys(errors));
        }

        const submitter = handleSubmit(async (values) => {
            await onSubmit(values)
        });

        submitter();
    };


    return (
        <ResetPassword trans={(id) => props.intl.formatMessage({id})}
                       handleFormSubmit={handleFormSubmit}/>
    )
};

const formName = 'resetPassword';

const mapStateToProps = state => ({
    errors: getFormSyncErrors(formName)(state) || {},
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: payload => dispatch(resetPasswordAction(payload)),
});

export default compose(
    injectIntl,
    reduxForm({
        form: formName,
        validate,
    }),
    connect(mapStateToProps, mapDispatchToProps)
)(ResetPasswordContainer);