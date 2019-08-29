import React, {Component} from 'react';
import {Field, reduxForm, getFormSyncErrors} from 'redux-form';
import {compose} from "redux";
import {connect} from "react-redux";

import validate from "./validate";
import {loginAction} from "../actions";
import TextInput from "../../../components/TextInput";
import {ROUTE_TO_FORGOT_PASSWORD} from "../../../constants/routes";
import {injectIntl} from "react-intl";
import SignUp from "./components/SignUp";


const SignUpContainer = (props) => {

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

    return (
        <Login trans={trans}
               goToForgotPassword={goToForgotPassword}
               handleFormSubmit={handleFormSubmit}/>
    )
};

const formName = 'signUp';

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
)(SignUpContainer);