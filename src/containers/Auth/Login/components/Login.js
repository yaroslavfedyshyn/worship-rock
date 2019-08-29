import {Field} from "redux-form";
import TextInput from "../../../../components/TextInput";
import React from "react";

const Login = ({handleFormSubmit, goToForgotPassword, trans}) => {

    return (
        <section className="login">
            <form onSubmit={handleFormSubmit}>
                <Field name='email' component={TextInput} label='Email' type='text'/>
                <Field name='password' component={TextInput} label='Password' type='password'/>
                <button>{trans('submit')}</button>
                <button type='button' className="forgotPasswordLink"
                        onClick={goToForgotPassword}>{trans('auth.forgot.password.link')}</button>
            </form>
        </section>
    )
};

export default Login;