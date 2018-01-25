import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link, NavLink } from 'react-router-dom';

import { 
    getAllShoppingitems,
    deleteAllShoppingitems,
    deleteShoppingitem,
    paginateItems,
    searchShoppingitem
} from '../../actions/Shoppingitems';

class ViewItems extends Component {
    constructor(props){
        super(props); 
        this.state = {
            limit: 5,
            page: 1,
            term: ''

        } 
    }

    componentDidMount(){
        if(this.props.oneshoppinglist){
            const list_id = this.props.oneshoppinglist.data.list_id;
            this.props.getAllShoppingitems(list_id);
        }  
    }

    renderShoppingitems(){
        const list_id = this.props.oneshoppinglist.data.list_id;
        if(!this.props.shoppingitems){
            return(
                <p>You have no shoppingitems to diplay!</p>
            )
        }

        return (
            _.map(this.props.shoppingitems, item => {
                return (
                    <tr key={item.item_id}>
                        <td>{item.item_id}</td>
                        <td>{item.itemname}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>

                        <Link 
                            className="btn glyphicon glyphicon-edit text-primary" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Update_item"  
                            to={`/shoppinglist/${list_id}/shoppingitem/${item.item_id}`}
                            />  
                        <button 
                            type="button" 
                            className="btn glyphicon glyphicon-trash text-primary" 
                            onClick={()=>{this.props.deleteShoppingitem(list_id, item.item_id)}}
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Delete_item" 
                            />  

                        </td>
                    </tr>
                );
            })
        );
    }
    
    render(){
        if (!this.props.oneshoppinglist) {
            return <div>LOADING...</div>
        }

        const list_id = this.props.oneshoppinglist.data.list_id;

        //Paginate shopping items
        let pages = [];
        let numOfPages = Math.floor(this.props.count/this.state.limit);
        if((this.props.count % this.state.limit) > 0 ){
            numOfPages +=1
        }
        for(let page=1; page<=numOfPages; page++){
            pages.push(
                <li 
                    key={page}
                    onClick={() => {this.props.paginateItems(list_id, this.state.limit, page)}} >
                    <NavLink to="#"> {page}</NavLink>
                </li>
            );
        }

        return(
            <div className="ViewItems col-sm-12">
                <div className="row">
                    <div className="col-sm-12">
                        <Link to="/">Back</Link>
                             {/* search a shopping item by itemname  */}
                        <input 
                            placeholder= "search item"
                            value = {this.state.term}
                            onChange={event => this.setState({term: event.target.value}, () => {
                            this.props.searchShoppingitem(list_id, this.state.term);
                        })} />

                        <h1>Shoppinglist Name: {this.props.oneshoppinglist.data.listname}</h1>
                        
                        <Link className="btn glyphicon glyphicon-plus text-primary"  
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Add_item"
                            to="/additem" />

                        <button 
                            type="button" 
                            className="btn glyphicon glyphicon-trash text-primary" 
                            onClick={()=>{this.props.deleteAllShoppingitems(list_id)}}
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Delete_All_Items" 
                            />

                    </div>
                    <br />
                    
                    <br />
                    <div className="col-sm-12">
                        <table className="table bordered">
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>ITEMNAME</td>
                                    <td>QUANTITY</td>
                                    <td>PRICE</td>
                                    <td>ACTIONS</td>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                    {this.renderShoppingitems()}
                            </tbody>
                        </table>
                        <ul className="pagination pagination-lg pagination-centered">{pages}</ul>
                    </div>
                </div>
            </div>
        );
    };
}
function mapStateToProps(state){
    return{
        oneshoppinglist: state.oneshoppinglist.singleShoppingList,
        shoppingitems: state.shoppingitems.shoppingitems,
        count: state.shoppingitems.count,
    };
}

export default connect(
    mapStateToProps,
    { getAllShoppingitems, deleteAllShoppingitems, deleteShoppingitem, paginateItems, searchShoppingitem } 
)(ViewItems);