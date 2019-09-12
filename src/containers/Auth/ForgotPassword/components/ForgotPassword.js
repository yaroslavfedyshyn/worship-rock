import {Field} from "redux-form/immutable";
import Index from "../../../../components/TextInput";
import React from "react";

const ForgotPassword = ({handleFormSubmit, trans}) => {

    return (
        <section className="forgotPassword">
            <form onSubmit={handleFormSubmit}>
                <Field name='email' component={Index} label={trans('form.email.field')} type='text'/>
                <button>{trans('submit')}</button>
            </form>
        </section>
    );
};

export default ForgotPassword;