import '../../static/index.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { updateShoppinglist } from '../../actions/ShoppingLists';
import UpdateListForm from '../shoppinglist/UpdateListForm';

export class UpdateListContainer extends Component{

    updateList = (values) => {
        const listId = this.props.match.params.id;
        this.props.updateShoppinglist(listId, values, () => {
            this.props.history.push(`/`);
            toastr.success("Shopping list successfully updated!");
        });
    }

    render(){
        return(
            <div>
                <UpdateListForm 
                    onSubmit={this.updateList}
                />
            </div>
        )
    }
}

export default connect(null, { updateShoppinglist })(UpdateListContainer);