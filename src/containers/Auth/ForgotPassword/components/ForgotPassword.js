import {Field} from "redux-form";
import TextInput from "../../../../components/TextInput/TextInput";
import React from "react";

const ForgotPassword = ({handleFormSubmit, trans}) => {

    return (
        <section className="forgotPassword">
            <form onSubmit={handleFormSubmit}>
                <Field name='email' component={TextInput} label={trans('form.email.field')} type='text'/>
                <button>{trans('submit')}</button>
            </form>
        </section>
    );
};

export default ForgotPassword;