import React from 'react';
import { Button } from 'react-bootstrap';
import '../static/index.css'

class Welcome extends React.Component {
    render(){
        return(
            <div>
                <h1>Welcome to the Shopping List Tracker</h1>  
                <h2>Let's help you keep tracker on what you desire to spend your money on.</h2>
                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#signupModal">Sign Up</button>
                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#signinModal">Sign In</button>
            </div>
        )
    }
}

export default Welcome