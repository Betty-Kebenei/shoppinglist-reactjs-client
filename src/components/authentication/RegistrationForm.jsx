import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import RenderField from '../common/RenderField';

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
                Sign In
                </Link> 
            </form>
        </div> 
    );
}

const validate = (values) => {
    //Validate the form inputs.
    const errors = {};
    if(!values.username || values.username.length < 3){
        errors.username = "Please provide a username with a min length of 3!";
    }
    if(!values.email){
        errors.email = "Please provide an email!";
    }
    if(!values.password || values.password.length < 6 ){
        errors.password = "Please provide a password with a length of atleast 6!";
    }
    if(!values.repeat_password){
        errors.repeat_password = "Please confirm your password!";
    }
    if (values.password !== values.repeat_password){
        errors.repeat_password = "Confirm Password must much password!!";
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'RegistrationForm'
})(RegistrationForm);