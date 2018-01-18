import React, { Component} from 'react';
import { logoutUser } from '../../actions/Login';

class Logout extends Component {
    componentDidMount(){
        this.props.logoutUser;
        this.props.history.push('/auth/login');
    }
    render(){
        return(
            <h1>Logging out ...</h1>
        );
    }
}

export default Logout;