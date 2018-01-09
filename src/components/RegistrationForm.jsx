import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';


class RegistrationForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirm_password: '',
            signupformErrors: {username: '', email: '', password:''},
            usernameValid: false,
            emailValid: false,
            passwordValid: false,
            formValid: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState(
            {[event.target.name]: event.target.value.toLowerCase()}
        );
    }
    handleSubmit(event){
        console.log(event);
        // alert('You are successfully registered to Shopping List Tracker!');
        // this.setState({
        //     username: '',
        //     email: '',
        //     password: '',
        //     confirm_password: ''
        // });
        
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
                        name = "confirm_password"
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
})(RegistrationForm);