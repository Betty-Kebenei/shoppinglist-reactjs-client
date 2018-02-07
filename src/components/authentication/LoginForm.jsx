import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import RenderField from '../common/RenderField';
import validate from '../common/Validation';

const LoginForm = (props) => {
    const {handleSubmit, onSubmit} = props;

    return(
        <div className="Login">
            <form className="LoginForm" onSubmit={handleSubmit(onSubmit)}>
                <h2>Sign In</h2><br />
                <Field
                    label = "Email"
                    placeholder = "email"
                    name = "email"
                    type = "text"
                    component = {RenderField}
                />
                <Field
                    label = "Password"
                    placeholder = "password"
                    name = "password"
                    type="password"
                    component = {RenderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button> 
                <Link className="btn btn-primary" to="/auth/register">
                Sign up
                </Link> 
            </form>
        </div>  
    )
}
export default reduxForm({
    validate,
    form: 'LoginForm'
})(LoginForm);