import React, {Component} from 'react';
import {Field, reduxForm, getFormSyncErrors} from 'redux-form';
import {compose} from "redux";
import {connect} from "react-redux";

import validate from "./validate";
import {signUpAction} from "../actions";
import {injectIntl} from "react-intl";
import SignUp from "./components/SignUp";
import {ROUTE_TO_LOGIN} from "../../../constants/routes";


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

    const goToLogin = () => {
        const {
            history,
        } = props;

        history.push(ROUTE_TO_LOGIN);
    };

    return (
        <SignUp trans={trans}
               goToLogin={goToLogin}
               handleFormSubmit={handleFormSubmit}/>
    )
};

const formName = 'signUp';

const mapStateToProps = state => ({
    errors: getFormSyncErrors(formName)(state),
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: payload => dispatch(signUpAction(payload)),
});

export default compose(
    injectIntl,
    reduxForm({
        form: formName,
        validate,
    }),
    connect(mapStateToProps, mapDispatchToProps)
)(SignUpContainer);