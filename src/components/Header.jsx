import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    render(){
        return(
            <div className="Header col-sm-12">
                <div className="Header col-sm-6">
                <h1>Shopping List Tracker</h1>  
                <p>We keep tracker on what you desire to spend your money on.</p>
                </div>
                <button className="btn btn-primary">Logout</button>
            </div>
        )
    }
}

export default Header;