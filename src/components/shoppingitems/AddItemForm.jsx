import '../../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from '../common/RenderField';

const AddItemForm = (props) => {
    const { handleSubmit, onSubmit, listId } = props;
        return(
            <div className="row">
                <div className="ListName col-sm-6">
                    <h2>Items for shopping list with ID:</h2>
                    <h2>{listId}</h2>
                </div>
                <div className="col-sm-6">
                    <form className="AddItemForm col-sm-12" onSubmit={handleSubmit(onSubmit)}>
                        <p><b>Create a new item:</b></p><br />
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
                            <button type="submit" className="btn btn-primary">Create Item</button>
                    </form>
                </div>
            </div>
        );
    }

function validate (values){
    const errors = {};
    if(!values.itemname){
        errors.itemname = "Please provide an itemname!";
    }
    return errors;

}

export default reduxForm({
    validate,
    form: 'ShoppingitemsForm'
})(AddItemForm);