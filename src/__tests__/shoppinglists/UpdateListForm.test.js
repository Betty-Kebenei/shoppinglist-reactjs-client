import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import UpdateListForm from '../../components/shoppinglist/UpdateListForm';

describe('UpdateListForm', () => {
    it('renders form fields', () => {
        const wrapper = shallow(<UpdateListForm />);
        const text = wrapper.find('field').first();        
        const submit = wrapper.find('field').last(); 
    });
});