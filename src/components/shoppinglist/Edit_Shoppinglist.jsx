import '../../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { updateShoppinglist } from '../../actions/Shoppinglist';
class Edit_Shoppinglist extends React.Component{

    handleSubmit(values){
        const list_id = this.props.oneshoppinglist.data.list_id;
        this.props.updateShoppinglist(list_id, values, () => {
            this.props.history.push(`/shoppinglist/${list_id}`);
            toastr.success('Shopping list successfully updated!');
            this.props.reset(); 
        });
    }

    renderField(field){
        const {meta: {touched, error}} = field;
        const className = `form-group ${ touched && error ? 'has-danger' : ''}`;
        return(
            <div className={className}>
                <label>New list name</label>
                <input
                className = "form-control"
                placeholder = {field.placeholder}
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
                        // placeholder = {listname}
                        component = {this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Update List</button>
                    <Link className="btn btn-primary" to='/'>
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
function mapStateToProps(state){
    return{
        oneshoppinglist: state.oneshoppinglist
     } ;
}

export default reduxForm({
    validate,
    form: 'Edit_Shoppinglist'
})(
    connect(mapStateToProps, { updateShoppinglist })(Edit_Shoppinglist)
);