import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../actions/Registration';

class RegistrationForm extends React.Component {

    handleSubmit(values){
        this.props.createUser(values); 
        alert('You are successfully registered!');
    }

    renderField(field){
        const {meta: {touched, error}} = field;
        const className = `form-group ${ touched && error ? 'has-danger' : ''}`;
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input
                className = "form-control"
                type = "text"
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
                        name = "username"
                        component = {this.renderField}
                    />
                    <Field
                        label = "Email"
                        name = "email"
                        component = {this.renderField}
                    />
                    <Field
                        label = "Password"
                        name = "password"
                        component = {this.renderField}
                    />
                    <Field
                        label = "Confirm Password"
                        name = "repeat_password"
                        component = {this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
            </div> 
        );
    }
}

function validate (values){
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
    if(!values.confirm_password){
        errors.confirm_password = "Please confirm your password!";
    }

    return errors;

}

export default reduxForm({
    validate,
    form: 'RegistrationForm'
})(
    connect(null, {createUser})(RegistrationForm)
);