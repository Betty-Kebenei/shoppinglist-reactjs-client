import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { bindActionCreators } from 'redux';

import AddListForm from '../shoppinglist/AddListForm';
import ViewLists from '../shoppinglist/ViewLists';
import PaginateLists from '../shoppinglist/PaginateLists';

import { 
    postShoppinglist,
    getAllShoppinglists,
    getOneShoppinglist,
    deleteShoppinglist, 
    deleteShoppinglists,
    paginateLists,
    searchShoppinglist
 } from '../../actions/ShoppingLists';
import { getAllShoppingitems } from '../../actions/ShoppingItems';

export class ListsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            limit: 5,
            page: 1,
            term: ''

        }
    }
    
    componentDidMount(){
        this.props.getAllShoppinglists();
    }

    addShoppingList = (values) => {
        this.props.postShoppinglist(values, () => {
            toastr.success('Shopping list successfully created!');
        });
        
    }

    updateShoppinglist = (values) => {
        const { list_id } = this.props.singleShoppingList.data;
        this.props.updateShoppinglist(list_id, values, () => {
            toastr.success('Shopping list successfully updated!');
        });
    }

    searchShoppingLists = () => {
        this.props.searchShoppinglist(this.state.term);
    }

    paginateShoppingLists = (limit, page) => {
        this.props.paginateLists(limit, page);
    }

    deleteOneShoppingList = (listId) => {
        confirmAlert({
            title: 'Confirm to DELETE',                       
            message: 'Are you sure you want to DELETE?',                 
            confirmLabel: 'Yes',                           
            cancelLabel: 'No',                             
            onConfirm: () => this.props.deleteShoppinglist(listId),    
            onCancel: () => '',      
        });
    }

    deleteAllShoppingLists = () => {
        confirmAlert({
            title: 'Confirm to DELETE',                       
            message: 'Are you sure you want to DELETE?',                 
            confirmLabel: 'Yes',                           
            cancelLabel: 'No',                             
            onConfirm: () => this.props.deleteShoppinglists(),    
            onCancel: () => '',      
        });
    }

    render(){
        
        return(
            <div className="Shoppinglist col-sm-12">

                <AddListForm onSubmit={this.addShoppingList}/>

                {/* Search shoppinglists */}
                <input 
                    placeholder= "search lists"
                    value = {this.state.term}
                    onChange={event => this.setState({term: event.target.value}, () => {
                    this.props.searchShoppinglist(this.state.term);
                })} />
                
                <ViewLists 
                    shoppinglists={this.props.allshoppinglists}
                    onSearch={this.searchShoppingLists}
                    deleteOneShoppingList={this.deleteOneShoppingList}
                    deleteAllShoppingLists={this.deleteAllShoppingLists}
                    searchError={this.props.errorMessage}
                />

                <PaginateLists
                    count={this.props.count}
                    limit={this.state.limit}
                    onPaginateLists={this.paginateShoppingLists}
                />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { singleShoppingList } = state.oneshoppinglist;
    const { shoppinglists, count, errorMessage } = state.allshoppinglists;
    return{
        singleShoppingList,
        shoppinglists,
        count,
        errorMessage
     } ;
}

export default connect(
    mapStateToProps, 
    {
        postShoppinglist,
        getAllShoppinglists,
        getOneShoppinglist,
        getAllShoppingitems,
        deleteShoppinglist, 
        deleteShoppinglists,
        paginateLists,
        searchShoppinglist
    })(ListsContainer);