import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import UpdateListForm from '../../components/shoppinglist/UpdateListForm';

describe('UpdateListForm', () => {
    const props = {
        onSubmit: () => {}, listName: "cars", initialValues: "vehicles"
    }
    it('should render a form with a className: AddListForm', () => {
        expect(shallow(<UpdateListForm />).exists(<form className='AddListForm'></form>)).toBe(true)
    });
    it('should render div', () => {
        expect(shallow(<UpdateListForm {...props}/>).exists(<div></div>)).toBe(true)
    });
    it('renders form fields', () => {
        const wrapper = shallow(<UpdateListForm />);
        const text = wrapper.find('field').first();        
        const submit = wrapper.find('field').last(); 
    });
});