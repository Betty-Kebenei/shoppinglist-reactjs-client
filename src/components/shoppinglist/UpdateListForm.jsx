import '../../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import RenderField from '../common/RenderField';
import validate from '../common/Validation';

export const UpdateListForm = (props) => {
    const { handleSubmit, onSubmit } = props;

    return(
        <div>
            <form className="UpdateListForm col-sm-12" onSubmit={() => handleSubmit(onSubmit)}>
                <Field
                    label = "Update List Name"
                    name = "listname"
                    component = {RenderField}
                />
                <button type="submit" className="btn btn-primary">Update List</button>
                <Link className="btn btn-primary" to='/'>Cancel</Link>   
            </form>
        </div>
    )
}
export default reduxForm({
    validate,
    form: 'UpdateItemForm'
})(UpdateListForm);