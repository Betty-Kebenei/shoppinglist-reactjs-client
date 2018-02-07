import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import AddListForm from '../../components/shoppinglist/AddListForm';

describe('AddListForm', () => {
    it('should render a form with a className: AddListForm', () => {
        expect(shallow(<AddListForm />).exists(<form className='AddListForm'></form>)).toBe(true)
    });
    it('renders form fields', () => { 
        const wrapper = shallow(<AddListForm />);
        const text = wrapper.find('field').first();        
        const submit = wrapper.find('field').last(); 
    });
});