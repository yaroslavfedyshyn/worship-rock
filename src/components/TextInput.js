import React from "react";

const TextInput = ({input, label, type, meta: {touched, error, warning}}) => (
    <div>
        <label className="control-label">{label}
            <div>
                <input {...input} placeholder={label} type={type} className="form-control"/>
                {touched && ((error && <span className="text-danger">{error}</span>) || (warning &&
                    <span>{warning}</span>))}
            </div>
        </label>
    </div>
);

export default TextInput