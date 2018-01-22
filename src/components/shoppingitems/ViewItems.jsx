import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { getAllShoppingitems, deleteAllShoppingitems, deleteShoppingitem } from '../../actions/Shoppingitems';

class ViewItems extends Component {
    constructor(props){
        super(props);   
    }

    componentDidMount(){
        const list_id = this.props.oneshoppinglist.data.list_id;
        this.props.getAllShoppingitems(list_id);
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
        return(
            <div className="ViewItems col-sm-12">
                <div className="row">
                    <div className="col-sm-12">
                        <Link to="/">Back</Link>
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
                    </div>
                </div>
            </div>
        );
    };
}
function mapStateToProps(state){
    
    return{
        oneshoppinglist: state.oneshoppinglist,
        shoppingitems: state.shoppingitems.shoppingitems
    };
}

export default connect(
    mapStateToProps,
    { getAllShoppingitems, deleteAllShoppingitems, deleteShoppingitem } 
)(ViewItems);