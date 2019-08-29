import {Field} from "redux-form";
import TextInput from "../../../../components/TextInput";
import React from "react";

const ForgotPassword = ({handleFormSubmit, trans}) => {

    return (
        <section className="login">
            <form onSubmit={handleFormSubmit}>
                <Field name='email' component={TextInput} label='Email' type='text'/>
                <button>{trans('submit')}</button>
            </form>
        </section>
    );
};

export default ForgotPassword;