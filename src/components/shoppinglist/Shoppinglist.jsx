import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import { bindActionCreators } from 'redux';

import { getAllShoppinglists, getOneShoppinglist,  deleteShoppinglists } from '../../actions/Shoppinglist';
import { getAllShoppingitems } from '../../actions/Shoppingitems';

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
                        onClick={() => {
                            this.props.getOneShoppinglist(list_id);
                        }}
                        className="list-group-item">
                        <Link to={`/shoppinglists/${list_id}`}>{shoppinglist.listname}</Link>
                    </li>
                );
            })
        );
    }

    render(){
        return(
            <div className="Shoppinglist col-sm-4">
                <Link className="btn glyphicon glyphicon-plus text-primary" 
                    data-toggle="tooltip" 
                    data-placement="top" 
                    title="Add_lists"
                    to="/shoppinglist" 
                    />
                <button 
                    onClick={() => {this.props.deleteShoppinglists();}}
                    type="button" 
                    className="btn glyphicon glyphicon-trash text-primary" 
                    data-toggle="tooltip" 
                    data-placement="top" 
                    title="Delete_all_lists" 
                    />
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
    return bindActionCreators({ getAllShoppinglists, getOneShoppinglist, getAllShoppingitems, deleteShoppinglists}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);