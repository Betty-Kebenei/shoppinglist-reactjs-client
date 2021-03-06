import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import toastr from 'toastr';


import ViewItems from '../shoppingitems/ViewItems';
import AddItemForm from '../shoppingitems/AddItemForm';
import PaginateItems from '../shoppingitems/PaginateItems';

import { getOneShoppinglist } from '../../actions/ShoppingLists'
import { 
    postShoppingitems,
    getOneShoppingitem,
    getAllShoppingitems,
    deleteAllShoppingitems,
    deleteShoppingitem,
    paginateItems,
    searchShoppingitem
} from '../../actions/ShoppingItems';

export class ItemsContainer extends Component {
    constructor(props){
        super(props); 
        this.state = {
            limitItems: 5,
            term: ''

        } 
    }

    // Displays shoppping items when this component is rendered.
    componentDidMount(){
        const listId = this.props.match.params.id;
        if(this.props.shoppingitems){
            this.props.getAllShoppingitems(listId);
        }
        this.props.getOneShoppinglist(listId);
    }

    // Create a shopping item in a shopping list.
    addShoppingItem = (values) => {      
        const listId = this.props.match.params.id;
        this.props.postShoppingitems(listId, values, () => {
            toastr.success('Item successfully created!');
        });
    }

    updateShoppingItem = (id, itemId) => {
        this.props.getOneShoppingitem(id, itemId).then(
            () => this.props.history.push(`/${id}/shoppingitems/${itemId}`))
    }

    // Delete a shopping item from a shopping list.
    deleteShoppingItem = (listId, itemId) => {
        confirmAlert({
            title: 'Confirm to submit',                       
            message: 'Are you sure you want to DELETE?',                    
            confirmLabel: 'Yes',                           
            cancelLabel: 'No',                             
            onConfirm: () => this.props.deleteShoppingitem(listId, itemId),    
            onCancel: () => '',      
          })
    }

    // Delete all shopping items from a shopping list.
    deleteShoppingItems = () => {
        confirmAlert({
            title: 'Confirm to DELETE',                       
            message: 'Are you sure you want to DELETE?',                 
            confirmLabel: 'Yes',                           
            cancelLabel: 'No',                             
            onConfirm: () => this.props.deleteAllShoppingitems(this.props.match.params.id),    
            onCancel: () => '',      
          })
    }

    // Paginate shopping items in a shopping list.
    paginateShoppingItems = (listId, limit, page) => {
        this.props.paginateItems(listId, limit, page);
    }

    render(){
        const listName = this.props.match.params.listname;
        const listId = this.props.match.params.id;
        return(
            <div className="ViewItems col-sm-12">
                <div className="row">
                    <div className="col-sm-12">
                        <br /> <br />
                        <Link to="/">Back</Link><br /> <br />
                        
                        <div className="row">
                            <div className="col-sm-12">
                                <AddItemForm 
                                    onSubmit={this.addShoppingItem}
                                    listName={listName}
                                />
                            </div>
                            <br /><br />
                            <div className="col-sm-12">
                                {/* search a shopping item by itemname  */}
                                <input 
                                    placeholder= "search items"
                                    value = {this.state.term}
                                    onChange={event => this.setState({term: event.target.value}, () => {
                                    this.props.searchShoppingitem(listId, this.state.term);
                                })} />
        
                                {/* Delete all shopping lists */}
                                <button 
                                type="button" 
                                className="btn glyphicon glyphicon-trash text-primary" 
                                onClick={()=>{this.deleteShoppingItems()}}
                                data-toggle="tooltip" 
                                data-placement="top" 
                                title="Delete_All_Items" 
                                />
                            </div>
                            <div className="col-sm-12">
                                <ViewItems 
                                    listId={listId}
                                    shoppingItems={this.props.shoppingitems}
                                    onDelete={this.deleteShoppingItem}
                                    searchError={this.props.errorMessage}
                                    updateItem={this.updateShoppingItem}
                                />
                                <PaginateItems
                                    listId={listId}
                                    countItems={this.props.count}
                                    limitItems={this.state.limitItems}
                                    onPaginateItems={this.paginateShoppingItems}
                                
                                />
                            </div>
                        </div>         
                    </div>
                </div>
            </div>
        );
    };
}
const mapStateToProps = (state) => {
    const { singleShoppingList } = state.oneshoppinglist;
    const { shoppingitems, count, errorMessage } = state.shoppingitems;
    return {
        singleShoppingList,
        shoppingitems,
        count,
        errorMessage
    };
}

export default connect(
    mapStateToProps, {
        postShoppingitems,
        getOneShoppinglist,
        getOneShoppingitem,
        getAllShoppingitems,
        deleteAllShoppingitems,
        deleteShoppingitem,
        paginateItems,
        searchShoppingitem
    })(ItemsContainer);