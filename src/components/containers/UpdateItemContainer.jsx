import '../../static/index.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import UpdateItemForm from '../shoppingitems/UpdateItemForm';

import { updateShoppingitems, getOneShoppingitem } from '../../actions/ShoppingItems'


export class UpdateItemContainer extends Component {

    componentDidMount(){
        const { id } = this.props.match.params;
        const { itemid } = this.props.match.params;
        this.props.getOneShoppingitem(id, itemid);
    }

    updateItem = (values) => {
        const { id } = this.props.match.params;
        const { itemid } = this.props.match.params;
        this.props.updateShoppingitems(id, itemid, values, () => {
            this.props.history.push(`/${id}/shoppingitems`); 
            toastr.success('Item successfully update!');
        });     
    }
     
    render(){
        if(!this.props.shoppingitem){
            return(<div>Loading....</div>);
        }

        const { itemname , quantity, units, price, currency } = this.props.shoppingitem
        return(
            
            <div>
                <UpdateItemForm
                    onSubmit={this.updateItem}
                    listId={this.props.match.params.id}
                    initialValues={{ itemname , quantity, units, price, currency }}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const { shoppingitem } = state.shoppingitems;
    return { shoppingitem }
}

export default connect(mapStateToProps, { updateShoppingitems, getOneShoppingitem })(UpdateItemContainer);