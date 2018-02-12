import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../../static/index.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { loginUser } from '../../actions/Login';
import LoginForm  from '../authentication/LoginForm';

export class LoginFormContainer extends Component {
    
    // Login a registered user.
    handleLogin = (values) => {
        this.props.loginUser(values, () => {
            this.props.history.push('/');
            toastr.success("You are successfully logged in!")
        });
    }  

    render(){
        return(
            <div>
                <LoginForm
                    onSubmit={this.handleLogin}
                />
            </div>  
        )
    }
}

export default connect(null, {loginUser} )(LoginFormContainer);