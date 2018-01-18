import '../../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';

class ShoppingitemsForm extends React.Component {
    handleSubmit(event){
        alert('Shopping item successfully created!');
        event.preventDefault();
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
        const { handleSubmit } = this.props;
        return(
            <div>
                <form className="ShoppingitemForm col-sm-8" onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                    <h2>Create a new item</h2><br />
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
                        label = "Units of measurements"
                        name = "units"
                        component = {this.renderField}
                    />
                     <Field
                        label = "Price"
                        name = "price"
                        component = {this.renderField}
                    />
                     <Field
                        label = "Currency of the price"
                        name = "currency"
                        component = {this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Create Item</button>
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

export default reduxForm({
    validate,
    form: 'ShoppingitemsForm'
})(ShoppingitemsForm);