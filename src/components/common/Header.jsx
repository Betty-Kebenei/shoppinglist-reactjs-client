import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logoutUser } from '../../actions/Login'
import { getAllShoppinglists } from '../../actions/Shoppinglist';
class Header extends Component {

    componentWillMount(){
        this.props.getAllShoppinglists();
    }

    onLogoutClick(){
        this.props.logoutUser();
    }

    renderChange(){
        if(this.props.authenticated){
            return (
                
                <Link onClick={this.onLogoutClick.bind(this)} className="btn btn-primary" to="/auth/logout">
                Logout
                </Link>
            );
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
                <div className="text-xs-rigth">{this.renderChange()}</div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        authenticated: state.user.authenticated
    };
}
export default connect(mapStateToProps, {getAllShoppinglists, logoutUser})(Header);
