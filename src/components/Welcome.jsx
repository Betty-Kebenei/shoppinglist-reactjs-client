import React from 'react';
import { Button } from 'react-bootstrap';

class Welcome extends React.Component {
    render(){
        return(
            <div>
                <h1>Welcome to the Shopping List Tracker</h1>  
                <h2>Let's help you keep tracker on what you desire to spend your money on.</h2>
                <Button>Sign Up</Button>
                <Button>Sign In</Button>
            </div>
        )
    }
}

export default Welcome