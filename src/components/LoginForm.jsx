import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginUser } from '../actions/Login';
import { fetchUsers } from '../actions/Login';

class LoginForm extends React.Component {

    handleSubmit(values){
        console.log('props', this.props)
        this.props.loginUser(values, () => {
            this.props.history.push('/');
        });
        alert('You are successfully logged in!');
        
    }
        
    errorMessage(){
        if(this.props.errorMessage){
            return (
                <div className="has-danger">
                    {this.props.errorMessage}
                </div>
            );
        }
    }   

    renderField(field){
        return(
            <div className="form-group">
                <label>{field.placeholder}</label>
                <input
                className = "form-control"
                type = "text"
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
                    <h2>Sign Up</h2><br />
                    <Field
                        placeholder = "email"
                        name = "email"
                        component = {this.renderField}
                    />
                    <Field
                        placeholder = "password"
                        name = "password"
                        component = {this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Sign In</button>
                    {this.errorMessage()}
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