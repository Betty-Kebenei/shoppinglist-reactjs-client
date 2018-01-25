import '../../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { postShoppinglist } from '../../actions/Shoppinglist';

export class ShoppinglistForm extends React.Component{

    handleSubmit(values){
        this.props.postShoppinglist(values, () => {
            this.props.history.push('/');
            toastr.success('Shopping list successfully created!');
        });
        this.props.reset(); 
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
                <form className="ShoppinglistForm col-sm-12" onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
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
})(
    connect(null, { postShoppinglist })(ShoppinglistForm)
);