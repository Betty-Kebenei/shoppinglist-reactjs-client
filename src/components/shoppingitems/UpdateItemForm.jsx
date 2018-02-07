import '../../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import RenderField from '../common/RenderField';
import validate from '../common/Validation';

const UpdateItemForm = (props) => {
        const { handleSubmit, onSubmit, listId } = props;

    return(
        <div>
            <form className="ShoppingitemForm col-sm-12" onSubmit={handleSubmit(onSubmit)}>
                <h2>Update item</h2><br />
                <Field
                    label = "Itemname"
                    name = "itemname"
                    component = {RenderField}
                />
                <Field
                    label = "Quantity"
                    name = "quantity"
                    component = {RenderField}
                />
                <Field
                    label = "Units"
                    name = "units"
                    component = {RenderField}
                />
                <Field
                    label = "Price"
                    name = "price"
                    component = {RenderField}
                />
                <Field
                    label = "Currency"
                    name = "currency"
                    component = {RenderField}
                />
                <button type="submit" className="btn btn-primary">Update Item</button>
                <Link className="btn btn-primary" to={`/${listId}/shoppingitems`}>
                Cancel
                </Link>
            </form>
        </div>
    );
}
export default reduxForm({
    validate,
    form: 'UpdateItemForm'
})(UpdateItemForm);