import React, {Component} from 'react';
import {Field, reduxForm, getFormSyncErrors} from 'redux-form';
import {compose} from "redux";
import {connect} from "react-redux";

import validate from "./validate";
import {loginAction, resetPasswordAction} from "../actions";
import {ROUTE_TO_ROOT} from "../../../constants/routes";
import {injectIntl} from "react-intl";
import ResetPassword from "./components/ResetPassword";

const ResetPasswordContainer = (props) => {

    const trans = (id) => {
        return props.intl.formatMessage({id});
    };

    const {
        handleSubmit,
        onSubmit,
        valid,
        touch,
        errors = {}
    } = props;


    const goToRoot = () => {
        const {
            history,
        } = props;

        history.push(ROUTE_TO_ROOT);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!valid) {
            return touch(...Object.keys(errors));
        }

        const submitter = handleSubmit(async (values) => {
            await onSubmit(values)
                .then(goToRoot());
        });

        submitter();
    };



    return (
        <ResetPassword trans={trans}
                       handleFormSubmit={handleFormSubmit}/>
    )
};

const formName = 'resetPassword';

const mapStateToProps = state => ({
    errors: getFormSyncErrors(formName)(state),
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