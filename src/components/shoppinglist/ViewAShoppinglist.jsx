import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { deleteShoppinglist } from '../../actions/Shoppinglist';
import { getAllShoppingitems } from '../../actions/Shoppingitems';

class ViewAShoppinglist extends Component {
    constructor(props){
        super(props)
        this.renderShoppingitems = this.renderShoppingitems.bind(this)
    }

    renderShoppingitems(){

        return (
            _.map(this.props.shoppingitems, item => {
                return (
                    <tr key={item.item_id}>
                        <td>{item.item_id}</td>
                        <td>{item.itemname}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>
                        <button 
                            type="button" 
                            className="btn glyphicon glyphicon-trash text-primary" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Delete_item" 
                            />
                        <button 
                            type="button" 
                            className="btn glyphicon glyphicon-edit text-primary" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Edit_item" />  
                        </td>
                    </tr>
                );
            })
        );
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
                        <button 
                            onClick={()=>{this.props.deleteShoppinglist(list_id)}}
                            type="button" 
                            className="btn glyphicon glyphicon-trash text-primary" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Delete_list" />
                         <button 
                            onClick={() => {}}
                            type="button" 
                            className="btn glyphicon glyphicon-edit text-primary" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Update_list" />
                    </div>
                    <br />
                    <div className="col-sm-12">
                        <p><b>Shoppinglist_Id:</b>{this.props.oneshoppinglist.data.list_id} </p>
                        <p><b>Shoppinglistname:</b>{this.props.oneshoppinglist.data.listname} </p>
                        <p><b>ShoppingItems:</b><br /></p>
                        <button 
                            type="button" 
                            className="btn glyphicon glyphicon-trash text-primary" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Delete_all_items" 
                            />
                        <button 
                            onClick={() => {this.props.getAllShoppingitems(list_id);}}
                            type="button" 
                            className="btn glyphicon glyphicon-file text-primary" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="View_items" />
                        <Link className="btn glyphicon glyphicon-plus text-primary"  
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Add_item"
                            to="/additem" />
                    </div>
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
        shoppingitems: state.shoppingitems
    };
}

export default connect(mapStateToProps, { deleteShoppinglist, getAllShoppingitems } )(ViewAShoppinglist);