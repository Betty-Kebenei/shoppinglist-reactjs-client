import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/Login'
class Header extends Component {

    onLogoutClick(){
        console.log("Logout", this.props)
        this.props.logoutUser((props) => {
            this.props.history.push('/auth/login')  
            alert('You are being logged out!'); 
        }
        );
    }
    renderChange(){
        if(this.props.authenticated){
            return (<button onClick={this.onLogoutClick.bind(this)} className="btn btn-primary">Logout</button>);
        }
        return (
                <div></div>
        );
    }
    render(){
        return(
            <div className="Header col-sm-12">
                <div className="col-sm-6">
                <h1>Shopping List Tracker</h1>  
                <p>We keep tracker on what you desire to spend your money on.</p>
                </div>
                <div className="col-sm-6">{this.renderChange()}</div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        authenticated: state.user.authenticated
    };
}
export default connect(mapStateToProps, {logoutUser})(Header);
