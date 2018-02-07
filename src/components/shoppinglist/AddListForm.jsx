import '../../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from '../common/RenderField';



export const AddListForm = (props) => {
    const { handleSubmit, onSubmit } = props;
    return(
        <div>
            <form className="AddListForm" onSubmit={handleSubmit(onSubmit)}>
                <p><b>Create new shopping list:</b></p>
                <div className = "row">
                    <div className = "col-sm-10">
                        <Field
                            name = "listname"
                            component = {RenderField}
                        />
                    </div>
                    <div className = "col-sm-2">
                        <button 
                            type="submit" 
                            className="btn btn-primary">
                            Create List
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
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
    form: 'AddListForm'
})(AddListForm);