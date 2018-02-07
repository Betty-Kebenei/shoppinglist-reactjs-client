import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import RenderField from '../common/RenderField';
import validate from '../common/Validation';

const RegistrationForm = (props) => {
    const { handleSubmit, onSubmit } = props;
    return(
        <div>
            <form className="RegistrationForm" onSubmit={handleSubmit(onSubmit)}>
                <h2>Sign Up</h2><br />

                <Field
                    label = "Username"
                    type = "text"
                    placeholder = "username"
                    name = "username"
                    component = {RenderField}
                />
                <Field
                    label = "Email"
                    type = "text"
                    placeholder = "email"
                    name = "email"
                    component = {RenderField}
                />
                <Field
                    label = "Password"
                    type = "password"
                    placeholder = "password"
                    name = "password"
                    component = {RenderField}
                />
                <Field
                    label = "Confirm Password"
                    type = "password"
                    placeholder = "confirm your password"
                    name = "repeat_password"
                    component = {RenderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-primary" to="/auth/login">
                Cancel
                </Link> 
            </form>
        </div> 
    );
}
export default reduxForm({
    validate,
    form: 'RegistrationForm'
})(RegistrationForm);