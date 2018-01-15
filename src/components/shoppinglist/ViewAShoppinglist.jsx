import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getAllShoppingitems } from '../../actions/shoppingitems';


class ViewAShoppinglist extends Component {

    renderShoppingitems(){
        return (
            _.map(this.props.shoppingitems, item => {
                return (
                    <li 
                        key={item.item_id}
                        className="list-group-item">
                        {item.itemname}
                    </li>
                );
            })
        );
    }
    
    render(){
        if(!this.props.oneshoppinglist){
            return <div className="ViewShoppinglist col-sm-8">Select a shoppinglist to view</div>
        }

        // this.props.getAllShoppingitems(this.props.oneshoppinglist.data.list_id);

        return(
            <div className="ViewShoppinglist col-sm-8">
            
                <p><b>Shoppinglist_Id:</b><br />{this.props.oneshoppinglist.data.list_id} </p>
                <p><b>Shoppinglistname:</b><br />{this.props.oneshoppinglist.data.listname} </p>
                <p><b>ShoppingItems:</b><br /></p>
                <ul>
                    {this.renderShoppingitems}
                </ul>
            </div>
        );
    };
}
function mapStateToProps(state){
    return{
        oneshoppinglist: state.oneshoppinglist,
        shoppingitems: state.shoppingitems
    };
}

export default connect(mapStateToProps, { getAllShoppingitems } )(ViewAShoppinglist);