import '../../static/index.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import UpdateItemForm from '../shoppingitems/UpdateItemForm';

import { updateShoppingitems } from '../../actions/ShoppingItems'


export class UpdateItemContainer extends Component {

    updateItem = (values) => {
        const { id } = this.props.match.params;
        const { itemid } = this.props.match.params;
        this.props.updateShoppingitems(id, itemid, values, () => {
            this.props.history.push(`/${id}/shoppingitems`); 
            toastr.success('Item successfully update!');
        });     
    }
     
    render(){
        return(
            <div>
                <UpdateItemForm
                    onSubmit={this.updateItem}
                    listId={this.props.match.params.id}
                />
            </div>
        );
    }
}

export default connect(null, { updateShoppingitems })(UpdateItemContainer);