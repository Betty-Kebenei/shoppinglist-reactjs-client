import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../../static/index.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { createUser } from '../../actions/Registration';
import  RegistrationForm from '../authentication/RegistrationForm';

export class RegistrationFormContainer extends Component {

    // Register a new user.
    handleRegistration = (values) => {
        this.props.createUser(values, () => {
            this.props.history.push('/auth/login');
            toastr.success('You are successfully registered!');
        });
    }
      
    render(){
        return(
            <div>
                <RegistrationForm
                    onSubmit={this.handleRegistration}
                />
            </div> 
        );
    }
}

export default connect(null, {createUser})(RegistrationFormContainer);