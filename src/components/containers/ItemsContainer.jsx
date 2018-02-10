import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import toastr from 'toastr';

import { bindActionCreators } from 'redux';

import ViewItems from '../shoppingitems/ViewItems';
import AddItemForm from '../shoppingitems/AddItemForm';
import PaginateItems from '../shoppingitems/PaginateItems';

import { getOneShoppinglist } from '../../actions/ShoppingLists'
import { 
    postShoppingitems,
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

    componentDidMount(){
        const listId = this.props.match.params.id;
        if(this.props.shoppingitems){
            this.props.getAllShoppingitems(listId);
        }
        this.props.getOneShoppinglist(listId);
    }

    addShoppingItem = (values) => {      
        const listId = this.props.match.params.id;
        this.props.postShoppingitems(listId, values, () => {
            toastr.success('Item successfully created!');
        });
    }

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

    paginateShoppingItems = (listId, limit, page) => {
        this.props.paginateItems(listId, limit, page);
    }

    render(){
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
                                    listId={listId}
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
                                    searchError={this.props.searchError}
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
    return{
        oneshoppinglist: state.oneshoppinglist.singleShoppingList,
        shoppingitems: state.shoppingitems.shoppingitems,
        count: state.shoppingitems.count,
        searchError: state.shoppingitems.errorMessage
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        postShoppingitems,
        getOneShoppinglist,
        getAllShoppingitems,
        deleteAllShoppingitems,
        deleteShoppingitem,
        paginateItems,
        searchShoppingitem
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);