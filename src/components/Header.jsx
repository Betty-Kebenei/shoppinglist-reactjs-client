import React from 'react';
import LoginForm from './LoginForm';

class Header extends React.Component {
    render(){
        return(
            <div className="Header col-sm-12">
                <div className="Header col-sm-6">
                <h1>Shopping List Tracker</h1>  
                <p>We keep tracker on what you desire to spend your money on.</p>
                </div>
                <LoginForm />
            </div>
        )
    }
}

export default Header