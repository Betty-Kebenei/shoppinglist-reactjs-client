import React, { Component} from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/Login';

class Logout extends Component {
    componentDidMount(){
        this.props.logoutUser();
    }
    render(){
        return(
            <h1>Logging out ...</h1>
        );
    }
}

export default connect(null, {logoutUser})(Logout);