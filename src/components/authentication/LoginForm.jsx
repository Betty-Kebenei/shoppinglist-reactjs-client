import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loginUser } from '../../actions/Login';

class LoginForm extends React.Component {
    
    handleSubmit(values){
        this.props.loginUser(values, () => {
            this.props.history.push('/');
            alert('You are successfully logged in!');
        });
        this.props.reset(); 
    }
        
    errorMessage(){
        if(this.props.errorMessage){
            return (
                <div className="error">
                    {this.props.errorMessage}
                </div>
            );
        }
    }   

    renderField(field){
        return(
            <div className="form-group">
                <input
                className = "form-control"
                placeholder = {field.placeholder}
                type = {field.type}
                {...field.input}
                />
            </div>
        );
    }
    render(){
        const { handleSubmit } = this.props;
        return(
            <div className="Login">
                <form className="LoginForm" onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                    {this.errorMessage()}
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

function mapStateToProps(state){
    return{
        errorMessage: state.user.error
    };
}
export default reduxForm({
    form: 'LoginForm'
})(
    connect(mapStateToProps, {loginUser} )(LoginForm)
);