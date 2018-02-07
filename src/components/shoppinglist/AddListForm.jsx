import '../../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from '../common/RenderField';
import validate from '../common/Validation';

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
export default reduxForm({
    validate,
    form: 'AddListForm'
})(AddListForm);