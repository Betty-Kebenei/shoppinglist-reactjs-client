import '../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
class ShoppinglistForm extends React.Component{

    handleSubmit(event){
        alert('Shopping list successfully created!');
        event.preventDefault();
    }

    renderField(field){
        const {meta: {touched, error}} = field;
        const className = `form-group ${ touched && error ? 'has-danger' : ''}`;
        return(
            <div className={className}>
                <label>Shopping list name</label>
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
                <form className="ShoppinglistForm col-sm-8" onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                    <h2>Create a new shopping list</h2><br />
                    <Field
                        name = "listname"
                        component = {this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Create List</button>
                    <Link className="btn btn-primary" to="/">
                    Cancel
                    </Link> 
                </form>
            </div>
        )
    }
}

function validate (values){
    const errors = {};
    if(!values.listname){
        errors.listname = "Please provide a listname!";
    }
    return errors;

}

export default reduxForm({
    validate,
    form: 'ShoppinglistForm'
})(ShoppinglistForm);