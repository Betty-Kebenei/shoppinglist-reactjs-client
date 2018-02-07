import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import UpdateItemForm from '../../components/shoppingitems/UpdateItemForm';

describe('UpdateItemForm', () => {
    it('should render a form with a className: ShoppingitemForm', () => {
        expect(shallow(<UpdateItemForm />).exists(<form className='ShoppingitemForm'></form>)).toBe(true)
    });
    it('renders form fields', () => {
        const wrapper = shallow(<UpdateItemForm />);
        const text = wrapper.find('field').first();        
        const submit = wrapper.find('field').last(); 
    });
});