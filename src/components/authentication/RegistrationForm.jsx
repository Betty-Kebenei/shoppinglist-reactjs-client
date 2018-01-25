import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import toastr from 'toastr';

import { createUser } from '../../actions/Registration';

export class RegistrationForm extends React.Component {

    handleSubmit(values){
        this.props.createUser(values, () => {
            this.props.history.push('/auth/login');
            toastr.success('You are successfully registered!');
        });
        this.props.reset(); 
    }
     

    renderField(field){
        const {meta: {touched, error}} = field;
        const className = `form-group ${ touched && error ? 'has-danger' : ''}`;
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input
                className = "form-control"
                placeholder = {field.placeholder}
                type = {field.type}
                {...field.input}
                />
                <div className="text-help">
                    { touched ? error : '' }
                </div>
            </div>
        );
    }
      
    render(){
        const { handleSubmit } = this.props;
        return(
            <div>
                <form className="RegistrationForm" onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                    <h2>Sign Up</h2><br />

                    <Field
                        label = "Username"
                        type = "text"
                        placeholder = "username"
                        name = "username"
                        component = {this.renderField}
                    />
                    <Field
                        label = "Email"
                        type = "text"
                        placeholder = "email"
                        name = "email"
                        component = {this.renderField}
                    />
                    <Field
                        label = "Password"
                        type = "password"
                        placeholder = "password"
                        name = "password"
                        component = {this.renderField}
                    />
                    <Field
                        label = "Confirm Password"
                        type = "password"
                        placeholder = "confirm your password"
                        name = "repeat_password"
                        component = {this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link className="btn btn-primary" to="/auth/login">
                    Sign In
                    </Link> 
                </form>
            </div> 
        );
    }
}

function validate (values){
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
})(
    connect(null, {createUser})(RegistrationForm)
);