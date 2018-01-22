import '../../static/index.css';

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { updateShoppingitems } from '../../actions/Shoppingitems'


class Edit_Shoppingitem extends Component {
    constructor(props){
        super(props);
    }

    handleSubmit (values){
        const { list_id } = this.props.oneshoppinglist.data;
        const item_id = this.props.shoppingitem;
        this.props.updateShoppingitems(list_id, item_id, values, () => {
                this.props.history.push(`/shoppinglists/${list_id}/shoppingitems`);
            }
        );   
    }
     
    renderField(field){
        const {meta: {touched, error}} = field;
        const className = `form-group ${ touched && error ? 'has-danger' : ''}`;
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input
                className = "form-control"
                type = "text"
                {...field.input}
                />
                <div className="text-help">
                    { touched ? error : '' }
                </div>
            </div>
        );
    }
    render(){
        if (!this.props.oneshoppinglist) {
            return <div>LOADING...</div>
        }

        const { handleSubmit } = this.props;
        const list_id = this.props.oneshoppinglist.data.list_id;
        return(
            <div>
                <form className="ShoppingitemForm col-sm-12" onSubmit={handleSubmit(this.handleSubmit.bind(this))  }>
                    <h2>Update item</h2><br />
                    <Field
                        label = "Itemname"
                        name = "itemname"
                        component = {this.renderField}
                    />
                    <Field
                        label = "Quantity"
                        name = "quantity"
                        component = {this.renderField}
                    />
                     <Field
                        label = "Price"
                        name = "price"
                        component = {this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Update Item</button>
                    <Link className="btn btn-primary" to={`/shoppinglist/${list_id}/shoppingitems`}>
                        Cancel
                    </Link> 
                </form>
            </div>
        );
    }
}

function validate (values){
    const errors = {};
    if(!values.itemname){
        errors.itemname = "Please provide an itemname!";
    }
    return errors;

}

function mapStateToProps(state){
    console.log(state.shoppingitem)
    return{
        oneshoppinglist: state.oneshoppinglist,
        shoppingitem: state.shoppingitems.shoppingitem

    }
}

export default reduxForm({
    validate,
    form: 'Edit_Shoppingitems'
})(
    connect(mapStateToProps, {updateShoppingitems})(Edit_Shoppingitem)
);