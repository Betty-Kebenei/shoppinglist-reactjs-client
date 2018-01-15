import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import { bindActionCreators } from 'redux';

import { getAllShoppinglists, getOneShoppinglist } from '../../actions/Shoppinglist';

class ShoppingList extends Component {
    constructor(props){
        super(props)
        this.renderShoppinglists = this.renderShoppinglists.bind(this)
    }
    componentDidMount(){
        this.props.getAllShoppinglists();
    }

    renderShoppinglists(){
        return (
            _.map(this.props.allshoppinglists, shoppinglist => {
                const list_id = shoppinglist.list_id;
                return (
                    <li 
                        key={list_id}
                        onClick={() => {this.props.getOneShoppinglist(list_id)}}
                        className="list-group-item">
                        {shoppinglist.listname}
                    </li>
                );
            })
        );
    }

    render(){
        return(
            <div className="Shoppinglist col-sm-4">
                <Link className="btn btn-primary" to="/add">
                    Add Shopping List
                </Link>
                <br /> <br/>
                <p><b>Below is the list of your shopping lists:</b></p>
                <ul className="list-group">
                    {this.renderShoppinglists()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        allshoppinglists: state.allshoppinglists
     } ;
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ getAllShoppinglists, getOneShoppinglist }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);