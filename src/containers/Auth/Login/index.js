import React, {Component} from 'react';
import {Field, reduxForm, getFormSyncErrors} from 'redux-form';
import {compose} from "redux";
import {connect} from "react-redux";

import validate from "./validate";
import {loginAction} from "../actions";
import {
    ROUTE_TO_FORGOT_PASSWORD,
    ROUTE_TO_SIGN_UP
} from "../../../constants/routes";
import {injectIntl} from "react-intl";
import Login from "./components/Login";


const LoginContainer = (props) => {

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

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!valid) {
            return touch(...Object.keys(errors));
        }

        const submitter = handleSubmit(async (values) => {
            await onSubmit(values);
        });

        submitter();
    };

    const goToForgotPassword = () => {
        const {
            history,
        } = props;

        history.push(ROUTE_TO_FORGOT_PASSWORD);
    };

    const goToSignUp = () => {
        const {
            history,
        } = props;

        history.push(ROUTE_TO_SIGN_UP);
    };

    return (
        <Login trans={trans}
               goToForgotPassword={goToForgotPassword}
               goToSignUp={goToSignUp}
               handleFormSubmit={handleFormSubmit}/>
    )
};

const formName = 'login';

const mapStateToProps = state => ({
    errors: getFormSyncErrors(formName)(state),
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: payload => dispatch(loginAction(payload)),
});

export default compose(
    injectIntl,
    reduxForm({
        form: formName,
        validate,
    }),
    connect(mapStateToProps, mapDispatchToProps)
)(LoginContainer);