import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { deleteShoppinglist } from '../../actions/Shoppinglist';

class ViewAShoppinglist extends Component {
    constructor(props){
        super(props);
    }

    
    render(){
        
        if(!this.props.oneshoppinglist){
            return <div className="ViewShoppinglist col-sm-8">Select a shoppinglist to view</div>
        }

        const list_id = this.props.oneshoppinglist.data.list_id;
        return(
            <div className="ViewShoppinglist col-sm-8">
                <div className="row">
                    <div className="col-sm-12">
                        <Link 
                            className="btn glyphicon glyphicon-edit text-primary" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Update_list"  
                            to={`/shoppinglist/${list_id}/update`}
                            />
                        <button 
                            onClick={()=>{this.props.deleteShoppinglist(list_id)}}
                            type="button" 
                            className="btn glyphicon glyphicon-trash text-primary" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Delete_list" />
                        
                    </div>
                    <br /><br />
                    <div className="col-sm-12">
                        <p><b>Shoppinglist_Id:</b>{this.props.oneshoppinglist.data.list_id} </p>
                        <p><b>Shoppinglistname:</b>{this.props.oneshoppinglist.data.listname} </p>
                        <p><b>ShoppingItems:</b> To view items, click on:
                        <Link 
                            className="btn glyphicon glyphicon-file text-primary" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="View Items"  
                            to={`/shoppinglist/${list_id}/shoppingitems`}
                            /></p>
                    </div>
                </div>
            </div>
        );
    };
}
function mapStateToProps(state){
    return{
        oneshoppinglist: state.oneshoppinglist.singleShoppingList,
    };
}

export default connect(mapStateToProps, { deleteShoppinglist } )(ViewAShoppinglist);