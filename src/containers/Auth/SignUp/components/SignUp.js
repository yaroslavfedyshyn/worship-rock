import {Field} from "redux-form/immutable";
import TextInput from "../../../../components/TextInput/TextInput";
import React from "react";

const SignUp = ({handleFormSubmit, goToLogin, trans}) => {

    return (
        <section className="sighUp">
            <form onSubmit={handleFormSubmit}>
                <Field name='firstName' component={TextInput} label={trans('form.firstName.field')} type='text'/>
                <Field name='lastName' component={TextInput} label={trans('form.lastName.field')} type='text'/>
                <Field name='email' component={TextInput} label={trans('form.email.field')} type='text'/>
                <Field name='password' component={TextInput} label={trans('form.password.field')} type='password'/>
                <Field name='confirmPassword' component={TextInput} label={trans('form.confirm.password.field')} type='password'/>
                <button>{trans('submit')}</button>
                <button
                    type='button'
                    className="goToLogin"
                    onClick={goToLogin}
                >{trans('auth.login')}</button>
            </form>
        </section>
    )
};

export default SignUp;