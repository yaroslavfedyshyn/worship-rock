import {Field} from "redux-form/immutable";
import Index from "../../../../components/TextInput";
import React from "react";

const SignUp = ({handleFormSubmit, goToLogin, trans}) => {

    return (
        <section className="sighUp">
            <form onSubmit={handleFormSubmit}>
                <Field name='firstName' component={Index} label={trans('form.firstName.field')} type='text'/>
                <Field name='lastName' component={Index} label={trans('form.lastName.field')} type='text'/>
                <Field name='email' component={Index} label={trans('form.email.field')} type='text'/>
                <Field name='password' component={Index} label={trans('form.password.field')} type='password'/>
                <Field name='confirmPassword' component={Index} label={trans('form.confirm.password.field')} type='password'/>
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