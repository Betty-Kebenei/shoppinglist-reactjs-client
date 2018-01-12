import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

class Sign extends Component {
    constructor(props){
        super(props)
        console.log('Props Here',props)
    }
    render(){
        return(
            <div>
            <LoginForm {...this.props}/>
            <RegistrationForm/>
            </div>
        )
    }
}
export default Sign;