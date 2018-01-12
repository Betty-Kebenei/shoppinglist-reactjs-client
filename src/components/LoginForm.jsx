import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginUser } from '../actions/Login';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: 'email',
            password: 'password'
        }
    }

    handleSubmit(values){
        this.props.loginUser(values, () => {
            this.props.history.push('/');
        });
        alert('You are successfully logged in!');
        
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
            <div className="Login col-sm-12">
                <div className="Login col-sm-6">
                    <h1>Shopping List Tracker</h1>  
                    <p>We keep tracker on what you desire to spend your money on.</p>
                </div>
                <form className="LoginForm" onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                    <div className="form-item col-sm-2">
                    <Field
                        placeholder = "email"
                        name = "email"
                        component = {this.renderField}
                    />
                    </div>
                    <div className="form-item col-sm-2">
                    <Field
                        placeholder = "password"
                        name = "password"
                        component = {this.renderField}
                    />
                    </div>
                    <div className="form-item col-sm-2">
                    <button type="submit" className="btn btn-primary">Sign In</button>
                    </div>
                </form>
            </div>  
        )
    }
}
export default reduxForm({
    form: 'LoginForm'
})(
    connect(null, {loginUser})(LoginForm)
);