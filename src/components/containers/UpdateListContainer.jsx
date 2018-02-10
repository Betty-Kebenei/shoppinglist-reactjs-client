import '../../static/index.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { updateShoppinglist, getOneShoppinglist } from '../../actions/ShoppingLists';
import UpdateListForm from '../shoppinglist/UpdateListForm';

export class UpdateListContainer extends Component{

    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.getOneShoppinglist(id);
    }

    updateList = (values) => {
        const listId = this.props.match.params.id;
        this.props.updateShoppinglist(listId, values, () => {
            this.props.history.push(`/`);
            toastr.success("Shopping list successfully updated!");
        });
    }

    render(){
        if(!this.props.shoppinglist){
            return(<div>Loading....</div>);
        }
        const { listname } = this.props.shoppinglist.data
        return(
            <div>
                <UpdateListForm 
                    onSubmit={this.updateList}
                    listnName={this.props.match.params.listname}
                    initialValues={{ listname }}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        shoppinglist: state.oneshoppinglist.singleShoppingList
    }
}

export default connect(mapStateToProps, { getOneShoppinglist, updateShoppinglist })(UpdateListContainer);