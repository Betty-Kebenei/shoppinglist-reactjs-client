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
        this.props.deleteShoppingitem(listId, itemId);
    }

    paginateShoppingItems = (listId, limit, page) => {
        this.props.paginateItems(listId, limit, page);
    }

    getListName = () => {
        const { listname } = this.props.oneshoppinglist.data; 
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
                                onClick={()=>{this.props.deleteAllShoppingitems(listId)}}
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
                                    listName={this.getListName}
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