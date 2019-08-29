import {Field} from "redux-form";
import TextInput from "../../../../components/TextInput/TextInput";
import React from "react";

const SignUp = ({handleFormSubmit, goToLogin, trans}) => {

    return (
        <section className="sighUp">
            <form onSubmit={handleFormSubmit}>
                <Field name='name' component={TextInput} label={trans('form.name.field')} type='text'/>
                <Field name='email' component={TextInput}
                       type='text'/>
                <Field name='password' component={TextInput} label={trans('form.password.field')} type='password'/>
                <Field name='confirm_password' component={TextInput} label={trans('form.confirm_password.field')} type='password'/>
                <button>{trans('submit')}</button>
                <button type='button' className="goToLogin"
                        onClick={goToLogin}>{trans('auth.login')}</button>
            </form>
        </section>
    )
};

export default SignUp;