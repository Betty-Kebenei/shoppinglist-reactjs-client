import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import toastr from 'toastr';

import { loginUser } from '../../actions/Login';

export class LoginForm extends React.Component {
    
    handleSubmit(values){
        this.props.loginUser(values, () => {
            this.props.history.push('/');
            toastr.success("You are successfully logged in!")
        });
        this.props.reset(); 
    }  

    renderField(field){
        const {meta: {touched, error}} = field;
        const className = `form-group ${ touched && error ? 'has-danger' : ''}`;
        return(
            <div className={className}>
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
            <div className="Login">
                <form className="LoginForm" onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                    <h2>Sign In</h2><br />
                    <Field
                        placeholder = "email"
                        name = "email"
                        type = "text"
                        component = {this.renderField}
                    />
                    <Field
                        placeholder = "password"
                        name = "password"
                        type="password"
                        component = {this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button> 
                    <Link className="btn btn-primary" to="/auth/register">
                    Sign up
                    </Link> 
                </form>
            </div>  
        )
    }
}
function validate (values){
    //Validate the form inputs.
    const errors = {};

    if(!values.email){
        errors.email = "Please provide an email!";
    }
    if(!values.password){
        errors.password = "Please provide a password!";
    }
    return errors;

}

export default reduxForm({
    validate,
    form: 'LoginForm'
})(
    connect(null, {loginUser} )(LoginForm)
);