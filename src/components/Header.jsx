import React, { Component } from 'react';
import { connect } from 'react-redux';
class Header extends Component {
    renderChange(){
        if(this.props.authenticated){
            return (<button className="btn btn-primary">Logout</button>);
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
export default connect(mapStateToProps)(Header);
