import {Field} from "redux-form";
import TextInput from "../../../../components/TextInput/TextInput";
import React from "react";

const ResetPassword = ({handleFormSubmit, trans}) => {

    return (
        <section className="reset_password">
            <form onSubmit={handleFormSubmit}>
                <Field name='password' component={TextInput} label={trans('form.password.field')} type='password'/>
                <Field name='confirm_password' component={TextInput} label={trans('form.confirm.password.field')} type='password'/>
                <button>{trans('submit')}</button>
            </form>
        </section>
    )
};

export default ResetPassword;