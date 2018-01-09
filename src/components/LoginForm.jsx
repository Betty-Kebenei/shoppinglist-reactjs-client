import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({ [event.target.name]: event.target.value.toLowerCase() });
    }
    handleSubmit(event){
        alert('You are successfully logged in!');
        event.preventDefault();
    }
    renderField(field){
        return(
            <div className="form-group">
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
            <div>
                <form className="LoginForm" onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                    <div className="form-item col-sm-2">
                    <Field
                        name = "email"
                        component = {this.renderField}
                    />
                    </div>
                    <div className="form-item col-sm-2">
                    <Field
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
export default reduxForm({form: 'LoginForm'})(LoginForm);