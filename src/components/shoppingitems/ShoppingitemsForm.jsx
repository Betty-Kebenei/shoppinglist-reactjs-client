import '../../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { postShoppingitems } from '../../actions/Shoppingitems'


class ShoppingitemsForm extends React.Component {
    constructor(props){
        super(props);
    }

    handleSubmit (values){
        const list_id = this.props.oneshoppinglist.data.list_id;
        this.props.postShoppingitems(list_id, values, () => {
        this.props.history.push('/');
        alert('Shopping item created!');
        }
    );   
        this.props.reset(); 
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
                <form className="ShoppingitemForm col-sm-12" onSubmit={handleSubmit(this.handleSubmit.bind(this))  }>
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
                        label = "Price"
                        name = "price"
                        component = {this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Create Item</button>
                    <Link className="btn btn-primary" to="/">
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
    
    return{
        oneshoppinglist: state.oneshoppinglist
    }
}

export default reduxForm({
    validate,
    form: 'ShoppingitemsForm'
})(
    connect(mapStateToProps, {postShoppingitems})(ShoppingitemsForm)
);