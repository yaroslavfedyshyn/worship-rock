import React from 'react';
import {reduxForm, getFormSyncErrors} from 'redux-form/immutable';
import {compose} from "redux";
import {connect} from "react-redux";
import {injectIntl} from "react-intl";

import validate from "./validate";
import {loginAction} from "../actions";
import {
    ROUTE_TO_FORGOT_PASSWORD,
    ROUTE_TO_SIGN_UP
} from "../../../constants/routes";
import Login from "./components/Login";
import {loginStory} from "../story";


const LoginContainer = (props) => {

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
            await onSubmit(values.toJS());
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
        <Login trans={(id) => props.intl.formatMessage({id})}
               goToForgotPassword={goToForgotPassword}
               goToSignUp={goToSignUp}
               handleFormSubmit={handleFormSubmit}/>
    )
};

const formName = 'login';

const mapStateToProps = state => ({
    errors: getFormSyncErrors(formName)(state) || {},
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: async data => await loginStory({data, dispatch})
});

export default compose(
    injectIntl,
    reduxForm({
        form: formName,
        validate,
    }),
    connect(mapStateToProps, mapDispatchToProps)
)(LoginContainer);