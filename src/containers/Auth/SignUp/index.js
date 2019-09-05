import React from 'react';
import {reduxForm, getFormSyncErrors} from 'redux-form/immutable';
import {compose} from "redux";
import {connect} from "react-redux";
import {injectIntl} from "react-intl";

import validate from "./validate";
import SignUp from "./components/SignUp";
import {signUpStory} from "../story";
import {ROUTE_TO_LOGIN} from "../../../constants/routes";


const SignUpContainer = (props) => {

    const {
        handleSubmit,
        onSubmit,
        valid,
        touch,
        errors,
    } = props;

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!valid) {
            return touch(...Object.keys(errors));
        }

        const submitter = handleSubmit(async (_values) => {
            const {
                confirmPassword,
                ...values
            } = _values.toJS();

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
        <SignUp trans={(id) => props.intl.formatMessage({id})}
               goToLogin={goToLogin}
               handleFormSubmit={handleFormSubmit}/>
    )
};

const formName = 'signUp';

const mapStateToProps = state => ({
    errors: getFormSyncErrors(formName)(state) || {},
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: async data => await signUpStory({data, dispatch})
});

export default compose(
    injectIntl,
    reduxForm({
        form: formName,
        validate,
    }),
    connect(mapStateToProps, mapDispatchToProps)
)(SignUpContainer);