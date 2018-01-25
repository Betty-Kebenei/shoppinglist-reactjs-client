import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import { bindActionCreators } from 'redux';

import { 
    getAllShoppinglists,
    getOneShoppinglist, 
    deleteShoppinglists,
    paginateLists,
    searchShoppinglist
 } from '../../actions/Shoppinglist';
import { getAllShoppingitems } from '../../actions/Shoppingitems';

class ShoppingList extends Component {
    constructor(props){
        super(props);
        this.state = {
            limit: 5,
            page: 1,
            term: ''

        }
        this.renderShoppinglists = this.renderShoppinglists.bind(this);
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
                        <Link to={`/shoppinglist/${list_id}`}>{shoppinglist.listname}</Link>
                    </li>
                   
                );
            })
        );
    }

    render(){
        if (!this.props.allshoppinglists) {
            return <div>LOADING...</div>
        }
        let pages = [];
        let numOfPages = Math.floor(this.props.count/this.state.limit);
        if((this.props.count % this.state.limit) > 0 ){
            numOfPages +=1
        }
        for(let page=1; page<=numOfPages; page++){
            pages.push(
                <li 
                    key={page}
                    onClick={() => {this.props.paginateLists(this.state.limit, page)}} >
                    <NavLink to=""> {page}</NavLink>
                </li>
            );
        }
     
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
                
                 {/* search a shopping list by listname  */}
                <input 
                    placeholder= "search lists"
                    value = {this.state.term}
                    onChange={event => this.setState({term: event.target.value}, () => {
                        this.props.searchShoppinglist(this.state.term);
                    })} />
                
                <br /><br />

                <p><b>Below is the list of your shopping lists:</b></p>
                <ul className="list-group">
                    {this.renderShoppinglists()}
                </ul>
                <ul className="pagination pagination-lg pagination-centered">{pages}</ul>
                
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        allshoppinglists: state.allshoppinglists.shoppinglists,
        count: state.allshoppinglists.count,
        next: state.allshoppinglists.next,
        previous: state.allshoppinglists.previous
     } ;
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
        getAllShoppinglists,
        getOneShoppinglist,
        getAllShoppingitems, 
        deleteShoppinglists,
        paginateLists,
        searchShoppinglist
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);